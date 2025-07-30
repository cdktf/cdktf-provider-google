# `computeInstanceFromTemplate` Submodule <a name="`computeInstanceFromTemplate` Submodule" id="@cdktf/provider-google.computeInstanceFromTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInstanceFromTemplate <a name="ComputeInstanceFromTemplate" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template google_compute_instance_from_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplate(Construct Scope, string Id, ComputeInstanceFromTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig">ComputeInstanceFromTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig">ComputeInstanceFromTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putAdvancedMachineFeatures">PutAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putAttachedDisk">PutAttachedDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putBootDisk">PutBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putConfidentialInstanceConfig">PutConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putGuestAccelerator">PutGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putInstanceEncryptionKey">PutInstanceEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putNetworkPerformanceConfig">PutNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putParams">PutParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putReservationAffinity">PutReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putScheduling">PutScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putScratchDisk">PutScratchDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putServiceAccount">PutServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putShieldedInstanceConfig">PutShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetAdvancedMachineFeatures">ResetAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetAllowStoppingForUpdate">ResetAllowStoppingForUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetAttachedDisk">ResetAttachedDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetBootDisk">ResetBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetCanIpForward">ResetCanIpForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetConfidentialInstanceConfig">ResetConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetDesiredStatus">ResetDesiredStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetEnableDisplay">ResetEnableDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetGuestAccelerator">ResetGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetInstanceEncryptionKey">ResetInstanceEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetKeyRevocationActionType">ResetKeyRevocationActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetMetadataStartupScript">ResetMetadataStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetMinCpuPlatform">ResetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetNetworkInterface">ResetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetNetworkPerformanceConfig">ResetNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetReservationAffinity">ResetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetResourcePolicies">ResetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetScheduling">ResetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetScratchDisk">ResetScratchDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetShieldedInstanceConfig">ResetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedMachineFeatures` <a name="PutAdvancedMachineFeatures" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putAdvancedMachineFeatures"></a>

