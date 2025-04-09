# `colabRuntimeTemplate` Submodule <a name="`colabRuntimeTemplate` Submodule" id="@cdktf/provider-google.colabRuntimeTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ColabRuntimeTemplate <a name="ColabRuntimeTemplate" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template google_colab_runtime_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplate(Construct Scope, string Id, ColabRuntimeTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig">ColabRuntimeTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig">ColabRuntimeTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putDataPersistentDiskSpec">PutDataPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEucConfig">PutEucConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putIdleShutdownConfig">PutIdleShutdownConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putMachineSpec">PutMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putNetworkSpec">PutNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putShieldedVmConfig">PutShieldedVmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putSoftwareConfig">PutSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetDataPersistentDiskSpec">ResetDataPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetEucConfig">ResetEucConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetIdleShutdownConfig">ResetIdleShutdownConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetMachineSpec">ResetMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetNetworkSpec">ResetNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetNetworkTags">ResetNetworkTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetShieldedVmConfig">ResetShieldedVmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetSoftwareConfig">ResetSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataPersistentDiskSpec` <a name="PutDataPersistentDiskSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putDataPersistentDiskSpec"></a>

```csharp
private void PutDataPersistentDiskSpec(ColabRuntimeTemplateDataPersistentDiskSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putDataPersistentDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a>

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEncryptionSpec"></a>

```csharp
private void PutEncryptionSpec(ColabRuntimeTemplateEncryptionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a>

---

##### `PutEucConfig` <a name="PutEucConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEucConfig"></a>

```csharp
private void PutEucConfig(ColabRuntimeTemplateEucConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEucConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a>

---

##### `PutIdleShutdownConfig` <a name="PutIdleShutdownConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putIdleShutdownConfig"></a>

```csharp
private void PutIdleShutdownConfig(ColabRuntimeTemplateIdleShutdownConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putIdleShutdownConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a>

---

##### `PutMachineSpec` <a name="PutMachineSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putMachineSpec"></a>

```csharp
private void PutMachineSpec(ColabRuntimeTemplateMachineSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a>

---

##### `PutNetworkSpec` <a name="PutNetworkSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putNetworkSpec"></a>

```csharp
private void PutNetworkSpec(ColabRuntimeTemplateNetworkSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putNetworkSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a>

---

##### `PutShieldedVmConfig` <a name="PutShieldedVmConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putShieldedVmConfig"></a>

```csharp
private void PutShieldedVmConfig(ColabRuntimeTemplateShieldedVmConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putShieldedVmConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a>

---

##### `PutSoftwareConfig` <a name="PutSoftwareConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putSoftwareConfig"></a>

```csharp
private void PutSoftwareConfig(ColabRuntimeTemplateSoftwareConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putSoftwareConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(ColabRuntimeTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a>

---

##### `ResetDataPersistentDiskSpec` <a name="ResetDataPersistentDiskSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetDataPersistentDiskSpec"></a>

```csharp
private void ResetDataPersistentDiskSpec()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetEncryptionSpec"></a>

```csharp
private void ResetEncryptionSpec()
```

##### `ResetEucConfig` <a name="ResetEucConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetEucConfig"></a>

```csharp
private void ResetEucConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdleShutdownConfig` <a name="ResetIdleShutdownConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetIdleShutdownConfig"></a>

```csharp
private void ResetIdleShutdownConfig()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMachineSpec` <a name="ResetMachineSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetMachineSpec"></a>

```csharp
private void ResetMachineSpec()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNetworkSpec` <a name="ResetNetworkSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetNetworkSpec"></a>

```csharp
private void ResetNetworkSpec()
```

##### `ResetNetworkTags` <a name="ResetNetworkTags" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetNetworkTags"></a>

```csharp
private void ResetNetworkTags()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetShieldedVmConfig` <a name="ResetShieldedVmConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetShieldedVmConfig"></a>

```csharp
private void ResetShieldedVmConfig()
```

##### `ResetSoftwareConfig` <a name="ResetSoftwareConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetSoftwareConfig"></a>

```csharp
private void ResetSoftwareConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ColabRuntimeTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ColabRuntimeTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ColabRuntimeTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ColabRuntimeTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ColabRuntimeTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ColabRuntimeTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ColabRuntimeTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ColabRuntimeTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ColabRuntimeTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dataPersistentDiskSpec">DataPersistentDiskSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference">ColabRuntimeTemplateDataPersistentDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference">ColabRuntimeTemplateEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.eucConfig">EucConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference">ColabRuntimeTemplateEucConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idleShutdownConfig">IdleShutdownConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference">ColabRuntimeTemplateIdleShutdownConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference">ColabRuntimeTemplateMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkSpec">NetworkSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference">ColabRuntimeTemplateNetworkSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.shieldedVmConfig">ShieldedVmConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference">ColabRuntimeTemplateShieldedVmConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.softwareConfig">SoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference">ColabRuntimeTemplateSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference">ColabRuntimeTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dataPersistentDiskSpecInput">DataPersistentDiskSpecInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.eucConfigInput">EucConfigInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idleShutdownConfigInput">IdleShutdownConfigInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.machineSpecInput">MachineSpecInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkSpecInput">NetworkSpecInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkTagsInput">NetworkTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.shieldedVmConfigInput">ShieldedVmConfigInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.softwareConfigInput">SoftwareConfigInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkTags">NetworkTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DataPersistentDiskSpec`<sup>Required</sup> <a name="DataPersistentDiskSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dataPersistentDiskSpec"></a>

```csharp
public ColabRuntimeTemplateDataPersistentDiskSpecOutputReference DataPersistentDiskSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference">ColabRuntimeTemplateDataPersistentDiskSpecOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.encryptionSpec"></a>

```csharp
public ColabRuntimeTemplateEncryptionSpecOutputReference EncryptionSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference">ColabRuntimeTemplateEncryptionSpecOutputReference</a>

---

##### `EucConfig`<sup>Required</sup> <a name="EucConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.eucConfig"></a>

```csharp
public ColabRuntimeTemplateEucConfigOutputReference EucConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference">ColabRuntimeTemplateEucConfigOutputReference</a>

---

##### `IdleShutdownConfig`<sup>Required</sup> <a name="IdleShutdownConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idleShutdownConfig"></a>

```csharp
public ColabRuntimeTemplateIdleShutdownConfigOutputReference IdleShutdownConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference">ColabRuntimeTemplateIdleShutdownConfigOutputReference</a>

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.machineSpec"></a>

```csharp
public ColabRuntimeTemplateMachineSpecOutputReference MachineSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference">ColabRuntimeTemplateMachineSpecOutputReference</a>

---

##### `NetworkSpec`<sup>Required</sup> <a name="NetworkSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkSpec"></a>

```csharp
public ColabRuntimeTemplateNetworkSpecOutputReference NetworkSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference">ColabRuntimeTemplateNetworkSpecOutputReference</a>

---

##### `ShieldedVmConfig`<sup>Required</sup> <a name="ShieldedVmConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.shieldedVmConfig"></a>

```csharp
public ColabRuntimeTemplateShieldedVmConfigOutputReference ShieldedVmConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference">ColabRuntimeTemplateShieldedVmConfigOutputReference</a>

---

##### `SoftwareConfig`<sup>Required</sup> <a name="SoftwareConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.softwareConfig"></a>

```csharp
public ColabRuntimeTemplateSoftwareConfigOutputReference SoftwareConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference">ColabRuntimeTemplateSoftwareConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.timeouts"></a>

```csharp
public ColabRuntimeTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference">ColabRuntimeTemplateTimeoutsOutputReference</a>

---

##### `DataPersistentDiskSpecInput`<sup>Optional</sup> <a name="DataPersistentDiskSpecInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dataPersistentDiskSpecInput"></a>

```csharp
public ColabRuntimeTemplateDataPersistentDiskSpec DataPersistentDiskSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.encryptionSpecInput"></a>

```csharp
public ColabRuntimeTemplateEncryptionSpec EncryptionSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a>

---

##### `EucConfigInput`<sup>Optional</sup> <a name="EucConfigInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.eucConfigInput"></a>

```csharp
public ColabRuntimeTemplateEucConfig EucConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdleShutdownConfigInput`<sup>Optional</sup> <a name="IdleShutdownConfigInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idleShutdownConfigInput"></a>

```csharp
public ColabRuntimeTemplateIdleShutdownConfig IdleShutdownConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MachineSpecInput`<sup>Optional</sup> <a name="MachineSpecInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.machineSpecInput"></a>

```csharp
public ColabRuntimeTemplateMachineSpec MachineSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkSpecInput`<sup>Optional</sup> <a name="NetworkSpecInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkSpecInput"></a>

```csharp
public ColabRuntimeTemplateNetworkSpec NetworkSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a>

---

##### `NetworkTagsInput`<sup>Optional</sup> <a name="NetworkTagsInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkTagsInput"></a>

```csharp
public string[] NetworkTagsInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ShieldedVmConfigInput`<sup>Optional</sup> <a name="ShieldedVmConfigInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.shieldedVmConfigInput"></a>

```csharp
public ColabRuntimeTemplateShieldedVmConfig ShieldedVmConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a>

---

##### `SoftwareConfigInput`<sup>Optional</sup> <a name="SoftwareConfigInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.softwareConfigInput"></a>

```csharp
public ColabRuntimeTemplateSoftwareConfig SoftwareConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkTags`<sup>Required</sup> <a name="NetworkTags" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkTags"></a>

```csharp
public string[] NetworkTags { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ColabRuntimeTemplateConfig <a name="ColabRuntimeTemplateConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string Location,
    ColabRuntimeTemplateDataPersistentDiskSpec DataPersistentDiskSpec = null,
    string Description = null,
    ColabRuntimeTemplateEncryptionSpec EncryptionSpec = null,
    ColabRuntimeTemplateEucConfig EucConfig = null,
    string Id = null,
    ColabRuntimeTemplateIdleShutdownConfig IdleShutdownConfig = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    ColabRuntimeTemplateMachineSpec MachineSpec = null,
    string Name = null,
    ColabRuntimeTemplateNetworkSpec NetworkSpec = null,
    string[] NetworkTags = null,
    string Project = null,
    ColabRuntimeTemplateShieldedVmConfig ShieldedVmConfig = null,
    ColabRuntimeTemplateSoftwareConfig SoftwareConfig = null,
    ColabRuntimeTemplateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Required. The display name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.dataPersistentDiskSpec">DataPersistentDiskSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a></code> | data_persistent_disk_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.description">Description</a></code> | <code>string</code> | The description of the Runtime Template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.eucConfig">EucConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a></code> | euc_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#id ColabRuntimeTemplate#id}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.idleShutdownConfig">IdleShutdownConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a></code> | idle_shutdown_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels to identify and group the runtime template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.networkSpec">NetworkSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a></code> | network_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.networkTags">NetworkTags</a></code> | <code>string[]</code> | Applies the given Compute Engine tags to the runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#project ColabRuntimeTemplate#project}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.shieldedVmConfig">ShieldedVmConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a></code> | shielded_vm_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.softwareConfig">SoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Required. The display name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#display_name ColabRuntimeTemplate#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#location ColabRuntimeTemplate#location}

---

##### `DataPersistentDiskSpec`<sup>Optional</sup> <a name="DataPersistentDiskSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.dataPersistentDiskSpec"></a>

```csharp
public ColabRuntimeTemplateDataPersistentDiskSpec DataPersistentDiskSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a>

data_persistent_disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#data_persistent_disk_spec ColabRuntimeTemplate#data_persistent_disk_spec}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#description ColabRuntimeTemplate#description}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.encryptionSpec"></a>

```csharp
public ColabRuntimeTemplateEncryptionSpec EncryptionSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#encryption_spec ColabRuntimeTemplate#encryption_spec}

---

##### `EucConfig`<sup>Optional</sup> <a name="EucConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.eucConfig"></a>

```csharp
public ColabRuntimeTemplateEucConfig EucConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a>

euc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#euc_config ColabRuntimeTemplate#euc_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#id ColabRuntimeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdleShutdownConfig`<sup>Optional</sup> <a name="IdleShutdownConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.idleShutdownConfig"></a>

```csharp
public ColabRuntimeTemplateIdleShutdownConfig IdleShutdownConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a>

idle_shutdown_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#idle_shutdown_config ColabRuntimeTemplate#idle_shutdown_config}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels to identify and group the runtime template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#labels ColabRuntimeTemplate#labels}

---

##### `MachineSpec`<sup>Optional</sup> <a name="MachineSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.machineSpec"></a>

```csharp
public ColabRuntimeTemplateMachineSpec MachineSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#machine_spec ColabRuntimeTemplate#machine_spec}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#name ColabRuntimeTemplate#name}

---

##### `NetworkSpec`<sup>Optional</sup> <a name="NetworkSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.networkSpec"></a>

```csharp
public ColabRuntimeTemplateNetworkSpec NetworkSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a>

network_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#network_spec ColabRuntimeTemplate#network_spec}

---

##### `NetworkTags`<sup>Optional</sup> <a name="NetworkTags" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.networkTags"></a>

```csharp
public string[] NetworkTags { get; set; }
```

- *Type:* string[]

Applies the given Compute Engine tags to the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#network_tags ColabRuntimeTemplate#network_tags}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#project ColabRuntimeTemplate#project}.

---

##### `ShieldedVmConfig`<sup>Optional</sup> <a name="ShieldedVmConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.shieldedVmConfig"></a>

```csharp
public ColabRuntimeTemplateShieldedVmConfig ShieldedVmConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a>

shielded_vm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#shielded_vm_config ColabRuntimeTemplate#shielded_vm_config}

---

##### `SoftwareConfig`<sup>Optional</sup> <a name="SoftwareConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.softwareConfig"></a>

```csharp
public ColabRuntimeTemplateSoftwareConfig SoftwareConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#software_config ColabRuntimeTemplate#software_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.timeouts"></a>

```csharp
public ColabRuntimeTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#timeouts ColabRuntimeTemplate#timeouts}

---

### ColabRuntimeTemplateDataPersistentDiskSpec <a name="ColabRuntimeTemplateDataPersistentDiskSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateDataPersistentDiskSpec {
    string DiskSizeGb = null,
    string DiskType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec.property.diskSizeGb">DiskSizeGb</a></code> | <code>string</code> | The disk size of the runtime in GB. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec.property.diskType">DiskType</a></code> | <code>string</code> | The type of the persistent disk. |

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec.property.diskSizeGb"></a>

```csharp
public string DiskSizeGb { get; set; }
```

- *Type:* string

The disk size of the runtime in GB.

If specified, the diskType must also be specified. The minimum size is 10GB and the maximum is 65536GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#disk_size_gb ColabRuntimeTemplate#disk_size_gb}

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec.property.diskType"></a>

```csharp
public string DiskType { get; set; }
```

- *Type:* string

The type of the persistent disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#disk_type ColabRuntimeTemplate#disk_type}

---

### ColabRuntimeTemplateEncryptionSpec <a name="ColabRuntimeTemplateEncryptionSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateEncryptionSpec {
    string KmsKeyName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The Cloud KMS encryption key (customer-managed encryption key) used to protect the runtime. |

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The Cloud KMS encryption key (customer-managed encryption key) used to protect the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#kms_key_name ColabRuntimeTemplate#kms_key_name}

---

### ColabRuntimeTemplateEucConfig <a name="ColabRuntimeTemplateEucConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateEucConfig {
    object EucDisabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig.property.eucDisabled">EucDisabled</a></code> | <code>object</code> | Disable end user credential access for the runtime. |

---

##### `EucDisabled`<sup>Optional</sup> <a name="EucDisabled" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig.property.eucDisabled"></a>

```csharp
public object EucDisabled { get; set; }
```

- *Type:* object

Disable end user credential access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#euc_disabled ColabRuntimeTemplate#euc_disabled}

---

### ColabRuntimeTemplateIdleShutdownConfig <a name="ColabRuntimeTemplateIdleShutdownConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateIdleShutdownConfig {
    string IdleTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig.property.idleTimeout">IdleTimeout</a></code> | <code>string</code> | The duration after which the runtime is automatically shut down. |

---

##### `IdleTimeout`<sup>Optional</sup> <a name="IdleTimeout" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig.property.idleTimeout"></a>

```csharp
public string IdleTimeout { get; set; }
```

- *Type:* string

The duration after which the runtime is automatically shut down.

An input of 0s disables the idle shutdown feature, and a valid range is [10m, 24h].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#idle_timeout ColabRuntimeTemplate#idle_timeout}

---

### ColabRuntimeTemplateMachineSpec <a name="ColabRuntimeTemplateMachineSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateMachineSpec {
    double AcceleratorCount = null,
    string AcceleratorType = null,
    string MachineType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | The number of accelerators used by the runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.machineType">MachineType</a></code> | <code>string</code> | The Compute Engine machine type selected for the runtime. |

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; set; }
```

- *Type:* double

The number of accelerators used by the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#accelerator_count ColabRuntimeTemplate#accelerator_count}

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; set; }
```

- *Type:* string

The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#accelerator_type ColabRuntimeTemplate#accelerator_type}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The Compute Engine machine type selected for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#machine_type ColabRuntimeTemplate#machine_type}

---

### ColabRuntimeTemplateNetworkSpec <a name="ColabRuntimeTemplateNetworkSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateNetworkSpec {
    object EnableInternetAccess = null,
    string Network = null,
    string Subnetwork = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>object</code> | Enable public internet access for the runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.network">Network</a></code> | <code>string</code> | The name of the VPC that this runtime is in. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.subnetwork">Subnetwork</a></code> | <code>string</code> | The name of the subnetwork that this runtime is in. |

---

##### `EnableInternetAccess`<sup>Optional</sup> <a name="EnableInternetAccess" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.enableInternetAccess"></a>

```csharp
public object EnableInternetAccess { get; set; }
```

- *Type:* object

Enable public internet access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#enable_internet_access ColabRuntimeTemplate#enable_internet_access}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The name of the VPC that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#network ColabRuntimeTemplate#network}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.subnetwork"></a>

```csharp
public string Subnetwork { get; set; }
```

- *Type:* string

The name of the subnetwork that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#subnetwork ColabRuntimeTemplate#subnetwork}

---

### ColabRuntimeTemplateShieldedVmConfig <a name="ColabRuntimeTemplateShieldedVmConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateShieldedVmConfig {
    object EnableSecureBoot = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | Enables secure boot for the runtime. |

---

##### `EnableSecureBoot`<sup>Optional</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; set; }
```

- *Type:* object

Enables secure boot for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#enable_secure_boot ColabRuntimeTemplate#enable_secure_boot}

---

### ColabRuntimeTemplateSoftwareConfig <a name="ColabRuntimeTemplateSoftwareConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateSoftwareConfig {
    object Env = null,
    ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig PostStartupScriptConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig.property.env">Env</a></code> | <code>object</code> | env block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig.property.postStartupScriptConfig">PostStartupScriptConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | post_startup_script_config block. |

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig.property.env"></a>

```csharp
public object Env { get; set; }
```

- *Type:* object

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#env ColabRuntimeTemplate#env}

---

##### `PostStartupScriptConfig`<sup>Optional</sup> <a name="PostStartupScriptConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig.property.postStartupScriptConfig"></a>

```csharp
public ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig PostStartupScriptConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

post_startup_script_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#post_startup_script_config ColabRuntimeTemplate#post_startup_script_config}

---

### ColabRuntimeTemplateSoftwareConfigEnv <a name="ColabRuntimeTemplateSoftwareConfigEnv" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateSoftwareConfigEnv {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv.property.name">Name</a></code> | <code>string</code> | Name of the environment variable. Must be a valid C identifier. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv.property.value">Value</a></code> | <code>string</code> | Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the environment variable. Must be a valid C identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#name ColabRuntimeTemplate#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables.

If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#value ColabRuntimeTemplate#value}

---

### ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig <a name="ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig {
    string PostStartupScript = null,
    string PostStartupScriptBehavior = null,
    string PostStartupScriptUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScript">PostStartupScript</a></code> | <code>string</code> | Post startup script to run after runtime is started. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptBehavior">PostStartupScriptBehavior</a></code> | <code>string</code> | Post startup script behavior that defines download and execution behavior. Possible values: ["RUN_ONCE", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"]. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptUrl">PostStartupScriptUrl</a></code> | <code>string</code> | Post startup script url to download. Example: https://bucket/script.sh. |

---

##### `PostStartupScript`<sup>Optional</sup> <a name="PostStartupScript" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScript"></a>

```csharp
public string PostStartupScript { get; set; }
```

- *Type:* string

Post startup script to run after runtime is started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#post_startup_script ColabRuntimeTemplate#post_startup_script}

---

##### `PostStartupScriptBehavior`<sup>Optional</sup> <a name="PostStartupScriptBehavior" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptBehavior"></a>

```csharp
public string PostStartupScriptBehavior { get; set; }
```

- *Type:* string

Post startup script behavior that defines download and execution behavior. Possible values: ["RUN_ONCE", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#post_startup_script_behavior ColabRuntimeTemplate#post_startup_script_behavior}

---

##### `PostStartupScriptUrl`<sup>Optional</sup> <a name="PostStartupScriptUrl" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptUrl"></a>

```csharp
public string PostStartupScriptUrl { get; set; }
```

- *Type:* string

Post startup script url to download. Example: https://bucket/script.sh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#post_startup_script_url ColabRuntimeTemplate#post_startup_script_url}

---

### ColabRuntimeTemplateTimeouts <a name="ColabRuntimeTemplateTimeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#create ColabRuntimeTemplate#create}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#delete ColabRuntimeTemplate#delete}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#update ColabRuntimeTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#create ColabRuntimeTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#delete ColabRuntimeTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_runtime_template#update ColabRuntimeTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ColabRuntimeTemplateDataPersistentDiskSpecOutputReference <a name="ColabRuntimeTemplateDataPersistentDiskSpecOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateDataPersistentDiskSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskSizeGb"></a>

```csharp
private void ResetDiskSizeGb()
```

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskType"></a>

```csharp
private void ResetDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskType">DiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGbInput"></a>

```csharp
public string DiskSizeGbInput { get; }
```

- *Type:* string

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskTypeInput"></a>

```csharp
public string DiskTypeInput { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGb"></a>

```csharp
public string DiskSizeGb { get; }
```

- *Type:* string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskType"></a>

```csharp
public string DiskType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.internalValue"></a>

```csharp
public ColabRuntimeTemplateDataPersistentDiskSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a>

---


### ColabRuntimeTemplateEncryptionSpecOutputReference <a name="ColabRuntimeTemplateEncryptionSpecOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateEncryptionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.resetKmsKeyName"></a>

```csharp
private void ResetKmsKeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.internalValue"></a>

```csharp
public ColabRuntimeTemplateEncryptionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a>

---


### ColabRuntimeTemplateEucConfigOutputReference <a name="ColabRuntimeTemplateEucConfigOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateEucConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.resetEucDisabled">ResetEucDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEucDisabled` <a name="ResetEucDisabled" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.resetEucDisabled"></a>

```csharp
private void ResetEucDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.eucDisabledInput">EucDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.eucDisabled">EucDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EucDisabledInput`<sup>Optional</sup> <a name="EucDisabledInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.eucDisabledInput"></a>

```csharp
public object EucDisabledInput { get; }
```

- *Type:* object

---

##### `EucDisabled`<sup>Required</sup> <a name="EucDisabled" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.eucDisabled"></a>

```csharp
public object EucDisabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.internalValue"></a>

```csharp
public ColabRuntimeTemplateEucConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a>

---


### ColabRuntimeTemplateIdleShutdownConfigOutputReference <a name="ColabRuntimeTemplateIdleShutdownConfigOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateIdleShutdownConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.resetIdleTimeout">ResetIdleTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdleTimeout` <a name="ResetIdleTimeout" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.resetIdleTimeout"></a>

```csharp
private void ResetIdleTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeoutInput">IdleTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeout">IdleTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdleTimeoutInput`<sup>Optional</sup> <a name="IdleTimeoutInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeoutInput"></a>

```csharp
public string IdleTimeoutInput { get; }
```

- *Type:* string

---

##### `IdleTimeout`<sup>Required</sup> <a name="IdleTimeout" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeout"></a>

```csharp
public string IdleTimeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.internalValue"></a>

```csharp
public ColabRuntimeTemplateIdleShutdownConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a>

---


### ColabRuntimeTemplateMachineSpecOutputReference <a name="ColabRuntimeTemplateMachineSpecOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateMachineSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorCount"></a>

```csharp
private void ResetAcceleratorCount()
```

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorType"></a>

```csharp
private void ResetAcceleratorType()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetMachineType"></a>

```csharp
private void ResetMachineType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCountInput"></a>

```csharp
public double AcceleratorCountInput { get; }
```

- *Type:* double

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```csharp
public string AcceleratorTypeInput { get; }
```

- *Type:* string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; }
```

- *Type:* double

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.internalValue"></a>

```csharp
public ColabRuntimeTemplateMachineSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a>

---


### ColabRuntimeTemplateNetworkSpecOutputReference <a name="ColabRuntimeTemplateNetworkSpecOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateNetworkSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetEnableInternetAccess">ResetEnableInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableInternetAccess` <a name="ResetEnableInternetAccess" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetEnableInternetAccess"></a>

```csharp
private void ResetEnableInternetAccess()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetSubnetwork"></a>

```csharp
private void ResetSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccessInput">EnableInternetAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInternetAccessInput`<sup>Optional</sup> <a name="EnableInternetAccessInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccessInput"></a>

```csharp
public object EnableInternetAccessInput { get; }
```

- *Type:* object

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.subnetworkInput"></a>

```csharp
public string SubnetworkInput { get; }
```

- *Type:* string

---

##### `EnableInternetAccess`<sup>Required</sup> <a name="EnableInternetAccess" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccess"></a>

```csharp
public object EnableInternetAccess { get; }
```

- *Type:* object

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.internalValue"></a>

```csharp
public ColabRuntimeTemplateNetworkSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a>

---


### ColabRuntimeTemplateShieldedVmConfigOutputReference <a name="ColabRuntimeTemplateShieldedVmConfigOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateShieldedVmConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.resetEnableSecureBoot">ResetEnableSecureBoot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableSecureBoot` <a name="ResetEnableSecureBoot" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.resetEnableSecureBoot"></a>

```csharp
private void ResetEnableSecureBoot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBootInput">EnableSecureBootInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableSecureBootInput`<sup>Optional</sup> <a name="EnableSecureBootInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBootInput"></a>

```csharp
public object EnableSecureBootInput { get; }
```

- *Type:* object

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.internalValue"></a>

```csharp
public ColabRuntimeTemplateShieldedVmConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a>

---


### ColabRuntimeTemplateSoftwareConfigEnvList <a name="ColabRuntimeTemplateSoftwareConfigEnvList" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateSoftwareConfigEnvList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.get"></a>

```csharp
private ColabRuntimeTemplateSoftwareConfigEnvOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ColabRuntimeTemplateSoftwareConfigEnvOutputReference <a name="ColabRuntimeTemplateSoftwareConfigEnvOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateSoftwareConfigEnvOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ColabRuntimeTemplateSoftwareConfigOutputReference <a name="ColabRuntimeTemplateSoftwareConfigOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateSoftwareConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig">PutPostStartupScriptConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resetPostStartupScriptConfig">ResetPostStartupScriptConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putEnv"></a>

```csharp
private void PutEnv(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putEnv.parameter.value"></a>

- *Type:* object

---

##### `PutPostStartupScriptConfig` <a name="PutPostStartupScriptConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig"></a>

```csharp
private void PutPostStartupScriptConfig(ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```

##### `ResetPostStartupScriptConfig` <a name="ResetPostStartupScriptConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resetPostStartupScriptConfig"></a>

```csharp
private void ResetPostStartupScriptConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.env">Env</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList">ColabRuntimeTemplateSoftwareConfigEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfig">PostStartupScriptConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.envInput">EnvInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfigInput">PostStartupScriptConfigInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.env"></a>

```csharp
public ColabRuntimeTemplateSoftwareConfigEnvList Env { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList">ColabRuntimeTemplateSoftwareConfigEnvList</a>

---

##### `PostStartupScriptConfig`<sup>Required</sup> <a name="PostStartupScriptConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfig"></a>

```csharp
public ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference PostStartupScriptConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference</a>

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.envInput"></a>

```csharp
public object EnvInput { get; }
```

- *Type:* object

---

##### `PostStartupScriptConfigInput`<sup>Optional</sup> <a name="PostStartupScriptConfigInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfigInput"></a>

```csharp
public ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig PostStartupScriptConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.internalValue"></a>

```csharp
public ColabRuntimeTemplateSoftwareConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a>

---


### ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference <a name="ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScript">ResetPostStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptBehavior">ResetPostStartupScriptBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptUrl">ResetPostStartupScriptUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPostStartupScript` <a name="ResetPostStartupScript" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScript"></a>

```csharp
private void ResetPostStartupScript()
```

##### `ResetPostStartupScriptBehavior` <a name="ResetPostStartupScriptBehavior" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptBehavior"></a>

```csharp
private void ResetPostStartupScriptBehavior()
```

##### `ResetPostStartupScriptUrl` <a name="ResetPostStartupScriptUrl" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptUrl"></a>

```csharp
private void ResetPostStartupScriptUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehaviorInput">PostStartupScriptBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptInput">PostStartupScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrlInput">PostStartupScriptUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScript">PostStartupScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehavior">PostStartupScriptBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrl">PostStartupScriptUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PostStartupScriptBehaviorInput`<sup>Optional</sup> <a name="PostStartupScriptBehaviorInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehaviorInput"></a>

```csharp
public string PostStartupScriptBehaviorInput { get; }
```

- *Type:* string

---

##### `PostStartupScriptInput`<sup>Optional</sup> <a name="PostStartupScriptInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptInput"></a>

```csharp
public string PostStartupScriptInput { get; }
```

- *Type:* string

---

##### `PostStartupScriptUrlInput`<sup>Optional</sup> <a name="PostStartupScriptUrlInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrlInput"></a>

```csharp
public string PostStartupScriptUrlInput { get; }
```

- *Type:* string

---

##### `PostStartupScript`<sup>Required</sup> <a name="PostStartupScript" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScript"></a>

```csharp
public string PostStartupScript { get; }
```

- *Type:* string

---

##### `PostStartupScriptBehavior`<sup>Required</sup> <a name="PostStartupScriptBehavior" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehavior"></a>

```csharp
public string PostStartupScriptBehavior { get; }
```

- *Type:* string

---

##### `PostStartupScriptUrl`<sup>Required</sup> <a name="PostStartupScriptUrl" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrl"></a>

```csharp
public string PostStartupScriptUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.internalValue"></a>

```csharp
public ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---


### ColabRuntimeTemplateTimeoutsOutputReference <a name="ColabRuntimeTemplateTimeoutsOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



