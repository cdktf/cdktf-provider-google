# `dataFusionInstance` Submodule <a name="`dataFusionInstance` Submodule" id="@cdktf/provider-google.dataFusionInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFusionInstance <a name="DataFusionInstance" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance google_data_fusion_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataFusionInstance(Construct Scope, string Id, DataFusionInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig">DataFusionInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig">DataFusionInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putAccelerators">PutAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putCryptoKeyConfig">PutCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putEventPublishConfig">PutEventPublishConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetAccelerators">ResetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetCryptoKeyConfig">ResetCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetDataprocServiceAccount">ResetDataprocServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEnableRbac">ResetEnableRbac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEnableStackdriverLogging">ResetEnableStackdriverLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEnableStackdriverMonitoring">ResetEnableStackdriverMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEventPublishConfig">ResetEventPublishConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetPrivateInstance">ResetPrivateInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccelerators` <a name="PutAccelerators" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putAccelerators"></a>

```csharp
private void PutAccelerators(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putAccelerators.parameter.value"></a>

- *Type:* object

---

##### `PutCryptoKeyConfig` <a name="PutCryptoKeyConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putCryptoKeyConfig"></a>

```csharp
private void PutCryptoKeyConfig(DataFusionInstanceCryptoKeyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putCryptoKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a>

---

##### `PutEventPublishConfig` <a name="PutEventPublishConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putEventPublishConfig"></a>

```csharp
private void PutEventPublishConfig(DataFusionInstanceEventPublishConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putEventPublishConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putNetworkConfig"></a>

```csharp
private void PutNetworkConfig(DataFusionInstanceNetworkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(DataFusionInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts">DataFusionInstanceTimeouts</a>

---

##### `ResetAccelerators` <a name="ResetAccelerators" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetAccelerators"></a>

```csharp
private void ResetAccelerators()
```

##### `ResetCryptoKeyConfig` <a name="ResetCryptoKeyConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetCryptoKeyConfig"></a>

```csharp
private void ResetCryptoKeyConfig()
```

##### `ResetDataprocServiceAccount` <a name="ResetDataprocServiceAccount" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetDataprocServiceAccount"></a>

```csharp
private void ResetDataprocServiceAccount()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnableRbac` <a name="ResetEnableRbac" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEnableRbac"></a>

```csharp
private void ResetEnableRbac()
```

##### `ResetEnableStackdriverLogging` <a name="ResetEnableStackdriverLogging" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEnableStackdriverLogging"></a>

```csharp
private void ResetEnableStackdriverLogging()
```

##### `ResetEnableStackdriverMonitoring` <a name="ResetEnableStackdriverMonitoring" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEnableStackdriverMonitoring"></a>

```csharp
private void ResetEnableStackdriverMonitoring()
```

##### `ResetEventPublishConfig` <a name="ResetEventPublishConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEventPublishConfig"></a>

```csharp
private void ResetEventPublishConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetNetworkConfig"></a>

```csharp
private void ResetNetworkConfig()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetPrivateInstance` <a name="ResetPrivateInstance" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetPrivateInstance"></a>

```csharp
private void ResetPrivateInstance()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetVersion"></a>

```csharp
private void ResetVersion()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataFusionInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataFusionInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataFusionInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataFusionInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataFusionInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataFusionInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFusionInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFusionInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataFusionInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.accelerators">Accelerators</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList">DataFusionInstanceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.apiEndpoint">ApiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.cryptoKeyConfig">CryptoKeyConfig</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference">DataFusionInstanceCryptoKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.eventPublishConfig">EventPublishConfig</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference">DataFusionInstanceEventPublishConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.gcsBucket">GcsBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference">DataFusionInstanceNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.p4ServiceAccount">P4ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.serviceEndpoint">ServiceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.tenantProjectId">TenantProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference">DataFusionInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.acceleratorsInput">AcceleratorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.cryptoKeyConfigInput">CryptoKeyConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.dataprocServiceAccountInput">DataprocServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableRbacInput">EnableRbacInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverLoggingInput">EnableStackdriverLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverMonitoringInput">EnableStackdriverMonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.eventPublishConfigInput">EventPublishConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.optionsInput">OptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.privateInstanceInput">PrivateInstanceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.dataprocServiceAccount">DataprocServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableRbac">EnableRbac</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverLogging">EnableStackdriverLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverMonitoring">EnableStackdriverMonitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.privateInstance">PrivateInstance</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Accelerators`<sup>Required</sup> <a name="Accelerators" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.accelerators"></a>

```csharp
public DataFusionInstanceAcceleratorsList Accelerators { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList">DataFusionInstanceAcceleratorsList</a>

---

##### `ApiEndpoint`<sup>Required</sup> <a name="ApiEndpoint" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.apiEndpoint"></a>

```csharp
public string ApiEndpoint { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CryptoKeyConfig`<sup>Required</sup> <a name="CryptoKeyConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.cryptoKeyConfig"></a>

```csharp
public DataFusionInstanceCryptoKeyConfigOutputReference CryptoKeyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference">DataFusionInstanceCryptoKeyConfigOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EventPublishConfig`<sup>Required</sup> <a name="EventPublishConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.eventPublishConfig"></a>

```csharp
public DataFusionInstanceEventPublishConfigOutputReference EventPublishConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference">DataFusionInstanceEventPublishConfigOutputReference</a>

---

##### `GcsBucket`<sup>Required</sup> <a name="GcsBucket" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.gcsBucket"></a>

```csharp
public string GcsBucket { get; }
```

- *Type:* string

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.networkConfig"></a>

```csharp
public DataFusionInstanceNetworkConfigOutputReference NetworkConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference">DataFusionInstanceNetworkConfigOutputReference</a>

---

##### `P4ServiceAccount`<sup>Required</sup> <a name="P4ServiceAccount" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.p4ServiceAccount"></a>

```csharp
public string P4ServiceAccount { get; }
```

- *Type:* string

---

##### `ServiceEndpoint`<sup>Required</sup> <a name="ServiceEndpoint" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.serviceEndpoint"></a>

```csharp
public string ServiceEndpoint { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `TenantProjectId`<sup>Required</sup> <a name="TenantProjectId" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.tenantProjectId"></a>

```csharp
public string TenantProjectId { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.timeouts"></a>

```csharp
public DataFusionInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference">DataFusionInstanceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AcceleratorsInput`<sup>Optional</sup> <a name="AcceleratorsInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.acceleratorsInput"></a>

```csharp
public object AcceleratorsInput { get; }
```

- *Type:* object

---

##### `CryptoKeyConfigInput`<sup>Optional</sup> <a name="CryptoKeyConfigInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.cryptoKeyConfigInput"></a>

```csharp
public DataFusionInstanceCryptoKeyConfig CryptoKeyConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a>

---

##### `DataprocServiceAccountInput`<sup>Optional</sup> <a name="DataprocServiceAccountInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.dataprocServiceAccountInput"></a>

```csharp
public string DataprocServiceAccountInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnableRbacInput`<sup>Optional</sup> <a name="EnableRbacInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableRbacInput"></a>

```csharp
public object EnableRbacInput { get; }
```

- *Type:* object

---

##### `EnableStackdriverLoggingInput`<sup>Optional</sup> <a name="EnableStackdriverLoggingInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverLoggingInput"></a>

```csharp
public object EnableStackdriverLoggingInput { get; }
```

- *Type:* object

---

##### `EnableStackdriverMonitoringInput`<sup>Optional</sup> <a name="EnableStackdriverMonitoringInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverMonitoringInput"></a>

```csharp
public object EnableStackdriverMonitoringInput { get; }
```

- *Type:* object

---

##### `EventPublishConfigInput`<sup>Optional</sup> <a name="EventPublishConfigInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.eventPublishConfigInput"></a>

```csharp
public DataFusionInstanceEventPublishConfig EventPublishConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.networkConfigInput"></a>

```csharp
public DataFusionInstanceNetworkConfig NetworkConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a>

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.optionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PrivateInstanceInput`<sup>Optional</sup> <a name="PrivateInstanceInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.privateInstanceInput"></a>

```csharp
public object PrivateInstanceInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `DataprocServiceAccount`<sup>Required</sup> <a name="DataprocServiceAccount" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.dataprocServiceAccount"></a>

```csharp
public string DataprocServiceAccount { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnableRbac`<sup>Required</sup> <a name="EnableRbac" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableRbac"></a>

```csharp
public object EnableRbac { get; }
```

- *Type:* object

---

##### `EnableStackdriverLogging`<sup>Required</sup> <a name="EnableStackdriverLogging" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverLogging"></a>

```csharp
public object EnableStackdriverLogging { get; }
```

- *Type:* object

---

##### `EnableStackdriverMonitoring`<sup>Required</sup> <a name="EnableStackdriverMonitoring" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverMonitoring"></a>

```csharp
public object EnableStackdriverMonitoring { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PrivateInstance`<sup>Required</sup> <a name="PrivateInstance" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.privateInstance"></a>

```csharp
public object PrivateInstance { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFusionInstanceAccelerators <a name="DataFusionInstanceAccelerators" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataFusionInstanceAccelerators {
    string AcceleratorType,
    string State
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | The type of an accelator for a CDF instance. Possible values: ["CDC", "HEALTHCARE", "CCAI_INSIGHTS"]. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators.property.state">State</a></code> | <code>string</code> | The type of an accelator for a CDF instance. Possible values: ["ENABLED", "DISABLED"]. |

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; set; }
```

- *Type:* string

The type of an accelator for a CDF instance. Possible values: ["CDC", "HEALTHCARE", "CCAI_INSIGHTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#accelerator_type DataFusionInstance#accelerator_type}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

The type of an accelator for a CDF instance. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#state DataFusionInstance#state}

---

### DataFusionInstanceConfig <a name="DataFusionInstanceConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataFusionInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Type,
    object Accelerators = null,
    DataFusionInstanceCryptoKeyConfig CryptoKeyConfig = null,
    string DataprocServiceAccount = null,
    string Description = null,
    string DisplayName = null,
    object EnableRbac = null,
    object EnableStackdriverLogging = null,
    object EnableStackdriverMonitoring = null,
    DataFusionInstanceEventPublishConfig EventPublishConfig = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    DataFusionInstanceNetworkConfig NetworkConfig = null,
    System.Collections.Generic.IDictionary<string, string> Options = null,
    object PrivateInstance = null,
    string Project = null,
    string Region = null,
    DataFusionInstanceTimeouts Timeouts = null,
    string Version = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.name">Name</a></code> | <code>string</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.type">Type</a></code> | <code>string</code> | Represents the type of Data Fusion instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.accelerators">Accelerators</a></code> | <code>object</code> | accelerators block. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.cryptoKeyConfig">CryptoKeyConfig</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a></code> | crypto_key_config block. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.dataprocServiceAccount">DataprocServiceAccount</a></code> | <code>string</code> | User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.description">Description</a></code> | <code>string</code> | An optional description of the instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display name for an instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.enableRbac">EnableRbac</a></code> | <code>object</code> | Option to enable granular role-based access control. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.enableStackdriverLogging">EnableStackdriverLogging</a></code> | <code>object</code> | Option to enable Stackdriver Logging. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.enableStackdriverMonitoring">EnableStackdriverMonitoring</a></code> | <code>object</code> | Option to enable Stackdriver Monitoring. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.eventPublishConfig">EventPublishConfig</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a></code> | event_publish_config block. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#id DataFusionInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The resource labels for instance to use to annotate any related underlying resources, such as Compute Engine VMs. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of additional options used to configure the behavior of Data Fusion instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.privateInstance">PrivateInstance</a></code> | <code>object</code> | Specifies whether the Data Fusion instance should be private. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#project DataFusionInstance#project}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.region">Region</a></code> | <code>string</code> | The region of the Data Fusion instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts">DataFusionInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.version">Version</a></code> | <code>string</code> | Current version of the Data Fusion. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.zone">Zone</a></code> | <code>string</code> | Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#name DataFusionInstance#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Represents the type of Data Fusion instance.

Each type is configured with
the default settings for processing and memory.

* BASIC: Basic Data Fusion instance. In Basic type, the user will be able to create data pipelines
  using point and click UI. However, there are certain limitations, such as fewer number
  of concurrent pipelines, no support for streaming pipelines, etc.
* ENTERPRISE: Enterprise Data Fusion instance. In Enterprise type, the user will have more features
  available, such as support for streaming pipelines, higher number of concurrent pipelines, etc.
* DEVELOPER: Developer Data Fusion instance. In Developer type, the user will have all features available but
  with restrictive capabilities. This is to help enterprises design and develop their data ingestion and integration
  pipelines at low cost. Possible values: ["BASIC", "ENTERPRISE", "DEVELOPER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#type DataFusionInstance#type}

---

##### `Accelerators`<sup>Optional</sup> <a name="Accelerators" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.accelerators"></a>

```csharp
public object Accelerators { get; set; }
```

- *Type:* object

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#accelerators DataFusionInstance#accelerators}

---

##### `CryptoKeyConfig`<sup>Optional</sup> <a name="CryptoKeyConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.cryptoKeyConfig"></a>

```csharp
public DataFusionInstanceCryptoKeyConfig CryptoKeyConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a>

crypto_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#crypto_key_config DataFusionInstance#crypto_key_config}

---

##### `DataprocServiceAccount`<sup>Optional</sup> <a name="DataprocServiceAccount" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.dataprocServiceAccount"></a>

```csharp
public string DataprocServiceAccount { get; set; }
```

- *Type:* string

User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#dataproc_service_account DataFusionInstance#dataproc_service_account}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#description DataFusionInstance#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name for an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#display_name DataFusionInstance#display_name}

---

##### `EnableRbac`<sup>Optional</sup> <a name="EnableRbac" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.enableRbac"></a>

```csharp
public object EnableRbac { get; set; }
```

- *Type:* object

Option to enable granular role-based access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#enable_rbac DataFusionInstance#enable_rbac}

---

##### `EnableStackdriverLogging`<sup>Optional</sup> <a name="EnableStackdriverLogging" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.enableStackdriverLogging"></a>

```csharp
public object EnableStackdriverLogging { get; set; }
```

- *Type:* object

Option to enable Stackdriver Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#enable_stackdriver_logging DataFusionInstance#enable_stackdriver_logging}

---

##### `EnableStackdriverMonitoring`<sup>Optional</sup> <a name="EnableStackdriverMonitoring" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.enableStackdriverMonitoring"></a>

```csharp
public object EnableStackdriverMonitoring { get; set; }
```

- *Type:* object

Option to enable Stackdriver Monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#enable_stackdriver_monitoring DataFusionInstance#enable_stackdriver_monitoring}

---

##### `EventPublishConfig`<sup>Optional</sup> <a name="EventPublishConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.eventPublishConfig"></a>

```csharp
public DataFusionInstanceEventPublishConfig EventPublishConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a>

event_publish_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#event_publish_config DataFusionInstance#event_publish_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#id DataFusionInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The resource labels for instance to use to annotate any related underlying resources, such as Compute Engine VMs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#labels DataFusionInstance#labels}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.networkConfig"></a>

```csharp
public DataFusionInstanceNetworkConfig NetworkConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#network_config DataFusionInstance#network_config}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of additional options used to configure the behavior of Data Fusion instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#options DataFusionInstance#options}

---

##### `PrivateInstance`<sup>Optional</sup> <a name="PrivateInstance" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.privateInstance"></a>

```csharp
public object PrivateInstance { get; set; }
```

- *Type:* object

Specifies whether the Data Fusion instance should be private.

If set to
true, all Data Fusion nodes will have private IP addresses and will not be
able to access the public internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#private_instance DataFusionInstance#private_instance}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#project DataFusionInstance#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the Data Fusion instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#region DataFusionInstance#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.timeouts"></a>

```csharp
public DataFusionInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts">DataFusionInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#timeouts DataFusionInstance#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Current version of the Data Fusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#version DataFusionInstance#version}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#zone DataFusionInstance#zone}

---

### DataFusionInstanceCryptoKeyConfig <a name="DataFusionInstanceCryptoKeyConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataFusionInstanceCryptoKeyConfig {
    string KeyReference
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig.property.keyReference">KeyReference</a></code> | <code>string</code> | The name of the key which is used to encrypt/decrypt customer data. |

---

##### `KeyReference`<sup>Required</sup> <a name="KeyReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig.property.keyReference"></a>

```csharp
public string KeyReference { get; set; }
```

- *Type:* string

The name of the key which is used to encrypt/decrypt customer data.

For key in Cloud KMS, the key should be in the format of projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#key_reference DataFusionInstance#key_reference}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DataFusionInstanceEventPublishConfig <a name="DataFusionInstanceEventPublishConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataFusionInstanceEventPublishConfig {
    object Enabled,
    string Topic
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig.property.enabled">Enabled</a></code> | <code>object</code> | Option to enable Event Publishing. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig.property.topic">Topic</a></code> | <code>string</code> | The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Option to enable Event Publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#enabled DataFusionInstance#enabled}

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#topic DataFusionInstance#topic}

---

### DataFusionInstanceNetworkConfig <a name="DataFusionInstanceNetworkConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataFusionInstanceNetworkConfig {
    string ConnectionType = null,
    string IpAllocation = null,
    string Network = null,
    DataFusionInstanceNetworkConfigPrivateServiceConnectConfig PrivateServiceConnectConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.connectionType">ConnectionType</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.ipAllocation">IpAllocation</a></code> | <code>string</code> | The IP range in CIDR notation to use for the managed Data Fusion instance nodes. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.network">Network</a></code> | <code>string</code> | Name of the network in the project with which the tenant project will be peered for executing pipelines. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.privateServiceConnectConfig">PrivateServiceConnectConfig</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig">DataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a></code> | private_service_connect_config block. |

---

##### `ConnectionType`<sup>Optional</sup> <a name="ConnectionType" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.connectionType"></a>

```csharp
public string ConnectionType { get; set; }
```

- *Type:* string

Optional.

Type of connection for establishing private IP connectivity between the Data Fusion customer project VPC and
the corresponding tenant project from a predefined list of available connection modes.
If this field is unspecified for a private instance, VPC peering is used. Possible values: ["VPC_PEERING", "PRIVATE_SERVICE_CONNECT_INTERFACES"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#connection_type DataFusionInstance#connection_type}

---

##### `IpAllocation`<sup>Optional</sup> <a name="IpAllocation" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.ipAllocation"></a>

```csharp
public string IpAllocation { get; set; }
```

- *Type:* string

The IP range in CIDR notation to use for the managed Data Fusion instance nodes.

This range must not overlap with any other ranges used in the Data Fusion instance network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#ip_allocation DataFusionInstance#ip_allocation}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Name of the network in the project with which the tenant project will be peered for executing pipelines.

In case of shared VPC where the network resides in another host
project the network should specified in the form of projects/{host-project-id}/global/networks/{network}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#network DataFusionInstance#network}

---

##### `PrivateServiceConnectConfig`<sup>Optional</sup> <a name="PrivateServiceConnectConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.privateServiceConnectConfig"></a>

```csharp
public DataFusionInstanceNetworkConfigPrivateServiceConnectConfig PrivateServiceConnectConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig">DataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#private_service_connect_config DataFusionInstance#private_service_connect_config}

---

### DataFusionInstanceNetworkConfigPrivateServiceConnectConfig <a name="DataFusionInstanceNetworkConfigPrivateServiceConnectConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataFusionInstanceNetworkConfigPrivateServiceConnectConfig {
    string NetworkAttachment = null,
    string UnreachableCidrBlock = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.unreachableCidrBlock">UnreachableCidrBlock</a></code> | <code>string</code> | Optional. |

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; set; }
```

- *Type:* string

Optional.

The reference to the network attachment used to establish private connectivity.
It will be of the form projects/{project-id}/regions/{region}/networkAttachments/{network-attachment-id}.
This is required only when using connection type PRIVATE_SERVICE_CONNECT_INTERFACES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#network_attachment DataFusionInstance#network_attachment}

---

##### `UnreachableCidrBlock`<sup>Optional</sup> <a name="UnreachableCidrBlock" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.unreachableCidrBlock"></a>

```csharp
public string UnreachableCidrBlock { get; set; }
```

- *Type:* string

Optional.

Input only. The CIDR block to which the CDF instance can't route traffic to in the consumer project VPC.
The size of this block should be at least /25. This range should not overlap with the primary address range of any subnetwork used by the network attachment.
This range can be used for other purposes in the consumer VPC as long as there is no requirement for CDF to reach destinations using these addresses.
If this value is not provided, the server chooses a non RFC 1918 address range. The format of this field is governed by RFC 4632.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#unreachable_cidr_block DataFusionInstance#unreachable_cidr_block}

---

### DataFusionInstanceTimeouts <a name="DataFusionInstanceTimeouts" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataFusionInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#create DataFusionInstance#create}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#delete DataFusionInstance#delete}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#update DataFusionInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#create DataFusionInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#delete DataFusionInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/data_fusion_instance#update DataFusionInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFusionInstanceAcceleratorsList <a name="DataFusionInstanceAcceleratorsList" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataFusionInstanceAcceleratorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.get"></a>

```csharp
private DataFusionInstanceAcceleratorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataFusionInstanceAcceleratorsOutputReference <a name="DataFusionInstanceAcceleratorsOutputReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataFusionInstanceAcceleratorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```csharp
public string AcceleratorTypeInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataFusionInstanceCryptoKeyConfigOutputReference <a name="DataFusionInstanceCryptoKeyConfigOutputReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataFusionInstanceCryptoKeyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.keyReferenceInput">KeyReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.keyReference">KeyReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyReferenceInput`<sup>Optional</sup> <a name="KeyReferenceInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.keyReferenceInput"></a>

```csharp
public string KeyReferenceInput { get; }
```

- *Type:* string

---

##### `KeyReference`<sup>Required</sup> <a name="KeyReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.keyReference"></a>

```csharp
public string KeyReference { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.internalValue"></a>

```csharp
public DataFusionInstanceCryptoKeyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a>

---


### DataFusionInstanceEventPublishConfigOutputReference <a name="DataFusionInstanceEventPublishConfigOutputReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataFusionInstanceEventPublishConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.internalValue"></a>

```csharp
public DataFusionInstanceEventPublishConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a>

---


### DataFusionInstanceNetworkConfigOutputReference <a name="DataFusionInstanceNetworkConfigOutputReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataFusionInstanceNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig">PutPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetConnectionType">ResetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetIpAllocation">ResetIpAllocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetPrivateServiceConnectConfig">ResetPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrivateServiceConnectConfig` <a name="PutPrivateServiceConnectConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig"></a>

```csharp
private void PutPrivateServiceConnectConfig(DataFusionInstanceNetworkConfigPrivateServiceConnectConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig">DataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

---

##### `ResetConnectionType` <a name="ResetConnectionType" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetConnectionType"></a>

```csharp
private void ResetConnectionType()
```

##### `ResetIpAllocation` <a name="ResetIpAllocation" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetIpAllocation"></a>

```csharp
private void ResetIpAllocation()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetPrivateServiceConnectConfig` <a name="ResetPrivateServiceConnectConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetPrivateServiceConnectConfig"></a>

```csharp
private void ResetPrivateServiceConnectConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfig">PrivateServiceConnectConfig</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference">DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.ipAllocationInput">IpAllocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfigInput">PrivateServiceConnectConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig">DataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.ipAllocation">IpAllocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrivateServiceConnectConfig`<sup>Required</sup> <a name="PrivateServiceConnectConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfig"></a>

```csharp
public DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference PrivateServiceConnectConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference">DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference</a>

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.connectionTypeInput"></a>

```csharp
public string ConnectionTypeInput { get; }
```

- *Type:* string

---

##### `IpAllocationInput`<sup>Optional</sup> <a name="IpAllocationInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.ipAllocationInput"></a>

```csharp
public string IpAllocationInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `PrivateServiceConnectConfigInput`<sup>Optional</sup> <a name="PrivateServiceConnectConfigInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfigInput"></a>

```csharp
public DataFusionInstanceNetworkConfigPrivateServiceConnectConfig PrivateServiceConnectConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig">DataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `IpAllocation`<sup>Required</sup> <a name="IpAllocation" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.ipAllocation"></a>

```csharp
public string IpAllocation { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public DataFusionInstanceNetworkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a>

---


### DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference <a name="DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetUnreachableCidrBlock">ResetUnreachableCidrBlock</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetNetworkAttachment"></a>

```csharp
private void ResetNetworkAttachment()
```

##### `ResetUnreachableCidrBlock` <a name="ResetUnreachableCidrBlock" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetUnreachableCidrBlock"></a>

```csharp
private void ResetUnreachableCidrBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.effectiveUnreachableCidrBlock">EffectiveUnreachableCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlockInput">UnreachableCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlock">UnreachableCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig">DataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveUnreachableCidrBlock`<sup>Required</sup> <a name="EffectiveUnreachableCidrBlock" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.effectiveUnreachableCidrBlock"></a>

```csharp
public string EffectiveUnreachableCidrBlock { get; }
```

- *Type:* string

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachmentInput"></a>

```csharp
public string NetworkAttachmentInput { get; }
```

- *Type:* string

---

##### `UnreachableCidrBlockInput`<sup>Optional</sup> <a name="UnreachableCidrBlockInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlockInput"></a>

```csharp
public string UnreachableCidrBlockInput { get; }
```

- *Type:* string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; }
```

- *Type:* string

---

##### `UnreachableCidrBlock`<sup>Required</sup> <a name="UnreachableCidrBlock" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlock"></a>

```csharp
public string UnreachableCidrBlock { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.internalValue"></a>

```csharp
public DataFusionInstanceNetworkConfigPrivateServiceConnectConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig">DataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

---


### DataFusionInstanceTimeoutsOutputReference <a name="DataFusionInstanceTimeoutsOutputReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataFusionInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