```csharp
private void PutAdvancedMachineFeatures(ComputeInstanceFromTemplateAdvancedMachineFeatures Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putAdvancedMachineFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeatures">ComputeInstanceFromTemplateAdvancedMachineFeatures</a>

---

##### `PutAttachedDisk` <a name="PutAttachedDisk" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putAttachedDisk"></a>

```csharp
private void PutAttachedDisk(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putAttachedDisk.parameter.value"></a>

- *Type:* object

---

##### `PutBootDisk` <a name="PutBootDisk" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putBootDisk"></a>

```csharp
private void PutBootDisk(ComputeInstanceFromTemplateBootDisk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putBootDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk">ComputeInstanceFromTemplateBootDisk</a>

---

##### `PutConfidentialInstanceConfig` <a name="PutConfidentialInstanceConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putConfidentialInstanceConfig"></a>

```csharp
private void PutConfidentialInstanceConfig(ComputeInstanceFromTemplateConfidentialInstanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putConfidentialInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfig">ComputeInstanceFromTemplateConfidentialInstanceConfig</a>

---

##### `PutGuestAccelerator` <a name="PutGuestAccelerator" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putGuestAccelerator"></a>

```csharp
private void PutGuestAccelerator(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putGuestAccelerator.parameter.value"></a>

- *Type:* object

---

##### `PutInstanceEncryptionKey` <a name="PutInstanceEncryptionKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putInstanceEncryptionKey"></a>

```csharp
private void PutInstanceEncryptionKey(ComputeInstanceFromTemplateInstanceEncryptionKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putInstanceEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKey">ComputeInstanceFromTemplateInstanceEncryptionKey</a>

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putNetworkInterface"></a>

```csharp
private void PutNetworkInterface(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putNetworkInterface.parameter.value"></a>

- *Type:* object

---

##### `PutNetworkPerformanceConfig` <a name="PutNetworkPerformanceConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putNetworkPerformanceConfig"></a>

```csharp
private void PutNetworkPerformanceConfig(ComputeInstanceFromTemplateNetworkPerformanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putNetworkPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfig">ComputeInstanceFromTemplateNetworkPerformanceConfig</a>

---

##### `PutParams` <a name="PutParams" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putParams"></a>

```csharp
private void PutParams(ComputeInstanceFromTemplateParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParams">ComputeInstanceFromTemplateParams</a>

---

##### `PutReservationAffinity` <a name="PutReservationAffinity" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putReservationAffinity"></a>

```csharp
private void PutReservationAffinity(ComputeInstanceFromTemplateReservationAffinity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinity">ComputeInstanceFromTemplateReservationAffinity</a>

---

##### `PutScheduling` <a name="PutScheduling" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putScheduling"></a>

```csharp
private void PutScheduling(ComputeInstanceFromTemplateScheduling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling">ComputeInstanceFromTemplateScheduling</a>

---

##### `PutScratchDisk` <a name="PutScratchDisk" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putScratchDisk"></a>

```csharp
private void PutScratchDisk(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putScratchDisk.parameter.value"></a>

- *Type:* object

---

##### `PutServiceAccount` <a name="PutServiceAccount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putServiceAccount"></a>

```csharp
private void PutServiceAccount(ComputeInstanceFromTemplateServiceAccount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccount">ComputeInstanceFromTemplateServiceAccount</a>

---

##### `PutShieldedInstanceConfig` <a name="PutShieldedInstanceConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putShieldedInstanceConfig"></a>

```csharp
private void PutShieldedInstanceConfig(ComputeInstanceFromTemplateShieldedInstanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfig">ComputeInstanceFromTemplateShieldedInstanceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeInstanceFromTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeouts">ComputeInstanceFromTemplateTimeouts</a>

---

##### `ResetAdvancedMachineFeatures` <a name="ResetAdvancedMachineFeatures" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetAdvancedMachineFeatures"></a>

```csharp
private void ResetAdvancedMachineFeatures()
```

##### `ResetAllowStoppingForUpdate` <a name="ResetAllowStoppingForUpdate" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetAllowStoppingForUpdate"></a>

```csharp
private void ResetAllowStoppingForUpdate()
```

##### `ResetAttachedDisk` <a name="ResetAttachedDisk" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetAttachedDisk"></a>

```csharp
private void ResetAttachedDisk()
```

##### `ResetBootDisk` <a name="ResetBootDisk" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetBootDisk"></a>

```csharp
private void ResetBootDisk()
```

##### `ResetCanIpForward` <a name="ResetCanIpForward" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetCanIpForward"></a>

```csharp
private void ResetCanIpForward()
```

##### `ResetConfidentialInstanceConfig` <a name="ResetConfidentialInstanceConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetConfidentialInstanceConfig"></a>

```csharp
private void ResetConfidentialInstanceConfig()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDesiredStatus` <a name="ResetDesiredStatus" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetDesiredStatus"></a>

```csharp
private void ResetDesiredStatus()
```

##### `ResetEnableDisplay` <a name="ResetEnableDisplay" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetEnableDisplay"></a>

```csharp
private void ResetEnableDisplay()
```

##### `ResetGuestAccelerator` <a name="ResetGuestAccelerator" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetGuestAccelerator"></a>

```csharp
private void ResetGuestAccelerator()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetHostname"></a>

```csharp
private void ResetHostname()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceEncryptionKey` <a name="ResetInstanceEncryptionKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetInstanceEncryptionKey"></a>

```csharp
private void ResetInstanceEncryptionKey()
```

##### `ResetKeyRevocationActionType` <a name="ResetKeyRevocationActionType" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetKeyRevocationActionType"></a>

```csharp
private void ResetKeyRevocationActionType()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetMachineType"></a>

```csharp
private void ResetMachineType()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetMetadataStartupScript` <a name="ResetMetadataStartupScript" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetMetadataStartupScript"></a>

```csharp
private void ResetMetadataStartupScript()
```

##### `ResetMinCpuPlatform` <a name="ResetMinCpuPlatform" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetMinCpuPlatform"></a>

```csharp
private void ResetMinCpuPlatform()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetNetworkInterface"></a>

```csharp
private void ResetNetworkInterface()
```

##### `ResetNetworkPerformanceConfig` <a name="ResetNetworkPerformanceConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetNetworkPerformanceConfig"></a>

```csharp
private void ResetNetworkPerformanceConfig()
```

##### `ResetParams` <a name="ResetParams" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetParams"></a>

```csharp
private void ResetParams()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetReservationAffinity` <a name="ResetReservationAffinity" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetReservationAffinity"></a>

```csharp
private void ResetReservationAffinity()
```

##### `ResetResourcePolicies` <a name="ResetResourcePolicies" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetResourcePolicies"></a>

```csharp
private void ResetResourcePolicies()
```

##### `ResetScheduling` <a name="ResetScheduling" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetScheduling"></a>

```csharp
private void ResetScheduling()
```

##### `ResetScratchDisk` <a name="ResetScratchDisk" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetScratchDisk"></a>

```csharp
private void ResetScratchDisk()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetShieldedInstanceConfig` <a name="ResetShieldedInstanceConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetShieldedInstanceConfig"></a>

```csharp
private void ResetShieldedInstanceConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeInstanceFromTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeInstanceFromTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeInstanceFromTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeInstanceFromTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeInstanceFromTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeInstanceFromTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeInstanceFromTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeInstanceFromTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeInstanceFromTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.advancedMachineFeatures">AdvancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference">ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.attachedDisk">AttachedDisk</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList">ComputeInstanceFromTemplateAttachedDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.bootDisk">BootDisk</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference">ComputeInstanceFromTemplateBootDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.confidentialInstanceConfig">ConfidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference">ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.cpuPlatform">CpuPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.currentStatus">CurrentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.guestAccelerator">GuestAccelerator</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList">ComputeInstanceFromTemplateGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.instanceEncryptionKey">InstanceEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference">ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.labelFingerprint">LabelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.metadataFingerprint">MetadataFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList">ComputeInstanceFromTemplateNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.networkPerformanceConfig">NetworkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference">ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.params">Params</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference">ComputeInstanceFromTemplateParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference">ComputeInstanceFromTemplateReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference">ComputeInstanceFromTemplateSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.scratchDisk">ScratchDisk</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList">ComputeInstanceFromTemplateScratchDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference">ComputeInstanceFromTemplateServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference">ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.tagsFingerprint">TagsFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference">ComputeInstanceFromTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.advancedMachineFeaturesInput">AdvancedMachineFeaturesInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeatures">ComputeInstanceFromTemplateAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.allowStoppingForUpdateInput">AllowStoppingForUpdateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.attachedDiskInput">AttachedDiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.bootDiskInput">BootDiskInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk">ComputeInstanceFromTemplateBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.canIpForwardInput">CanIpForwardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.confidentialInstanceConfigInput">ConfidentialInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfig">ComputeInstanceFromTemplateConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.desiredStatusInput">DesiredStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.enableDisplayInput">EnableDisplayInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.guestAcceleratorInput">GuestAcceleratorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.instanceEncryptionKeyInput">InstanceEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKey">ComputeInstanceFromTemplateInstanceEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.keyRevocationActionTypeInput">KeyRevocationActionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.metadataStartupScriptInput">MetadataStartupScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.minCpuPlatformInput">MinCpuPlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.networkPerformanceConfigInput">NetworkPerformanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfig">ComputeInstanceFromTemplateNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.paramsInput">ParamsInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParams">ComputeInstanceFromTemplateParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.reservationAffinityInput">ReservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinity">ComputeInstanceFromTemplateReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.resourcePoliciesInput">ResourcePoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.schedulingInput">SchedulingInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling">ComputeInstanceFromTemplateScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.scratchDiskInput">ScratchDiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.serviceAccountInput">ServiceAccountInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccount">ComputeInstanceFromTemplateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.shieldedInstanceConfigInput">ShieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfig">ComputeInstanceFromTemplateShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.sourceInstanceTemplateInput">SourceInstanceTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.allowStoppingForUpdate">AllowStoppingForUpdate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.canIpForward">CanIpForward</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.desiredStatus">DesiredStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.enableDisplay">EnableDisplay</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.keyRevocationActionType">KeyRevocationActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.metadataStartupScript">MetadataStartupScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.resourcePolicies">ResourcePolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.sourceInstanceTemplate">SourceInstanceTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdvancedMachineFeatures`<sup>Required</sup> <a name="AdvancedMachineFeatures" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.advancedMachineFeatures"></a>

```csharp
public ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference AdvancedMachineFeatures { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference">ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference</a>

---

##### `AttachedDisk`<sup>Required</sup> <a name="AttachedDisk" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.attachedDisk"></a>

```csharp
public ComputeInstanceFromTemplateAttachedDiskList AttachedDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList">ComputeInstanceFromTemplateAttachedDiskList</a>

---

##### `BootDisk`<sup>Required</sup> <a name="BootDisk" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.bootDisk"></a>

```csharp
public ComputeInstanceFromTemplateBootDiskOutputReference BootDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference">ComputeInstanceFromTemplateBootDiskOutputReference</a>

---

##### `ConfidentialInstanceConfig`<sup>Required</sup> <a name="ConfidentialInstanceConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.confidentialInstanceConfig"></a>

```csharp
public ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference ConfidentialInstanceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference">ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference</a>

---

##### `CpuPlatform`<sup>Required</sup> <a name="CpuPlatform" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.cpuPlatform"></a>

```csharp
public string CpuPlatform { get; }
```

- *Type:* string

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `CurrentStatus`<sup>Required</sup> <a name="CurrentStatus" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.currentStatus"></a>

```csharp
public string CurrentStatus { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GuestAccelerator`<sup>Required</sup> <a name="GuestAccelerator" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.guestAccelerator"></a>

```csharp
public ComputeInstanceFromTemplateGuestAcceleratorList GuestAccelerator { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList">ComputeInstanceFromTemplateGuestAcceleratorList</a>

---

##### `InstanceEncryptionKey`<sup>Required</sup> <a name="InstanceEncryptionKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.instanceEncryptionKey"></a>

```csharp
public ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference InstanceEncryptionKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference">ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference</a>

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.labelFingerprint"></a>

```csharp
public string LabelFingerprint { get; }
```

- *Type:* string

---

##### `MetadataFingerprint`<sup>Required</sup> <a name="MetadataFingerprint" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.metadataFingerprint"></a>

```csharp
public string MetadataFingerprint { get; }
```

- *Type:* string

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.networkInterface"></a>

```csharp
public ComputeInstanceFromTemplateNetworkInterfaceList NetworkInterface { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList">ComputeInstanceFromTemplateNetworkInterfaceList</a>

---

##### `NetworkPerformanceConfig`<sup>Required</sup> <a name="NetworkPerformanceConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.networkPerformanceConfig"></a>

```csharp
public ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference NetworkPerformanceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference">ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference</a>

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.params"></a>

```csharp
public ComputeInstanceFromTemplateParamsOutputReference Params { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference">ComputeInstanceFromTemplateParamsOutputReference</a>

---

##### `ReservationAffinity`<sup>Required</sup> <a name="ReservationAffinity" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.reservationAffinity"></a>

```csharp
public ComputeInstanceFromTemplateReservationAffinityOutputReference ReservationAffinity { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference">ComputeInstanceFromTemplateReservationAffinityOutputReference</a>

---

##### `Scheduling`<sup>Required</sup> <a name="Scheduling" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.scheduling"></a>

```csharp
public ComputeInstanceFromTemplateSchedulingOutputReference Scheduling { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference">ComputeInstanceFromTemplateSchedulingOutputReference</a>

---

##### `ScratchDisk`<sup>Required</sup> <a name="ScratchDisk" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.scratchDisk"></a>

```csharp
public ComputeInstanceFromTemplateScratchDiskList ScratchDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList">ComputeInstanceFromTemplateScratchDiskList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.serviceAccount"></a>

```csharp
public ComputeInstanceFromTemplateServiceAccountOutputReference ServiceAccount { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference">ComputeInstanceFromTemplateServiceAccountOutputReference</a>

---

##### `ShieldedInstanceConfig`<sup>Required</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.shieldedInstanceConfig"></a>

```csharp
public ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference ShieldedInstanceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference">ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference</a>

---

##### `TagsFingerprint`<sup>Required</sup> <a name="TagsFingerprint" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.tagsFingerprint"></a>

```csharp
public string TagsFingerprint { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.timeouts"></a>

```csharp
public ComputeInstanceFromTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference">ComputeInstanceFromTemplateTimeoutsOutputReference</a>

---

##### `AdvancedMachineFeaturesInput`<sup>Optional</sup> <a name="AdvancedMachineFeaturesInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.advancedMachineFeaturesInput"></a>

```csharp
public ComputeInstanceFromTemplateAdvancedMachineFeatures AdvancedMachineFeaturesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeatures">ComputeInstanceFromTemplateAdvancedMachineFeatures</a>

---

##### `AllowStoppingForUpdateInput`<sup>Optional</sup> <a name="AllowStoppingForUpdateInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.allowStoppingForUpdateInput"></a>

```csharp
public object AllowStoppingForUpdateInput { get; }
```

- *Type:* object

---

##### `AttachedDiskInput`<sup>Optional</sup> <a name="AttachedDiskInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.attachedDiskInput"></a>

```csharp
public object AttachedDiskInput { get; }
```

- *Type:* object

---

##### `BootDiskInput`<sup>Optional</sup> <a name="BootDiskInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.bootDiskInput"></a>

```csharp
public ComputeInstanceFromTemplateBootDisk BootDiskInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk">ComputeInstanceFromTemplateBootDisk</a>

---

##### `CanIpForwardInput`<sup>Optional</sup> <a name="CanIpForwardInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.canIpForwardInput"></a>

```csharp
public object CanIpForwardInput { get; }
```

- *Type:* object

---

##### `ConfidentialInstanceConfigInput`<sup>Optional</sup> <a name="ConfidentialInstanceConfigInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.confidentialInstanceConfigInput"></a>

```csharp
public ComputeInstanceFromTemplateConfidentialInstanceConfig ConfidentialInstanceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfig">ComputeInstanceFromTemplateConfidentialInstanceConfig</a>

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.deletionProtectionInput"></a>

```csharp
public object DeletionProtectionInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DesiredStatusInput`<sup>Optional</sup> <a name="DesiredStatusInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.desiredStatusInput"></a>

```csharp
public string DesiredStatusInput { get; }
```

- *Type:* string

---

##### `EnableDisplayInput`<sup>Optional</sup> <a name="EnableDisplayInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.enableDisplayInput"></a>

```csharp
public object EnableDisplayInput { get; }
```

- *Type:* object

---

##### `GuestAcceleratorInput`<sup>Optional</sup> <a name="GuestAcceleratorInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.guestAcceleratorInput"></a>

```csharp
public object GuestAcceleratorInput { get; }
```

- *Type:* object

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceEncryptionKeyInput`<sup>Optional</sup> <a name="InstanceEncryptionKeyInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.instanceEncryptionKeyInput"></a>

```csharp
public ComputeInstanceFromTemplateInstanceEncryptionKey InstanceEncryptionKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKey">ComputeInstanceFromTemplateInstanceEncryptionKey</a>

---

##### `KeyRevocationActionTypeInput`<sup>Optional</sup> <a name="KeyRevocationActionTypeInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.keyRevocationActionTypeInput"></a>

```csharp
public string KeyRevocationActionTypeInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MetadataStartupScriptInput`<sup>Optional</sup> <a name="MetadataStartupScriptInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.metadataStartupScriptInput"></a>

```csharp
public string MetadataStartupScriptInput { get; }
```

- *Type:* string

---

##### `MinCpuPlatformInput`<sup>Optional</sup> <a name="MinCpuPlatformInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.minCpuPlatformInput"></a>

```csharp
public string MinCpuPlatformInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.networkInterfaceInput"></a>

```csharp
public object NetworkInterfaceInput { get; }
```

- *Type:* object

---

##### `NetworkPerformanceConfigInput`<sup>Optional</sup> <a name="NetworkPerformanceConfigInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.networkPerformanceConfigInput"></a>

```csharp
public ComputeInstanceFromTemplateNetworkPerformanceConfig NetworkPerformanceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfig">ComputeInstanceFromTemplateNetworkPerformanceConfig</a>

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.paramsInput"></a>

```csharp
public ComputeInstanceFromTemplateParams ParamsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParams">ComputeInstanceFromTemplateParams</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReservationAffinityInput`<sup>Optional</sup> <a name="ReservationAffinityInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.reservationAffinityInput"></a>

```csharp
public ComputeInstanceFromTemplateReservationAffinity ReservationAffinityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinity">ComputeInstanceFromTemplateReservationAffinity</a>

---

##### `ResourcePoliciesInput`<sup>Optional</sup> <a name="ResourcePoliciesInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.resourcePoliciesInput"></a>

```csharp
public string[] ResourcePoliciesInput { get; }
```

- *Type:* string[]

---

##### `SchedulingInput`<sup>Optional</sup> <a name="SchedulingInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.schedulingInput"></a>

```csharp
public ComputeInstanceFromTemplateScheduling SchedulingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling">ComputeInstanceFromTemplateScheduling</a>

---

##### `ScratchDiskInput`<sup>Optional</sup> <a name="ScratchDiskInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.scratchDiskInput"></a>

```csharp
public object ScratchDiskInput { get; }
```

- *Type:* object

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.serviceAccountInput"></a>

```csharp
public ComputeInstanceFromTemplateServiceAccount ServiceAccountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccount">ComputeInstanceFromTemplateServiceAccount</a>

---

##### `ShieldedInstanceConfigInput`<sup>Optional</sup> <a name="ShieldedInstanceConfigInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.shieldedInstanceConfigInput"></a>

```csharp
public ComputeInstanceFromTemplateShieldedInstanceConfig ShieldedInstanceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfig">ComputeInstanceFromTemplateShieldedInstanceConfig</a>

---

##### `SourceInstanceTemplateInput`<sup>Optional</sup> <a name="SourceInstanceTemplateInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.sourceInstanceTemplateInput"></a>

```csharp
public string SourceInstanceTemplateInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `AllowStoppingForUpdate`<sup>Required</sup> <a name="AllowStoppingForUpdate" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.allowStoppingForUpdate"></a>

```csharp
public object AllowStoppingForUpdate { get; }
```

- *Type:* object

---

##### `CanIpForward`<sup>Required</sup> <a name="CanIpForward" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.canIpForward"></a>

```csharp
public object CanIpForward { get; }
```

- *Type:* object

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DesiredStatus`<sup>Required</sup> <a name="DesiredStatus" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.desiredStatus"></a>

```csharp
public string DesiredStatus { get; }
```

- *Type:* string

---

##### `EnableDisplay`<sup>Required</sup> <a name="EnableDisplay" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.enableDisplay"></a>

```csharp
public object EnableDisplay { get; }
```

- *Type:* object

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyRevocationActionType`<sup>Required</sup> <a name="KeyRevocationActionType" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.keyRevocationActionType"></a>

```csharp
public string KeyRevocationActionType { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MetadataStartupScript`<sup>Required</sup> <a name="MetadataStartupScript" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.metadataStartupScript"></a>

```csharp
public string MetadataStartupScript { get; }
```

- *Type:* string

---

##### `MinCpuPlatform`<sup>Required</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.minCpuPlatform"></a>

```csharp
public string MinCpuPlatform { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ResourcePolicies`<sup>Required</sup> <a name="ResourcePolicies" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.resourcePolicies"></a>

```csharp
public string[] ResourcePolicies { get; }
```

- *Type:* string[]

---

##### `SourceInstanceTemplate`<sup>Required</sup> <a name="SourceInstanceTemplate" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.sourceInstanceTemplate"></a>

```csharp
public string SourceInstanceTemplate { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInstanceFromTemplateAdvancedMachineFeatures <a name="ComputeInstanceFromTemplateAdvancedMachineFeatures" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeatures.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateAdvancedMachineFeatures {
    object EnableNestedVirtualization = null,
    object EnableUefiNetworking = null,
    string PerformanceMonitoringUnit = null,
    double ThreadsPerCore = null,
    string TurboMode = null,
    double VisibleCoreCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeatures.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>object</code> | Whether to enable nested virtualization or not. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeatures.property.enableUefiNetworking">EnableUefiNetworking</a></code> | <code>object</code> | Whether to enable UEFI networking for the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeatures.property.performanceMonitoringUnit">PerformanceMonitoringUnit</a></code> | <code>string</code> | The PMU is a hardware component within the CPU core that monitors how the processor runs code. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeatures.property.threadsPerCore">ThreadsPerCore</a></code> | <code>double</code> | The number of threads per physical core. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeatures.property.turboMode">TurboMode</a></code> | <code>string</code> | Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX". |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeatures.property.visibleCoreCount">VisibleCoreCount</a></code> | <code>double</code> | The number of physical cores to expose to an instance. |

---

##### `EnableNestedVirtualization`<sup>Optional</sup> <a name="EnableNestedVirtualization" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeatures.property.enableNestedVirtualization"></a>

```csharp
public object EnableNestedVirtualization { get; set; }
```

- *Type:* object

Whether to enable nested virtualization or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#enable_nested_virtualization ComputeInstanceFromTemplate#enable_nested_virtualization}

---

##### `EnableUefiNetworking`<sup>Optional</sup> <a name="EnableUefiNetworking" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeatures.property.enableUefiNetworking"></a>

```csharp
public object EnableUefiNetworking { get; set; }
```

- *Type:* object

Whether to enable UEFI networking for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#enable_uefi_networking ComputeInstanceFromTemplate#enable_uefi_networking}

---

##### `PerformanceMonitoringUnit`<sup>Optional</sup> <a name="PerformanceMonitoringUnit" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeatures.property.performanceMonitoringUnit"></a>

```csharp
public string PerformanceMonitoringUnit { get; set; }
```

- *Type:* string

The PMU is a hardware component within the CPU core that monitors how the processor runs code.

Valid values for the level of PMU are "STANDARD", "ENHANCED", and "ARCHITECTURAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#performance_monitoring_unit ComputeInstanceFromTemplate#performance_monitoring_unit}

---

##### `ThreadsPerCore`<sup>Optional</sup> <a name="ThreadsPerCore" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeatures.property.threadsPerCore"></a>

```csharp
public double ThreadsPerCore { get; set; }
```

- *Type:* double

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#threads_per_core ComputeInstanceFromTemplate#threads_per_core}

---

##### `TurboMode`<sup>Optional</sup> <a name="TurboMode" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeatures.property.turboMode"></a>

```csharp
public string TurboMode { get; set; }
```

- *Type:* string

Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#turbo_mode ComputeInstanceFromTemplate#turbo_mode}

---

##### `VisibleCoreCount`<sup>Optional</sup> <a name="VisibleCoreCount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeatures.property.visibleCoreCount"></a>

```csharp
public double VisibleCoreCount { get; set; }
```

- *Type:* double

The number of physical cores to expose to an instance.

Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance's nominal CPU count and the underlying platform's SMT width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#visible_core_count ComputeInstanceFromTemplate#visible_core_count}

---

### ComputeInstanceFromTemplateAttachedDisk <a name="ComputeInstanceFromTemplateAttachedDisk" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateAttachedDisk {
    string Source,
    string DeviceName = null,
    string DiskEncryptionKeyRaw = null,
    string DiskEncryptionKeyRsa = null,
    string DiskEncryptionServiceAccount = null,
    object ForceAttach = null,
    string KmsKeySelfLink = null,
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDisk.property.source">Source</a></code> | <code>string</code> | The name or self_link of the disk attached to this instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDisk.property.deviceName">DeviceName</a></code> | <code>string</code> | Name with which the attached disk is accessible under /dev/disk/by-id/. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDisk.property.diskEncryptionKeyRaw">DiskEncryptionKeyRaw</a></code> | <code>string</code> | A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDisk.property.diskEncryptionKeyRsa">DiskEncryptionKeyRsa</a></code> | <code>string</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDisk.property.diskEncryptionServiceAccount">DiskEncryptionServiceAccount</a></code> | <code>string</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDisk.property.forceAttach">ForceAttach</a></code> | <code>object</code> | Whether to force attach the regional disk even if it's currently attached to another instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDisk.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDisk.property.mode">Mode</a></code> | <code>string</code> | Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE". |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDisk.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

The name or self_link of the disk attached to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#source ComputeInstanceFromTemplate#source}

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDisk.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

Name with which the attached disk is accessible under /dev/disk/by-id/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#device_name ComputeInstanceFromTemplate#device_name}

---

##### `DiskEncryptionKeyRaw`<sup>Optional</sup> <a name="DiskEncryptionKeyRaw" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDisk.property.diskEncryptionKeyRaw"></a>

```csharp
public string DiskEncryptionKeyRaw { get; set; }
```

- *Type:* string

A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk.

Only one of kms_key_self_link, disk_encryption_key_rsa and disk_encryption_key_raw may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#disk_encryption_key_raw ComputeInstanceFromTemplate#disk_encryption_key_raw}

---

##### `DiskEncryptionKeyRsa`<sup>Optional</sup> <a name="DiskEncryptionKeyRsa" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDisk.property.diskEncryptionKeyRsa"></a>

```csharp
public string DiskEncryptionKeyRsa { get; set; }
```

- *Type:* string

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

Only one of kms_key_self_link, disk_encryption_key_rsa and disk_encryption_key_raw may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#disk_encryption_key_rsa ComputeInstanceFromTemplate#disk_encryption_key_rsa}

---

##### `DiskEncryptionServiceAccount`<sup>Optional</sup> <a name="DiskEncryptionServiceAccount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDisk.property.diskEncryptionServiceAccount"></a>

```csharp
public string DiskEncryptionServiceAccount { get; set; }
```

- *Type:* string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service account is used

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#disk_encryption_service_account ComputeInstanceFromTemplate#disk_encryption_service_account}

---

##### `ForceAttach`<sup>Optional</sup> <a name="ForceAttach" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDisk.property.forceAttach"></a>

```csharp
public object ForceAttach { get; set; }
```

- *Type:* object

Whether to force attach the regional disk even if it's currently attached to another instance.

If you try to force attach a zonal disk to an instance, you will receive an error. Setting this parameter cause VM recreation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#force_attach ComputeInstanceFromTemplate#force_attach}

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDisk.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; set; }
```

- *Type:* string

The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk.

Only one of kms_key_self_link, disk_encryption_key_rsa and disk_encryption_key_raw may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#kms_key_self_link ComputeInstanceFromTemplate#kms_key_self_link}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDisk.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#mode ComputeInstanceFromTemplate#mode}

---

### ComputeInstanceFromTemplateBootDisk <a name="ComputeInstanceFromTemplateBootDisk" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateBootDisk {
    object AutoDelete = null,
    string DeviceName = null,
    string DiskEncryptionKeyRaw = null,
    string DiskEncryptionKeyRsa = null,
    string DiskEncryptionServiceAccount = null,
    object ForceAttach = null,
    string[] GuestOsFeatures = null,
    ComputeInstanceFromTemplateBootDiskInitializeParams InitializeParams = null,
    string Interface = null,
    string KmsKeySelfLink = null,
    string Mode = null,
    string Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.autoDelete">AutoDelete</a></code> | <code>object</code> | Whether the disk will be auto-deleted when the instance is deleted. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.deviceName">DeviceName</a></code> | <code>string</code> | Name with which attached disk will be accessible under /dev/disk/by-id/. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.diskEncryptionKeyRaw">DiskEncryptionKeyRaw</a></code> | <code>string</code> | A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.diskEncryptionKeyRsa">DiskEncryptionKeyRsa</a></code> | <code>string</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.diskEncryptionServiceAccount">DiskEncryptionServiceAccount</a></code> | <code>string</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.forceAttach">ForceAttach</a></code> | <code>object</code> | Whether to force attach the regional disk even if it's currently attached to another instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.guestOsFeatures">GuestOsFeatures</a></code> | <code>string[]</code> | A list of features to enable on the guest operating system. Applicable only for bootable images. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.initializeParams">InitializeParams</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams">ComputeInstanceFromTemplateBootDiskInitializeParams</a></code> | initialize_params block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.interface">Interface</a></code> | <code>string</code> | The disk interface used for attaching this disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.mode">Mode</a></code> | <code>string</code> | Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE". |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.source">Source</a></code> | <code>string</code> | The name or self_link of the disk attached to this instance. |

---

##### `AutoDelete`<sup>Optional</sup> <a name="AutoDelete" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.autoDelete"></a>

```csharp
public object AutoDelete { get; set; }
```

- *Type:* object

Whether the disk will be auto-deleted when the instance is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#auto_delete ComputeInstanceFromTemplate#auto_delete}

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

Name with which attached disk will be accessible under /dev/disk/by-id/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#device_name ComputeInstanceFromTemplate#device_name}

---

##### `DiskEncryptionKeyRaw`<sup>Optional</sup> <a name="DiskEncryptionKeyRaw" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.diskEncryptionKeyRaw"></a>

```csharp
public string DiskEncryptionKeyRaw { get; set; }
```

- *Type:* string

A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk.

Only one of kms_key_self_link, disk_encryption_key_raw and disk_encryption_key_rsa may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#disk_encryption_key_raw ComputeInstanceFromTemplate#disk_encryption_key_raw}

---

##### `DiskEncryptionKeyRsa`<sup>Optional</sup> <a name="DiskEncryptionKeyRsa" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.diskEncryptionKeyRsa"></a>

```csharp
public string DiskEncryptionKeyRsa { get; set; }
```

- *Type:* string

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

Only one of kms_key_self_link, disk_encryption_key_raw and disk_encryption_key_rsa may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#disk_encryption_key_rsa ComputeInstanceFromTemplate#disk_encryption_key_rsa}

---

##### `DiskEncryptionServiceAccount`<sup>Optional</sup> <a name="DiskEncryptionServiceAccount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.diskEncryptionServiceAccount"></a>

```csharp
public string DiskEncryptionServiceAccount { get; set; }
```

- *Type:* string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service account is used

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#disk_encryption_service_account ComputeInstanceFromTemplate#disk_encryption_service_account}

---

##### `ForceAttach`<sup>Optional</sup> <a name="ForceAttach" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.forceAttach"></a>

```csharp
public object ForceAttach { get; set; }
```

- *Type:* object

Whether to force attach the regional disk even if it's currently attached to another instance.

If you try to force attach a zonal disk to an instance, you will receive an error. Setting this parameter cause VM recreation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#force_attach ComputeInstanceFromTemplate#force_attach}

---

##### `GuestOsFeatures`<sup>Optional</sup> <a name="GuestOsFeatures" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.guestOsFeatures"></a>

```csharp
public string[] GuestOsFeatures { get; set; }
```

- *Type:* string[]

A list of features to enable on the guest operating system. Applicable only for bootable images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#guest_os_features ComputeInstanceFromTemplate#guest_os_features}

---

##### `InitializeParams`<sup>Optional</sup> <a name="InitializeParams" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.initializeParams"></a>

```csharp
public ComputeInstanceFromTemplateBootDiskInitializeParams InitializeParams { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams">ComputeInstanceFromTemplateBootDiskInitializeParams</a>

initialize_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#initialize_params ComputeInstanceFromTemplate#initialize_params}

---

##### `Interface`<sup>Optional</sup> <a name="Interface" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.interface"></a>

```csharp
public string Interface { get; set; }
```

- *Type:* string

The disk interface used for attaching this disk.

One of SCSI or NVME. (This field is shared with attached_disk and only used for specific cases, please don't specify this field without advice from Google.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#interface ComputeInstanceFromTemplate#interface}

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; set; }
```

- *Type:* string

The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk.

Only one of kms_key_self_link, disk_encryption_key_raw and disk_encryption_key_rsa may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#kms_key_self_link ComputeInstanceFromTemplate#kms_key_self_link}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#mode ComputeInstanceFromTemplate#mode}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

The name or self_link of the disk attached to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#source ComputeInstanceFromTemplate#source}

---

### ComputeInstanceFromTemplateBootDiskInitializeParams <a name="ComputeInstanceFromTemplateBootDiskInitializeParams" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateBootDiskInitializeParams {
    string Architecture = null,
    object EnableConfidentialCompute = null,
    string Image = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    double ProvisionedIops = null,
    double ProvisionedThroughput = null,
    System.Collections.Generic.IDictionary<string, string> ResourceManagerTags = null,
    string[] ResourcePolicies = null,
    double Size = null,
    string Snapshot = null,
    ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey SourceImageEncryptionKey = null,
    ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey SourceSnapshotEncryptionKey = null,
    string StoragePool = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.architecture">Architecture</a></code> | <code>string</code> | The architecture of the disk. One of "X86_64" or "ARM64". |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>object</code> | A flag to enable confidential compute mode on boot disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.image">Image</a></code> | <code>string</code> | The image from which this disk was initialised. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A set of key/value label pairs assigned to the disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.provisionedIops">ProvisionedIops</a></code> | <code>double</code> | Indicates how many IOPS to provision for the disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code>double</code> | Indicates how much throughput to provision for the disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.resourcePolicies">ResourcePolicies</a></code> | <code>string[]</code> | A list of self_links of resource policies to attach to the instance's boot disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.size">Size</a></code> | <code>double</code> | The size of the image in gigabytes. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.snapshot">Snapshot</a></code> | <code>string</code> | The snapshot from which this disk was initialised. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.sourceImageEncryptionKey">SourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey">ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.sourceSnapshotEncryptionKey">SourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey">ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.storagePool">StoragePool</a></code> | <code>string</code> | The URL of the storage pool in which the new disk is created. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.type">Type</a></code> | <code>string</code> | The Google Compute Engine disk type. Such as pd-standard, pd-ssd or pd-balanced. |

---

##### `Architecture`<sup>Optional</sup> <a name="Architecture" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.architecture"></a>

```csharp
public string Architecture { get; set; }
```

- *Type:* string

The architecture of the disk. One of "X86_64" or "ARM64".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#architecture ComputeInstanceFromTemplate#architecture}

---

##### `EnableConfidentialCompute`<sup>Optional</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.enableConfidentialCompute"></a>

```csharp
public object EnableConfidentialCompute { get; set; }
```

- *Type:* object

A flag to enable confidential compute mode on boot disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#enable_confidential_compute ComputeInstanceFromTemplate#enable_confidential_compute}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

The image from which this disk was initialised.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#image ComputeInstanceFromTemplate#image}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A set of key/value label pairs assigned to the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#labels ComputeInstanceFromTemplate#labels}

---

##### `ProvisionedIops`<sup>Optional</sup> <a name="ProvisionedIops" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.provisionedIops"></a>

```csharp
public double ProvisionedIops { get; set; }
```

- *Type:* double

Indicates how many IOPS to provision for the disk.

This sets the number of I/O operations per second that the disk can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#provisioned_iops ComputeInstanceFromTemplate#provisioned_iops}

---

##### `ProvisionedThroughput`<sup>Optional</sup> <a name="ProvisionedThroughput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.provisionedThroughput"></a>

```csharp
public double ProvisionedThroughput { get; set; }
```

- *Type:* double

Indicates how much throughput to provision for the disk.

This sets the number of throughput mb per second that the disk can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#provisioned_throughput ComputeInstanceFromTemplate#provisioned_throughput}

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#resource_manager_tags ComputeInstanceFromTemplate#resource_manager_tags}

---

##### `ResourcePolicies`<sup>Optional</sup> <a name="ResourcePolicies" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.resourcePolicies"></a>

```csharp
public string[] ResourcePolicies { get; set; }
```

- *Type:* string[]

A list of self_links of resource policies to attach to the instance's boot disk.

Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#resource_policies ComputeInstanceFromTemplate#resource_policies}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

The size of the image in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#size ComputeInstanceFromTemplate#size}

---

##### `Snapshot`<sup>Optional</sup> <a name="Snapshot" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.snapshot"></a>

```csharp
public string Snapshot { get; set; }
```

- *Type:* string

The snapshot from which this disk was initialised.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#snapshot ComputeInstanceFromTemplate#snapshot}

---

##### `SourceImageEncryptionKey`<sup>Optional</sup> <a name="SourceImageEncryptionKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.sourceImageEncryptionKey"></a>

```csharp
public ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey SourceImageEncryptionKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey">ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#source_image_encryption_key ComputeInstanceFromTemplate#source_image_encryption_key}

---

##### `SourceSnapshotEncryptionKey`<sup>Optional</sup> <a name="SourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.sourceSnapshotEncryptionKey"></a>

```csharp
public ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey SourceSnapshotEncryptionKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey">ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#source_snapshot_encryption_key ComputeInstanceFromTemplate#source_snapshot_encryption_key}

---

##### `StoragePool`<sup>Optional</sup> <a name="StoragePool" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.storagePool"></a>

```csharp
public string StoragePool { get; set; }
```

- *Type:* string

The URL of the storage pool in which the new disk is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#storage_pool ComputeInstanceFromTemplate#storage_pool}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The Google Compute Engine disk type. Such as pd-standard, pd-ssd or pd-balanced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#type ComputeInstanceFromTemplate#type}

---

### ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey <a name="ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey {
    string KmsKeySelfLink = null,
    string KmsKeyServiceAccount = null,
    string RawKey = null,
    string RsaEncryptedKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey.property.rawKey">RawKey</a></code> | <code>string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey.property.rsaEncryptedKey">RsaEncryptedKey</a></code> | <code>string</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; set; }
```

- *Type:* string

The self link of the encryption key that is stored in Google Cloud KMS.

Only one of kms_key_self_link, rsa_encrypted_key and raw_key may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#kms_key_self_link ComputeInstanceFromTemplate#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; set; }
```

- *Type:* string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#kms_key_service_account ComputeInstanceFromTemplate#kms_key_service_account}

---

##### `RawKey`<sup>Optional</sup> <a name="RawKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey.property.rawKey"></a>

```csharp
public string RawKey { get; set; }
```

- *Type:* string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Only one of kms_key_self_link, rsa_encrypted_key and raw_key may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#raw_key ComputeInstanceFromTemplate#raw_key}

---

##### `RsaEncryptedKey`<sup>Optional</sup> <a name="RsaEncryptedKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey.property.rsaEncryptedKey"></a>

```csharp
public string RsaEncryptedKey { get; set; }
```

- *Type:* string

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

Only one of kms_key_self_link, rsa_encrypted_key and raw_key may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#rsa_encrypted_key ComputeInstanceFromTemplate#rsa_encrypted_key}

---

### ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey <a name="ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey {
    string KmsKeySelfLink = null,
    string KmsKeyServiceAccount = null,
    string RawKey = null,
    string RsaEncryptedKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey.property.rawKey">RawKey</a></code> | <code>string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey.property.rsaEncryptedKey">RsaEncryptedKey</a></code> | <code>string</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; set; }
```

- *Type:* string

The self link of the encryption key that is stored in Google Cloud KMS.

Only one of kms_key_self_link, rsa_encrypted_key and raw_key may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#kms_key_self_link ComputeInstanceFromTemplate#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; set; }
```

- *Type:* string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#kms_key_service_account ComputeInstanceFromTemplate#kms_key_service_account}

---

##### `RawKey`<sup>Optional</sup> <a name="RawKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey.property.rawKey"></a>

```csharp
public string RawKey { get; set; }
```

- *Type:* string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Only one of kms_key_self_link, rsa_encrypted_key and raw_key may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#raw_key ComputeInstanceFromTemplate#raw_key}

---

##### `RsaEncryptedKey`<sup>Optional</sup> <a name="RsaEncryptedKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey.property.rsaEncryptedKey"></a>

```csharp
public string RsaEncryptedKey { get; set; }
```

- *Type:* string

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

Only one of kms_key_self_link, rsa_encrypted_key and raw_key may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#rsa_encrypted_key ComputeInstanceFromTemplate#rsa_encrypted_key}

---

### ComputeInstanceFromTemplateConfidentialInstanceConfig <a name="ComputeInstanceFromTemplateConfidentialInstanceConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateConfidentialInstanceConfig {
    string ConfidentialInstanceType = null,
    object EnableConfidentialCompute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfig.property.confidentialInstanceType">ConfidentialInstanceType</a></code> | <code>string</code> | The confidential computing technology the instance uses. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfig.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>object</code> | Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release. |

---

##### `ConfidentialInstanceType`<sup>Optional</sup> <a name="ConfidentialInstanceType" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfig.property.confidentialInstanceType"></a>

```csharp
public string ConfidentialInstanceType { get; set; }
```

- *Type:* string

The confidential computing technology the instance uses.

SEV is an AMD feature. TDX is an Intel feature. One of the following
values is required: SEV, SEV_SNP, TDX. If SEV_SNP, min_cpu_platform =
"AMD Milan" is currently required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#confidential_instance_type ComputeInstanceFromTemplate#confidential_instance_type}

---

##### `EnableConfidentialCompute`<sup>Optional</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfig.property.enableConfidentialCompute"></a>

```csharp
public object EnableConfidentialCompute { get; set; }
```

- *Type:* object

Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#enable_confidential_compute ComputeInstanceFromTemplate#enable_confidential_compute}

---

### ComputeInstanceFromTemplateConfig <a name="ComputeInstanceFromTemplateConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string SourceInstanceTemplate,
    ComputeInstanceFromTemplateAdvancedMachineFeatures AdvancedMachineFeatures = null,
    object AllowStoppingForUpdate = null,
    object AttachedDisk = null,
    ComputeInstanceFromTemplateBootDisk BootDisk = null,
    object CanIpForward = null,
    ComputeInstanceFromTemplateConfidentialInstanceConfig ConfidentialInstanceConfig = null,
    object DeletionProtection = null,
    string Description = null,
    string DesiredStatus = null,
    object EnableDisplay = null,
    object GuestAccelerator = null,
    string Hostname = null,
    string Id = null,
    ComputeInstanceFromTemplateInstanceEncryptionKey InstanceEncryptionKey = null,
    string KeyRevocationActionType = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string MachineType = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string MetadataStartupScript = null,
    string MinCpuPlatform = null,
    object NetworkInterface = null,
    ComputeInstanceFromTemplateNetworkPerformanceConfig NetworkPerformanceConfig = null,
    ComputeInstanceFromTemplateParams Params = null,
    string Project = null,
    ComputeInstanceFromTemplateReservationAffinity ReservationAffinity = null,
    string[] ResourcePolicies = null,
    ComputeInstanceFromTemplateScheduling Scheduling = null,
    object ScratchDisk = null,
    ComputeInstanceFromTemplateServiceAccount ServiceAccount = null,
    ComputeInstanceFromTemplateShieldedInstanceConfig ShieldedInstanceConfig = null,
    string[] Tags = null,
    ComputeInstanceFromTemplateTimeouts Timeouts = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.name">Name</a></code> | <code>string</code> | The name of the instance. One of name or self_link must be provided. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.sourceInstanceTemplate">SourceInstanceTemplate</a></code> | <code>string</code> | Name or self link of an instance template to create the instance based on. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.advancedMachineFeatures">AdvancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeatures">ComputeInstanceFromTemplateAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.allowStoppingForUpdate">AllowStoppingForUpdate</a></code> | <code>object</code> | If true, allows Terraform to stop the instance to update its properties. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.attachedDisk">AttachedDisk</a></code> | <code>object</code> | attached_disk block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.bootDisk">BootDisk</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk">ComputeInstanceFromTemplateBootDisk</a></code> | boot_disk block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.canIpForward">CanIpForward</a></code> | <code>object</code> | Whether sending and receiving of packets with non-matching source or destination IPs is allowed. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.confidentialInstanceConfig">ConfidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfig">ComputeInstanceFromTemplateConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | Whether deletion protection is enabled on this instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.description">Description</a></code> | <code>string</code> | A brief description of the resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.desiredStatus">DesiredStatus</a></code> | <code>string</code> | Desired status of the instance. Either "RUNNING", "SUSPENDED" or "TERMINATED". |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.enableDisplay">EnableDisplay</a></code> | <code>object</code> | Whether the instance has virtual displays enabled. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.guestAccelerator">GuestAccelerator</a></code> | <code>object</code> | guest_accelerator block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.hostname">Hostname</a></code> | <code>string</code> | A custom hostname for the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#id ComputeInstanceFromTemplate#id}. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.instanceEncryptionKey">InstanceEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKey">ComputeInstanceFromTemplateInstanceEncryptionKey</a></code> | instance_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.keyRevocationActionType">KeyRevocationActionType</a></code> | <code>string</code> | Action to be taken when a customer's encryption key is revoked. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A set of key/value label pairs assigned to the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.machineType">MachineType</a></code> | <code>string</code> | The machine type to create. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Metadata key/value pairs made available within the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.metadataStartupScript">MetadataStartupScript</a></code> | <code>string</code> | Metadata startup scripts made available within the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>string</code> | The minimum CPU platform specified for the VM instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.networkInterface">NetworkInterface</a></code> | <code>object</code> | network_interface block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.networkPerformanceConfig">NetworkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfig">ComputeInstanceFromTemplateNetworkPerformanceConfig</a></code> | network_performance_config block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.params">Params</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParams">ComputeInstanceFromTemplateParams</a></code> | params block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinity">ComputeInstanceFromTemplateReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.resourcePolicies">ResourcePolicies</a></code> | <code>string[]</code> | A list of self_links of resource policies to attach to the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling">ComputeInstanceFromTemplateScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.scratchDisk">ScratchDisk</a></code> | <code>object</code> | scratch_disk block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccount">ComputeInstanceFromTemplateServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfig">ComputeInstanceFromTemplateShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.tags">Tags</a></code> | <code>string[]</code> | The list of tags attached to the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeouts">ComputeInstanceFromTemplateTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.zone">Zone</a></code> | <code>string</code> | The zone of the instance. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the instance. One of name or self_link must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#name ComputeInstanceFromTemplate#name}

---

##### `SourceInstanceTemplate`<sup>Required</sup> <a name="SourceInstanceTemplate" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.sourceInstanceTemplate"></a>

```csharp
public string SourceInstanceTemplate { get; set; }
```

- *Type:* string

Name or self link of an instance template to create the instance based on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#source_instance_template ComputeInstanceFromTemplate#source_instance_template}

---

##### `AdvancedMachineFeatures`<sup>Optional</sup> <a name="AdvancedMachineFeatures" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.advancedMachineFeatures"></a>

```csharp
public ComputeInstanceFromTemplateAdvancedMachineFeatures AdvancedMachineFeatures { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeatures">ComputeInstanceFromTemplateAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#advanced_machine_features ComputeInstanceFromTemplate#advanced_machine_features}

---

##### `AllowStoppingForUpdate`<sup>Optional</sup> <a name="AllowStoppingForUpdate" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.allowStoppingForUpdate"></a>

```csharp
public object AllowStoppingForUpdate { get; set; }
```

- *Type:* object

If true, allows Terraform to stop the instance to update its properties.

If you try to update a property that requires stopping the instance without setting this field, the update will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#allow_stopping_for_update ComputeInstanceFromTemplate#allow_stopping_for_update}

---

##### `AttachedDisk`<sup>Optional</sup> <a name="AttachedDisk" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.attachedDisk"></a>

```csharp
public object AttachedDisk { get; set; }
```

- *Type:* object

attached_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#attached_disk ComputeInstanceFromTemplate#attached_disk}

---

##### `BootDisk`<sup>Optional</sup> <a name="BootDisk" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.bootDisk"></a>

```csharp
public ComputeInstanceFromTemplateBootDisk BootDisk { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk">ComputeInstanceFromTemplateBootDisk</a>

boot_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#boot_disk ComputeInstanceFromTemplate#boot_disk}

---

##### `CanIpForward`<sup>Optional</sup> <a name="CanIpForward" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.canIpForward"></a>

```csharp
public object CanIpForward { get; set; }
```

- *Type:* object

Whether sending and receiving of packets with non-matching source or destination IPs is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#can_ip_forward ComputeInstanceFromTemplate#can_ip_forward}

---

##### `ConfidentialInstanceConfig`<sup>Optional</sup> <a name="ConfidentialInstanceConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.confidentialInstanceConfig"></a>

```csharp
public ComputeInstanceFromTemplateConfidentialInstanceConfig ConfidentialInstanceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfig">ComputeInstanceFromTemplateConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#confidential_instance_config ComputeInstanceFromTemplate#confidential_instance_config}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; set; }
```

- *Type:* object

Whether deletion protection is enabled on this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#deletion_protection ComputeInstanceFromTemplate#deletion_protection}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A brief description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#description ComputeInstanceFromTemplate#description}

---

##### `DesiredStatus`<sup>Optional</sup> <a name="DesiredStatus" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.desiredStatus"></a>

```csharp
public string DesiredStatus { get; set; }
```

- *Type:* string

Desired status of the instance. Either "RUNNING", "SUSPENDED" or "TERMINATED".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#desired_status ComputeInstanceFromTemplate#desired_status}

---

##### `EnableDisplay`<sup>Optional</sup> <a name="EnableDisplay" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.enableDisplay"></a>

```csharp
public object EnableDisplay { get; set; }
```

- *Type:* object

Whether the instance has virtual displays enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#enable_display ComputeInstanceFromTemplate#enable_display}

---

##### `GuestAccelerator`<sup>Optional</sup> <a name="GuestAccelerator" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.guestAccelerator"></a>

```csharp
public object GuestAccelerator { get; set; }
```

- *Type:* object

guest_accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#guest_accelerator ComputeInstanceFromTemplate#guest_accelerator}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

A custom hostname for the instance.

Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of labels 1-63 characters long matching the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D), concatenated with periods. The entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#hostname ComputeInstanceFromTemplate#hostname}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#id ComputeInstanceFromTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceEncryptionKey`<sup>Optional</sup> <a name="InstanceEncryptionKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.instanceEncryptionKey"></a>

```csharp
public ComputeInstanceFromTemplateInstanceEncryptionKey InstanceEncryptionKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKey">ComputeInstanceFromTemplateInstanceEncryptionKey</a>

instance_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#instance_encryption_key ComputeInstanceFromTemplate#instance_encryption_key}

---

##### `KeyRevocationActionType`<sup>Optional</sup> <a name="KeyRevocationActionType" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.keyRevocationActionType"></a>

```csharp
public string KeyRevocationActionType { get; set; }
```

- *Type:* string

Action to be taken when a customer's encryption key is revoked.

Supports "STOP" and "NONE", with "NONE" being the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#key_revocation_action_type ComputeInstanceFromTemplate#key_revocation_action_type}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A set of key/value label pairs assigned to the instance.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#labels ComputeInstanceFromTemplate#labels}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The machine type to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#machine_type ComputeInstanceFromTemplate#machine_type}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Metadata key/value pairs made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#metadata ComputeInstanceFromTemplate#metadata}

---

##### `MetadataStartupScript`<sup>Optional</sup> <a name="MetadataStartupScript" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.metadataStartupScript"></a>

```csharp
public string MetadataStartupScript { get; set; }
```

- *Type:* string

Metadata startup scripts made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#metadata_startup_script ComputeInstanceFromTemplate#metadata_startup_script}

---

##### `MinCpuPlatform`<sup>Optional</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.minCpuPlatform"></a>

```csharp
public string MinCpuPlatform { get; set; }
```

- *Type:* string

The minimum CPU platform specified for the VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#min_cpu_platform ComputeInstanceFromTemplate#min_cpu_platform}

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.networkInterface"></a>

```csharp
public object NetworkInterface { get; set; }
```

- *Type:* object

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#network_interface ComputeInstanceFromTemplate#network_interface}

---

##### `NetworkPerformanceConfig`<sup>Optional</sup> <a name="NetworkPerformanceConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.networkPerformanceConfig"></a>

```csharp
public ComputeInstanceFromTemplateNetworkPerformanceConfig NetworkPerformanceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfig">ComputeInstanceFromTemplateNetworkPerformanceConfig</a>

network_performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#network_performance_config ComputeInstanceFromTemplate#network_performance_config}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.params"></a>

```csharp
public ComputeInstanceFromTemplateParams Params { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParams">ComputeInstanceFromTemplateParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#params ComputeInstanceFromTemplate#params}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If self_link is provided, this value is ignored. If neither self_link nor project are provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#project ComputeInstanceFromTemplate#project}

---

##### `ReservationAffinity`<sup>Optional</sup> <a name="ReservationAffinity" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.reservationAffinity"></a>

```csharp
public ComputeInstanceFromTemplateReservationAffinity ReservationAffinity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinity">ComputeInstanceFromTemplateReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#reservation_affinity ComputeInstanceFromTemplate#reservation_affinity}

---

##### `ResourcePolicies`<sup>Optional</sup> <a name="ResourcePolicies" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.resourcePolicies"></a>

```csharp
public string[] ResourcePolicies { get; set; }
```

- *Type:* string[]

A list of self_links of resource policies to attach to the instance.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#resource_policies ComputeInstanceFromTemplate#resource_policies}

---

##### `Scheduling`<sup>Optional</sup> <a name="Scheduling" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.scheduling"></a>

```csharp
public ComputeInstanceFromTemplateScheduling Scheduling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling">ComputeInstanceFromTemplateScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#scheduling ComputeInstanceFromTemplate#scheduling}

---

##### `ScratchDisk`<sup>Optional</sup> <a name="ScratchDisk" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.scratchDisk"></a>

```csharp
public object ScratchDisk { get; set; }
```

- *Type:* object

scratch_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#scratch_disk ComputeInstanceFromTemplate#scratch_disk}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.serviceAccount"></a>

```csharp
public ComputeInstanceFromTemplateServiceAccount ServiceAccount { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccount">ComputeInstanceFromTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#service_account ComputeInstanceFromTemplate#service_account}

---

##### `ShieldedInstanceConfig`<sup>Optional</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.shieldedInstanceConfig"></a>

```csharp
public ComputeInstanceFromTemplateShieldedInstanceConfig ShieldedInstanceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfig">ComputeInstanceFromTemplateShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#shielded_instance_config ComputeInstanceFromTemplate#shielded_instance_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

The list of tags attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#tags ComputeInstanceFromTemplate#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.timeouts"></a>

```csharp
public ComputeInstanceFromTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeouts">ComputeInstanceFromTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#timeouts ComputeInstanceFromTemplate#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The zone of the instance.

If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#zone ComputeInstanceFromTemplate#zone}

---

### ComputeInstanceFromTemplateGuestAccelerator <a name="ComputeInstanceFromTemplateGuestAccelerator" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAccelerator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateGuestAccelerator {
    double Count,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAccelerator.property.count">Count</a></code> | <code>double</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAccelerator.property.type">Type</a></code> | <code>string</code> | The accelerator type resource exposed to this instance. E.g. nvidia-tesla-k80. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAccelerator.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#count ComputeInstanceFromTemplate#count}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAccelerator.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The accelerator type resource exposed to this instance. E.g. nvidia-tesla-k80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#type ComputeInstanceFromTemplate#type}

---

### ComputeInstanceFromTemplateInstanceEncryptionKey <a name="ComputeInstanceFromTemplateInstanceEncryptionKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateInstanceEncryptionKey {
    string KmsKeySelfLink = null,
    string KmsKeyServiceAccount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | The service account being used for the encryption request for the given KMS key. |

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKey.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; set; }
```

- *Type:* string

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#kms_key_self_link ComputeInstanceFromTemplate#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKey.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; set; }
```

- *Type:* string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#kms_key_service_account ComputeInstanceFromTemplate#kms_key_service_account}

---

### ComputeInstanceFromTemplateNetworkInterface <a name="ComputeInstanceFromTemplateNetworkInterface" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateNetworkInterface {
    object AccessConfig = null,
    object AliasIpRange = null,
    double InternalIpv6PrefixLength = null,
    object Ipv6AccessConfig = null,
    string Ipv6Address = null,
    string Network = null,
    string NetworkAttachment = null,
    string NetworkIp = null,
    string NicType = null,
    double QueueCount = null,
    string StackType = null,
    string Subnetwork = null,
    string SubnetworkProject = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.accessConfig">AccessConfig</a></code> | <code>object</code> | access_config block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.aliasIpRange">AliasIpRange</a></code> | <code>object</code> | alias_ip_range block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.internalIpv6PrefixLength">InternalIpv6PrefixLength</a></code> | <code>double</code> | The prefix length of the primary internal IPv6 range. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.ipv6AccessConfig">Ipv6AccessConfig</a></code> | <code>object</code> | ipv6_access_config block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | An IPv6 internal network address for this network interface. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.network">Network</a></code> | <code>string</code> | The name or self_link of the network attached to this interface. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.networkIp">NetworkIp</a></code> | <code>string</code> | The private IP address assigned to the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.nicType">NicType</a></code> | <code>string</code> | The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, IDPF, MRDMA, and IRDMA. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.queueCount">QueueCount</a></code> | <code>double</code> | The networking queue count that's specified by users for the network interface. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.stackType">StackType</a></code> | <code>string</code> | The stack type for this network interface to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.subnetwork">Subnetwork</a></code> | <code>string</code> | The name or self_link of the subnetwork attached to this interface. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.subnetworkProject">SubnetworkProject</a></code> | <code>string</code> | The project in which the subnetwork belongs. |

---

##### `AccessConfig`<sup>Optional</sup> <a name="AccessConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.accessConfig"></a>

```csharp
public object AccessConfig { get; set; }
```

- *Type:* object

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#access_config ComputeInstanceFromTemplate#access_config}

---

##### `AliasIpRange`<sup>Optional</sup> <a name="AliasIpRange" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.aliasIpRange"></a>

```csharp
public object AliasIpRange { get; set; }
```

- *Type:* object

alias_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#alias_ip_range ComputeInstanceFromTemplate#alias_ip_range}

---

##### `InternalIpv6PrefixLength`<sup>Optional</sup> <a name="InternalIpv6PrefixLength" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.internalIpv6PrefixLength"></a>

```csharp
public double InternalIpv6PrefixLength { get; set; }
```

- *Type:* double

The prefix length of the primary internal IPv6 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#internal_ipv6_prefix_length ComputeInstanceFromTemplate#internal_ipv6_prefix_length}

---

##### `Ipv6AccessConfig`<sup>Optional</sup> <a name="Ipv6AccessConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.ipv6AccessConfig"></a>

```csharp
public object Ipv6AccessConfig { get; set; }
```

- *Type:* object

ipv6_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#ipv6_access_config ComputeInstanceFromTemplate#ipv6_access_config}

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; set; }
```

- *Type:* string

An IPv6 internal network address for this network interface.

If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#ipv6_address ComputeInstanceFromTemplate#ipv6_address}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The name or self_link of the network attached to this interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#network ComputeInstanceFromTemplate#network}

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; set; }
```

- *Type:* string

The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#network_attachment ComputeInstanceFromTemplate#network_attachment}

---

##### `NetworkIp`<sup>Optional</sup> <a name="NetworkIp" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.networkIp"></a>

```csharp
public string NetworkIp { get; set; }
```

- *Type:* string

The private IP address assigned to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#network_ip ComputeInstanceFromTemplate#network_ip}

---

##### `NicType`<sup>Optional</sup> <a name="NicType" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.nicType"></a>

```csharp
public string NicType { get; set; }
```

- *Type:* string

The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, IDPF, MRDMA, and IRDMA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#nic_type ComputeInstanceFromTemplate#nic_type}

---

##### `QueueCount`<sup>Optional</sup> <a name="QueueCount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.queueCount"></a>

```csharp
public double QueueCount { get; set; }
```

- *Type:* double

The networking queue count that's specified by users for the network interface.

Both Rx and Tx queues will be set to this number. It will be empty if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#queue_count ComputeInstanceFromTemplate#queue_count}

---

##### `StackType`<sup>Optional</sup> <a name="StackType" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.stackType"></a>

```csharp
public string StackType { get; set; }
```

- *Type:* string

The stack type for this network interface to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#stack_type ComputeInstanceFromTemplate#stack_type}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.subnetwork"></a>

```csharp
public string Subnetwork { get; set; }
```

- *Type:* string

The name or self_link of the subnetwork attached to this interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#subnetwork ComputeInstanceFromTemplate#subnetwork}

---

##### `SubnetworkProject`<sup>Optional</sup> <a name="SubnetworkProject" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterface.property.subnetworkProject"></a>

```csharp
public string SubnetworkProject { get; set; }
```

- *Type:* string

The project in which the subnetwork belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#subnetwork_project ComputeInstanceFromTemplate#subnetwork_project}

---

### ComputeInstanceFromTemplateNetworkInterfaceAccessConfig <a name="ComputeInstanceFromTemplateNetworkInterfaceAccessConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateNetworkInterfaceAccessConfig {
    string NatIp = null,
    string NetworkTier = null,
    string PublicPtrDomainName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfig.property.natIp">NatIp</a></code> | <code>string</code> | The IP address that is be 1:1 mapped to the instance's network ip. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfig.property.networkTier">NetworkTier</a></code> | <code>string</code> | The networking tier used for configuring this instance. One of PREMIUM or STANDARD. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfig.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>string</code> | The DNS domain name for the public PTR record. |

---

##### `NatIp`<sup>Optional</sup> <a name="NatIp" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfig.property.natIp"></a>

```csharp
public string NatIp { get; set; }
```

- *Type:* string

The IP address that is be 1:1 mapped to the instance's network ip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#nat_ip ComputeInstanceFromTemplate#nat_ip}

---

##### `NetworkTier`<sup>Optional</sup> <a name="NetworkTier" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfig.property.networkTier"></a>

```csharp
public string NetworkTier { get; set; }
```

- *Type:* string

The networking tier used for configuring this instance. One of PREMIUM or STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#network_tier ComputeInstanceFromTemplate#network_tier}

---

##### `PublicPtrDomainName`<sup>Optional</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfig.property.publicPtrDomainName"></a>

```csharp
public string PublicPtrDomainName { get; set; }
```

- *Type:* string

The DNS domain name for the public PTR record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#public_ptr_domain_name ComputeInstanceFromTemplate#public_ptr_domain_name}

---

### ComputeInstanceFromTemplateNetworkInterfaceAliasIpRange <a name="ComputeInstanceFromTemplateNetworkInterfaceAliasIpRange" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateNetworkInterfaceAliasIpRange {
    string IpCidrRange,
    string SubnetworkRangeName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | The IP CIDR range represented by this alias IP range. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName">SubnetworkRangeName</a></code> | <code>string</code> | The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. |

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; set; }
```

- *Type:* string

The IP CIDR range represented by this alias IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#ip_cidr_range ComputeInstanceFromTemplate#ip_cidr_range}

---

##### `SubnetworkRangeName`<sup>Optional</sup> <a name="SubnetworkRangeName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName"></a>

```csharp
public string SubnetworkRangeName { get; set; }
```

- *Type:* string

The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#subnetwork_range_name ComputeInstanceFromTemplate#subnetwork_range_name}

---

### ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig <a name="ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig {
    string NetworkTier,
    string ExternalIpv6 = null,
    string ExternalIpv6PrefixLength = null,
    string Name = null,
    string PublicPtrDomainName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier">NetworkTier</a></code> | <code>string</code> | The service-level to be provided for IPv6 traffic when the subnet has an external subnet. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.property.externalIpv6">ExternalIpv6</a></code> | <code>string</code> | The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.property.externalIpv6PrefixLength">ExternalIpv6PrefixLength</a></code> | <code>string</code> | The prefix length of the external IPv6 range. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.property.name">Name</a></code> | <code>string</code> | The name of this access configuration. In ipv6AccessConfigs, the recommended name is External IPv6. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>string</code> | The domain name to be used when creating DNSv6 records for the external IPv6 ranges. |

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier"></a>

```csharp
public string NetworkTier { get; set; }
```

- *Type:* string

The service-level to be provided for IPv6 traffic when the subnet has an external subnet.

Only PREMIUM tier is valid for IPv6

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#network_tier ComputeInstanceFromTemplate#network_tier}

---

##### `ExternalIpv6`<sup>Optional</sup> <a name="ExternalIpv6" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.property.externalIpv6"></a>

```csharp
public string ExternalIpv6 { get; set; }
```

- *Type:* string

The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig.

To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#external_ipv6 ComputeInstanceFromTemplate#external_ipv6}

---

##### `ExternalIpv6PrefixLength`<sup>Optional</sup> <a name="ExternalIpv6PrefixLength" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.property.externalIpv6PrefixLength"></a>

```csharp
public string ExternalIpv6PrefixLength { get; set; }
```

- *Type:* string

The prefix length of the external IPv6 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#external_ipv6_prefix_length ComputeInstanceFromTemplate#external_ipv6_prefix_length}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this access configuration. In ipv6AccessConfigs, the recommended name is External IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#name ComputeInstanceFromTemplate#name}

---

##### `PublicPtrDomainName`<sup>Optional</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.property.publicPtrDomainName"></a>

```csharp
public string PublicPtrDomainName { get; set; }
```

- *Type:* string

The domain name to be used when creating DNSv6 records for the external IPv6 ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#public_ptr_domain_name ComputeInstanceFromTemplate#public_ptr_domain_name}

---

### ComputeInstanceFromTemplateNetworkPerformanceConfig <a name="ComputeInstanceFromTemplateNetworkPerformanceConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateNetworkPerformanceConfig {
    string TotalEgressBandwidthTier
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier">TotalEgressBandwidthTier</a></code> | <code>string</code> | The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT. |

---

##### `TotalEgressBandwidthTier`<sup>Required</sup> <a name="TotalEgressBandwidthTier" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier"></a>

```csharp
public string TotalEgressBandwidthTier { get; set; }
```

- *Type:* string

The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#total_egress_bandwidth_tier ComputeInstanceFromTemplate#total_egress_bandwidth_tier}

---

### ComputeInstanceFromTemplateParams <a name="ComputeInstanceFromTemplateParams" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateParams {
    System.Collections.Generic.IDictionary<string, string> ResourceManagerTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParams.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of resource manager tags. |

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParams.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#resource_manager_tags ComputeInstanceFromTemplate#resource_manager_tags}

---

### ComputeInstanceFromTemplateReservationAffinity <a name="ComputeInstanceFromTemplateReservationAffinity" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateReservationAffinity {
    string Type,
    ComputeInstanceFromTemplateReservationAffinitySpecificReservation SpecificReservation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinity.property.type">Type</a></code> | <code>string</code> | The type of reservation from which this instance can consume resources. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinity.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservation">ComputeInstanceFromTemplateReservationAffinitySpecificReservation</a></code> | specific_reservation block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of reservation from which this instance can consume resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#type ComputeInstanceFromTemplate#type}

---

##### `SpecificReservation`<sup>Optional</sup> <a name="SpecificReservation" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinity.property.specificReservation"></a>

```csharp
public ComputeInstanceFromTemplateReservationAffinitySpecificReservation SpecificReservation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservation">ComputeInstanceFromTemplateReservationAffinitySpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#specific_reservation ComputeInstanceFromTemplate#specific_reservation}

---

### ComputeInstanceFromTemplateReservationAffinitySpecificReservation <a name="ComputeInstanceFromTemplateReservationAffinitySpecificReservation" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateReservationAffinitySpecificReservation {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservation.property.key">Key</a></code> | <code>string</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservation.property.values">Values</a></code> | <code>string[]</code> | Corresponds to the label values of a reservation resource. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservation.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Corresponds to the label key of a reservation resource.

To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#key ComputeInstanceFromTemplate#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservation.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#values ComputeInstanceFromTemplate#values}

---

### ComputeInstanceFromTemplateScheduling <a name="ComputeInstanceFromTemplateScheduling" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateScheduling {
    object AutomaticRestart = null,
    double AvailabilityDomain = null,
    string InstanceTerminationAction = null,
    ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout LocalSsdRecoveryTimeout = null,
    ComputeInstanceFromTemplateSchedulingMaxRunDuration MaxRunDuration = null,
    double MinNodeCpus = null,
    object NodeAffinities = null,
    string OnHostMaintenance = null,
    ComputeInstanceFromTemplateSchedulingOnInstanceStopAction OnInstanceStopAction = null,
    object Preemptible = null,
    string ProvisioningModel = null,
    string TerminationTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.automaticRestart">AutomaticRestart</a></code> | <code>object</code> | Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user). |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.availabilityDomain">AvailabilityDomain</a></code> | <code>double</code> | Specifies the availability domain, which this instance should be scheduled on. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.instanceTerminationAction">InstanceTerminationAction</a></code> | <code>string</code> | Specifies the action GCE should take when SPOT VM is preempted. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.localSsdRecoveryTimeout">LocalSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout</a></code> | local_ssd_recovery_timeout block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.maxRunDuration">MaxRunDuration</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDuration">ComputeInstanceFromTemplateSchedulingMaxRunDuration</a></code> | max_run_duration block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.minNodeCpus">MinNodeCpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#min_node_cpus ComputeInstanceFromTemplate#min_node_cpus}. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.nodeAffinities">NodeAffinities</a></code> | <code>object</code> | node_affinities block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.onHostMaintenance">OnHostMaintenance</a></code> | <code>string</code> | Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.onInstanceStopAction">OnInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopAction">ComputeInstanceFromTemplateSchedulingOnInstanceStopAction</a></code> | on_instance_stop_action block. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.preemptible">Preemptible</a></code> | <code>object</code> | Whether the instance is preemptible. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.provisioningModel">ProvisioningModel</a></code> | <code>string</code> | Whether the instance is spot. If this is set as SPOT. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.terminationTime">TerminationTime</a></code> | <code>string</code> | Specifies the timestamp, when the instance will be terminated, in RFC3339 text format. |

---

##### `AutomaticRestart`<sup>Optional</sup> <a name="AutomaticRestart" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.automaticRestart"></a>

```csharp
public object AutomaticRestart { get; set; }
```

- *Type:* object

Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#automatic_restart ComputeInstanceFromTemplate#automatic_restart}

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.availabilityDomain"></a>

```csharp
public double AvailabilityDomain { get; set; }
```

- *Type:* double

Specifies the availability domain, which this instance should be scheduled on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#availability_domain ComputeInstanceFromTemplate#availability_domain}

---

##### `InstanceTerminationAction`<sup>Optional</sup> <a name="InstanceTerminationAction" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.instanceTerminationAction"></a>

```csharp
public string InstanceTerminationAction { get; set; }
```

- *Type:* string

Specifies the action GCE should take when SPOT VM is preempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#instance_termination_action ComputeInstanceFromTemplate#instance_termination_action}

---

##### `LocalSsdRecoveryTimeout`<sup>Optional</sup> <a name="LocalSsdRecoveryTimeout" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.localSsdRecoveryTimeout"></a>

```csharp
public ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout LocalSsdRecoveryTimeout { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout</a>

local_ssd_recovery_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#local_ssd_recovery_timeout ComputeInstanceFromTemplate#local_ssd_recovery_timeout}

---

##### `MaxRunDuration`<sup>Optional</sup> <a name="MaxRunDuration" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.maxRunDuration"></a>

```csharp
public ComputeInstanceFromTemplateSchedulingMaxRunDuration MaxRunDuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDuration">ComputeInstanceFromTemplateSchedulingMaxRunDuration</a>

max_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#max_run_duration ComputeInstanceFromTemplate#max_run_duration}

---

##### `MinNodeCpus`<sup>Optional</sup> <a name="MinNodeCpus" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.minNodeCpus"></a>

```csharp
public double MinNodeCpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#min_node_cpus ComputeInstanceFromTemplate#min_node_cpus}.

---

##### `NodeAffinities`<sup>Optional</sup> <a name="NodeAffinities" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.nodeAffinities"></a>

```csharp
public object NodeAffinities { get; set; }
```

- *Type:* object

node_affinities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#node_affinities ComputeInstanceFromTemplate#node_affinities}

---

##### `OnHostMaintenance`<sup>Optional</sup> <a name="OnHostMaintenance" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.onHostMaintenance"></a>

```csharp
public string OnHostMaintenance { get; set; }
```

- *Type:* string

Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#on_host_maintenance ComputeInstanceFromTemplate#on_host_maintenance}

---

##### `OnInstanceStopAction`<sup>Optional</sup> <a name="OnInstanceStopAction" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.onInstanceStopAction"></a>

```csharp
public ComputeInstanceFromTemplateSchedulingOnInstanceStopAction OnInstanceStopAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopAction">ComputeInstanceFromTemplateSchedulingOnInstanceStopAction</a>

on_instance_stop_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#on_instance_stop_action ComputeInstanceFromTemplate#on_instance_stop_action}

---

##### `Preemptible`<sup>Optional</sup> <a name="Preemptible" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.preemptible"></a>

```csharp
public object Preemptible { get; set; }
```

- *Type:* object

Whether the instance is preemptible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#preemptible ComputeInstanceFromTemplate#preemptible}

---

##### `ProvisioningModel`<sup>Optional</sup> <a name="ProvisioningModel" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.provisioningModel"></a>

```csharp
public string ProvisioningModel { get; set; }
```

- *Type:* string

Whether the instance is spot. If this is set as SPOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#provisioning_model ComputeInstanceFromTemplate#provisioning_model}

---

##### `TerminationTime`<sup>Optional</sup> <a name="TerminationTime" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling.property.terminationTime"></a>

```csharp
public string TerminationTime { get; set; }
```

- *Type:* string

Specifies the timestamp, when the instance will be terminated, in RFC3339 text format.

If specified, the instance termination action
will be performed at the termination time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#termination_time ComputeInstanceFromTemplate#termination_time}

---

### ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout <a name="ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout {
    double Seconds,
    double Nanos = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds">Seconds</a></code> | <code>double</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos">Nanos</a></code> | <code>double</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#seconds ComputeInstanceFromTemplate#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#nanos ComputeInstanceFromTemplate#nanos}

---

### ComputeInstanceFromTemplateSchedulingMaxRunDuration <a name="ComputeInstanceFromTemplateSchedulingMaxRunDuration" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateSchedulingMaxRunDuration {
    double Seconds,
    double Nanos = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDuration.property.seconds">Seconds</a></code> | <code>double</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDuration.property.nanos">Nanos</a></code> | <code>double</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDuration.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#seconds ComputeInstanceFromTemplate#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDuration.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#nanos ComputeInstanceFromTemplate#nanos}

---

### ComputeInstanceFromTemplateSchedulingNodeAffinities <a name="ComputeInstanceFromTemplateSchedulingNodeAffinities" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateSchedulingNodeAffinities {
    string Key,
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinities.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#key ComputeInstanceFromTemplate#key}. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinities.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#operator ComputeInstanceFromTemplate#operator}. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinities.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#values ComputeInstanceFromTemplate#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinities.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#key ComputeInstanceFromTemplate#key}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinities.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#operator ComputeInstanceFromTemplate#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinities.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#values ComputeInstanceFromTemplate#values}.

---

### ComputeInstanceFromTemplateSchedulingOnInstanceStopAction <a name="ComputeInstanceFromTemplateSchedulingOnInstanceStopAction" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateSchedulingOnInstanceStopAction {
    object DiscardLocalSsd = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopAction.property.discardLocalSsd">DiscardLocalSsd</a></code> | <code>object</code> | If true, the contents of any attached Local SSD disks will be discarded. |

---

##### `DiscardLocalSsd`<sup>Optional</sup> <a name="DiscardLocalSsd" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopAction.property.discardLocalSsd"></a>

```csharp
public object DiscardLocalSsd { get; set; }
```

- *Type:* object

If true, the contents of any attached Local SSD disks will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#discard_local_ssd ComputeInstanceFromTemplate#discard_local_ssd}

---

### ComputeInstanceFromTemplateScratchDisk <a name="ComputeInstanceFromTemplateScratchDisk" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateScratchDisk {
    string Interface,
    string DeviceName = null,
    double Size = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDisk.property.interface">Interface</a></code> | <code>string</code> | The disk interface used for attaching this disk. One of SCSI or NVME. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDisk.property.deviceName">DeviceName</a></code> | <code>string</code> | Name with which the attached disk is accessible under /dev/disk/by-id/. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDisk.property.size">Size</a></code> | <code>double</code> | The size of the disk in gigabytes. One of 375 or 3000. |

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDisk.property.interface"></a>

```csharp
public string Interface { get; set; }
```

- *Type:* string

The disk interface used for attaching this disk. One of SCSI or NVME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#interface ComputeInstanceFromTemplate#interface}

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDisk.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

Name with which the attached disk is accessible under /dev/disk/by-id/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#device_name ComputeInstanceFromTemplate#device_name}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDisk.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

The size of the disk in gigabytes. One of 375 or 3000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#size ComputeInstanceFromTemplate#size}

---

### ComputeInstanceFromTemplateServiceAccount <a name="ComputeInstanceFromTemplateServiceAccount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateServiceAccount {
    string[] Scopes,
    string Email = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccount.property.scopes">Scopes</a></code> | <code>string[]</code> | A list of service scopes. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccount.property.email">Email</a></code> | <code>string</code> | The service account e-mail address. |

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccount.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

A list of service scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#scopes ComputeInstanceFromTemplate#scopes}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccount.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

The service account e-mail address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#email ComputeInstanceFromTemplate#email}

---

### ComputeInstanceFromTemplateShieldedInstanceConfig <a name="ComputeInstanceFromTemplateShieldedInstanceConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateShieldedInstanceConfig {
    object EnableIntegrityMonitoring = null,
    object EnableSecureBoot = null,
    object EnableVtpm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>object</code> | Whether integrity monitoring is enabled for the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfig.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | Whether secure boot is enabled for the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfig.property.enableVtpm">EnableVtpm</a></code> | <code>object</code> | Whether the instance uses vTPM. |

---

##### `EnableIntegrityMonitoring`<sup>Optional</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```csharp
public object EnableIntegrityMonitoring { get; set; }
```

- *Type:* object

Whether integrity monitoring is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#enable_integrity_monitoring ComputeInstanceFromTemplate#enable_integrity_monitoring}

---

##### `EnableSecureBoot`<sup>Optional</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfig.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; set; }
```

- *Type:* object

Whether secure boot is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#enable_secure_boot ComputeInstanceFromTemplate#enable_secure_boot}

---

##### `EnableVtpm`<sup>Optional</sup> <a name="EnableVtpm" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfig.property.enableVtpm"></a>

```csharp
public object EnableVtpm { get; set; }
```

- *Type:* object

Whether the instance uses vTPM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#enable_vtpm ComputeInstanceFromTemplate#enable_vtpm}

---

### ComputeInstanceFromTemplateTimeouts <a name="ComputeInstanceFromTemplateTimeouts" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#create ComputeInstanceFromTemplate#create}. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#delete ComputeInstanceFromTemplate#delete}. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#update ComputeInstanceFromTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#create ComputeInstanceFromTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#delete ComputeInstanceFromTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instance_from_template#update ComputeInstanceFromTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference <a name="ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization">ResetEnableNestedVirtualization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking">ResetEnableUefiNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit">ResetPerformanceMonitoringUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore">ResetThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetTurboMode">ResetTurboMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount">ResetVisibleCoreCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableNestedVirtualization` <a name="ResetEnableNestedVirtualization" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization"></a>

```csharp
private void ResetEnableNestedVirtualization()
```

##### `ResetEnableUefiNetworking` <a name="ResetEnableUefiNetworking" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking"></a>

```csharp
private void ResetEnableUefiNetworking()
```

##### `ResetPerformanceMonitoringUnit` <a name="ResetPerformanceMonitoringUnit" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit"></a>

```csharp
private void ResetPerformanceMonitoringUnit()
```

##### `ResetThreadsPerCore` <a name="ResetThreadsPerCore" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore"></a>

```csharp
private void ResetThreadsPerCore()
```

##### `ResetTurboMode` <a name="ResetTurboMode" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetTurboMode"></a>

```csharp
private void ResetTurboMode()
```

##### `ResetVisibleCoreCount` <a name="ResetVisibleCoreCount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount"></a>

```csharp
private void ResetVisibleCoreCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput">EnableNestedVirtualizationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput">EnableUefiNetworkingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput">PerformanceMonitoringUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">ThreadsPerCoreInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.turboModeInput">TurboModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput">VisibleCoreCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking">EnableUefiNetworking</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit">PerformanceMonitoringUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.turboMode">TurboMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount">VisibleCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeatures">ComputeInstanceFromTemplateAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableNestedVirtualizationInput`<sup>Optional</sup> <a name="EnableNestedVirtualizationInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput"></a>

```csharp
public object EnableNestedVirtualizationInput { get; }
```

- *Type:* object

---

##### `EnableUefiNetworkingInput`<sup>Optional</sup> <a name="EnableUefiNetworkingInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput"></a>

```csharp
public object EnableUefiNetworkingInput { get; }
```

- *Type:* object

---

##### `PerformanceMonitoringUnitInput`<sup>Optional</sup> <a name="PerformanceMonitoringUnitInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput"></a>

```csharp
public string PerformanceMonitoringUnitInput { get; }
```

- *Type:* string

---

##### `ThreadsPerCoreInput`<sup>Optional</sup> <a name="ThreadsPerCoreInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```csharp
public double ThreadsPerCoreInput { get; }
```

- *Type:* double

---

##### `TurboModeInput`<sup>Optional</sup> <a name="TurboModeInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.turboModeInput"></a>

```csharp
public string TurboModeInput { get; }
```

- *Type:* string

---

##### `VisibleCoreCountInput`<sup>Optional</sup> <a name="VisibleCoreCountInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput"></a>

```csharp
public double VisibleCoreCountInput { get; }
```

- *Type:* double

---

##### `EnableNestedVirtualization`<sup>Required</sup> <a name="EnableNestedVirtualization" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization"></a>

```csharp
public object EnableNestedVirtualization { get; }
```

- *Type:* object

---

##### `EnableUefiNetworking`<sup>Required</sup> <a name="EnableUefiNetworking" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking"></a>

```csharp
public object EnableUefiNetworking { get; }
```

- *Type:* object

---

##### `PerformanceMonitoringUnit`<sup>Required</sup> <a name="PerformanceMonitoringUnit" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit"></a>

```csharp
public string PerformanceMonitoringUnit { get; }
```

- *Type:* string

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```csharp
public double ThreadsPerCore { get; }
```

- *Type:* double

---

##### `TurboMode`<sup>Required</sup> <a name="TurboMode" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.turboMode"></a>

```csharp
public string TurboMode { get; }
```

- *Type:* string

---

##### `VisibleCoreCount`<sup>Required</sup> <a name="VisibleCoreCount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount"></a>

```csharp
public double VisibleCoreCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceFromTemplateAdvancedMachineFeatures InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAdvancedMachineFeatures">ComputeInstanceFromTemplateAdvancedMachineFeatures</a>

---


### ComputeInstanceFromTemplateAttachedDiskList <a name="ComputeInstanceFromTemplateAttachedDiskList" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateAttachedDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.get"></a>

```csharp
private ComputeInstanceFromTemplateAttachedDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceFromTemplateAttachedDiskOutputReference <a name="ComputeInstanceFromTemplateAttachedDiskOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateAttachedDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.resetDiskEncryptionKeyRaw">ResetDiskEncryptionKeyRaw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.resetDiskEncryptionKeyRsa">ResetDiskEncryptionKeyRsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.resetDiskEncryptionServiceAccount">ResetDiskEncryptionServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.resetForceAttach">ResetForceAttach</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.resetDeviceName"></a>

```csharp
private void ResetDeviceName()
```

##### `ResetDiskEncryptionKeyRaw` <a name="ResetDiskEncryptionKeyRaw" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.resetDiskEncryptionKeyRaw"></a>

```csharp
private void ResetDiskEncryptionKeyRaw()
```

##### `ResetDiskEncryptionKeyRsa` <a name="ResetDiskEncryptionKeyRsa" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.resetDiskEncryptionKeyRsa"></a>

```csharp
private void ResetDiskEncryptionKeyRsa()
```

##### `ResetDiskEncryptionServiceAccount` <a name="ResetDiskEncryptionServiceAccount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.resetDiskEncryptionServiceAccount"></a>

```csharp
private void ResetDiskEncryptionServiceAccount()
```

##### `ResetForceAttach` <a name="ResetForceAttach" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.resetForceAttach"></a>

```csharp
private void ResetForceAttach()
```

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.resetKmsKeySelfLink"></a>

```csharp
private void ResetKmsKeySelfLink()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.diskEncryptionKeySha256">DiskEncryptionKeySha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.diskEncryptionKeyRawInput">DiskEncryptionKeyRawInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.diskEncryptionKeyRsaInput">DiskEncryptionKeyRsaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.diskEncryptionServiceAccountInput">DiskEncryptionServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.forceAttachInput">ForceAttachInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.diskEncryptionKeyRaw">DiskEncryptionKeyRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.diskEncryptionKeyRsa">DiskEncryptionKeyRsa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.diskEncryptionServiceAccount">DiskEncryptionServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.forceAttach">ForceAttach</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeySha256`<sup>Required</sup> <a name="DiskEncryptionKeySha256" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.diskEncryptionKeySha256"></a>

```csharp
public string DiskEncryptionKeySha256 { get; }
```

- *Type:* string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeyRawInput`<sup>Optional</sup> <a name="DiskEncryptionKeyRawInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.diskEncryptionKeyRawInput"></a>

```csharp
public string DiskEncryptionKeyRawInput { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeyRsaInput`<sup>Optional</sup> <a name="DiskEncryptionKeyRsaInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.diskEncryptionKeyRsaInput"></a>

```csharp
public string DiskEncryptionKeyRsaInput { get; }
```

- *Type:* string

---

##### `DiskEncryptionServiceAccountInput`<sup>Optional</sup> <a name="DiskEncryptionServiceAccountInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.diskEncryptionServiceAccountInput"></a>

```csharp
public string DiskEncryptionServiceAccountInput { get; }
```

- *Type:* string

---

##### `ForceAttachInput`<sup>Optional</sup> <a name="ForceAttachInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.forceAttachInput"></a>

```csharp
public object ForceAttachInput { get; }
```

- *Type:* object

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.kmsKeySelfLinkInput"></a>

```csharp
public string KmsKeySelfLinkInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeyRaw`<sup>Required</sup> <a name="DiskEncryptionKeyRaw" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.diskEncryptionKeyRaw"></a>

```csharp
public string DiskEncryptionKeyRaw { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeyRsa`<sup>Required</sup> <a name="DiskEncryptionKeyRsa" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.diskEncryptionKeyRsa"></a>

```csharp
public string DiskEncryptionKeyRsa { get; }
```

- *Type:* string

---

##### `DiskEncryptionServiceAccount`<sup>Required</sup> <a name="DiskEncryptionServiceAccount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.diskEncryptionServiceAccount"></a>

```csharp
public string DiskEncryptionServiceAccount { get; }
```

- *Type:* string

---

##### `ForceAttach`<sup>Required</sup> <a name="ForceAttach" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.forceAttach"></a>

```csharp
public object ForceAttach { get; }
```

- *Type:* object

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateAttachedDiskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference <a name="ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.putSourceImageEncryptionKey">PutSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.putSourceSnapshotEncryptionKey">PutSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetArchitecture">ResetArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetEnableConfidentialCompute">ResetEnableConfidentialCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetProvisionedIops">ResetProvisionedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetProvisionedThroughput">ResetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetResourcePolicies">ResetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetSnapshot">ResetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetSourceImageEncryptionKey">ResetSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetSourceSnapshotEncryptionKey">ResetSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetStoragePool">ResetStoragePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceImageEncryptionKey` <a name="PutSourceImageEncryptionKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.putSourceImageEncryptionKey"></a>

```csharp
private void PutSourceImageEncryptionKey(ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.putSourceImageEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey">ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey</a>

---

##### `PutSourceSnapshotEncryptionKey` <a name="PutSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.putSourceSnapshotEncryptionKey"></a>

```csharp
private void PutSourceSnapshotEncryptionKey(ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.putSourceSnapshotEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey">ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey</a>

---

##### `ResetArchitecture` <a name="ResetArchitecture" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetArchitecture"></a>

```csharp
private void ResetArchitecture()
```

##### `ResetEnableConfidentialCompute` <a name="ResetEnableConfidentialCompute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetEnableConfidentialCompute"></a>

```csharp
private void ResetEnableConfidentialCompute()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProvisionedIops` <a name="ResetProvisionedIops" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetProvisionedIops"></a>

```csharp
private void ResetProvisionedIops()
```

##### `ResetProvisionedThroughput` <a name="ResetProvisionedThroughput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetProvisionedThroughput"></a>

```csharp
private void ResetProvisionedThroughput()
```

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetResourceManagerTags"></a>

```csharp
private void ResetResourceManagerTags()
```

##### `ResetResourcePolicies` <a name="ResetResourcePolicies" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetResourcePolicies"></a>

```csharp
private void ResetResourcePolicies()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetSize"></a>

```csharp
private void ResetSize()
```

##### `ResetSnapshot` <a name="ResetSnapshot" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetSnapshot"></a>

```csharp
private void ResetSnapshot()
```

##### `ResetSourceImageEncryptionKey` <a name="ResetSourceImageEncryptionKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetSourceImageEncryptionKey"></a>

```csharp
private void ResetSourceImageEncryptionKey()
```

##### `ResetSourceSnapshotEncryptionKey` <a name="ResetSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetSourceSnapshotEncryptionKey"></a>

```csharp
private void ResetSourceSnapshotEncryptionKey()
```

##### `ResetStoragePool` <a name="ResetStoragePool" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetStoragePool"></a>

```csharp
private void ResetStoragePool()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.sourceImageEncryptionKey">SourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference">ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.sourceSnapshotEncryptionKey">SourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference">ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.architectureInput">ArchitectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.enableConfidentialComputeInput">EnableConfidentialComputeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.provisionedIopsInput">ProvisionedIopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.provisionedThroughputInput">ProvisionedThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.resourcePoliciesInput">ResourcePoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.snapshotInput">SnapshotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.sourceImageEncryptionKeyInput">SourceImageEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey">ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.sourceSnapshotEncryptionKeyInput">SourceSnapshotEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey">ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.storagePoolInput">StoragePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.provisionedIops">ProvisionedIops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.resourcePolicies">ResourcePolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.snapshot">Snapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.storagePool">StoragePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams">ComputeInstanceFromTemplateBootDiskInitializeParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceImageEncryptionKey`<sup>Required</sup> <a name="SourceImageEncryptionKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.sourceImageEncryptionKey"></a>

```csharp
public ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference SourceImageEncryptionKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference">ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference</a>

---

##### `SourceSnapshotEncryptionKey`<sup>Required</sup> <a name="SourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.sourceSnapshotEncryptionKey"></a>

```csharp
public ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference SourceSnapshotEncryptionKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference">ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference</a>

---

##### `ArchitectureInput`<sup>Optional</sup> <a name="ArchitectureInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.architectureInput"></a>

```csharp
public string ArchitectureInput { get; }
```

- *Type:* string

---

##### `EnableConfidentialComputeInput`<sup>Optional</sup> <a name="EnableConfidentialComputeInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.enableConfidentialComputeInput"></a>

```csharp
public object EnableConfidentialComputeInput { get; }
```

- *Type:* object

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProvisionedIopsInput`<sup>Optional</sup> <a name="ProvisionedIopsInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.provisionedIopsInput"></a>

```csharp
public double ProvisionedIopsInput { get; }
```

- *Type:* double

---

##### `ProvisionedThroughputInput`<sup>Optional</sup> <a name="ProvisionedThroughputInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.provisionedThroughputInput"></a>

```csharp
public double ProvisionedThroughputInput { get; }
```

- *Type:* double

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.resourceManagerTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourcePoliciesInput`<sup>Optional</sup> <a name="ResourcePoliciesInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.resourcePoliciesInput"></a>

```csharp
public string[] ResourcePoliciesInput { get; }
```

- *Type:* string[]

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `SnapshotInput`<sup>Optional</sup> <a name="SnapshotInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.snapshotInput"></a>

```csharp
public string SnapshotInput { get; }
```

- *Type:* string

---

##### `SourceImageEncryptionKeyInput`<sup>Optional</sup> <a name="SourceImageEncryptionKeyInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.sourceImageEncryptionKeyInput"></a>

```csharp
public ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey SourceImageEncryptionKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey">ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey</a>

---

##### `SourceSnapshotEncryptionKeyInput`<sup>Optional</sup> <a name="SourceSnapshotEncryptionKeyInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.sourceSnapshotEncryptionKeyInput"></a>

```csharp
public ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey SourceSnapshotEncryptionKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey">ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey</a>

---

##### `StoragePoolInput`<sup>Optional</sup> <a name="StoragePoolInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.storagePoolInput"></a>

```csharp
public string StoragePoolInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `EnableConfidentialCompute`<sup>Required</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.enableConfidentialCompute"></a>

```csharp
public object EnableConfidentialCompute { get; }
```

- *Type:* object

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProvisionedIops`<sup>Required</sup> <a name="ProvisionedIops" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.provisionedIops"></a>

```csharp
public double ProvisionedIops { get; }
```

- *Type:* double

---

##### `ProvisionedThroughput`<sup>Required</sup> <a name="ProvisionedThroughput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.provisionedThroughput"></a>

```csharp
public double ProvisionedThroughput { get; }
```

- *Type:* double

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourcePolicies`<sup>Required</sup> <a name="ResourcePolicies" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.resourcePolicies"></a>

```csharp
public string[] ResourcePolicies { get; }
```

- *Type:* string[]

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.snapshot"></a>

```csharp
public string Snapshot { get; }
```

- *Type:* string

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.storagePool"></a>

```csharp
public string StoragePool { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceFromTemplateBootDiskInitializeParams InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams">ComputeInstanceFromTemplateBootDiskInitializeParams</a>

---


### ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference <a name="ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.resetRawKey">ResetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.resetRsaEncryptedKey">ResetRsaEncryptedKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```csharp
private void ResetKmsKeySelfLink()
```

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```csharp
private void ResetKmsKeyServiceAccount()
```

##### `ResetRawKey` <a name="ResetRawKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.resetRawKey"></a>

```csharp
private void ResetRawKey()
```

##### `ResetRsaEncryptedKey` <a name="ResetRsaEncryptedKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```csharp
private void ResetRsaEncryptedKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.sha256">Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.rawKeyInput">RawKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">RsaEncryptedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.rawKey">RawKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKey">RsaEncryptedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey">ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.sha256"></a>

```csharp
public string Sha256 { get; }
```

- *Type:* string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```csharp
public string KmsKeySelfLinkInput { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```csharp
public string KmsKeyServiceAccountInput { get; }
```

- *Type:* string

---

##### `RawKeyInput`<sup>Optional</sup> <a name="RawKeyInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.rawKeyInput"></a>

```csharp
public string RawKeyInput { get; }
```

- *Type:* string

---

##### `RsaEncryptedKeyInput`<sup>Optional</sup> <a name="RsaEncryptedKeyInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```csharp
public string RsaEncryptedKeyInput { get; }
```

- *Type:* string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; }
```

- *Type:* string

---

##### `RawKey`<sup>Required</sup> <a name="RawKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.rawKey"></a>

```csharp
public string RawKey { get; }
```

- *Type:* string

---

##### `RsaEncryptedKey`<sup>Required</sup> <a name="RsaEncryptedKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```csharp
public string RsaEncryptedKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey">ComputeInstanceFromTemplateBootDiskInitializeParamsSourceImageEncryptionKey</a>

---


### ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference <a name="ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.resetRawKey">ResetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.resetRsaEncryptedKey">ResetRsaEncryptedKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```csharp
private void ResetKmsKeySelfLink()
```

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```csharp
private void ResetKmsKeyServiceAccount()
```

##### `ResetRawKey` <a name="ResetRawKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.resetRawKey"></a>

```csharp
private void ResetRawKey()
```

##### `ResetRsaEncryptedKey` <a name="ResetRsaEncryptedKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```csharp
private void ResetRsaEncryptedKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.sha256">Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput">RawKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">RsaEncryptedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.rawKey">RawKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey">RsaEncryptedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey">ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.sha256"></a>

```csharp
public string Sha256 { get; }
```

- *Type:* string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```csharp
public string KmsKeySelfLinkInput { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```csharp
public string KmsKeyServiceAccountInput { get; }
```

- *Type:* string

---

##### `RawKeyInput`<sup>Optional</sup> <a name="RawKeyInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput"></a>

```csharp
public string RawKeyInput { get; }
```

- *Type:* string

---

##### `RsaEncryptedKeyInput`<sup>Optional</sup> <a name="RsaEncryptedKeyInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```csharp
public string RsaEncryptedKeyInput { get; }
```

- *Type:* string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; }
```

- *Type:* string

---

##### `RawKey`<sup>Required</sup> <a name="RawKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.rawKey"></a>

```csharp
public string RawKey { get; }
```

- *Type:* string

---

##### `RsaEncryptedKey`<sup>Required</sup> <a name="RsaEncryptedKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```csharp
public string RsaEncryptedKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey">ComputeInstanceFromTemplateBootDiskInitializeParamsSourceSnapshotEncryptionKey</a>

---


### ComputeInstanceFromTemplateBootDiskOutputReference <a name="ComputeInstanceFromTemplateBootDiskOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateBootDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.putInitializeParams">PutInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetAutoDelete">ResetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetDiskEncryptionKeyRaw">ResetDiskEncryptionKeyRaw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetDiskEncryptionKeyRsa">ResetDiskEncryptionKeyRsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetDiskEncryptionServiceAccount">ResetDiskEncryptionServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetForceAttach">ResetForceAttach</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetGuestOsFeatures">ResetGuestOsFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetInitializeParams">ResetInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetInterface">ResetInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInitializeParams` <a name="PutInitializeParams" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.putInitializeParams"></a>

```csharp
private void PutInitializeParams(ComputeInstanceFromTemplateBootDiskInitializeParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.putInitializeParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams">ComputeInstanceFromTemplateBootDiskInitializeParams</a>

---

##### `ResetAutoDelete` <a name="ResetAutoDelete" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetAutoDelete"></a>

```csharp
private void ResetAutoDelete()
```

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetDeviceName"></a>

```csharp
private void ResetDeviceName()
```

##### `ResetDiskEncryptionKeyRaw` <a name="ResetDiskEncryptionKeyRaw" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetDiskEncryptionKeyRaw"></a>

```csharp
private void ResetDiskEncryptionKeyRaw()
```

##### `ResetDiskEncryptionKeyRsa` <a name="ResetDiskEncryptionKeyRsa" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetDiskEncryptionKeyRsa"></a>

```csharp
private void ResetDiskEncryptionKeyRsa()
```

##### `ResetDiskEncryptionServiceAccount` <a name="ResetDiskEncryptionServiceAccount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetDiskEncryptionServiceAccount"></a>

```csharp
private void ResetDiskEncryptionServiceAccount()
```

##### `ResetForceAttach` <a name="ResetForceAttach" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetForceAttach"></a>

```csharp
private void ResetForceAttach()
```

##### `ResetGuestOsFeatures` <a name="ResetGuestOsFeatures" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetGuestOsFeatures"></a>

```csharp
private void ResetGuestOsFeatures()
```

##### `ResetInitializeParams` <a name="ResetInitializeParams" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetInitializeParams"></a>

```csharp
private void ResetInitializeParams()
```

##### `ResetInterface` <a name="ResetInterface" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetInterface"></a>

```csharp
private void ResetInterface()
```

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetKmsKeySelfLink"></a>

```csharp
private void ResetKmsKeySelfLink()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.diskEncryptionKeySha256">DiskEncryptionKeySha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.initializeParams">InitializeParams</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference">ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.autoDeleteInput">AutoDeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.diskEncryptionKeyRawInput">DiskEncryptionKeyRawInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.diskEncryptionKeyRsaInput">DiskEncryptionKeyRsaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.diskEncryptionServiceAccountInput">DiskEncryptionServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.forceAttachInput">ForceAttachInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.guestOsFeaturesInput">GuestOsFeaturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.initializeParamsInput">InitializeParamsInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams">ComputeInstanceFromTemplateBootDiskInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.interfaceInput">InterfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.autoDelete">AutoDelete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.diskEncryptionKeyRaw">DiskEncryptionKeyRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.diskEncryptionKeyRsa">DiskEncryptionKeyRsa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.diskEncryptionServiceAccount">DiskEncryptionServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.forceAttach">ForceAttach</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.guestOsFeatures">GuestOsFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.interface">Interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk">ComputeInstanceFromTemplateBootDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeySha256`<sup>Required</sup> <a name="DiskEncryptionKeySha256" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.diskEncryptionKeySha256"></a>

```csharp
public string DiskEncryptionKeySha256 { get; }
```

- *Type:* string

---

##### `InitializeParams`<sup>Required</sup> <a name="InitializeParams" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.initializeParams"></a>

```csharp
public ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference InitializeParams { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference">ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference</a>

---

##### `AutoDeleteInput`<sup>Optional</sup> <a name="AutoDeleteInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.autoDeleteInput"></a>

```csharp
public object AutoDeleteInput { get; }
```

- *Type:* object

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeyRawInput`<sup>Optional</sup> <a name="DiskEncryptionKeyRawInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.diskEncryptionKeyRawInput"></a>

```csharp
public string DiskEncryptionKeyRawInput { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeyRsaInput`<sup>Optional</sup> <a name="DiskEncryptionKeyRsaInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.diskEncryptionKeyRsaInput"></a>

```csharp
public string DiskEncryptionKeyRsaInput { get; }
```

- *Type:* string

---

##### `DiskEncryptionServiceAccountInput`<sup>Optional</sup> <a name="DiskEncryptionServiceAccountInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.diskEncryptionServiceAccountInput"></a>

```csharp
public string DiskEncryptionServiceAccountInput { get; }
```

- *Type:* string

---

##### `ForceAttachInput`<sup>Optional</sup> <a name="ForceAttachInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.forceAttachInput"></a>

```csharp
public object ForceAttachInput { get; }
```

- *Type:* object

---

##### `GuestOsFeaturesInput`<sup>Optional</sup> <a name="GuestOsFeaturesInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.guestOsFeaturesInput"></a>

```csharp
public string[] GuestOsFeaturesInput { get; }
```

- *Type:* string[]

---

##### `InitializeParamsInput`<sup>Optional</sup> <a name="InitializeParamsInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.initializeParamsInput"></a>

```csharp
public ComputeInstanceFromTemplateBootDiskInitializeParams InitializeParamsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskInitializeParams">ComputeInstanceFromTemplateBootDiskInitializeParams</a>

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.interfaceInput"></a>

```csharp
public string InterfaceInput { get; }
```

- *Type:* string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.kmsKeySelfLinkInput"></a>

```csharp
public string KmsKeySelfLinkInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `AutoDelete`<sup>Required</sup> <a name="AutoDelete" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.autoDelete"></a>

```csharp
public object AutoDelete { get; }
```

- *Type:* object

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeyRaw`<sup>Required</sup> <a name="DiskEncryptionKeyRaw" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.diskEncryptionKeyRaw"></a>

```csharp
public string DiskEncryptionKeyRaw { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeyRsa`<sup>Required</sup> <a name="DiskEncryptionKeyRsa" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.diskEncryptionKeyRsa"></a>

```csharp
public string DiskEncryptionKeyRsa { get; }
```

- *Type:* string

---

##### `DiskEncryptionServiceAccount`<sup>Required</sup> <a name="DiskEncryptionServiceAccount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.diskEncryptionServiceAccount"></a>

```csharp
public string DiskEncryptionServiceAccount { get; }
```

- *Type:* string

---

##### `ForceAttach`<sup>Required</sup> <a name="ForceAttach" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.forceAttach"></a>

```csharp
public object ForceAttach { get; }
```

- *Type:* object

---

##### `GuestOsFeatures`<sup>Required</sup> <a name="GuestOsFeatures" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.guestOsFeatures"></a>

```csharp
public string[] GuestOsFeatures { get; }
```

- *Type:* string[]

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.interface"></a>

```csharp
public string Interface { get; }
```

- *Type:* string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDiskOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceFromTemplateBootDisk InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateBootDisk">ComputeInstanceFromTemplateBootDisk</a>

---


### ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference <a name="ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType">ResetConfidentialInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute">ResetEnableConfidentialCompute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfidentialInstanceType` <a name="ResetConfidentialInstanceType" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType"></a>

```csharp
private void ResetConfidentialInstanceType()
```

##### `ResetEnableConfidentialCompute` <a name="ResetEnableConfidentialCompute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute"></a>

```csharp
private void ResetEnableConfidentialCompute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput">ConfidentialInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput">EnableConfidentialComputeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType">ConfidentialInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfig">ComputeInstanceFromTemplateConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfidentialInstanceTypeInput`<sup>Optional</sup> <a name="ConfidentialInstanceTypeInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput"></a>

```csharp
public string ConfidentialInstanceTypeInput { get; }
```

- *Type:* string

---

##### `EnableConfidentialComputeInput`<sup>Optional</sup> <a name="EnableConfidentialComputeInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput"></a>

```csharp
public object EnableConfidentialComputeInput { get; }
```

- *Type:* object

---

##### `ConfidentialInstanceType`<sup>Required</sup> <a name="ConfidentialInstanceType" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType"></a>

```csharp
public string ConfidentialInstanceType { get; }
```

- *Type:* string

---

##### `EnableConfidentialCompute`<sup>Required</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```csharp
public object EnableConfidentialCompute { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceFromTemplateConfidentialInstanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateConfidentialInstanceConfig">ComputeInstanceFromTemplateConfidentialInstanceConfig</a>

---


### ComputeInstanceFromTemplateGuestAcceleratorList <a name="ComputeInstanceFromTemplateGuestAcceleratorList" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateGuestAcceleratorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.get"></a>

```csharp
private ComputeInstanceFromTemplateGuestAcceleratorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceFromTemplateGuestAcceleratorOutputReference <a name="ComputeInstanceFromTemplateGuestAcceleratorOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateGuestAcceleratorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference <a name="ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```csharp
private void ResetKmsKeySelfLink()
```

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```csharp
private void ResetKmsKeyServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.property.sha256">Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKey">ComputeInstanceFromTemplateInstanceEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.property.sha256"></a>

```csharp
public string Sha256 { get; }
```

- *Type:* string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```csharp
public string KmsKeySelfLinkInput { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```csharp
public string KmsKeyServiceAccountInput { get; }
```

- *Type:* string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceFromTemplateInstanceEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateInstanceEncryptionKey">ComputeInstanceFromTemplateInstanceEncryptionKey</a>

---


### ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList <a name="ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.get"></a>

```csharp
private ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference <a name="ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp">ResetNatIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier">ResetNetworkTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.resetPublicPtrDomainName">ResetPublicPtrDomainName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNatIp` <a name="ResetNatIp" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp"></a>

```csharp
private void ResetNatIp()
```

##### `ResetNetworkTier` <a name="ResetNetworkTier" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier"></a>

```csharp
private void ResetNetworkTier()
```

##### `ResetPublicPtrDomainName` <a name="ResetPublicPtrDomainName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.resetPublicPtrDomainName"></a>

```csharp
private void ResetPublicPtrDomainName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput">NatIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput">NetworkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainNameInput">PublicPtrDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp">NatIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier">NetworkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NatIpInput`<sup>Optional</sup> <a name="NatIpInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput"></a>

```csharp
public string NatIpInput { get; }
```

- *Type:* string

---

##### `NetworkTierInput`<sup>Optional</sup> <a name="NetworkTierInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput"></a>

```csharp
public string NetworkTierInput { get; }
```

- *Type:* string

---

##### `PublicPtrDomainNameInput`<sup>Optional</sup> <a name="PublicPtrDomainNameInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainNameInput"></a>

```csharp
public string PublicPtrDomainNameInput { get; }
```

- *Type:* string

---

##### `NatIp`<sup>Required</sup> <a name="NatIp" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp"></a>

```csharp
public string NatIp { get; }
```

- *Type:* string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier"></a>

```csharp
public string NetworkTier { get; }
```

- *Type:* string

---

##### `PublicPtrDomainName`<sup>Required</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName"></a>

```csharp
public string PublicPtrDomainName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList <a name="ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.get"></a>

```csharp
private ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference <a name="ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName">ResetSubnetworkRangeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubnetworkRangeName` <a name="ResetSubnetworkRangeName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName"></a>

```csharp
private void ResetSubnetworkRangeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput">IpCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput">SubnetworkRangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName">SubnetworkRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpCidrRangeInput`<sup>Optional</sup> <a name="IpCidrRangeInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput"></a>

```csharp
public string IpCidrRangeInput { get; }
```

- *Type:* string

---

##### `SubnetworkRangeNameInput`<sup>Optional</sup> <a name="SubnetworkRangeNameInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput"></a>

```csharp
public string SubnetworkRangeNameInput { get; }
```

- *Type:* string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; }
```

- *Type:* string

---

##### `SubnetworkRangeName`<sup>Required</sup> <a name="SubnetworkRangeName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName"></a>

```csharp
public string SubnetworkRangeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList <a name="ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.get"></a>

```csharp
private ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference <a name="ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6">ResetExternalIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6PrefixLength">ResetExternalIpv6PrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resetPublicPtrDomainName">ResetPublicPtrDomainName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExternalIpv6` <a name="ResetExternalIpv6" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6"></a>

```csharp
private void ResetExternalIpv6()
```

##### `ResetExternalIpv6PrefixLength` <a name="ResetExternalIpv6PrefixLength" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6PrefixLength"></a>

```csharp
private void ResetExternalIpv6PrefixLength()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPublicPtrDomainName` <a name="ResetPublicPtrDomainName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resetPublicPtrDomainName"></a>

```csharp
private void ResetPublicPtrDomainName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6Input">ExternalIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLengthInput">ExternalIpv6PrefixLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput">NetworkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainNameInput">PublicPtrDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6">ExternalIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength">ExternalIpv6PrefixLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier">NetworkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalIpv6Input`<sup>Optional</sup> <a name="ExternalIpv6Input" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6Input"></a>

```csharp
public string ExternalIpv6Input { get; }
```

- *Type:* string

---

##### `ExternalIpv6PrefixLengthInput`<sup>Optional</sup> <a name="ExternalIpv6PrefixLengthInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLengthInput"></a>

```csharp
public string ExternalIpv6PrefixLengthInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkTierInput`<sup>Optional</sup> <a name="NetworkTierInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput"></a>

```csharp
public string NetworkTierInput { get; }
```

- *Type:* string

---

##### `PublicPtrDomainNameInput`<sup>Optional</sup> <a name="PublicPtrDomainNameInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainNameInput"></a>

```csharp
public string PublicPtrDomainNameInput { get; }
```

- *Type:* string

---

##### `ExternalIpv6`<sup>Required</sup> <a name="ExternalIpv6" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6"></a>

```csharp
public string ExternalIpv6 { get; }
```

- *Type:* string

---

##### `ExternalIpv6PrefixLength`<sup>Required</sup> <a name="ExternalIpv6PrefixLength" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength"></a>

```csharp
public string ExternalIpv6PrefixLength { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier"></a>

```csharp
public string NetworkTier { get; }
```

- *Type:* string

---

##### `PublicPtrDomainName`<sup>Required</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName"></a>

```csharp
public string PublicPtrDomainName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceFromTemplateNetworkInterfaceList <a name="ComputeInstanceFromTemplateNetworkInterfaceList" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateNetworkInterfaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.get"></a>

```csharp
private ComputeInstanceFromTemplateNetworkInterfaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceFromTemplateNetworkInterfaceOutputReference <a name="ComputeInstanceFromTemplateNetworkInterfaceOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateNetworkInterfaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.putAccessConfig">PutAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.putAliasIpRange">PutAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig">PutIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetAccessConfig">ResetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetAliasIpRange">ResetAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength">ResetInternalIpv6PrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig">ResetIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetNetworkIp">ResetNetworkIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetNicType">ResetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetQueueCount">ResetQueueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetStackType">ResetStackType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetSubnetworkProject">ResetSubnetworkProject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessConfig` <a name="PutAccessConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.putAccessConfig"></a>

```csharp
private void PutAccessConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* object

---

##### `PutAliasIpRange` <a name="PutAliasIpRange" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.putAliasIpRange"></a>

```csharp
private void PutAliasIpRange(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.putAliasIpRange.parameter.value"></a>

- *Type:* object

---

##### `PutIpv6AccessConfig` <a name="PutIpv6AccessConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig"></a>

```csharp
private void PutIpv6AccessConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessConfig` <a name="ResetAccessConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetAccessConfig"></a>

```csharp
private void ResetAccessConfig()
```

##### `ResetAliasIpRange` <a name="ResetAliasIpRange" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetAliasIpRange"></a>

```csharp
private void ResetAliasIpRange()
```

##### `ResetInternalIpv6PrefixLength` <a name="ResetInternalIpv6PrefixLength" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength"></a>

```csharp
private void ResetInternalIpv6PrefixLength()
```

##### `ResetIpv6AccessConfig` <a name="ResetIpv6AccessConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig"></a>

```csharp
private void ResetIpv6AccessConfig()
```

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetIpv6Address"></a>

```csharp
private void ResetIpv6Address()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetNetworkAttachment"></a>

```csharp
private void ResetNetworkAttachment()
```

##### `ResetNetworkIp` <a name="ResetNetworkIp" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetNetworkIp"></a>

```csharp
private void ResetNetworkIp()
```

##### `ResetNicType` <a name="ResetNicType" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetNicType"></a>

```csharp
private void ResetNicType()
```

##### `ResetQueueCount` <a name="ResetQueueCount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetQueueCount"></a>

```csharp
private void ResetQueueCount()
```

##### `ResetStackType` <a name="ResetStackType" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetStackType"></a>

```csharp
private void ResetStackType()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetSubnetwork"></a>

```csharp
private void ResetSubnetwork()
```

##### `ResetSubnetworkProject` <a name="ResetSubnetworkProject" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetSubnetworkProject"></a>

```csharp
private void ResetSubnetworkProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList">ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.aliasIpRange">AliasIpRange</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList">ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig">Ipv6AccessConfig</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList">ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.ipv6AccessType">Ipv6AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.accessConfigInput">AccessConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput">AliasIpRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput">InternalIpv6PrefixLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput">Ipv6AccessConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.networkIpInput">NetworkIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.nicTypeInput">NicTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.queueCountInput">QueueCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.stackTypeInput">StackTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput">SubnetworkProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength">InternalIpv6PrefixLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.networkIp">NetworkIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.nicType">NicType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.queueCount">QueueCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.stackType">StackType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.subnetworkProject">SubnetworkProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.accessConfig"></a>

```csharp
public ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList AccessConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList">ComputeInstanceFromTemplateNetworkInterfaceAccessConfigList</a>

---

##### `AliasIpRange`<sup>Required</sup> <a name="AliasIpRange" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.aliasIpRange"></a>

```csharp
public ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList AliasIpRange { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList">ComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList</a>

---

##### `Ipv6AccessConfig`<sup>Required</sup> <a name="Ipv6AccessConfig" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig"></a>

```csharp
public ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList Ipv6AccessConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList">ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList</a>

---

##### `Ipv6AccessType`<sup>Required</sup> <a name="Ipv6AccessType" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.ipv6AccessType"></a>

```csharp
public string Ipv6AccessType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `AccessConfigInput`<sup>Optional</sup> <a name="AccessConfigInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.accessConfigInput"></a>

```csharp
public object AccessConfigInput { get; }
```

- *Type:* object

---

##### `AliasIpRangeInput`<sup>Optional</sup> <a name="AliasIpRangeInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput"></a>

```csharp
public object AliasIpRangeInput { get; }
```

- *Type:* object

---

##### `InternalIpv6PrefixLengthInput`<sup>Optional</sup> <a name="InternalIpv6PrefixLengthInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput"></a>

```csharp
public double InternalIpv6PrefixLengthInput { get; }
```

- *Type:* double

---

##### `Ipv6AccessConfigInput`<sup>Optional</sup> <a name="Ipv6AccessConfigInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput"></a>

```csharp
public object Ipv6AccessConfigInput { get; }
```

- *Type:* object

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```csharp
public string Ipv6AddressInput { get; }
```

- *Type:* string

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.networkAttachmentInput"></a>

```csharp
public string NetworkAttachmentInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `NetworkIpInput`<sup>Optional</sup> <a name="NetworkIpInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.networkIpInput"></a>

```csharp
public string NetworkIpInput { get; }
```

- *Type:* string

---

##### `NicTypeInput`<sup>Optional</sup> <a name="NicTypeInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.nicTypeInput"></a>

```csharp
public string NicTypeInput { get; }
```

- *Type:* string

---

##### `QueueCountInput`<sup>Optional</sup> <a name="QueueCountInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.queueCountInput"></a>

```csharp
public double QueueCountInput { get; }
```

- *Type:* double

---

##### `StackTypeInput`<sup>Optional</sup> <a name="StackTypeInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.stackTypeInput"></a>

```csharp
public string StackTypeInput { get; }
```

- *Type:* string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.subnetworkInput"></a>

```csharp
public string SubnetworkInput { get; }
```

- *Type:* string

---

##### `SubnetworkProjectInput`<sup>Optional</sup> <a name="SubnetworkProjectInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput"></a>

```csharp
public string SubnetworkProjectInput { get; }
```

- *Type:* string

---

##### `InternalIpv6PrefixLength`<sup>Required</sup> <a name="InternalIpv6PrefixLength" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength"></a>

```csharp
public double InternalIpv6PrefixLength { get; }
```

- *Type:* double

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; }
```

- *Type:* string

---

##### `NetworkIp`<sup>Required</sup> <a name="NetworkIp" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.networkIp"></a>

```csharp
public string NetworkIp { get; }
```

- *Type:* string

---

##### `NicType`<sup>Required</sup> <a name="NicType" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.nicType"></a>

```csharp
public string NicType { get; }
```

- *Type:* string

---

##### `QueueCount`<sup>Required</sup> <a name="QueueCount" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.queueCount"></a>

```csharp
public double QueueCount { get; }
```

- *Type:* double

---

##### `StackType`<sup>Required</sup> <a name="StackType" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.stackType"></a>

```csharp
public string StackType { get; }
```

- *Type:* string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `SubnetworkProject`<sup>Required</sup> <a name="SubnetworkProject" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.subnetworkProject"></a>

```csharp
public string SubnetworkProject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference <a name="ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput">TotalEgressBandwidthTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">TotalEgressBandwidthTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfig">ComputeInstanceFromTemplateNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TotalEgressBandwidthTierInput`<sup>Optional</sup> <a name="TotalEgressBandwidthTierInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput"></a>

```csharp
public string TotalEgressBandwidthTierInput { get; }
```

- *Type:* string

---

##### `TotalEgressBandwidthTier`<sup>Required</sup> <a name="TotalEgressBandwidthTier" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```csharp
public string TotalEgressBandwidthTier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceFromTemplateNetworkPerformanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateNetworkPerformanceConfig">ComputeInstanceFromTemplateNetworkPerformanceConfig</a>

---


### ComputeInstanceFromTemplateParamsOutputReference <a name="ComputeInstanceFromTemplateParamsOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.resetResourceManagerTags"></a>

```csharp
private void ResetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParams">ComputeInstanceFromTemplateParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.property.resourceManagerTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParamsOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceFromTemplateParams InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateParams">ComputeInstanceFromTemplateParams</a>

---


### ComputeInstanceFromTemplateReservationAffinityOutputReference <a name="ComputeInstanceFromTemplateReservationAffinityOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateReservationAffinityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.putSpecificReservation">PutSpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.resetSpecificReservation">ResetSpecificReservation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpecificReservation` <a name="PutSpecificReservation" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.putSpecificReservation"></a>

```csharp
private void PutSpecificReservation(ComputeInstanceFromTemplateReservationAffinitySpecificReservation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.putSpecificReservation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservation">ComputeInstanceFromTemplateReservationAffinitySpecificReservation</a>

---

##### `ResetSpecificReservation` <a name="ResetSpecificReservation" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.resetSpecificReservation"></a>

```csharp
private void ResetSpecificReservation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference">ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.property.specificReservationInput">SpecificReservationInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservation">ComputeInstanceFromTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinity">ComputeInstanceFromTemplateReservationAffinity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpecificReservation`<sup>Required</sup> <a name="SpecificReservation" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.property.specificReservation"></a>

```csharp
public ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference SpecificReservation { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference">ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference</a>

---

##### `SpecificReservationInput`<sup>Optional</sup> <a name="SpecificReservationInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.property.specificReservationInput"></a>

```csharp
public ComputeInstanceFromTemplateReservationAffinitySpecificReservation SpecificReservationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservation">ComputeInstanceFromTemplateReservationAffinitySpecificReservation</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinityOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceFromTemplateReservationAffinity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinity">ComputeInstanceFromTemplateReservationAffinity</a>

---


### ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference <a name="ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservation">ComputeInstanceFromTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceFromTemplateReservationAffinitySpecificReservation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateReservationAffinitySpecificReservation">ComputeInstanceFromTemplateReservationAffinitySpecificReservation</a>

---


### ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference <a name="ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout</a>

---


### ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference <a name="ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDuration">ComputeInstanceFromTemplateSchedulingMaxRunDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceFromTemplateSchedulingMaxRunDuration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDuration">ComputeInstanceFromTemplateSchedulingMaxRunDuration</a>

---


### ComputeInstanceFromTemplateSchedulingNodeAffinitiesList <a name="ComputeInstanceFromTemplateSchedulingNodeAffinitiesList" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateSchedulingNodeAffinitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.get"></a>

```csharp
private ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference <a name="ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference <a name="ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd">ResetDiscardLocalSsd</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiscardLocalSsd` <a name="ResetDiscardLocalSsd" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd"></a>

```csharp
private void ResetDiscardLocalSsd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput">DiscardLocalSsdInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd">DiscardLocalSsd</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopAction">ComputeInstanceFromTemplateSchedulingOnInstanceStopAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiscardLocalSsdInput`<sup>Optional</sup> <a name="DiscardLocalSsdInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput"></a>

```csharp
public object DiscardLocalSsdInput { get; }
```

- *Type:* object

---

##### `DiscardLocalSsd`<sup>Required</sup> <a name="DiscardLocalSsd" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd"></a>

```csharp
public object DiscardLocalSsd { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceFromTemplateSchedulingOnInstanceStopAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopAction">ComputeInstanceFromTemplateSchedulingOnInstanceStopAction</a>

---


### ComputeInstanceFromTemplateSchedulingOutputReference <a name="ComputeInstanceFromTemplateSchedulingOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateSchedulingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout">PutLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.putMaxRunDuration">PutMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.putNodeAffinities">PutNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.putOnInstanceStopAction">PutOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetAutomaticRestart">ResetAutomaticRestart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetInstanceTerminationAction">ResetInstanceTerminationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout">ResetLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetMaxRunDuration">ResetMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetMinNodeCpus">ResetMinNodeCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetNodeAffinities">ResetNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetOnHostMaintenance">ResetOnHostMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetOnInstanceStopAction">ResetOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetPreemptible">ResetPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetProvisioningModel">ResetProvisioningModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetTerminationTime">ResetTerminationTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocalSsdRecoveryTimeout` <a name="PutLocalSsdRecoveryTimeout" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout"></a>

```csharp
private void PutLocalSsdRecoveryTimeout(ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout</a>

---

##### `PutMaxRunDuration` <a name="PutMaxRunDuration" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.putMaxRunDuration"></a>

```csharp
private void PutMaxRunDuration(ComputeInstanceFromTemplateSchedulingMaxRunDuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.putMaxRunDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDuration">ComputeInstanceFromTemplateSchedulingMaxRunDuration</a>

---

##### `PutNodeAffinities` <a name="PutNodeAffinities" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.putNodeAffinities"></a>

```csharp
private void PutNodeAffinities(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.putNodeAffinities.parameter.value"></a>

- *Type:* object

---

##### `PutOnInstanceStopAction` <a name="PutOnInstanceStopAction" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.putOnInstanceStopAction"></a>

```csharp
private void PutOnInstanceStopAction(ComputeInstanceFromTemplateSchedulingOnInstanceStopAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.putOnInstanceStopAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopAction">ComputeInstanceFromTemplateSchedulingOnInstanceStopAction</a>

---

##### `ResetAutomaticRestart` <a name="ResetAutomaticRestart" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetAutomaticRestart"></a>

```csharp
private void ResetAutomaticRestart()
```

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetInstanceTerminationAction` <a name="ResetInstanceTerminationAction" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetInstanceTerminationAction"></a>

```csharp
private void ResetInstanceTerminationAction()
```

##### `ResetLocalSsdRecoveryTimeout` <a name="ResetLocalSsdRecoveryTimeout" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout"></a>

```csharp
private void ResetLocalSsdRecoveryTimeout()
```

##### `ResetMaxRunDuration` <a name="ResetMaxRunDuration" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetMaxRunDuration"></a>

```csharp
private void ResetMaxRunDuration()
```

##### `ResetMinNodeCpus` <a name="ResetMinNodeCpus" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetMinNodeCpus"></a>

```csharp
private void ResetMinNodeCpus()
```

##### `ResetNodeAffinities` <a name="ResetNodeAffinities" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetNodeAffinities"></a>

```csharp
private void ResetNodeAffinities()
```

##### `ResetOnHostMaintenance` <a name="ResetOnHostMaintenance" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetOnHostMaintenance"></a>

```csharp
private void ResetOnHostMaintenance()
```

##### `ResetOnInstanceStopAction` <a name="ResetOnInstanceStopAction" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetOnInstanceStopAction"></a>

```csharp
private void ResetOnInstanceStopAction()
```

##### `ResetPreemptible` <a name="ResetPreemptible" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetPreemptible"></a>

```csharp
private void ResetPreemptible()
```

##### `ResetProvisioningModel` <a name="ResetProvisioningModel" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetProvisioningModel"></a>

```csharp
private void ResetProvisioningModel()
```

##### `ResetTerminationTime` <a name="ResetTerminationTime" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.resetTerminationTime"></a>

```csharp
private void ResetTerminationTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout">LocalSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference">ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.maxRunDuration">MaxRunDuration</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference">ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.nodeAffinities">NodeAffinities</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList">ComputeInstanceFromTemplateSchedulingNodeAffinitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.onInstanceStopAction">OnInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference">ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.automaticRestartInput">AutomaticRestartInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.instanceTerminationActionInput">InstanceTerminationActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput">LocalSsdRecoveryTimeoutInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.maxRunDurationInput">MaxRunDurationInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDuration">ComputeInstanceFromTemplateSchedulingMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.minNodeCpusInput">MinNodeCpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.nodeAffinitiesInput">NodeAffinitiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.onHostMaintenanceInput">OnHostMaintenanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.onInstanceStopActionInput">OnInstanceStopActionInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopAction">ComputeInstanceFromTemplateSchedulingOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.preemptibleInput">PreemptibleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.provisioningModelInput">ProvisioningModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.terminationTimeInput">TerminationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.automaticRestart">AutomaticRestart</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.instanceTerminationAction">InstanceTerminationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.minNodeCpus">MinNodeCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.onHostMaintenance">OnHostMaintenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.preemptible">Preemptible</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.provisioningModel">ProvisioningModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.terminationTime">TerminationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling">ComputeInstanceFromTemplateScheduling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalSsdRecoveryTimeout`<sup>Required</sup> <a name="LocalSsdRecoveryTimeout" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout"></a>

```csharp
public ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference LocalSsdRecoveryTimeout { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference">ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference</a>

---

##### `MaxRunDuration`<sup>Required</sup> <a name="MaxRunDuration" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.maxRunDuration"></a>

```csharp
public ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference MaxRunDuration { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference">ComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference</a>

---

##### `NodeAffinities`<sup>Required</sup> <a name="NodeAffinities" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.nodeAffinities"></a>

```csharp
public ComputeInstanceFromTemplateSchedulingNodeAffinitiesList NodeAffinities { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingNodeAffinitiesList">ComputeInstanceFromTemplateSchedulingNodeAffinitiesList</a>

---

##### `OnInstanceStopAction`<sup>Required</sup> <a name="OnInstanceStopAction" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.onInstanceStopAction"></a>

```csharp
public ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference OnInstanceStopAction { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference">ComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference</a>

---

##### `AutomaticRestartInput`<sup>Optional</sup> <a name="AutomaticRestartInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.automaticRestartInput"></a>

```csharp
public object AutomaticRestartInput { get; }
```

- *Type:* object

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.availabilityDomainInput"></a>

```csharp
public double AvailabilityDomainInput { get; }
```

- *Type:* double

---

##### `InstanceTerminationActionInput`<sup>Optional</sup> <a name="InstanceTerminationActionInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.instanceTerminationActionInput"></a>

```csharp
public string InstanceTerminationActionInput { get; }
```

- *Type:* string

---

##### `LocalSsdRecoveryTimeoutInput`<sup>Optional</sup> <a name="LocalSsdRecoveryTimeoutInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput"></a>

```csharp
public ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout LocalSsdRecoveryTimeoutInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout</a>

---

##### `MaxRunDurationInput`<sup>Optional</sup> <a name="MaxRunDurationInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.maxRunDurationInput"></a>

```csharp
public ComputeInstanceFromTemplateSchedulingMaxRunDuration MaxRunDurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingMaxRunDuration">ComputeInstanceFromTemplateSchedulingMaxRunDuration</a>

---

##### `MinNodeCpusInput`<sup>Optional</sup> <a name="MinNodeCpusInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.minNodeCpusInput"></a>

```csharp
public double MinNodeCpusInput { get; }
```

- *Type:* double

---

##### `NodeAffinitiesInput`<sup>Optional</sup> <a name="NodeAffinitiesInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.nodeAffinitiesInput"></a>

```csharp
public object NodeAffinitiesInput { get; }
```

- *Type:* object

---

##### `OnHostMaintenanceInput`<sup>Optional</sup> <a name="OnHostMaintenanceInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.onHostMaintenanceInput"></a>

```csharp
public string OnHostMaintenanceInput { get; }
```

- *Type:* string

---

##### `OnInstanceStopActionInput`<sup>Optional</sup> <a name="OnInstanceStopActionInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.onInstanceStopActionInput"></a>

```csharp
public ComputeInstanceFromTemplateSchedulingOnInstanceStopAction OnInstanceStopActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOnInstanceStopAction">ComputeInstanceFromTemplateSchedulingOnInstanceStopAction</a>

---

##### `PreemptibleInput`<sup>Optional</sup> <a name="PreemptibleInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.preemptibleInput"></a>

```csharp
public object PreemptibleInput { get; }
```

- *Type:* object

---

##### `ProvisioningModelInput`<sup>Optional</sup> <a name="ProvisioningModelInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.provisioningModelInput"></a>

```csharp
public string ProvisioningModelInput { get; }
```

- *Type:* string

---

##### `TerminationTimeInput`<sup>Optional</sup> <a name="TerminationTimeInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.terminationTimeInput"></a>

```csharp
public string TerminationTimeInput { get; }
```

- *Type:* string

---

##### `AutomaticRestart`<sup>Required</sup> <a name="AutomaticRestart" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.automaticRestart"></a>

```csharp
public object AutomaticRestart { get; }
```

- *Type:* object

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.availabilityDomain"></a>

```csharp
public double AvailabilityDomain { get; }
```

- *Type:* double

---

##### `InstanceTerminationAction`<sup>Required</sup> <a name="InstanceTerminationAction" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.instanceTerminationAction"></a>

```csharp
public string InstanceTerminationAction { get; }
```

- *Type:* string

---

##### `MinNodeCpus`<sup>Required</sup> <a name="MinNodeCpus" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.minNodeCpus"></a>

```csharp
public double MinNodeCpus { get; }
```

- *Type:* double

---

##### `OnHostMaintenance`<sup>Required</sup> <a name="OnHostMaintenance" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.onHostMaintenance"></a>

```csharp
public string OnHostMaintenance { get; }
```

- *Type:* string

---

##### `Preemptible`<sup>Required</sup> <a name="Preemptible" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.preemptible"></a>

```csharp
public object Preemptible { get; }
```

- *Type:* object

---

##### `ProvisioningModel`<sup>Required</sup> <a name="ProvisioningModel" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.provisioningModel"></a>

```csharp
public string ProvisioningModel { get; }
```

- *Type:* string

---

##### `TerminationTime`<sup>Required</sup> <a name="TerminationTime" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.terminationTime"></a>

```csharp
public string TerminationTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateSchedulingOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceFromTemplateScheduling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScheduling">ComputeInstanceFromTemplateScheduling</a>

---


### ComputeInstanceFromTemplateScratchDiskList <a name="ComputeInstanceFromTemplateScratchDiskList" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateScratchDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.get"></a>

```csharp
private ComputeInstanceFromTemplateScratchDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceFromTemplateScratchDiskOutputReference <a name="ComputeInstanceFromTemplateScratchDiskOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateScratchDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.resetSize">ResetSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.resetDeviceName"></a>

```csharp
private void ResetDeviceName()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.resetSize"></a>

```csharp
private void ResetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.property.interfaceInput">InterfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.property.interface">Interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.property.interfaceInput"></a>

```csharp
public string InterfaceInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.property.interface"></a>

```csharp
public string Interface { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateScratchDiskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceFromTemplateServiceAccountOutputReference <a name="ComputeInstanceFromTemplateServiceAccountOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateServiceAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccount">ComputeInstanceFromTemplateServiceAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccountOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceFromTemplateServiceAccount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateServiceAccount">ComputeInstanceFromTemplateServiceAccount</a>

---


### ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference <a name="ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">ResetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot">ResetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm">ResetEnableVtpm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableIntegrityMonitoring` <a name="ResetEnableIntegrityMonitoring" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```csharp
private void ResetEnableIntegrityMonitoring()
```

##### `ResetEnableSecureBoot` <a name="ResetEnableSecureBoot" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```csharp
private void ResetEnableSecureBoot()
```

##### `ResetEnableVtpm` <a name="ResetEnableVtpm" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```csharp
private void ResetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">EnableIntegrityMonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput">EnableSecureBootInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput">EnableVtpmInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableVtpm">EnableVtpm</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfig">ComputeInstanceFromTemplateShieldedInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableIntegrityMonitoringInput`<sup>Optional</sup> <a name="EnableIntegrityMonitoringInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```csharp
public object EnableIntegrityMonitoringInput { get; }
```

- *Type:* object

---

##### `EnableSecureBootInput`<sup>Optional</sup> <a name="EnableSecureBootInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```csharp
public object EnableSecureBootInput { get; }
```

- *Type:* object

---

##### `EnableVtpmInput`<sup>Optional</sup> <a name="EnableVtpmInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```csharp
public object EnableVtpmInput { get; }
```

- *Type:* object

---

##### `EnableIntegrityMonitoring`<sup>Required</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```csharp
public object EnableIntegrityMonitoring { get; }
```

- *Type:* object

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; }
```

- *Type:* object

---

##### `EnableVtpm`<sup>Required</sup> <a name="EnableVtpm" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```csharp
public object EnableVtpm { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceFromTemplateShieldedInstanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateShieldedInstanceConfig">ComputeInstanceFromTemplateShieldedInstanceConfig</a>

---


### ComputeInstanceFromTemplateTimeoutsOutputReference <a name="ComputeInstanceFromTemplateTimeoutsOutputReference" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceFromTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceFromTemplate.ComputeInstanceFromTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



