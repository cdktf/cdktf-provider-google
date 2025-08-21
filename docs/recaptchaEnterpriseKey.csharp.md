# `recaptchaEnterpriseKey` Submodule <a name="`recaptchaEnterpriseKey` Submodule" id="@cdktf/provider-google.recaptchaEnterpriseKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RecaptchaEnterpriseKey <a name="RecaptchaEnterpriseKey" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key google_recaptcha_enterprise_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RecaptchaEnterpriseKey(Construct Scope, string Id, RecaptchaEnterpriseKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig">RecaptchaEnterpriseKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig">RecaptchaEnterpriseKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putAndroidSettings">PutAndroidSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putIosSettings">PutIosSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTestingOptions">PutTestingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putWafSettings">PutWafSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putWebSettings">PutWebSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetAndroidSettings">ResetAndroidSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetIosSettings">ResetIosSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetTestingOptions">ResetTestingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetWafSettings">ResetWafSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetWebSettings">ResetWebSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAndroidSettings` <a name="PutAndroidSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putAndroidSettings"></a>

```csharp
private void PutAndroidSettings(RecaptchaEnterpriseKeyAndroidSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putAndroidSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a>

---

##### `PutIosSettings` <a name="PutIosSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putIosSettings"></a>

```csharp
private void PutIosSettings(RecaptchaEnterpriseKeyIosSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putIosSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a>

---

##### `PutTestingOptions` <a name="PutTestingOptions" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTestingOptions"></a>

```csharp
private void PutTestingOptions(RecaptchaEnterpriseKeyTestingOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTestingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTimeouts"></a>

```csharp
private void PutTimeouts(RecaptchaEnterpriseKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a>

---

##### `PutWafSettings` <a name="PutWafSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putWafSettings"></a>

```csharp
private void PutWafSettings(RecaptchaEnterpriseKeyWafSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putWafSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings">RecaptchaEnterpriseKeyWafSettings</a>

---

##### `PutWebSettings` <a name="PutWebSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putWebSettings"></a>

```csharp
private void PutWebSettings(RecaptchaEnterpriseKeyWebSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putWebSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a>

---

##### `ResetAndroidSettings` <a name="ResetAndroidSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetAndroidSettings"></a>

```csharp
private void ResetAndroidSettings()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIosSettings` <a name="ResetIosSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetIosSettings"></a>

```csharp
private void ResetIosSettings()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTestingOptions` <a name="ResetTestingOptions" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetTestingOptions"></a>

```csharp
private void ResetTestingOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWafSettings` <a name="ResetWafSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetWafSettings"></a>

```csharp
private void ResetWafSettings()
```

##### `ResetWebSettings` <a name="ResetWebSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetWebSettings"></a>

```csharp
private void ResetWebSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RecaptchaEnterpriseKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

RecaptchaEnterpriseKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

RecaptchaEnterpriseKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

RecaptchaEnterpriseKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

RecaptchaEnterpriseKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RecaptchaEnterpriseKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RecaptchaEnterpriseKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RecaptchaEnterpriseKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RecaptchaEnterpriseKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.androidSettings">AndroidSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference">RecaptchaEnterpriseKeyAndroidSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.iosSettings">IosSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference">RecaptchaEnterpriseKeyIosSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.testingOptions">TestingOptions</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference">RecaptchaEnterpriseKeyTestingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference">RecaptchaEnterpriseKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.wafSettings">WafSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference">RecaptchaEnterpriseKeyWafSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.webSettings">WebSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference">RecaptchaEnterpriseKeyWebSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.androidSettingsInput">AndroidSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.iosSettingsInput">IosSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.testingOptionsInput">TestingOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.wafSettingsInput">WafSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings">RecaptchaEnterpriseKeyWafSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.webSettingsInput">WebSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AndroidSettings`<sup>Required</sup> <a name="AndroidSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.androidSettings"></a>

```csharp
public RecaptchaEnterpriseKeyAndroidSettingsOutputReference AndroidSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference">RecaptchaEnterpriseKeyAndroidSettingsOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `IosSettings`<sup>Required</sup> <a name="IosSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.iosSettings"></a>

```csharp
public RecaptchaEnterpriseKeyIosSettingsOutputReference IosSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference">RecaptchaEnterpriseKeyIosSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TestingOptions`<sup>Required</sup> <a name="TestingOptions" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.testingOptions"></a>

```csharp
public RecaptchaEnterpriseKeyTestingOptionsOutputReference TestingOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference">RecaptchaEnterpriseKeyTestingOptionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.timeouts"></a>

```csharp
public RecaptchaEnterpriseKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference">RecaptchaEnterpriseKeyTimeoutsOutputReference</a>

---

##### `WafSettings`<sup>Required</sup> <a name="WafSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.wafSettings"></a>

```csharp
public RecaptchaEnterpriseKeyWafSettingsOutputReference WafSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference">RecaptchaEnterpriseKeyWafSettingsOutputReference</a>

---

##### `WebSettings`<sup>Required</sup> <a name="WebSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.webSettings"></a>

```csharp
public RecaptchaEnterpriseKeyWebSettingsOutputReference WebSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference">RecaptchaEnterpriseKeyWebSettingsOutputReference</a>

---

##### `AndroidSettingsInput`<sup>Optional</sup> <a name="AndroidSettingsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.androidSettingsInput"></a>

```csharp
public RecaptchaEnterpriseKeyAndroidSettings AndroidSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IosSettingsInput`<sup>Optional</sup> <a name="IosSettingsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.iosSettingsInput"></a>

```csharp
public RecaptchaEnterpriseKeyIosSettings IosSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TestingOptionsInput`<sup>Optional</sup> <a name="TestingOptionsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.testingOptionsInput"></a>

```csharp
public RecaptchaEnterpriseKeyTestingOptions TestingOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WafSettingsInput`<sup>Optional</sup> <a name="WafSettingsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.wafSettingsInput"></a>

```csharp
public RecaptchaEnterpriseKeyWafSettings WafSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings">RecaptchaEnterpriseKeyWafSettings</a>

---

##### `WebSettingsInput`<sup>Optional</sup> <a name="WebSettingsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.webSettingsInput"></a>

```csharp
public RecaptchaEnterpriseKeyWebSettings WebSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RecaptchaEnterpriseKeyAndroidSettings <a name="RecaptchaEnterpriseKeyAndroidSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RecaptchaEnterpriseKeyAndroidSettings {
    object AllowAllPackageNames = null,
    string[] AllowedPackageNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings.property.allowAllPackageNames">AllowAllPackageNames</a></code> | <code>object</code> | If set to true, it means allowed_package_names will not be enforced. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings.property.allowedPackageNames">AllowedPackageNames</a></code> | <code>string[]</code> | Android package names of apps allowed to use the key. Example: 'com.companyname.appname'. |

---

##### `AllowAllPackageNames`<sup>Optional</sup> <a name="AllowAllPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings.property.allowAllPackageNames"></a>

```csharp
public object AllowAllPackageNames { get; set; }
```

- *Type:* object

If set to true, it means allowed_package_names will not be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#allow_all_package_names RecaptchaEnterpriseKey#allow_all_package_names}

---

##### `AllowedPackageNames`<sup>Optional</sup> <a name="AllowedPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings.property.allowedPackageNames"></a>

```csharp
public string[] AllowedPackageNames { get; set; }
```

- *Type:* string[]

Android package names of apps allowed to use the key. Example: 'com.companyname.appname'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#allowed_package_names RecaptchaEnterpriseKey#allowed_package_names}

---

### RecaptchaEnterpriseKeyConfig <a name="RecaptchaEnterpriseKeyConfig" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RecaptchaEnterpriseKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    RecaptchaEnterpriseKeyAndroidSettings AndroidSettings = null,
    string Id = null,
    RecaptchaEnterpriseKeyIosSettings IosSettings = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    RecaptchaEnterpriseKeyTestingOptions TestingOptions = null,
    RecaptchaEnterpriseKeyTimeouts Timeouts = null,
    RecaptchaEnterpriseKeyWafSettings WafSettings = null,
    RecaptchaEnterpriseKeyWebSettings WebSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human-readable display name of this key. Modifiable by user. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.androidSettings">AndroidSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a></code> | android_settings block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#id RecaptchaEnterpriseKey#id}. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.iosSettings">IosSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a></code> | ios_settings block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels). |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.project">Project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.testingOptions">TestingOptions</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a></code> | testing_options block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.wafSettings">WafSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings">RecaptchaEnterpriseKeyWafSettings</a></code> | waf_settings block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.webSettings">WebSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a></code> | web_settings block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human-readable display name of this key. Modifiable by user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#display_name RecaptchaEnterpriseKey#display_name}

---

##### `AndroidSettings`<sup>Optional</sup> <a name="AndroidSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.androidSettings"></a>

```csharp
public RecaptchaEnterpriseKeyAndroidSettings AndroidSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a>

android_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#android_settings RecaptchaEnterpriseKey#android_settings}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#id RecaptchaEnterpriseKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IosSettings`<sup>Optional</sup> <a name="IosSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.iosSettings"></a>

```csharp
public RecaptchaEnterpriseKeyIosSettings IosSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a>

ios_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#ios_settings RecaptchaEnterpriseKey#ios_settings}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#labels RecaptchaEnterpriseKey#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#project RecaptchaEnterpriseKey#project}

---

##### `TestingOptions`<sup>Optional</sup> <a name="TestingOptions" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.testingOptions"></a>

```csharp
public RecaptchaEnterpriseKeyTestingOptions TestingOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a>

testing_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#testing_options RecaptchaEnterpriseKey#testing_options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.timeouts"></a>

```csharp
public RecaptchaEnterpriseKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#timeouts RecaptchaEnterpriseKey#timeouts}

---

##### `WafSettings`<sup>Optional</sup> <a name="WafSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.wafSettings"></a>

```csharp
public RecaptchaEnterpriseKeyWafSettings WafSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings">RecaptchaEnterpriseKeyWafSettings</a>

waf_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#waf_settings RecaptchaEnterpriseKey#waf_settings}

---

##### `WebSettings`<sup>Optional</sup> <a name="WebSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.webSettings"></a>

```csharp
public RecaptchaEnterpriseKeyWebSettings WebSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a>

web_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#web_settings RecaptchaEnterpriseKey#web_settings}

---

### RecaptchaEnterpriseKeyIosSettings <a name="RecaptchaEnterpriseKeyIosSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RecaptchaEnterpriseKeyIosSettings {
    object AllowAllBundleIds = null,
    string[] AllowedBundleIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings.property.allowAllBundleIds">AllowAllBundleIds</a></code> | <code>object</code> | If set to true, it means allowed_bundle_ids will not be enforced. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings.property.allowedBundleIds">AllowedBundleIds</a></code> | <code>string[]</code> | iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'. |

---

##### `AllowAllBundleIds`<sup>Optional</sup> <a name="AllowAllBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings.property.allowAllBundleIds"></a>

```csharp
public object AllowAllBundleIds { get; set; }
```

- *Type:* object

If set to true, it means allowed_bundle_ids will not be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#allow_all_bundle_ids RecaptchaEnterpriseKey#allow_all_bundle_ids}

---

##### `AllowedBundleIds`<sup>Optional</sup> <a name="AllowedBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings.property.allowedBundleIds"></a>

```csharp
public string[] AllowedBundleIds { get; set; }
```

- *Type:* string[]

iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#allowed_bundle_ids RecaptchaEnterpriseKey#allowed_bundle_ids}

---

### RecaptchaEnterpriseKeyTestingOptions <a name="RecaptchaEnterpriseKeyTestingOptions" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RecaptchaEnterpriseKeyTestingOptions {
    string TestingChallenge = null,
    double TestingScore = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions.property.testingChallenge">TestingChallenge</a></code> | <code>string</code> | For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if UNSOLVABLE_CHALLENGE. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions.property.testingScore">TestingScore</a></code> | <code>double</code> | All assessments for this Key will return this score. |

---

##### `TestingChallenge`<sup>Optional</sup> <a name="TestingChallenge" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions.property.testingChallenge"></a>

```csharp
public string TestingChallenge { get; set; }
```

- *Type:* string

For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if UNSOLVABLE_CHALLENGE.

Possible values: TESTING_CHALLENGE_UNSPECIFIED, NOCAPTCHA, UNSOLVABLE_CHALLENGE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#testing_challenge RecaptchaEnterpriseKey#testing_challenge}

---

##### `TestingScore`<sup>Optional</sup> <a name="TestingScore" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions.property.testingScore"></a>

```csharp
public double TestingScore { get; set; }
```

- *Type:* double

All assessments for this Key will return this score.

Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#testing_score RecaptchaEnterpriseKey#testing_score}

---

### RecaptchaEnterpriseKeyTimeouts <a name="RecaptchaEnterpriseKeyTimeouts" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RecaptchaEnterpriseKeyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#create RecaptchaEnterpriseKey#create}. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#delete RecaptchaEnterpriseKey#delete}. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#update RecaptchaEnterpriseKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#create RecaptchaEnterpriseKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#delete RecaptchaEnterpriseKey#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#update RecaptchaEnterpriseKey#update}.

---

### RecaptchaEnterpriseKeyWafSettings <a name="RecaptchaEnterpriseKeyWafSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RecaptchaEnterpriseKeyWafSettings {
    string WafFeature,
    string WafService
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings.property.wafFeature">WafFeature</a></code> | <code>string</code> | Supported WAF features. For more information, see https://cloud.google.com/recaptcha-enterprise/docs/usecase#comparison_of_features. Possible values: CHALLENGE_PAGE, SESSION_TOKEN, ACTION_TOKEN, EXPRESS. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings.property.wafService">WafService</a></code> | <code>string</code> | The WAF service that uses this key. Possible values: CA, FASTLY. |

---

##### `WafFeature`<sup>Required</sup> <a name="WafFeature" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings.property.wafFeature"></a>

```csharp
public string WafFeature { get; set; }
```

- *Type:* string

Supported WAF features. For more information, see https://cloud.google.com/recaptcha-enterprise/docs/usecase#comparison_of_features. Possible values: CHALLENGE_PAGE, SESSION_TOKEN, ACTION_TOKEN, EXPRESS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#waf_feature RecaptchaEnterpriseKey#waf_feature}

---

##### `WafService`<sup>Required</sup> <a name="WafService" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings.property.wafService"></a>

```csharp
public string WafService { get; set; }
```

- *Type:* string

The WAF service that uses this key. Possible values: CA, FASTLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#waf_service RecaptchaEnterpriseKey#waf_service}

---

### RecaptchaEnterpriseKeyWebSettings <a name="RecaptchaEnterpriseKeyWebSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RecaptchaEnterpriseKeyWebSettings {
    string IntegrationType,
    object AllowAllDomains = null,
    object AllowAmpTraffic = null,
    string[] AllowedDomains = null,
    string ChallengeSecurityPreference = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.integrationType">IntegrationType</a></code> | <code>string</code> | Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowAllDomains">AllowAllDomains</a></code> | <code>object</code> | If set to true, it means allowed_domains will not be enforced. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowAmpTraffic">AllowAmpTraffic</a></code> | <code>object</code> | If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowedDomains">AllowedDomains</a></code> | <code>string[]</code> | Domains or subdomains of websites allowed to use the key. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.challengeSecurityPreference">ChallengeSecurityPreference</a></code> | <code>string</code> | Settings for the frequency and difficulty at which this key triggers captcha challenges. |

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.integrationType"></a>

```csharp
public string IntegrationType { get; set; }
```

- *Type:* string

Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#integration_type RecaptchaEnterpriseKey#integration_type}

---

##### `AllowAllDomains`<sup>Optional</sup> <a name="AllowAllDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowAllDomains"></a>

```csharp
public object AllowAllDomains { get; set; }
```

- *Type:* object

If set to true, it means allowed_domains will not be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#allow_all_domains RecaptchaEnterpriseKey#allow_all_domains}

---

##### `AllowAmpTraffic`<sup>Optional</sup> <a name="AllowAmpTraffic" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowAmpTraffic"></a>

```csharp
public object AllowAmpTraffic { get; set; }
```

- *Type:* object

If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites.

This is supported only for the SCORE integration type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#allow_amp_traffic RecaptchaEnterpriseKey#allow_amp_traffic}

---

##### `AllowedDomains`<sup>Optional</sup> <a name="AllowedDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowedDomains"></a>

```csharp
public string[] AllowedDomains { get; set; }
```

- *Type:* string[]

Domains or subdomains of websites allowed to use the key.

All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#allowed_domains RecaptchaEnterpriseKey#allowed_domains}

---

##### `ChallengeSecurityPreference`<sup>Optional</sup> <a name="ChallengeSecurityPreference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.challengeSecurityPreference"></a>

```csharp
public string ChallengeSecurityPreference { get; set; }
```

- *Type:* string

Settings for the frequency and difficulty at which this key triggers captcha challenges.

This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE. Possible values: CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED, USABILITY, BALANCE, SECURITY

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/recaptcha_enterprise_key#challenge_security_preference RecaptchaEnterpriseKey#challenge_security_preference}

---

## Classes <a name="Classes" id="Classes"></a>

### RecaptchaEnterpriseKeyAndroidSettingsOutputReference <a name="RecaptchaEnterpriseKeyAndroidSettingsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RecaptchaEnterpriseKeyAndroidSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowAllPackageNames">ResetAllowAllPackageNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowedPackageNames">ResetAllowedPackageNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowAllPackageNames` <a name="ResetAllowAllPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowAllPackageNames"></a>

```csharp
private void ResetAllowAllPackageNames()
```

##### `ResetAllowedPackageNames` <a name="ResetAllowedPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowedPackageNames"></a>

```csharp
private void ResetAllowedPackageNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNamesInput">AllowAllPackageNamesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNamesInput">AllowedPackageNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNames">AllowAllPackageNames</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNames">AllowedPackageNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowAllPackageNamesInput`<sup>Optional</sup> <a name="AllowAllPackageNamesInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNamesInput"></a>

```csharp
public object AllowAllPackageNamesInput { get; }
```

- *Type:* object

---

##### `AllowedPackageNamesInput`<sup>Optional</sup> <a name="AllowedPackageNamesInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNamesInput"></a>

```csharp
public string[] AllowedPackageNamesInput { get; }
```

- *Type:* string[]

---

##### `AllowAllPackageNames`<sup>Required</sup> <a name="AllowAllPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNames"></a>

```csharp
public object AllowAllPackageNames { get; }
```

- *Type:* object

---

##### `AllowedPackageNames`<sup>Required</sup> <a name="AllowedPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNames"></a>

```csharp
public string[] AllowedPackageNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.internalValue"></a>

```csharp
public RecaptchaEnterpriseKeyAndroidSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a>

---


### RecaptchaEnterpriseKeyIosSettingsOutputReference <a name="RecaptchaEnterpriseKeyIosSettingsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RecaptchaEnterpriseKeyIosSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowAllBundleIds">ResetAllowAllBundleIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowedBundleIds">ResetAllowedBundleIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowAllBundleIds` <a name="ResetAllowAllBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowAllBundleIds"></a>

```csharp
private void ResetAllowAllBundleIds()
```

##### `ResetAllowedBundleIds` <a name="ResetAllowedBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowedBundleIds"></a>

```csharp
private void ResetAllowedBundleIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIdsInput">AllowAllBundleIdsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIdsInput">AllowedBundleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIds">AllowAllBundleIds</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIds">AllowedBundleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowAllBundleIdsInput`<sup>Optional</sup> <a name="AllowAllBundleIdsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIdsInput"></a>

```csharp
public object AllowAllBundleIdsInput { get; }
```

- *Type:* object

---

##### `AllowedBundleIdsInput`<sup>Optional</sup> <a name="AllowedBundleIdsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIdsInput"></a>

```csharp
public string[] AllowedBundleIdsInput { get; }
```

- *Type:* string[]

---

##### `AllowAllBundleIds`<sup>Required</sup> <a name="AllowAllBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIds"></a>

```csharp
public object AllowAllBundleIds { get; }
```

- *Type:* object

---

##### `AllowedBundleIds`<sup>Required</sup> <a name="AllowedBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIds"></a>

```csharp
public string[] AllowedBundleIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.internalValue"></a>

```csharp
public RecaptchaEnterpriseKeyIosSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a>

---


### RecaptchaEnterpriseKeyTestingOptionsOutputReference <a name="RecaptchaEnterpriseKeyTestingOptionsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RecaptchaEnterpriseKeyTestingOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingChallenge">ResetTestingChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingScore">ResetTestingScore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTestingChallenge` <a name="ResetTestingChallenge" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingChallenge"></a>

```csharp
private void ResetTestingChallenge()
```

##### `ResetTestingScore` <a name="ResetTestingScore" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingScore"></a>

```csharp
private void ResetTestingScore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallengeInput">TestingChallengeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScoreInput">TestingScoreInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallenge">TestingChallenge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScore">TestingScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TestingChallengeInput`<sup>Optional</sup> <a name="TestingChallengeInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallengeInput"></a>

```csharp
public string TestingChallengeInput { get; }
```

- *Type:* string

---

##### `TestingScoreInput`<sup>Optional</sup> <a name="TestingScoreInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScoreInput"></a>

```csharp
public double TestingScoreInput { get; }
```

- *Type:* double

---

##### `TestingChallenge`<sup>Required</sup> <a name="TestingChallenge" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallenge"></a>

```csharp
public string TestingChallenge { get; }
```

- *Type:* string

---

##### `TestingScore`<sup>Required</sup> <a name="TestingScore" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScore"></a>

```csharp
public double TestingScore { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.internalValue"></a>

```csharp
public RecaptchaEnterpriseKeyTestingOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a>

---


### RecaptchaEnterpriseKeyTimeoutsOutputReference <a name="RecaptchaEnterpriseKeyTimeoutsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RecaptchaEnterpriseKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RecaptchaEnterpriseKeyWafSettingsOutputReference <a name="RecaptchaEnterpriseKeyWafSettingsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RecaptchaEnterpriseKeyWafSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafFeatureInput">WafFeatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafServiceInput">WafServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafFeature">WafFeature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafService">WafService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings">RecaptchaEnterpriseKeyWafSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WafFeatureInput`<sup>Optional</sup> <a name="WafFeatureInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafFeatureInput"></a>

```csharp
public string WafFeatureInput { get; }
```

- *Type:* string

---

##### `WafServiceInput`<sup>Optional</sup> <a name="WafServiceInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafServiceInput"></a>

```csharp
public string WafServiceInput { get; }
```

- *Type:* string

---

##### `WafFeature`<sup>Required</sup> <a name="WafFeature" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafFeature"></a>

```csharp
public string WafFeature { get; }
```

- *Type:* string

---

##### `WafService`<sup>Required</sup> <a name="WafService" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafService"></a>

```csharp
public string WafService { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.internalValue"></a>

```csharp
public RecaptchaEnterpriseKeyWafSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings">RecaptchaEnterpriseKeyWafSettings</a>

---


### RecaptchaEnterpriseKeyWebSettingsOutputReference <a name="RecaptchaEnterpriseKeyWebSettingsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RecaptchaEnterpriseKeyWebSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAllDomains">ResetAllowAllDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAmpTraffic">ResetAllowAmpTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowedDomains">ResetAllowedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetChallengeSecurityPreference">ResetChallengeSecurityPreference</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowAllDomains` <a name="ResetAllowAllDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAllDomains"></a>

```csharp
private void ResetAllowAllDomains()
```

##### `ResetAllowAmpTraffic` <a name="ResetAllowAmpTraffic" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAmpTraffic"></a>

```csharp
private void ResetAllowAmpTraffic()
```

##### `ResetAllowedDomains` <a name="ResetAllowedDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowedDomains"></a>

```csharp
private void ResetAllowedDomains()
```

##### `ResetChallengeSecurityPreference` <a name="ResetChallengeSecurityPreference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetChallengeSecurityPreference"></a>

```csharp
private void ResetChallengeSecurityPreference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomainsInput">AllowAllDomainsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTrafficInput">AllowAmpTrafficInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomainsInput">AllowedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreferenceInput">ChallengeSecurityPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationTypeInput">IntegrationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomains">AllowAllDomains</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTraffic">AllowAmpTraffic</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomains">AllowedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreference">ChallengeSecurityPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationType">IntegrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowAllDomainsInput`<sup>Optional</sup> <a name="AllowAllDomainsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomainsInput"></a>

```csharp
public object AllowAllDomainsInput { get; }
```

- *Type:* object

---

##### `AllowAmpTrafficInput`<sup>Optional</sup> <a name="AllowAmpTrafficInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTrafficInput"></a>

```csharp
public object AllowAmpTrafficInput { get; }
```

- *Type:* object

---

##### `AllowedDomainsInput`<sup>Optional</sup> <a name="AllowedDomainsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomainsInput"></a>

```csharp
public string[] AllowedDomainsInput { get; }
```

- *Type:* string[]

---

##### `ChallengeSecurityPreferenceInput`<sup>Optional</sup> <a name="ChallengeSecurityPreferenceInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreferenceInput"></a>

```csharp
public string ChallengeSecurityPreferenceInput { get; }
```

- *Type:* string

---

##### `IntegrationTypeInput`<sup>Optional</sup> <a name="IntegrationTypeInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationTypeInput"></a>

```csharp
public string IntegrationTypeInput { get; }
```

- *Type:* string

---

##### `AllowAllDomains`<sup>Required</sup> <a name="AllowAllDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomains"></a>

```csharp
public object AllowAllDomains { get; }
```

- *Type:* object

---

##### `AllowAmpTraffic`<sup>Required</sup> <a name="AllowAmpTraffic" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTraffic"></a>

```csharp
public object AllowAmpTraffic { get; }
```

- *Type:* object

---

##### `AllowedDomains`<sup>Required</sup> <a name="AllowedDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomains"></a>

```csharp
public string[] AllowedDomains { get; }
```

- *Type:* string[]

---

##### `ChallengeSecurityPreference`<sup>Required</sup> <a name="ChallengeSecurityPreference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreference"></a>

```csharp
public string ChallengeSecurityPreference { get; }
```

- *Type:* string

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationType"></a>

```csharp
public string IntegrationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.internalValue"></a>

```csharp
public RecaptchaEnterpriseKeyWebSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a>

---



