# `osConfigPatchDeployment` Submodule <a name="`osConfigPatchDeployment` Submodule" id="@cdktf/provider-google.osConfigPatchDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsConfigPatchDeployment <a name="OsConfigPatchDeployment" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment google_os_config_patch_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeployment(Construct Scope, string Id, OsConfigPatchDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig">OsConfigPatchDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig">OsConfigPatchDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putInstanceFilter">PutInstanceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putOneTimeSchedule">PutOneTimeSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putPatchConfig">PutPatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putRecurringSchedule">PutRecurringSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putRollout">PutRollout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetOneTimeSchedule">ResetOneTimeSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetPatchConfig">ResetPatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetRecurringSchedule">ResetRecurringSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetRollout">ResetRollout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInstanceFilter` <a name="PutInstanceFilter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putInstanceFilter"></a>

```csharp
private void PutInstanceFilter(OsConfigPatchDeploymentInstanceFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putInstanceFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a>

---

##### `PutOneTimeSchedule` <a name="PutOneTimeSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putOneTimeSchedule"></a>

```csharp
private void PutOneTimeSchedule(OsConfigPatchDeploymentOneTimeSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putOneTimeSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a>

---

##### `PutPatchConfig` <a name="PutPatchConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putPatchConfig"></a>

```csharp
private void PutPatchConfig(OsConfigPatchDeploymentPatchConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putPatchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a>

---

##### `PutRecurringSchedule` <a name="PutRecurringSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putRecurringSchedule"></a>

```csharp
private void PutRecurringSchedule(OsConfigPatchDeploymentRecurringSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putRecurringSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a>

---

##### `PutRollout` <a name="PutRollout" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putRollout"></a>

```csharp
private void PutRollout(OsConfigPatchDeploymentRollout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putRollout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putTimeouts"></a>

```csharp
private void PutTimeouts(OsConfigPatchDeploymentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts">OsConfigPatchDeploymentTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOneTimeSchedule` <a name="ResetOneTimeSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetOneTimeSchedule"></a>

```csharp
private void ResetOneTimeSchedule()
```

##### `ResetPatchConfig` <a name="ResetPatchConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetPatchConfig"></a>

```csharp
private void ResetPatchConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRecurringSchedule` <a name="ResetRecurringSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetRecurringSchedule"></a>

```csharp
private void ResetRecurringSchedule()
```

##### `ResetRollout` <a name="ResetRollout" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetRollout"></a>

```csharp
private void ResetRollout()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsConfigPatchDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

OsConfigPatchDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

OsConfigPatchDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

OsConfigPatchDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

OsConfigPatchDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OsConfigPatchDeployment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsConfigPatchDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsConfigPatchDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OsConfigPatchDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.instanceFilter">InstanceFilter</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference">OsConfigPatchDeploymentInstanceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.lastExecuteTime">LastExecuteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.oneTimeSchedule">OneTimeSchedule</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference">OsConfigPatchDeploymentOneTimeScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchConfig">PatchConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference">OsConfigPatchDeploymentPatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.recurringSchedule">RecurringSchedule</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference">OsConfigPatchDeploymentRecurringScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.rollout">Rollout</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference">OsConfigPatchDeploymentRolloutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference">OsConfigPatchDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.instanceFilterInput">InstanceFilterInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.oneTimeScheduleInput">OneTimeScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchConfigInput">PatchConfigInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchDeploymentIdInput">PatchDeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.recurringScheduleInput">RecurringScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.rolloutInput">RolloutInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchDeploymentId">PatchDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `InstanceFilter`<sup>Required</sup> <a name="InstanceFilter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.instanceFilter"></a>

```csharp
public OsConfigPatchDeploymentInstanceFilterOutputReference InstanceFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference">OsConfigPatchDeploymentInstanceFilterOutputReference</a>

---

##### `LastExecuteTime`<sup>Required</sup> <a name="LastExecuteTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.lastExecuteTime"></a>

```csharp
public string LastExecuteTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OneTimeSchedule`<sup>Required</sup> <a name="OneTimeSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.oneTimeSchedule"></a>

```csharp
public OsConfigPatchDeploymentOneTimeScheduleOutputReference OneTimeSchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference">OsConfigPatchDeploymentOneTimeScheduleOutputReference</a>

---

##### `PatchConfig`<sup>Required</sup> <a name="PatchConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchConfig"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigOutputReference PatchConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference">OsConfigPatchDeploymentPatchConfigOutputReference</a>

---

##### `RecurringSchedule`<sup>Required</sup> <a name="RecurringSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.recurringSchedule"></a>

```csharp
public OsConfigPatchDeploymentRecurringScheduleOutputReference RecurringSchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference">OsConfigPatchDeploymentRecurringScheduleOutputReference</a>

---

##### `Rollout`<sup>Required</sup> <a name="Rollout" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.rollout"></a>

```csharp
public OsConfigPatchDeploymentRolloutOutputReference Rollout { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference">OsConfigPatchDeploymentRolloutOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.timeouts"></a>

```csharp
public OsConfigPatchDeploymentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference">OsConfigPatchDeploymentTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceFilterInput`<sup>Optional</sup> <a name="InstanceFilterInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.instanceFilterInput"></a>

```csharp
public OsConfigPatchDeploymentInstanceFilter InstanceFilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a>

---

##### `OneTimeScheduleInput`<sup>Optional</sup> <a name="OneTimeScheduleInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.oneTimeScheduleInput"></a>

```csharp
public OsConfigPatchDeploymentOneTimeSchedule OneTimeScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a>

---

##### `PatchConfigInput`<sup>Optional</sup> <a name="PatchConfigInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchConfigInput"></a>

```csharp
public OsConfigPatchDeploymentPatchConfig PatchConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a>

---

##### `PatchDeploymentIdInput`<sup>Optional</sup> <a name="PatchDeploymentIdInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchDeploymentIdInput"></a>

```csharp
public string PatchDeploymentIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RecurringScheduleInput`<sup>Optional</sup> <a name="RecurringScheduleInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.recurringScheduleInput"></a>

```csharp
public OsConfigPatchDeploymentRecurringSchedule RecurringScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a>

---

##### `RolloutInput`<sup>Optional</sup> <a name="RolloutInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.rolloutInput"></a>

```csharp
public OsConfigPatchDeploymentRollout RolloutInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PatchDeploymentId`<sup>Required</sup> <a name="PatchDeploymentId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.patchDeploymentId"></a>

```csharp
public string PatchDeploymentId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsConfigPatchDeploymentConfig <a name="OsConfigPatchDeploymentConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    OsConfigPatchDeploymentInstanceFilter InstanceFilter,
    string PatchDeploymentId,
    string Description = null,
    string Duration = null,
    string Id = null,
    OsConfigPatchDeploymentOneTimeSchedule OneTimeSchedule = null,
    OsConfigPatchDeploymentPatchConfig PatchConfig = null,
    string Project = null,
    OsConfigPatchDeploymentRecurringSchedule RecurringSchedule = null,
    OsConfigPatchDeploymentRollout Rollout = null,
    OsConfigPatchDeploymentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.instanceFilter">InstanceFilter</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a></code> | instance_filter block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.patchDeploymentId">PatchDeploymentId</a></code> | <code>string</code> | A name for the patch deployment in the project. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.description">Description</a></code> | <code>string</code> | Description of the patch deployment. Length of the description is limited to 1024 characters. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.duration">Duration</a></code> | <code>string</code> | Duration of the patch. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#id OsConfigPatchDeployment#id}. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.oneTimeSchedule">OneTimeSchedule</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a></code> | one_time_schedule block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.patchConfig">PatchConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a></code> | patch_config block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#project OsConfigPatchDeployment#project}. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.recurringSchedule">RecurringSchedule</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a></code> | recurring_schedule block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.rollout">Rollout</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a></code> | rollout block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts">OsConfigPatchDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceFilter`<sup>Required</sup> <a name="InstanceFilter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.instanceFilter"></a>

```csharp
public OsConfigPatchDeploymentInstanceFilter InstanceFilter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a>

instance_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#instance_filter OsConfigPatchDeployment#instance_filter}

---

##### `PatchDeploymentId`<sup>Required</sup> <a name="PatchDeploymentId" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.patchDeploymentId"></a>

```csharp
public string PatchDeploymentId { get; set; }
```

- *Type:* string

A name for the patch deployment in the project.

When creating a name the following rules apply:

* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.
* Must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#patch_deployment_id OsConfigPatchDeployment#patch_deployment_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the patch deployment. Length of the description is limited to 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#description OsConfigPatchDeployment#description}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Duration of the patch.

After the duration ends, the patch times out.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#duration OsConfigPatchDeployment#duration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#id OsConfigPatchDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OneTimeSchedule`<sup>Optional</sup> <a name="OneTimeSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.oneTimeSchedule"></a>

```csharp
public OsConfigPatchDeploymentOneTimeSchedule OneTimeSchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a>

one_time_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#one_time_schedule OsConfigPatchDeployment#one_time_schedule}

---

##### `PatchConfig`<sup>Optional</sup> <a name="PatchConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.patchConfig"></a>

```csharp
public OsConfigPatchDeploymentPatchConfig PatchConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a>

patch_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#patch_config OsConfigPatchDeployment#patch_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#project OsConfigPatchDeployment#project}.

---

##### `RecurringSchedule`<sup>Optional</sup> <a name="RecurringSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.recurringSchedule"></a>

```csharp
public OsConfigPatchDeploymentRecurringSchedule RecurringSchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a>

recurring_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#recurring_schedule OsConfigPatchDeployment#recurring_schedule}

---

##### `Rollout`<sup>Optional</sup> <a name="Rollout" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.rollout"></a>

```csharp
public OsConfigPatchDeploymentRollout Rollout { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a>

rollout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#rollout OsConfigPatchDeployment#rollout}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentConfig.property.timeouts"></a>

```csharp
public OsConfigPatchDeploymentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts">OsConfigPatchDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#timeouts OsConfigPatchDeployment#timeouts}

---

### OsConfigPatchDeploymentInstanceFilter <a name="OsConfigPatchDeploymentInstanceFilter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentInstanceFilter {
    object All = null,
    object GroupLabels = null,
    string[] InstanceNamePrefixes = null,
    string[] Instances = null,
    string[] Zones = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.all">All</a></code> | <code>object</code> | Target all VM instances in the project. If true, no other criteria is permitted. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.groupLabels">GroupLabels</a></code> | <code>object</code> | group_labels block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.instanceNamePrefixes">InstanceNamePrefixes</a></code> | <code>string[]</code> | Targets VMs whose name starts with one of these prefixes. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.instances">Instances</a></code> | <code>string[]</code> | Targets any of the VM instances specified. Instances are specified by their URI in the 'form zones/{{zone}}/instances/{{instance_name}}', 'projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}', or 'https://www.googleapis.com/compute/v1/projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}'. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.zones">Zones</a></code> | <code>string[]</code> | Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.all"></a>

```csharp
public object All { get; set; }
```

- *Type:* object

Target all VM instances in the project. If true, no other criteria is permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#all OsConfigPatchDeployment#all}

---

##### `GroupLabels`<sup>Optional</sup> <a name="GroupLabels" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.groupLabels"></a>

```csharp
public object GroupLabels { get; set; }
```

- *Type:* object

group_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#group_labels OsConfigPatchDeployment#group_labels}

---

##### `InstanceNamePrefixes`<sup>Optional</sup> <a name="InstanceNamePrefixes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.instanceNamePrefixes"></a>

```csharp
public string[] InstanceNamePrefixes { get; set; }
```

- *Type:* string[]

Targets VMs whose name starts with one of these prefixes.

Similar to labels, this is another way to group
VMs when targeting configs, for example prefix="prod-".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#instance_name_prefixes OsConfigPatchDeployment#instance_name_prefixes}

---

##### `Instances`<sup>Optional</sup> <a name="Instances" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.instances"></a>

```csharp
public string[] Instances { get; set; }
```

- *Type:* string[]

Targets any of the VM instances specified. Instances are specified by their URI in the 'form zones/{{zone}}/instances/{{instance_name}}', 'projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}', or 'https://www.googleapis.com/compute/v1/projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#instances OsConfigPatchDeployment#instances}

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter.property.zones"></a>

```csharp
public string[] Zones { get; set; }
```

- *Type:* string[]

Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#zones OsConfigPatchDeployment#zones}

---

### OsConfigPatchDeploymentInstanceFilterGroupLabels <a name="OsConfigPatchDeploymentInstanceFilterGroupLabels" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentInstanceFilterGroupLabels {
    System.Collections.Generic.IDictionary<string, string> Labels
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Compute Engine instance labels that must be present for a VM instance to be targeted by this filter. |

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabels.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Compute Engine instance labels that must be present for a VM instance to be targeted by this filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#labels OsConfigPatchDeployment#labels}

---

### OsConfigPatchDeploymentOneTimeSchedule <a name="OsConfigPatchDeploymentOneTimeSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentOneTimeSchedule {
    string ExecuteTime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule.property.executeTime">ExecuteTime</a></code> | <code>string</code> | The desired patch job execution time. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". |

---

##### `ExecuteTime`<sup>Required</sup> <a name="ExecuteTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule.property.executeTime"></a>

```csharp
public string ExecuteTime { get; set; }
```

- *Type:* string

The desired patch job execution time. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#execute_time OsConfigPatchDeployment#execute_time}

---

### OsConfigPatchDeploymentPatchConfig <a name="OsConfigPatchDeploymentPatchConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfig {
    OsConfigPatchDeploymentPatchConfigApt Apt = null,
    OsConfigPatchDeploymentPatchConfigGoo Goo = null,
    object MigInstancesAllowed = null,
    OsConfigPatchDeploymentPatchConfigPostStep PostStep = null,
    OsConfigPatchDeploymentPatchConfigPreStep PreStep = null,
    string RebootConfig = null,
    OsConfigPatchDeploymentPatchConfigWindowsUpdate WindowsUpdate = null,
    OsConfigPatchDeploymentPatchConfigYum Yum = null,
    OsConfigPatchDeploymentPatchConfigZypper Zypper = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.apt">Apt</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt">OsConfigPatchDeploymentPatchConfigApt</a></code> | apt block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.goo">Goo</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo">OsConfigPatchDeploymentPatchConfigGoo</a></code> | goo block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.migInstancesAllowed">MigInstancesAllowed</a></code> | <code>object</code> | Allows the patch job to run on Managed instance groups (MIGs). |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.postStep">PostStep</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep">OsConfigPatchDeploymentPatchConfigPostStep</a></code> | post_step block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.preStep">PreStep</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep">OsConfigPatchDeploymentPatchConfigPreStep</a></code> | pre_step block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.rebootConfig">RebootConfig</a></code> | <code>string</code> | Post-patch reboot settings. Possible values: ["DEFAULT", "ALWAYS", "NEVER"]. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.windowsUpdate">WindowsUpdate</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate">OsConfigPatchDeploymentPatchConfigWindowsUpdate</a></code> | windows_update block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.yum">Yum</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum">OsConfigPatchDeploymentPatchConfigYum</a></code> | yum block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.zypper">Zypper</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper">OsConfigPatchDeploymentPatchConfigZypper</a></code> | zypper block. |

---

##### `Apt`<sup>Optional</sup> <a name="Apt" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.apt"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigApt Apt { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt">OsConfigPatchDeploymentPatchConfigApt</a>

apt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#apt OsConfigPatchDeployment#apt}

---

##### `Goo`<sup>Optional</sup> <a name="Goo" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.goo"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigGoo Goo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo">OsConfigPatchDeploymentPatchConfigGoo</a>

goo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#goo OsConfigPatchDeployment#goo}

---

##### `MigInstancesAllowed`<sup>Optional</sup> <a name="MigInstancesAllowed" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.migInstancesAllowed"></a>

```csharp
public object MigInstancesAllowed { get; set; }
```

- *Type:* object

Allows the patch job to run on Managed instance groups (MIGs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#mig_instances_allowed OsConfigPatchDeployment#mig_instances_allowed}

---

##### `PostStep`<sup>Optional</sup> <a name="PostStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.postStep"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPostStep PostStep { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep">OsConfigPatchDeploymentPatchConfigPostStep</a>

post_step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#post_step OsConfigPatchDeployment#post_step}

---

##### `PreStep`<sup>Optional</sup> <a name="PreStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.preStep"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPreStep PreStep { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep">OsConfigPatchDeploymentPatchConfigPreStep</a>

pre_step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#pre_step OsConfigPatchDeployment#pre_step}

---

##### `RebootConfig`<sup>Optional</sup> <a name="RebootConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.rebootConfig"></a>

```csharp
public string RebootConfig { get; set; }
```

- *Type:* string

Post-patch reboot settings. Possible values: ["DEFAULT", "ALWAYS", "NEVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#reboot_config OsConfigPatchDeployment#reboot_config}

---

##### `WindowsUpdate`<sup>Optional</sup> <a name="WindowsUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.windowsUpdate"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigWindowsUpdate WindowsUpdate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate">OsConfigPatchDeploymentPatchConfigWindowsUpdate</a>

windows_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#windows_update OsConfigPatchDeployment#windows_update}

---

##### `Yum`<sup>Optional</sup> <a name="Yum" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.yum"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigYum Yum { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum">OsConfigPatchDeploymentPatchConfigYum</a>

yum block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#yum OsConfigPatchDeployment#yum}

---

##### `Zypper`<sup>Optional</sup> <a name="Zypper" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig.property.zypper"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigZypper Zypper { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper">OsConfigPatchDeploymentPatchConfigZypper</a>

zypper block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#zypper OsConfigPatchDeployment#zypper}

---

### OsConfigPatchDeploymentPatchConfigApt <a name="OsConfigPatchDeploymentPatchConfigApt" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigApt {
    string[] Excludes = null,
    string[] ExclusivePackages = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt.property.excludes">Excludes</a></code> | <code>string[]</code> | List of packages to exclude from update. These packages will be excluded. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt.property.exclusivePackages">ExclusivePackages</a></code> | <code>string[]</code> | An exclusive list of packages to be updated. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt.property.type">Type</a></code> | <code>string</code> | By changing the type to DIST, the patching is performed using apt-get dist-upgrade instead. Possible values: ["DIST", "UPGRADE"]. |

---

##### `Excludes`<sup>Optional</sup> <a name="Excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt.property.excludes"></a>

```csharp
public string[] Excludes { get; set; }
```

- *Type:* string[]

List of packages to exclude from update. These packages will be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#excludes OsConfigPatchDeployment#excludes}

---

##### `ExclusivePackages`<sup>Optional</sup> <a name="ExclusivePackages" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt.property.exclusivePackages"></a>

```csharp
public string[] ExclusivePackages { get; set; }
```

- *Type:* string[]

An exclusive list of packages to be updated.

These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#exclusive_packages OsConfigPatchDeployment#exclusive_packages}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

By changing the type to DIST, the patching is performed using apt-get dist-upgrade instead. Possible values: ["DIST", "UPGRADE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#type OsConfigPatchDeployment#type}

---

### OsConfigPatchDeploymentPatchConfigGoo <a name="OsConfigPatchDeploymentPatchConfigGoo" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigGoo {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo.property.enabled">Enabled</a></code> | <code>object</code> | goo update settings. Use this setting to override the default goo patch rules. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

goo update settings. Use this setting to override the default goo patch rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#enabled OsConfigPatchDeployment#enabled}

---

### OsConfigPatchDeploymentPatchConfigPostStep <a name="OsConfigPatchDeploymentPatchConfigPostStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigPostStep {
    OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig LinuxExecStepConfig = null,
    OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig WindowsExecStepConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep.property.linuxExecStepConfig">LinuxExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a></code> | linux_exec_step_config block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep.property.windowsExecStepConfig">WindowsExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a></code> | windows_exec_step_config block. |

---

##### `LinuxExecStepConfig`<sup>Optional</sup> <a name="LinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep.property.linuxExecStepConfig"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig LinuxExecStepConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a>

linux_exec_step_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#linux_exec_step_config OsConfigPatchDeployment#linux_exec_step_config}

---

##### `WindowsExecStepConfig`<sup>Optional</sup> <a name="WindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep.property.windowsExecStepConfig"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig WindowsExecStepConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a>

windows_exec_step_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#windows_exec_step_config OsConfigPatchDeployment#windows_exec_step_config}

---

### OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig <a name="OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig {
    double[] AllowedSuccessCodes = null,
    OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject GcsObject = null,
    string Interpreter = null,
    string LocalPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>double[]</code> | Defaults to [0]. A list of possible return values that the execution can return to indicate a success. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a></code> | gcs_object block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.interpreter">Interpreter</a></code> | <code>string</code> | The script interpreter to use to run the script. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.localPath">LocalPath</a></code> | <code>string</code> | An absolute path to the executable on the VM. |

---

##### `AllowedSuccessCodes`<sup>Optional</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.allowedSuccessCodes"></a>

```csharp
public double[] AllowedSuccessCodes { get; set; }
```

- *Type:* double[]

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#allowed_success_codes OsConfigPatchDeployment#allowed_success_codes}

---

##### `GcsObject`<sup>Optional</sup> <a name="GcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.gcsObject"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject GcsObject { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#gcs_object OsConfigPatchDeployment#gcs_object}

---

##### `Interpreter`<sup>Optional</sup> <a name="Interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.interpreter"></a>

```csharp
public string Interpreter { get; set; }
```

- *Type:* string

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#interpreter OsConfigPatchDeployment#interpreter}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.localPath"></a>

```csharp
public string LocalPath { get; set; }
```

- *Type:* string

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#local_path OsConfigPatchDeployment#local_path}

---

### OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject <a name="OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject {
    string Bucket,
    string GenerationNumber,
    string Object
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.bucket">Bucket</a></code> | <code>string</code> | Bucket of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.generationNumber">GenerationNumber</a></code> | <code>string</code> | Generation number of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.object">Object</a></code> | <code>string</code> | Name of the Cloud Storage object. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#bucket OsConfigPatchDeployment#bucket}

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.generationNumber"></a>

```csharp
public string GenerationNumber { get; set; }
```

- *Type:* string

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#generation_number OsConfigPatchDeployment#generation_number}

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#object OsConfigPatchDeployment#object}

---

### OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig <a name="OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig {
    double[] AllowedSuccessCodes = null,
    OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject GcsObject = null,
    string Interpreter = null,
    string LocalPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>double[]</code> | Defaults to [0]. A list of possible return values that the execution can return to indicate a success. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a></code> | gcs_object block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.interpreter">Interpreter</a></code> | <code>string</code> | The script interpreter to use to run the script. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.localPath">LocalPath</a></code> | <code>string</code> | An absolute path to the executable on the VM. |

---

##### `AllowedSuccessCodes`<sup>Optional</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.allowedSuccessCodes"></a>

```csharp
public double[] AllowedSuccessCodes { get; set; }
```

- *Type:* double[]

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#allowed_success_codes OsConfigPatchDeployment#allowed_success_codes}

---

##### `GcsObject`<sup>Optional</sup> <a name="GcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.gcsObject"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject GcsObject { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#gcs_object OsConfigPatchDeployment#gcs_object}

---

##### `Interpreter`<sup>Optional</sup> <a name="Interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.interpreter"></a>

```csharp
public string Interpreter { get; set; }
```

- *Type:* string

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#interpreter OsConfigPatchDeployment#interpreter}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.localPath"></a>

```csharp
public string LocalPath { get; set; }
```

- *Type:* string

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#local_path OsConfigPatchDeployment#local_path}

---

### OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject <a name="OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject {
    string Bucket,
    string GenerationNumber,
    string Object
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.bucket">Bucket</a></code> | <code>string</code> | Bucket of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.generationNumber">GenerationNumber</a></code> | <code>string</code> | Generation number of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.object">Object</a></code> | <code>string</code> | Name of the Cloud Storage object. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#bucket OsConfigPatchDeployment#bucket}

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.generationNumber"></a>

```csharp
public string GenerationNumber { get; set; }
```

- *Type:* string

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#generation_number OsConfigPatchDeployment#generation_number}

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#object OsConfigPatchDeployment#object}

---

### OsConfigPatchDeploymentPatchConfigPreStep <a name="OsConfigPatchDeploymentPatchConfigPreStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigPreStep {
    OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig LinuxExecStepConfig = null,
    OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig WindowsExecStepConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep.property.linuxExecStepConfig">LinuxExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a></code> | linux_exec_step_config block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep.property.windowsExecStepConfig">WindowsExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a></code> | windows_exec_step_config block. |

---

##### `LinuxExecStepConfig`<sup>Optional</sup> <a name="LinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep.property.linuxExecStepConfig"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig LinuxExecStepConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a>

linux_exec_step_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#linux_exec_step_config OsConfigPatchDeployment#linux_exec_step_config}

---

##### `WindowsExecStepConfig`<sup>Optional</sup> <a name="WindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep.property.windowsExecStepConfig"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig WindowsExecStepConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a>

windows_exec_step_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#windows_exec_step_config OsConfigPatchDeployment#windows_exec_step_config}

---

### OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig <a name="OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig {
    double[] AllowedSuccessCodes = null,
    OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject GcsObject = null,
    string Interpreter = null,
    string LocalPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>double[]</code> | Defaults to [0]. A list of possible return values that the execution can return to indicate a success. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a></code> | gcs_object block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.interpreter">Interpreter</a></code> | <code>string</code> | The script interpreter to use to run the script. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.localPath">LocalPath</a></code> | <code>string</code> | An absolute path to the executable on the VM. |

---

##### `AllowedSuccessCodes`<sup>Optional</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.allowedSuccessCodes"></a>

```csharp
public double[] AllowedSuccessCodes { get; set; }
```

- *Type:* double[]

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#allowed_success_codes OsConfigPatchDeployment#allowed_success_codes}

---

##### `GcsObject`<sup>Optional</sup> <a name="GcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.gcsObject"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject GcsObject { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#gcs_object OsConfigPatchDeployment#gcs_object}

---

##### `Interpreter`<sup>Optional</sup> <a name="Interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.interpreter"></a>

```csharp
public string Interpreter { get; set; }
```

- *Type:* string

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#interpreter OsConfigPatchDeployment#interpreter}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.localPath"></a>

```csharp
public string LocalPath { get; set; }
```

- *Type:* string

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#local_path OsConfigPatchDeployment#local_path}

---

### OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject <a name="OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject {
    string Bucket,
    string GenerationNumber,
    string Object
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.bucket">Bucket</a></code> | <code>string</code> | Bucket of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.generationNumber">GenerationNumber</a></code> | <code>string</code> | Generation number of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.object">Object</a></code> | <code>string</code> | Name of the Cloud Storage object. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#bucket OsConfigPatchDeployment#bucket}

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.generationNumber"></a>

```csharp
public string GenerationNumber { get; set; }
```

- *Type:* string

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#generation_number OsConfigPatchDeployment#generation_number}

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#object OsConfigPatchDeployment#object}

---

### OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig <a name="OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig {
    double[] AllowedSuccessCodes = null,
    OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject GcsObject = null,
    string Interpreter = null,
    string LocalPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>double[]</code> | Defaults to [0]. A list of possible return values that the execution can return to indicate a success. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a></code> | gcs_object block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.interpreter">Interpreter</a></code> | <code>string</code> | The script interpreter to use to run the script. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.localPath">LocalPath</a></code> | <code>string</code> | An absolute path to the executable on the VM. |

---

##### `AllowedSuccessCodes`<sup>Optional</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.allowedSuccessCodes"></a>

```csharp
public double[] AllowedSuccessCodes { get; set; }
```

- *Type:* double[]

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#allowed_success_codes OsConfigPatchDeployment#allowed_success_codes}

---

##### `GcsObject`<sup>Optional</sup> <a name="GcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.gcsObject"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject GcsObject { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#gcs_object OsConfigPatchDeployment#gcs_object}

---

##### `Interpreter`<sup>Optional</sup> <a name="Interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.interpreter"></a>

```csharp
public string Interpreter { get; set; }
```

- *Type:* string

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#interpreter OsConfigPatchDeployment#interpreter}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.localPath"></a>

```csharp
public string LocalPath { get; set; }
```

- *Type:* string

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#local_path OsConfigPatchDeployment#local_path}

---

### OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject <a name="OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject {
    string Bucket,
    string GenerationNumber,
    string Object
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.bucket">Bucket</a></code> | <code>string</code> | Bucket of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.generationNumber">GenerationNumber</a></code> | <code>string</code> | Generation number of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.object">Object</a></code> | <code>string</code> | Name of the Cloud Storage object. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#bucket OsConfigPatchDeployment#bucket}

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.generationNumber"></a>

```csharp
public string GenerationNumber { get; set; }
```

- *Type:* string

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#generation_number OsConfigPatchDeployment#generation_number}

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#object OsConfigPatchDeployment#object}

---

### OsConfigPatchDeploymentPatchConfigWindowsUpdate <a name="OsConfigPatchDeploymentPatchConfigWindowsUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigWindowsUpdate {
    string[] Classifications = null,
    string[] Excludes = null,
    string[] ExclusivePatches = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate.property.classifications">Classifications</a></code> | <code>string[]</code> | Only apply updates of these windows update classifications. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate.property.excludes">Excludes</a></code> | <code>string[]</code> | List of KBs to exclude from update. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate.property.exclusivePatches">ExclusivePatches</a></code> | <code>string[]</code> | An exclusive list of kbs to be updated. |

---

##### `Classifications`<sup>Optional</sup> <a name="Classifications" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate.property.classifications"></a>

```csharp
public string[] Classifications { get; set; }
```

- *Type:* string[]

Only apply updates of these windows update classifications.

If empty, all updates are applied. Possible values: ["CRITICAL", "SECURITY", "DEFINITION", "DRIVER", "FEATURE_PACK", "SERVICE_PACK", "TOOL", "UPDATE_ROLLUP", "UPDATE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#classifications OsConfigPatchDeployment#classifications}

---

##### `Excludes`<sup>Optional</sup> <a name="Excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate.property.excludes"></a>

```csharp
public string[] Excludes { get; set; }
```

- *Type:* string[]

List of KBs to exclude from update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#excludes OsConfigPatchDeployment#excludes}

---

##### `ExclusivePatches`<sup>Optional</sup> <a name="ExclusivePatches" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate.property.exclusivePatches"></a>

```csharp
public string[] ExclusivePatches { get; set; }
```

- *Type:* string[]

An exclusive list of kbs to be updated.

These are the only patches that will be updated.
This field must not be used with other patch configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#exclusive_patches OsConfigPatchDeployment#exclusive_patches}

---

### OsConfigPatchDeploymentPatchConfigYum <a name="OsConfigPatchDeploymentPatchConfigYum" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigYum {
    string[] Excludes = null,
    string[] ExclusivePackages = null,
    object Minimal = null,
    object Security = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.excludes">Excludes</a></code> | <code>string[]</code> | List of packages to exclude from update. These packages will be excluded. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.exclusivePackages">ExclusivePackages</a></code> | <code>string[]</code> | An exclusive list of packages to be updated. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.minimal">Minimal</a></code> | <code>object</code> | Will cause patch to run yum update-minimal instead. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.security">Security</a></code> | <code>object</code> | Adds the --security flag to yum update. Not supported on all platforms. |

---

##### `Excludes`<sup>Optional</sup> <a name="Excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.excludes"></a>

```csharp
public string[] Excludes { get; set; }
```

- *Type:* string[]

List of packages to exclude from update. These packages will be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#excludes OsConfigPatchDeployment#excludes}

---

##### `ExclusivePackages`<sup>Optional</sup> <a name="ExclusivePackages" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.exclusivePackages"></a>

```csharp
public string[] ExclusivePackages { get; set; }
```

- *Type:* string[]

An exclusive list of packages to be updated.

These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#exclusive_packages OsConfigPatchDeployment#exclusive_packages}

---

##### `Minimal`<sup>Optional</sup> <a name="Minimal" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.minimal"></a>

```csharp
public object Minimal { get; set; }
```

- *Type:* object

Will cause patch to run yum update-minimal instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#minimal OsConfigPatchDeployment#minimal}

---

##### `Security`<sup>Optional</sup> <a name="Security" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum.property.security"></a>

```csharp
public object Security { get; set; }
```

- *Type:* object

Adds the --security flag to yum update. Not supported on all platforms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#security OsConfigPatchDeployment#security}

---

### OsConfigPatchDeploymentPatchConfigZypper <a name="OsConfigPatchDeploymentPatchConfigZypper" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigZypper {
    string[] Categories = null,
    string[] Excludes = null,
    string[] ExclusivePatches = null,
    string[] Severities = null,
    object WithOptional = null,
    object WithUpdate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.categories">Categories</a></code> | <code>string[]</code> | Install only patches with these categories. Common categories include security, recommended, and feature. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.excludes">Excludes</a></code> | <code>string[]</code> | List of packages to exclude from update. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.exclusivePatches">ExclusivePatches</a></code> | <code>string[]</code> | An exclusive list of patches to be updated. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.severities">Severities</a></code> | <code>string[]</code> | Install only patches with these severities. Common severities include critical, important, moderate, and low. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.withOptional">WithOptional</a></code> | <code>object</code> | Adds the --with-optional flag to zypper patch. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.withUpdate">WithUpdate</a></code> | <code>object</code> | Adds the --with-update flag, to zypper patch. |

---

##### `Categories`<sup>Optional</sup> <a name="Categories" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.categories"></a>

```csharp
public string[] Categories { get; set; }
```

- *Type:* string[]

Install only patches with these categories. Common categories include security, recommended, and feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#categories OsConfigPatchDeployment#categories}

---

##### `Excludes`<sup>Optional</sup> <a name="Excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.excludes"></a>

```csharp
public string[] Excludes { get; set; }
```

- *Type:* string[]

List of packages to exclude from update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#excludes OsConfigPatchDeployment#excludes}

---

##### `ExclusivePatches`<sup>Optional</sup> <a name="ExclusivePatches" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.exclusivePatches"></a>

```csharp
public string[] ExclusivePatches { get; set; }
```

- *Type:* string[]

An exclusive list of patches to be updated.

These are the only patches that will be installed using 'zypper patch patch:' command.
This field must not be used with any other patch configuration fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#exclusive_patches OsConfigPatchDeployment#exclusive_patches}

---

##### `Severities`<sup>Optional</sup> <a name="Severities" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.severities"></a>

```csharp
public string[] Severities { get; set; }
```

- *Type:* string[]

Install only patches with these severities. Common severities include critical, important, moderate, and low.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#severities OsConfigPatchDeployment#severities}

---

##### `WithOptional`<sup>Optional</sup> <a name="WithOptional" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.withOptional"></a>

```csharp
public object WithOptional { get; set; }
```

- *Type:* object

Adds the --with-optional flag to zypper patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#with_optional OsConfigPatchDeployment#with_optional}

---

##### `WithUpdate`<sup>Optional</sup> <a name="WithUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper.property.withUpdate"></a>

```csharp
public object WithUpdate { get; set; }
```

- *Type:* object

Adds the --with-update flag, to zypper patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#with_update OsConfigPatchDeployment#with_update}

---

### OsConfigPatchDeploymentRecurringSchedule <a name="OsConfigPatchDeploymentRecurringSchedule" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentRecurringSchedule {
    OsConfigPatchDeploymentRecurringScheduleTimeOfDay TimeOfDay,
    OsConfigPatchDeploymentRecurringScheduleTimeZone TimeZone,
    string EndTime = null,
    OsConfigPatchDeploymentRecurringScheduleMonthly Monthly = null,
    string StartTime = null,
    OsConfigPatchDeploymentRecurringScheduleWeekly Weekly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.timeOfDay">TimeOfDay</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay">OsConfigPatchDeploymentRecurringScheduleTimeOfDay</a></code> | time_of_day block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone">OsConfigPatchDeploymentRecurringScheduleTimeZone</a></code> | time_zone block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.endTime">EndTime</a></code> | <code>string</code> | The end time at which a recurring patch deployment schedule is no longer active. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.monthly">Monthly</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly">OsConfigPatchDeploymentRecurringScheduleMonthly</a></code> | monthly block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.startTime">StartTime</a></code> | <code>string</code> | The time that the recurring schedule becomes effective. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.weekly">Weekly</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly">OsConfigPatchDeploymentRecurringScheduleWeekly</a></code> | weekly block. |

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.timeOfDay"></a>

```csharp
public OsConfigPatchDeploymentRecurringScheduleTimeOfDay TimeOfDay { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay">OsConfigPatchDeploymentRecurringScheduleTimeOfDay</a>

time_of_day block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#time_of_day OsConfigPatchDeployment#time_of_day}

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.timeZone"></a>

```csharp
public OsConfigPatchDeploymentRecurringScheduleTimeZone TimeZone { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone">OsConfigPatchDeploymentRecurringScheduleTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#time_zone OsConfigPatchDeployment#time_zone}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

The end time at which a recurring patch deployment schedule is no longer active.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#end_time OsConfigPatchDeployment#end_time}

---

##### `Monthly`<sup>Optional</sup> <a name="Monthly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.monthly"></a>

```csharp
public OsConfigPatchDeploymentRecurringScheduleMonthly Monthly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly">OsConfigPatchDeploymentRecurringScheduleMonthly</a>

monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#monthly OsConfigPatchDeployment#monthly}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

The time that the recurring schedule becomes effective.

Defaults to createTime of the patch deployment.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#start_time OsConfigPatchDeployment#start_time}

---

##### `Weekly`<sup>Optional</sup> <a name="Weekly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule.property.weekly"></a>

```csharp
public OsConfigPatchDeploymentRecurringScheduleWeekly Weekly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly">OsConfigPatchDeploymentRecurringScheduleWeekly</a>

weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#weekly OsConfigPatchDeployment#weekly}

---

### OsConfigPatchDeploymentRecurringScheduleMonthly <a name="OsConfigPatchDeploymentRecurringScheduleMonthly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentRecurringScheduleMonthly {
    double MonthDay = null,
    OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth WeekDayOfMonth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly.property.monthDay">MonthDay</a></code> | <code>double</code> | One day of the month. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly.property.weekDayOfMonth">WeekDayOfMonth</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a></code> | week_day_of_month block. |

---

##### `MonthDay`<sup>Optional</sup> <a name="MonthDay" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly.property.monthDay"></a>

```csharp
public double MonthDay { get; set; }
```

- *Type:* double

One day of the month.

1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month.
Months without the target day will be skipped. For example, a schedule to run "every month on the 31st"
will not run in February, April, June, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#month_day OsConfigPatchDeployment#month_day}

---

##### `WeekDayOfMonth`<sup>Optional</sup> <a name="WeekDayOfMonth" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly.property.weekDayOfMonth"></a>

```csharp
public OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth WeekDayOfMonth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a>

week_day_of_month block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#week_day_of_month OsConfigPatchDeployment#week_day_of_month}

---

### OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth <a name="OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth {
    string DayOfWeek,
    double WeekOrdinal,
    double DayOffset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | A day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.weekOrdinal">WeekOrdinal</a></code> | <code>double</code> | Week number in a month. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.dayOffset">DayOffset</a></code> | <code>double</code> | Represents the number of days before or after the given week day of month that the patch deployment is scheduled for. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

A day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#day_of_week OsConfigPatchDeployment#day_of_week}

---

##### `WeekOrdinal`<sup>Required</sup> <a name="WeekOrdinal" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.weekOrdinal"></a>

```csharp
public double WeekOrdinal { get; set; }
```

- *Type:* double

Week number in a month.

1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#week_ordinal OsConfigPatchDeployment#week_ordinal}

---

##### `DayOffset`<sup>Optional</sup> <a name="DayOffset" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.dayOffset"></a>

```csharp
public double DayOffset { get; set; }
```

- *Type:* double

Represents the number of days before or after the given week day of month that the patch deployment is scheduled for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#day_offset OsConfigPatchDeployment#day_offset}

---

### OsConfigPatchDeploymentRecurringScheduleTimeOfDay <a name="OsConfigPatchDeploymentRecurringScheduleTimeOfDay" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentRecurringScheduleTimeOfDay {
    double Hours = null,
    double Minutes = null,
    double Nanos = null,
    double Seconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.hours">Hours</a></code> | <code>double</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.minutes">Minutes</a></code> | <code>double</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.nanos">Nanos</a></code> | <code>double</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.seconds">Seconds</a></code> | <code>double</code> | Seconds of minutes of the time. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#hours OsConfigPatchDeployment#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#minutes OsConfigPatchDeployment#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#nanos OsConfigPatchDeployment#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Seconds of minutes of the time.

Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#seconds OsConfigPatchDeployment#seconds}

---

### OsConfigPatchDeploymentRecurringScheduleTimeZone <a name="OsConfigPatchDeploymentRecurringScheduleTimeZone" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentRecurringScheduleTimeZone {
    string Id,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone.property.id">Id</a></code> | <code>string</code> | IANA Time Zone Database time zone, e.g. "America/New_York". |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone.property.version">Version</a></code> | <code>string</code> | IANA Time Zone Database version number, e.g. "2019a". |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

IANA Time Zone Database time zone, e.g. "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#id OsConfigPatchDeployment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

IANA Time Zone Database version number, e.g. "2019a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#version OsConfigPatchDeployment#version}

---

### OsConfigPatchDeploymentRecurringScheduleWeekly <a name="OsConfigPatchDeploymentRecurringScheduleWeekly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentRecurringScheduleWeekly {
    string DayOfWeek
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | IANA Time Zone Database time zone, e.g. "America/New_York". Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

IANA Time Zone Database time zone, e.g. "America/New_York". Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#day_of_week OsConfigPatchDeployment#day_of_week}

---

### OsConfigPatchDeploymentRollout <a name="OsConfigPatchDeploymentRollout" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentRollout {
    OsConfigPatchDeploymentRolloutDisruptionBudget DisruptionBudget,
    string Mode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout.property.disruptionBudget">DisruptionBudget</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget">OsConfigPatchDeploymentRolloutDisruptionBudget</a></code> | disruption_budget block. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout.property.mode">Mode</a></code> | <code>string</code> | Mode of the patch rollout. Possible values: ["ZONE_BY_ZONE", "CONCURRENT_ZONES"]. |

---

##### `DisruptionBudget`<sup>Required</sup> <a name="DisruptionBudget" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout.property.disruptionBudget"></a>

```csharp
public OsConfigPatchDeploymentRolloutDisruptionBudget DisruptionBudget { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget">OsConfigPatchDeploymentRolloutDisruptionBudget</a>

disruption_budget block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#disruption_budget OsConfigPatchDeployment#disruption_budget}

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Mode of the patch rollout. Possible values: ["ZONE_BY_ZONE", "CONCURRENT_ZONES"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#mode OsConfigPatchDeployment#mode}

---

### OsConfigPatchDeploymentRolloutDisruptionBudget <a name="OsConfigPatchDeploymentRolloutDisruptionBudget" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentRolloutDisruptionBudget {
    double Fixed = null,
    double Percentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget.property.fixed">Fixed</a></code> | <code>double</code> | Specifies a fixed value. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget.property.percentage">Percentage</a></code> | <code>double</code> | Specifies the relative value defined as a percentage, which will be multiplied by a reference value. |

---

##### `Fixed`<sup>Optional</sup> <a name="Fixed" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget.property.fixed"></a>

```csharp
public double Fixed { get; set; }
```

- *Type:* double

Specifies a fixed value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#fixed OsConfigPatchDeployment#fixed}

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget.property.percentage"></a>

```csharp
public double Percentage { get; set; }
```

- *Type:* double

Specifies the relative value defined as a percentage, which will be multiplied by a reference value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#percentage OsConfigPatchDeployment#percentage}

---

### OsConfigPatchDeploymentTimeouts <a name="OsConfigPatchDeploymentTimeouts" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#create OsConfigPatchDeployment#create}. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#delete OsConfigPatchDeployment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#create OsConfigPatchDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/os_config_patch_deployment#delete OsConfigPatchDeployment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsConfigPatchDeploymentInstanceFilterGroupLabelsList <a name="OsConfigPatchDeploymentInstanceFilterGroupLabelsList" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentInstanceFilterGroupLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.get"></a>

```csharp
private OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference <a name="OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsConfigPatchDeploymentInstanceFilterOutputReference <a name="OsConfigPatchDeploymentInstanceFilterOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentInstanceFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.putGroupLabels">PutGroupLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetGroupLabels">ResetGroupLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetInstanceNamePrefixes">ResetInstanceNamePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetInstances">ResetInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroupLabels` <a name="PutGroupLabels" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.putGroupLabels"></a>

```csharp
private void PutGroupLabels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.putGroupLabels.parameter.value"></a>

- *Type:* object

---

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetAll"></a>

```csharp
private void ResetAll()
```

##### `ResetGroupLabels` <a name="ResetGroupLabels" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetGroupLabels"></a>

```csharp
private void ResetGroupLabels()
```

##### `ResetInstanceNamePrefixes` <a name="ResetInstanceNamePrefixes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetInstanceNamePrefixes"></a>

```csharp
private void ResetInstanceNamePrefixes()
```

##### `ResetInstances` <a name="ResetInstances" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetInstances"></a>

```csharp
private void ResetInstances()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.resetZones"></a>

```csharp
private void ResetZones()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.groupLabels">GroupLabels</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList">OsConfigPatchDeploymentInstanceFilterGroupLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.allInput">AllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.groupLabelsInput">GroupLabelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instanceNamePrefixesInput">InstanceNamePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instancesInput">InstancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.zonesInput">ZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.all">All</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instanceNamePrefixes">InstanceNamePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instances">Instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupLabels`<sup>Required</sup> <a name="GroupLabels" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.groupLabels"></a>

```csharp
public OsConfigPatchDeploymentInstanceFilterGroupLabelsList GroupLabels { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterGroupLabelsList">OsConfigPatchDeploymentInstanceFilterGroupLabelsList</a>

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.allInput"></a>

```csharp
public object AllInput { get; }
```

- *Type:* object

---

##### `GroupLabelsInput`<sup>Optional</sup> <a name="GroupLabelsInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.groupLabelsInput"></a>

```csharp
public object GroupLabelsInput { get; }
```

- *Type:* object

---

##### `InstanceNamePrefixesInput`<sup>Optional</sup> <a name="InstanceNamePrefixesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instanceNamePrefixesInput"></a>

```csharp
public string[] InstanceNamePrefixesInput { get; }
```

- *Type:* string[]

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instancesInput"></a>

```csharp
public string[] InstancesInput { get; }
```

- *Type:* string[]

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.zonesInput"></a>

```csharp
public string[] ZonesInput { get; }
```

- *Type:* string[]

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.all"></a>

```csharp
public object All { get; }
```

- *Type:* object

---

##### `InstanceNamePrefixes`<sup>Required</sup> <a name="InstanceNamePrefixes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instanceNamePrefixes"></a>

```csharp
public string[] InstanceNamePrefixes { get; }
```

- *Type:* string[]

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.instances"></a>

```csharp
public string[] Instances { get; }
```

- *Type:* string[]

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilterOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentInstanceFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentInstanceFilter">OsConfigPatchDeploymentInstanceFilter</a>

---


### OsConfigPatchDeploymentOneTimeScheduleOutputReference <a name="OsConfigPatchDeploymentOneTimeScheduleOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentOneTimeScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.executeTimeInput">ExecuteTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.executeTime">ExecuteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecuteTimeInput`<sup>Optional</sup> <a name="ExecuteTimeInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.executeTimeInput"></a>

```csharp
public string ExecuteTimeInput { get; }
```

- *Type:* string

---

##### `ExecuteTime`<sup>Required</sup> <a name="ExecuteTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.executeTime"></a>

```csharp
public string ExecuteTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeScheduleOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentOneTimeSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentOneTimeSchedule">OsConfigPatchDeploymentOneTimeSchedule</a>

---


### OsConfigPatchDeploymentPatchConfigAptOutputReference <a name="OsConfigPatchDeploymentPatchConfigAptOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigAptOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resetExcludes">ResetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resetExclusivePackages">ResetExclusivePackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludes` <a name="ResetExcludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resetExcludes"></a>

```csharp
private void ResetExcludes()
```

##### `ResetExclusivePackages` <a name="ResetExclusivePackages" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resetExclusivePackages"></a>

```csharp
private void ResetExclusivePackages()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.excludesInput">ExcludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.exclusivePackagesInput">ExclusivePackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.excludes">Excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.exclusivePackages">ExclusivePackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt">OsConfigPatchDeploymentPatchConfigApt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludesInput`<sup>Optional</sup> <a name="ExcludesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.excludesInput"></a>

```csharp
public string[] ExcludesInput { get; }
```

- *Type:* string[]

---

##### `ExclusivePackagesInput`<sup>Optional</sup> <a name="ExclusivePackagesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.exclusivePackagesInput"></a>

```csharp
public string[] ExclusivePackagesInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.excludes"></a>

```csharp
public string[] Excludes { get; }
```

- *Type:* string[]

---

##### `ExclusivePackages`<sup>Required</sup> <a name="ExclusivePackages" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.exclusivePackages"></a>

```csharp
public string[] ExclusivePackages { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigApt InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt">OsConfigPatchDeploymentPatchConfigApt</a>

---


### OsConfigPatchDeploymentPatchConfigGooOutputReference <a name="OsConfigPatchDeploymentPatchConfigGooOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigGooOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo">OsConfigPatchDeploymentPatchConfigGoo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigGoo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo">OsConfigPatchDeploymentPatchConfigGoo</a>

---


### OsConfigPatchDeploymentPatchConfigOutputReference <a name="OsConfigPatchDeploymentPatchConfigOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putApt">PutApt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putGoo">PutGoo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putPostStep">PutPostStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putPreStep">PutPreStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putWindowsUpdate">PutWindowsUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putYum">PutYum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putZypper">PutZypper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetApt">ResetApt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetGoo">ResetGoo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetMigInstancesAllowed">ResetMigInstancesAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetPostStep">ResetPostStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetPreStep">ResetPreStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetRebootConfig">ResetRebootConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetWindowsUpdate">ResetWindowsUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetYum">ResetYum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetZypper">ResetZypper</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApt` <a name="PutApt" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putApt"></a>

```csharp
private void PutApt(OsConfigPatchDeploymentPatchConfigApt Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putApt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt">OsConfigPatchDeploymentPatchConfigApt</a>

---

##### `PutGoo` <a name="PutGoo" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putGoo"></a>

```csharp
private void PutGoo(OsConfigPatchDeploymentPatchConfigGoo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putGoo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo">OsConfigPatchDeploymentPatchConfigGoo</a>

---

##### `PutPostStep` <a name="PutPostStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putPostStep"></a>

```csharp
private void PutPostStep(OsConfigPatchDeploymentPatchConfigPostStep Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putPostStep.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep">OsConfigPatchDeploymentPatchConfigPostStep</a>

---

##### `PutPreStep` <a name="PutPreStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putPreStep"></a>

```csharp
private void PutPreStep(OsConfigPatchDeploymentPatchConfigPreStep Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putPreStep.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep">OsConfigPatchDeploymentPatchConfigPreStep</a>

---

##### `PutWindowsUpdate` <a name="PutWindowsUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putWindowsUpdate"></a>

```csharp
private void PutWindowsUpdate(OsConfigPatchDeploymentPatchConfigWindowsUpdate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putWindowsUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate">OsConfigPatchDeploymentPatchConfigWindowsUpdate</a>

---

##### `PutYum` <a name="PutYum" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putYum"></a>

```csharp
private void PutYum(OsConfigPatchDeploymentPatchConfigYum Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putYum.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum">OsConfigPatchDeploymentPatchConfigYum</a>

---

##### `PutZypper` <a name="PutZypper" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putZypper"></a>

```csharp
private void PutZypper(OsConfigPatchDeploymentPatchConfigZypper Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.putZypper.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper">OsConfigPatchDeploymentPatchConfigZypper</a>

---

##### `ResetApt` <a name="ResetApt" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetApt"></a>

```csharp
private void ResetApt()
```

##### `ResetGoo` <a name="ResetGoo" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetGoo"></a>

```csharp
private void ResetGoo()
```

##### `ResetMigInstancesAllowed` <a name="ResetMigInstancesAllowed" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetMigInstancesAllowed"></a>

```csharp
private void ResetMigInstancesAllowed()
```

##### `ResetPostStep` <a name="ResetPostStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetPostStep"></a>

```csharp
private void ResetPostStep()
```

##### `ResetPreStep` <a name="ResetPreStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetPreStep"></a>

```csharp
private void ResetPreStep()
```

##### `ResetRebootConfig` <a name="ResetRebootConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetRebootConfig"></a>

```csharp
private void ResetRebootConfig()
```

##### `ResetWindowsUpdate` <a name="ResetWindowsUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetWindowsUpdate"></a>

```csharp
private void ResetWindowsUpdate()
```

##### `ResetYum` <a name="ResetYum" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetYum"></a>

```csharp
private void ResetYum()
```

##### `ResetZypper` <a name="ResetZypper" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.resetZypper"></a>

```csharp
private void ResetZypper()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.apt">Apt</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference">OsConfigPatchDeploymentPatchConfigAptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.goo">Goo</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference">OsConfigPatchDeploymentPatchConfigGooOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.postStep">PostStep</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference">OsConfigPatchDeploymentPatchConfigPostStepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.preStep">PreStep</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference">OsConfigPatchDeploymentPatchConfigPreStepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.windowsUpdate">WindowsUpdate</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference">OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.yum">Yum</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference">OsConfigPatchDeploymentPatchConfigYumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.zypper">Zypper</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference">OsConfigPatchDeploymentPatchConfigZypperOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.aptInput">AptInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt">OsConfigPatchDeploymentPatchConfigApt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.gooInput">GooInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo">OsConfigPatchDeploymentPatchConfigGoo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.migInstancesAllowedInput">MigInstancesAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.postStepInput">PostStepInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep">OsConfigPatchDeploymentPatchConfigPostStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.preStepInput">PreStepInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep">OsConfigPatchDeploymentPatchConfigPreStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.rebootConfigInput">RebootConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.windowsUpdateInput">WindowsUpdateInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate">OsConfigPatchDeploymentPatchConfigWindowsUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.yumInput">YumInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum">OsConfigPatchDeploymentPatchConfigYum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.zypperInput">ZypperInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper">OsConfigPatchDeploymentPatchConfigZypper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.migInstancesAllowed">MigInstancesAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.rebootConfig">RebootConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Apt`<sup>Required</sup> <a name="Apt" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.apt"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigAptOutputReference Apt { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigAptOutputReference">OsConfigPatchDeploymentPatchConfigAptOutputReference</a>

---

##### `Goo`<sup>Required</sup> <a name="Goo" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.goo"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigGooOutputReference Goo { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGooOutputReference">OsConfigPatchDeploymentPatchConfigGooOutputReference</a>

---

##### `PostStep`<sup>Required</sup> <a name="PostStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.postStep"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPostStepOutputReference PostStep { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference">OsConfigPatchDeploymentPatchConfigPostStepOutputReference</a>

---

##### `PreStep`<sup>Required</sup> <a name="PreStep" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.preStep"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPreStepOutputReference PreStep { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference">OsConfigPatchDeploymentPatchConfigPreStepOutputReference</a>

---

##### `WindowsUpdate`<sup>Required</sup> <a name="WindowsUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.windowsUpdate"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference WindowsUpdate { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference">OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference</a>

---

##### `Yum`<sup>Required</sup> <a name="Yum" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.yum"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigYumOutputReference Yum { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference">OsConfigPatchDeploymentPatchConfigYumOutputReference</a>

---

##### `Zypper`<sup>Required</sup> <a name="Zypper" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.zypper"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigZypperOutputReference Zypper { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference">OsConfigPatchDeploymentPatchConfigZypperOutputReference</a>

---

##### `AptInput`<sup>Optional</sup> <a name="AptInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.aptInput"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigApt AptInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigApt">OsConfigPatchDeploymentPatchConfigApt</a>

---

##### `GooInput`<sup>Optional</sup> <a name="GooInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.gooInput"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigGoo GooInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigGoo">OsConfigPatchDeploymentPatchConfigGoo</a>

---

##### `MigInstancesAllowedInput`<sup>Optional</sup> <a name="MigInstancesAllowedInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.migInstancesAllowedInput"></a>

```csharp
public object MigInstancesAllowedInput { get; }
```

- *Type:* object

---

##### `PostStepInput`<sup>Optional</sup> <a name="PostStepInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.postStepInput"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPostStep PostStepInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep">OsConfigPatchDeploymentPatchConfigPostStep</a>

---

##### `PreStepInput`<sup>Optional</sup> <a name="PreStepInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.preStepInput"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPreStep PreStepInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep">OsConfigPatchDeploymentPatchConfigPreStep</a>

---

##### `RebootConfigInput`<sup>Optional</sup> <a name="RebootConfigInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.rebootConfigInput"></a>

```csharp
public string RebootConfigInput { get; }
```

- *Type:* string

---

##### `WindowsUpdateInput`<sup>Optional</sup> <a name="WindowsUpdateInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.windowsUpdateInput"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigWindowsUpdate WindowsUpdateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate">OsConfigPatchDeploymentPatchConfigWindowsUpdate</a>

---

##### `YumInput`<sup>Optional</sup> <a name="YumInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.yumInput"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigYum YumInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum">OsConfigPatchDeploymentPatchConfigYum</a>

---

##### `ZypperInput`<sup>Optional</sup> <a name="ZypperInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.zypperInput"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigZypper ZypperInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper">OsConfigPatchDeploymentPatchConfigZypper</a>

---

##### `MigInstancesAllowed`<sup>Required</sup> <a name="MigInstancesAllowed" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.migInstancesAllowed"></a>

```csharp
public object MigInstancesAllowed { get; }
```

- *Type:* object

---

##### `RebootConfig`<sup>Required</sup> <a name="RebootConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.rebootConfig"></a>

```csharp
public string RebootConfig { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentPatchConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfig">OsConfigPatchDeploymentPatchConfig</a>

---


### OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference <a name="OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumberInput">GenerationNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumber">GenerationNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `GenerationNumberInput`<sup>Optional</sup> <a name="GenerationNumberInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumberInput"></a>

```csharp
public string GenerationNumberInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumber"></a>

```csharp
public string GenerationNumber { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a>

---


### OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference <a name="OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.putGcsObject">PutGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetAllowedSuccessCodes">ResetAllowedSuccessCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetGcsObject">ResetGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetInterpreter">ResetInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcsObject` <a name="PutGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.putGcsObject"></a>

```csharp
private void PutGcsObject(OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.putGcsObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a>

---

##### `ResetAllowedSuccessCodes` <a name="ResetAllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetAllowedSuccessCodes"></a>

```csharp
private void ResetAllowedSuccessCodes()
```

##### `ResetGcsObject` <a name="ResetGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetGcsObject"></a>

```csharp
private void ResetGcsObject()
```

##### `ResetInterpreter` <a name="ResetInterpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetInterpreter"></a>

```csharp
private void ResetInterpreter()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetLocalPath"></a>

```csharp
private void ResetLocalPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodesInput">AllowedSuccessCodesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.gcsObjectInput">GcsObjectInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.interpreterInput">InterpreterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.interpreter">Interpreter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.localPath">LocalPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcsObject`<sup>Required</sup> <a name="GcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.gcsObject"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference GcsObject { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference</a>

---

##### `AllowedSuccessCodesInput`<sup>Optional</sup> <a name="AllowedSuccessCodesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodesInput"></a>

```csharp
public double[] AllowedSuccessCodesInput { get; }
```

- *Type:* double[]

---

##### `GcsObjectInput`<sup>Optional</sup> <a name="GcsObjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.gcsObjectInput"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject GcsObjectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a>

---

##### `InterpreterInput`<sup>Optional</sup> <a name="InterpreterInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.interpreterInput"></a>

```csharp
public string InterpreterInput { get; }
```

- *Type:* string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.localPathInput"></a>

```csharp
public string LocalPathInput { get; }
```

- *Type:* string

---

##### `AllowedSuccessCodes`<sup>Required</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodes"></a>

```csharp
public double[] AllowedSuccessCodes { get; }
```

- *Type:* double[]

---

##### `Interpreter`<sup>Required</sup> <a name="Interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.interpreter"></a>

```csharp
public string Interpreter { get; }
```

- *Type:* string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.localPath"></a>

```csharp
public string LocalPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a>

---


### OsConfigPatchDeploymentPatchConfigPostStepOutputReference <a name="OsConfigPatchDeploymentPatchConfigPostStepOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigPostStepOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.putLinuxExecStepConfig">PutLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.putWindowsExecStepConfig">PutWindowsExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.resetLinuxExecStepConfig">ResetLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.resetWindowsExecStepConfig">ResetWindowsExecStepConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLinuxExecStepConfig` <a name="PutLinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.putLinuxExecStepConfig"></a>

```csharp
private void PutLinuxExecStepConfig(OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.putLinuxExecStepConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a>

---

##### `PutWindowsExecStepConfig` <a name="PutWindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.putWindowsExecStepConfig"></a>

```csharp
private void PutWindowsExecStepConfig(OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.putWindowsExecStepConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a>

---

##### `ResetLinuxExecStepConfig` <a name="ResetLinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.resetLinuxExecStepConfig"></a>

```csharp
private void ResetLinuxExecStepConfig()
```

##### `ResetWindowsExecStepConfig` <a name="ResetWindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.resetWindowsExecStepConfig"></a>

```csharp
private void ResetWindowsExecStepConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.linuxExecStepConfig">LinuxExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.windowsExecStepConfig">WindowsExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.linuxExecStepConfigInput">LinuxExecStepConfigInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.windowsExecStepConfigInput">WindowsExecStepConfigInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep">OsConfigPatchDeploymentPatchConfigPostStep</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LinuxExecStepConfig`<sup>Required</sup> <a name="LinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.linuxExecStepConfig"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference LinuxExecStepConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference</a>

---

##### `WindowsExecStepConfig`<sup>Required</sup> <a name="WindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.windowsExecStepConfig"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference WindowsExecStepConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference</a>

---

##### `LinuxExecStepConfigInput`<sup>Optional</sup> <a name="LinuxExecStepConfigInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.linuxExecStepConfigInput"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig LinuxExecStepConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a>

---

##### `WindowsExecStepConfigInput`<sup>Optional</sup> <a name="WindowsExecStepConfigInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.windowsExecStepConfigInput"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig WindowsExecStepConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPostStep InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStep">OsConfigPatchDeploymentPatchConfigPostStep</a>

---


### OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference <a name="OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumberInput">GenerationNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumber">GenerationNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `GenerationNumberInput`<sup>Optional</sup> <a name="GenerationNumberInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumberInput"></a>

```csharp
public string GenerationNumberInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumber"></a>

```csharp
public string GenerationNumber { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a>

---


### OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference <a name="OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.putGcsObject">PutGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetAllowedSuccessCodes">ResetAllowedSuccessCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetGcsObject">ResetGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetInterpreter">ResetInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcsObject` <a name="PutGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.putGcsObject"></a>

```csharp
private void PutGcsObject(OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.putGcsObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a>

---

##### `ResetAllowedSuccessCodes` <a name="ResetAllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetAllowedSuccessCodes"></a>

```csharp
private void ResetAllowedSuccessCodes()
```

##### `ResetGcsObject` <a name="ResetGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetGcsObject"></a>

```csharp
private void ResetGcsObject()
```

##### `ResetInterpreter` <a name="ResetInterpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetInterpreter"></a>

```csharp
private void ResetInterpreter()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetLocalPath"></a>

```csharp
private void ResetLocalPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodesInput">AllowedSuccessCodesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.gcsObjectInput">GcsObjectInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.interpreterInput">InterpreterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.interpreter">Interpreter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.localPath">LocalPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcsObject`<sup>Required</sup> <a name="GcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.gcsObject"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference GcsObject { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference</a>

---

##### `AllowedSuccessCodesInput`<sup>Optional</sup> <a name="AllowedSuccessCodesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodesInput"></a>

```csharp
public double[] AllowedSuccessCodesInput { get; }
```

- *Type:* double[]

---

##### `GcsObjectInput`<sup>Optional</sup> <a name="GcsObjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.gcsObjectInput"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject GcsObjectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a>

---

##### `InterpreterInput`<sup>Optional</sup> <a name="InterpreterInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.interpreterInput"></a>

```csharp
public string InterpreterInput { get; }
```

- *Type:* string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.localPathInput"></a>

```csharp
public string LocalPathInput { get; }
```

- *Type:* string

---

##### `AllowedSuccessCodes`<sup>Required</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodes"></a>

```csharp
public double[] AllowedSuccessCodes { get; }
```

- *Type:* double[]

---

##### `Interpreter`<sup>Required</sup> <a name="Interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.interpreter"></a>

```csharp
public string Interpreter { get; }
```

- *Type:* string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.localPath"></a>

```csharp
public string LocalPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a>

---


### OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference <a name="OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumberInput">GenerationNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumber">GenerationNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `GenerationNumberInput`<sup>Optional</sup> <a name="GenerationNumberInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumberInput"></a>

```csharp
public string GenerationNumberInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumber"></a>

```csharp
public string GenerationNumber { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a>

---


### OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference <a name="OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.putGcsObject">PutGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetAllowedSuccessCodes">ResetAllowedSuccessCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetGcsObject">ResetGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetInterpreter">ResetInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcsObject` <a name="PutGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.putGcsObject"></a>

```csharp
private void PutGcsObject(OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.putGcsObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a>

---

##### `ResetAllowedSuccessCodes` <a name="ResetAllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetAllowedSuccessCodes"></a>

```csharp
private void ResetAllowedSuccessCodes()
```

##### `ResetGcsObject` <a name="ResetGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetGcsObject"></a>

```csharp
private void ResetGcsObject()
```

##### `ResetInterpreter` <a name="ResetInterpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetInterpreter"></a>

```csharp
private void ResetInterpreter()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetLocalPath"></a>

```csharp
private void ResetLocalPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodesInput">AllowedSuccessCodesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.gcsObjectInput">GcsObjectInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.interpreterInput">InterpreterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.interpreter">Interpreter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.localPath">LocalPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcsObject`<sup>Required</sup> <a name="GcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.gcsObject"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference GcsObject { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference</a>

---

##### `AllowedSuccessCodesInput`<sup>Optional</sup> <a name="AllowedSuccessCodesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodesInput"></a>

```csharp
public double[] AllowedSuccessCodesInput { get; }
```

- *Type:* double[]

---

##### `GcsObjectInput`<sup>Optional</sup> <a name="GcsObjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.gcsObjectInput"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject GcsObjectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a>

---

##### `InterpreterInput`<sup>Optional</sup> <a name="InterpreterInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.interpreterInput"></a>

```csharp
public string InterpreterInput { get; }
```

- *Type:* string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.localPathInput"></a>

```csharp
public string LocalPathInput { get; }
```

- *Type:* string

---

##### `AllowedSuccessCodes`<sup>Required</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodes"></a>

```csharp
public double[] AllowedSuccessCodes { get; }
```

- *Type:* double[]

---

##### `Interpreter`<sup>Required</sup> <a name="Interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.interpreter"></a>

```csharp
public string Interpreter { get; }
```

- *Type:* string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.localPath"></a>

```csharp
public string LocalPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a>

---


### OsConfigPatchDeploymentPatchConfigPreStepOutputReference <a name="OsConfigPatchDeploymentPatchConfigPreStepOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigPreStepOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.putLinuxExecStepConfig">PutLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.putWindowsExecStepConfig">PutWindowsExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.resetLinuxExecStepConfig">ResetLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.resetWindowsExecStepConfig">ResetWindowsExecStepConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLinuxExecStepConfig` <a name="PutLinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.putLinuxExecStepConfig"></a>

```csharp
private void PutLinuxExecStepConfig(OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.putLinuxExecStepConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a>

---

##### `PutWindowsExecStepConfig` <a name="PutWindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.putWindowsExecStepConfig"></a>

```csharp
private void PutWindowsExecStepConfig(OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.putWindowsExecStepConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a>

---

##### `ResetLinuxExecStepConfig` <a name="ResetLinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.resetLinuxExecStepConfig"></a>

```csharp
private void ResetLinuxExecStepConfig()
```

##### `ResetWindowsExecStepConfig` <a name="ResetWindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.resetWindowsExecStepConfig"></a>

```csharp
private void ResetWindowsExecStepConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.linuxExecStepConfig">LinuxExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.windowsExecStepConfig">WindowsExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.linuxExecStepConfigInput">LinuxExecStepConfigInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.windowsExecStepConfigInput">WindowsExecStepConfigInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep">OsConfigPatchDeploymentPatchConfigPreStep</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LinuxExecStepConfig`<sup>Required</sup> <a name="LinuxExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.linuxExecStepConfig"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference LinuxExecStepConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference</a>

---

##### `WindowsExecStepConfig`<sup>Required</sup> <a name="WindowsExecStepConfig" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.windowsExecStepConfig"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference WindowsExecStepConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference</a>

---

##### `LinuxExecStepConfigInput`<sup>Optional</sup> <a name="LinuxExecStepConfigInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.linuxExecStepConfigInput"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig LinuxExecStepConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a>

---

##### `WindowsExecStepConfigInput`<sup>Optional</sup> <a name="WindowsExecStepConfigInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.windowsExecStepConfigInput"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig WindowsExecStepConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPreStep InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStep">OsConfigPatchDeploymentPatchConfigPreStep</a>

---


### OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference <a name="OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumberInput">GenerationNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumber">GenerationNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `GenerationNumberInput`<sup>Optional</sup> <a name="GenerationNumberInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumberInput"></a>

```csharp
public string GenerationNumberInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumber"></a>

```csharp
public string GenerationNumber { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a>

---


### OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference <a name="OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.putGcsObject">PutGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetAllowedSuccessCodes">ResetAllowedSuccessCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetGcsObject">ResetGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetInterpreter">ResetInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcsObject` <a name="PutGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.putGcsObject"></a>

```csharp
private void PutGcsObject(OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.putGcsObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a>

---

##### `ResetAllowedSuccessCodes` <a name="ResetAllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetAllowedSuccessCodes"></a>

```csharp
private void ResetAllowedSuccessCodes()
```

##### `ResetGcsObject` <a name="ResetGcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetGcsObject"></a>

```csharp
private void ResetGcsObject()
```

##### `ResetInterpreter` <a name="ResetInterpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetInterpreter"></a>

```csharp
private void ResetInterpreter()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetLocalPath"></a>

```csharp
private void ResetLocalPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodesInput">AllowedSuccessCodesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.gcsObjectInput">GcsObjectInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.interpreterInput">InterpreterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.interpreter">Interpreter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.localPath">LocalPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcsObject`<sup>Required</sup> <a name="GcsObject" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.gcsObject"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference GcsObject { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference</a>

---

##### `AllowedSuccessCodesInput`<sup>Optional</sup> <a name="AllowedSuccessCodesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodesInput"></a>

```csharp
public double[] AllowedSuccessCodesInput { get; }
```

- *Type:* double[]

---

##### `GcsObjectInput`<sup>Optional</sup> <a name="GcsObjectInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.gcsObjectInput"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject GcsObjectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a>

---

##### `InterpreterInput`<sup>Optional</sup> <a name="InterpreterInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.interpreterInput"></a>

```csharp
public string InterpreterInput { get; }
```

- *Type:* string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.localPathInput"></a>

```csharp
public string LocalPathInput { get; }
```

- *Type:* string

---

##### `AllowedSuccessCodes`<sup>Required</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodes"></a>

```csharp
public double[] AllowedSuccessCodes { get; }
```

- *Type:* double[]

---

##### `Interpreter`<sup>Required</sup> <a name="Interpreter" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.interpreter"></a>

```csharp
public string Interpreter { get; }
```

- *Type:* string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.localPath"></a>

```csharp
public string LocalPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a>

---


### OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference <a name="OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetClassifications">ResetClassifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetExcludes">ResetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetExclusivePatches">ResetExclusivePatches</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassifications` <a name="ResetClassifications" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetClassifications"></a>

```csharp
private void ResetClassifications()
```

##### `ResetExcludes` <a name="ResetExcludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetExcludes"></a>

```csharp
private void ResetExcludes()
```

##### `ResetExclusivePatches` <a name="ResetExclusivePatches" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetExclusivePatches"></a>

```csharp
private void ResetExclusivePatches()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.classificationsInput">ClassificationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.excludesInput">ExcludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.exclusivePatchesInput">ExclusivePatchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.classifications">Classifications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.excludes">Excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.exclusivePatches">ExclusivePatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate">OsConfigPatchDeploymentPatchConfigWindowsUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassificationsInput`<sup>Optional</sup> <a name="ClassificationsInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.classificationsInput"></a>

```csharp
public string[] ClassificationsInput { get; }
```

- *Type:* string[]

---

##### `ExcludesInput`<sup>Optional</sup> <a name="ExcludesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.excludesInput"></a>

```csharp
public string[] ExcludesInput { get; }
```

- *Type:* string[]

---

##### `ExclusivePatchesInput`<sup>Optional</sup> <a name="ExclusivePatchesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.exclusivePatchesInput"></a>

```csharp
public string[] ExclusivePatchesInput { get; }
```

- *Type:* string[]

---

##### `Classifications`<sup>Required</sup> <a name="Classifications" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.classifications"></a>

```csharp
public string[] Classifications { get; }
```

- *Type:* string[]

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.excludes"></a>

```csharp
public string[] Excludes { get; }
```

- *Type:* string[]

---

##### `ExclusivePatches`<sup>Required</sup> <a name="ExclusivePatches" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.exclusivePatches"></a>

```csharp
public string[] ExclusivePatches { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigWindowsUpdate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigWindowsUpdate">OsConfigPatchDeploymentPatchConfigWindowsUpdate</a>

---


### OsConfigPatchDeploymentPatchConfigYumOutputReference <a name="OsConfigPatchDeploymentPatchConfigYumOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigYumOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetExcludes">ResetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetExclusivePackages">ResetExclusivePackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetMinimal">ResetMinimal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetSecurity">ResetSecurity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludes` <a name="ResetExcludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetExcludes"></a>

```csharp
private void ResetExcludes()
```

##### `ResetExclusivePackages` <a name="ResetExclusivePackages" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetExclusivePackages"></a>

```csharp
private void ResetExclusivePackages()
```

##### `ResetMinimal` <a name="ResetMinimal" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetMinimal"></a>

```csharp
private void ResetMinimal()
```

##### `ResetSecurity` <a name="ResetSecurity" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.resetSecurity"></a>

```csharp
private void ResetSecurity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.excludesInput">ExcludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.exclusivePackagesInput">ExclusivePackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.minimalInput">MinimalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.securityInput">SecurityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.excludes">Excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.exclusivePackages">ExclusivePackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.minimal">Minimal</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.security">Security</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum">OsConfigPatchDeploymentPatchConfigYum</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludesInput`<sup>Optional</sup> <a name="ExcludesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.excludesInput"></a>

```csharp
public string[] ExcludesInput { get; }
```

- *Type:* string[]

---

##### `ExclusivePackagesInput`<sup>Optional</sup> <a name="ExclusivePackagesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.exclusivePackagesInput"></a>

```csharp
public string[] ExclusivePackagesInput { get; }
```

- *Type:* string[]

---

##### `MinimalInput`<sup>Optional</sup> <a name="MinimalInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.minimalInput"></a>

```csharp
public object MinimalInput { get; }
```

- *Type:* object

---

##### `SecurityInput`<sup>Optional</sup> <a name="SecurityInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.securityInput"></a>

```csharp
public object SecurityInput { get; }
```

- *Type:* object

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.excludes"></a>

```csharp
public string[] Excludes { get; }
```

- *Type:* string[]

---

##### `ExclusivePackages`<sup>Required</sup> <a name="ExclusivePackages" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.exclusivePackages"></a>

```csharp
public string[] ExclusivePackages { get; }
```

- *Type:* string[]

---

##### `Minimal`<sup>Required</sup> <a name="Minimal" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.minimal"></a>

```csharp
public object Minimal { get; }
```

- *Type:* object

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.security"></a>

```csharp
public object Security { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYumOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigYum InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigYum">OsConfigPatchDeploymentPatchConfigYum</a>

---


### OsConfigPatchDeploymentPatchConfigZypperOutputReference <a name="OsConfigPatchDeploymentPatchConfigZypperOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentPatchConfigZypperOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetCategories">ResetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetExcludes">ResetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetExclusivePatches">ResetExclusivePatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetSeverities">ResetSeverities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetWithOptional">ResetWithOptional</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetWithUpdate">ResetWithUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCategories` <a name="ResetCategories" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetCategories"></a>

```csharp
private void ResetCategories()
```

##### `ResetExcludes` <a name="ResetExcludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetExcludes"></a>

```csharp
private void ResetExcludes()
```

##### `ResetExclusivePatches` <a name="ResetExclusivePatches" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetExclusivePatches"></a>

```csharp
private void ResetExclusivePatches()
```

##### `ResetSeverities` <a name="ResetSeverities" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetSeverities"></a>

```csharp
private void ResetSeverities()
```

##### `ResetWithOptional` <a name="ResetWithOptional" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetWithOptional"></a>

```csharp
private void ResetWithOptional()
```

##### `ResetWithUpdate` <a name="ResetWithUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.resetWithUpdate"></a>

```csharp
private void ResetWithUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.categoriesInput">CategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.excludesInput">ExcludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.exclusivePatchesInput">ExclusivePatchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.severitiesInput">SeveritiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withOptionalInput">WithOptionalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withUpdateInput">WithUpdateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.categories">Categories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.excludes">Excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.exclusivePatches">ExclusivePatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.severities">Severities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withOptional">WithOptional</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withUpdate">WithUpdate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper">OsConfigPatchDeploymentPatchConfigZypper</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoriesInput`<sup>Optional</sup> <a name="CategoriesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.categoriesInput"></a>

```csharp
public string[] CategoriesInput { get; }
```

- *Type:* string[]

---

##### `ExcludesInput`<sup>Optional</sup> <a name="ExcludesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.excludesInput"></a>

```csharp
public string[] ExcludesInput { get; }
```

- *Type:* string[]

---

##### `ExclusivePatchesInput`<sup>Optional</sup> <a name="ExclusivePatchesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.exclusivePatchesInput"></a>

```csharp
public string[] ExclusivePatchesInput { get; }
```

- *Type:* string[]

---

##### `SeveritiesInput`<sup>Optional</sup> <a name="SeveritiesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.severitiesInput"></a>

```csharp
public string[] SeveritiesInput { get; }
```

- *Type:* string[]

---

##### `WithOptionalInput`<sup>Optional</sup> <a name="WithOptionalInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withOptionalInput"></a>

```csharp
public object WithOptionalInput { get; }
```

- *Type:* object

---

##### `WithUpdateInput`<sup>Optional</sup> <a name="WithUpdateInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withUpdateInput"></a>

```csharp
public object WithUpdateInput { get; }
```

- *Type:* object

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.categories"></a>

```csharp
public string[] Categories { get; }
```

- *Type:* string[]

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.excludes"></a>

```csharp
public string[] Excludes { get; }
```

- *Type:* string[]

---

##### `ExclusivePatches`<sup>Required</sup> <a name="ExclusivePatches" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.exclusivePatches"></a>

```csharp
public string[] ExclusivePatches { get; }
```

- *Type:* string[]

---

##### `Severities`<sup>Required</sup> <a name="Severities" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.severities"></a>

```csharp
public string[] Severities { get; }
```

- *Type:* string[]

---

##### `WithOptional`<sup>Required</sup> <a name="WithOptional" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withOptional"></a>

```csharp
public object WithOptional { get; }
```

- *Type:* object

---

##### `WithUpdate`<sup>Required</sup> <a name="WithUpdate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withUpdate"></a>

```csharp
public object WithUpdate { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypperOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentPatchConfigZypper InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentPatchConfigZypper">OsConfigPatchDeploymentPatchConfigZypper</a>

---


### OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference <a name="OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.putWeekDayOfMonth">PutWeekDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resetMonthDay">ResetMonthDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resetWeekDayOfMonth">ResetWeekDayOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWeekDayOfMonth` <a name="PutWeekDayOfMonth" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.putWeekDayOfMonth"></a>

```csharp
private void PutWeekDayOfMonth(OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.putWeekDayOfMonth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a>

---

##### `ResetMonthDay` <a name="ResetMonthDay" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resetMonthDay"></a>

```csharp
private void ResetMonthDay()
```

##### `ResetWeekDayOfMonth` <a name="ResetWeekDayOfMonth" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resetWeekDayOfMonth"></a>

```csharp
private void ResetWeekDayOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.weekDayOfMonth">WeekDayOfMonth</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.monthDayInput">MonthDayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.weekDayOfMonthInput">WeekDayOfMonthInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.monthDay">MonthDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly">OsConfigPatchDeploymentRecurringScheduleMonthly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WeekDayOfMonth`<sup>Required</sup> <a name="WeekDayOfMonth" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.weekDayOfMonth"></a>

```csharp
public OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference WeekDayOfMonth { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference</a>

---

##### `MonthDayInput`<sup>Optional</sup> <a name="MonthDayInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.monthDayInput"></a>

```csharp
public double MonthDayInput { get; }
```

- *Type:* double

---

##### `WeekDayOfMonthInput`<sup>Optional</sup> <a name="WeekDayOfMonthInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.weekDayOfMonthInput"></a>

```csharp
public OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth WeekDayOfMonthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a>

---

##### `MonthDay`<sup>Required</sup> <a name="MonthDay" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.monthDay"></a>

```csharp
public double MonthDay { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentRecurringScheduleMonthly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly">OsConfigPatchDeploymentRecurringScheduleMonthly</a>

---


### OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference <a name="OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resetDayOffset">ResetDayOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDayOffset` <a name="ResetDayOffset" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resetDayOffset"></a>

```csharp
private void ResetDayOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOffsetInput">DayOffsetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.weekOrdinalInput">WeekOrdinalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOffset">DayOffset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.weekOrdinal">WeekOrdinal</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOffsetInput`<sup>Optional</sup> <a name="DayOffsetInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOffsetInput"></a>

```csharp
public double DayOffsetInput { get; }
```

- *Type:* double

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `WeekOrdinalInput`<sup>Optional</sup> <a name="WeekOrdinalInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.weekOrdinalInput"></a>

```csharp
public double WeekOrdinalInput { get; }
```

- *Type:* double

---

##### `DayOffset`<sup>Required</sup> <a name="DayOffset" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOffset"></a>

```csharp
public double DayOffset { get; }
```

- *Type:* double

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `WeekOrdinal`<sup>Required</sup> <a name="WeekOrdinal" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.weekOrdinal"></a>

```csharp
public double WeekOrdinal { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a>

---


### OsConfigPatchDeploymentRecurringScheduleOutputReference <a name="OsConfigPatchDeploymentRecurringScheduleOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentRecurringScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putMonthly">PutMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeOfDay">PutTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeZone">PutTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putWeekly">PutWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetMonthly">ResetMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetWeekly">ResetWeekly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMonthly` <a name="PutMonthly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putMonthly"></a>

```csharp
private void PutMonthly(OsConfigPatchDeploymentRecurringScheduleMonthly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putMonthly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly">OsConfigPatchDeploymentRecurringScheduleMonthly</a>

---

##### `PutTimeOfDay` <a name="PutTimeOfDay" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeOfDay"></a>

```csharp
private void PutTimeOfDay(OsConfigPatchDeploymentRecurringScheduleTimeOfDay Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeOfDay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay">OsConfigPatchDeploymentRecurringScheduleTimeOfDay</a>

---

##### `PutTimeZone` <a name="PutTimeZone" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeZone"></a>

```csharp
private void PutTimeZone(OsConfigPatchDeploymentRecurringScheduleTimeZone Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone">OsConfigPatchDeploymentRecurringScheduleTimeZone</a>

---

##### `PutWeekly` <a name="PutWeekly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putWeekly"></a>

```csharp
private void PutWeekly(OsConfigPatchDeploymentRecurringScheduleWeekly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.putWeekly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly">OsConfigPatchDeploymentRecurringScheduleWeekly</a>

---

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetMonthly` <a name="ResetMonthly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetMonthly"></a>

```csharp
private void ResetMonthly()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```

##### `ResetWeekly` <a name="ResetWeekly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.resetWeekly"></a>

```csharp
private void ResetWeekly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.lastExecuteTime">LastExecuteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.monthly">Monthly</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference">OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.nextExecuteTime">NextExecuteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeOfDay">TimeOfDay</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference">OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference">OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.weekly">Weekly</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference">OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.monthlyInput">MonthlyInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly">OsConfigPatchDeploymentRecurringScheduleMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeOfDayInput">TimeOfDayInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay">OsConfigPatchDeploymentRecurringScheduleTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone">OsConfigPatchDeploymentRecurringScheduleTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.weeklyInput">WeeklyInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly">OsConfigPatchDeploymentRecurringScheduleWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastExecuteTime`<sup>Required</sup> <a name="LastExecuteTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.lastExecuteTime"></a>

```csharp
public string LastExecuteTime { get; }
```

- *Type:* string

---

##### `Monthly`<sup>Required</sup> <a name="Monthly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.monthly"></a>

```csharp
public OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference Monthly { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference">OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference</a>

---

##### `NextExecuteTime`<sup>Required</sup> <a name="NextExecuteTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.nextExecuteTime"></a>

```csharp
public string NextExecuteTime { get; }
```

- *Type:* string

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeOfDay"></a>

```csharp
public OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference TimeOfDay { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference">OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference</a>

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeZone"></a>

```csharp
public OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference TimeZone { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference">OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference</a>

---

##### `Weekly`<sup>Required</sup> <a name="Weekly" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.weekly"></a>

```csharp
public OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference Weekly { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference">OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference</a>

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `MonthlyInput`<sup>Optional</sup> <a name="MonthlyInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.monthlyInput"></a>

```csharp
public OsConfigPatchDeploymentRecurringScheduleMonthly MonthlyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleMonthly">OsConfigPatchDeploymentRecurringScheduleMonthly</a>

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `TimeOfDayInput`<sup>Optional</sup> <a name="TimeOfDayInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeOfDayInput"></a>

```csharp
public OsConfigPatchDeploymentRecurringScheduleTimeOfDay TimeOfDayInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay">OsConfigPatchDeploymentRecurringScheduleTimeOfDay</a>

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeZoneInput"></a>

```csharp
public OsConfigPatchDeploymentRecurringScheduleTimeZone TimeZoneInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone">OsConfigPatchDeploymentRecurringScheduleTimeZone</a>

---

##### `WeeklyInput`<sup>Optional</sup> <a name="WeeklyInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.weeklyInput"></a>

```csharp
public OsConfigPatchDeploymentRecurringScheduleWeekly WeeklyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly">OsConfigPatchDeploymentRecurringScheduleWeekly</a>

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentRecurringSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringSchedule">OsConfigPatchDeploymentRecurringSchedule</a>

---


### OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference <a name="OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetHours"></a>

```csharp
private void ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetSeconds"></a>

```csharp
private void ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay">OsConfigPatchDeploymentRecurringScheduleTimeOfDay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentRecurringScheduleTimeOfDay InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeOfDay">OsConfigPatchDeploymentRecurringScheduleTimeOfDay</a>

---


### OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference <a name="OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone">OsConfigPatchDeploymentRecurringScheduleTimeZone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentRecurringScheduleTimeZone InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleTimeZone">OsConfigPatchDeploymentRecurringScheduleTimeZone</a>

---


### OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference <a name="OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly">OsConfigPatchDeploymentRecurringScheduleWeekly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentRecurringScheduleWeekly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRecurringScheduleWeekly">OsConfigPatchDeploymentRecurringScheduleWeekly</a>

---


### OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference <a name="OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resetFixed">ResetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFixed` <a name="ResetFixed" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resetFixed"></a>

```csharp
private void ResetFixed()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resetPercentage"></a>

```csharp
private void ResetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fixedInput">FixedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.percentageInput">PercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fixed">Fixed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.percentage">Percentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget">OsConfigPatchDeploymentRolloutDisruptionBudget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FixedInput`<sup>Optional</sup> <a name="FixedInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fixedInput"></a>

```csharp
public double FixedInput { get; }
```

- *Type:* double

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.percentageInput"></a>

```csharp
public double PercentageInput { get; }
```

- *Type:* double

---

##### `Fixed`<sup>Required</sup> <a name="Fixed" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fixed"></a>

```csharp
public double Fixed { get; }
```

- *Type:* double

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.percentage"></a>

```csharp
public double Percentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentRolloutDisruptionBudget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget">OsConfigPatchDeploymentRolloutDisruptionBudget</a>

---


### OsConfigPatchDeploymentRolloutOutputReference <a name="OsConfigPatchDeploymentRolloutOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentRolloutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.putDisruptionBudget">PutDisruptionBudget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDisruptionBudget` <a name="PutDisruptionBudget" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.putDisruptionBudget"></a>

```csharp
private void PutDisruptionBudget(OsConfigPatchDeploymentRolloutDisruptionBudget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.putDisruptionBudget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget">OsConfigPatchDeploymentRolloutDisruptionBudget</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.disruptionBudget">DisruptionBudget</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference">OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.disruptionBudgetInput">DisruptionBudgetInput</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget">OsConfigPatchDeploymentRolloutDisruptionBudget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisruptionBudget`<sup>Required</sup> <a name="DisruptionBudget" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.disruptionBudget"></a>

```csharp
public OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference DisruptionBudget { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference">OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference</a>

---

##### `DisruptionBudgetInput`<sup>Optional</sup> <a name="DisruptionBudgetInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.disruptionBudgetInput"></a>

```csharp
public OsConfigPatchDeploymentRolloutDisruptionBudget DisruptionBudgetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutDisruptionBudget">OsConfigPatchDeploymentRolloutDisruptionBudget</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRolloutOutputReference.property.internalValue"></a>

```csharp
public OsConfigPatchDeploymentRollout InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentRollout">OsConfigPatchDeploymentRollout</a>

---


### OsConfigPatchDeploymentTimeoutsOutputReference <a name="OsConfigPatchDeploymentTimeoutsOutputReference" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OsConfigPatchDeploymentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.osConfigPatchDeployment.OsConfigPatchDeploymentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



