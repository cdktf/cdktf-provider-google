# `lookerInstance` Submodule <a name="`lookerInstance` Submodule" id="@cdktf/provider-google.lookerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LookerInstance <a name="LookerInstance" id="@cdktf/provider-google.lookerInstance.LookerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance google_looker_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstance(Construct Scope, string Id, LookerInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig">LookerInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig">LookerInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putAdminSettings">PutAdminSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putCustomDomain">PutCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putDenyMaintenancePeriod">PutDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putOauthConfig">PutOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putPscConfig">PutPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putUserMetadata">PutUserMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetAdminSettings">ResetAdminSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetConsumerNetwork">ResetConsumerNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetCustomDomain">ResetCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetDenyMaintenancePeriod">ResetDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetFipsEnabled">ResetFipsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetPlatformEdition">ResetPlatformEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetPrivateIpEnabled">ResetPrivateIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetPscConfig">ResetPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetPscEnabled">ResetPscEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetPublicIpEnabled">ResetPublicIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetReservedRange">ResetReservedRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetUserMetadata">ResetUserMetadata</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.lookerInstance.LookerInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.lookerInstance.LookerInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.lookerInstance.LookerInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.lookerInstance.LookerInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.lookerInstance.LookerInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.lookerInstance.LookerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.lookerInstance.LookerInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.lookerInstance.LookerInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.lookerInstance.LookerInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.lookerInstance.LookerInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.lookerInstance.LookerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.lookerInstance.LookerInstance.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.lookerInstance.LookerInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.lookerInstance.LookerInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.lookerInstance.LookerInstance.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.lookerInstance.LookerInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.lookerInstance.LookerInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.lookerInstance.LookerInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.lookerInstance.LookerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.lookerInstance.LookerInstance.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.lookerInstance.LookerInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.lookerInstance.LookerInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdminSettings` <a name="PutAdminSettings" id="@cdktf/provider-google.lookerInstance.LookerInstance.putAdminSettings"></a>

```csharp
private void PutAdminSettings(LookerInstanceAdminSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.lookerInstance.LookerInstance.putAdminSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a>

---

##### `PutCustomDomain` <a name="PutCustomDomain" id="@cdktf/provider-google.lookerInstance.LookerInstance.putCustomDomain"></a>

```csharp
private void PutCustomDomain(LookerInstanceCustomDomain Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.lookerInstance.LookerInstance.putCustomDomain.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a>

---

##### `PutDenyMaintenancePeriod` <a name="PutDenyMaintenancePeriod" id="@cdktf/provider-google.lookerInstance.LookerInstance.putDenyMaintenancePeriod"></a>

```csharp
private void PutDenyMaintenancePeriod(LookerInstanceDenyMaintenancePeriod Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.lookerInstance.LookerInstance.putDenyMaintenancePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a>

---

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktf/provider-google.lookerInstance.LookerInstance.putEncryptionConfig"></a>

```csharp
private void PutEncryptionConfig(LookerInstanceEncryptionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.lookerInstance.LookerInstance.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-google.lookerInstance.LookerInstance.putMaintenanceWindow"></a>

```csharp
private void PutMaintenanceWindow(LookerInstanceMaintenanceWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.lookerInstance.LookerInstance.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a>

---

##### `PutOauthConfig` <a name="PutOauthConfig" id="@cdktf/provider-google.lookerInstance.LookerInstance.putOauthConfig"></a>

```csharp
private void PutOauthConfig(LookerInstanceOauthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.lookerInstance.LookerInstance.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a>

---

##### `PutPscConfig` <a name="PutPscConfig" id="@cdktf/provider-google.lookerInstance.LookerInstance.putPscConfig"></a>

```csharp
private void PutPscConfig(LookerInstancePscConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.lookerInstance.LookerInstance.putPscConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.lookerInstance.LookerInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(LookerInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.lookerInstance.LookerInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a>

---

##### `PutUserMetadata` <a name="PutUserMetadata" id="@cdktf/provider-google.lookerInstance.LookerInstance.putUserMetadata"></a>

```csharp
private void PutUserMetadata(LookerInstanceUserMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.lookerInstance.LookerInstance.putUserMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a>

---

##### `ResetAdminSettings` <a name="ResetAdminSettings" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetAdminSettings"></a>

```csharp
private void ResetAdminSettings()
```

##### `ResetConsumerNetwork` <a name="ResetConsumerNetwork" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetConsumerNetwork"></a>

```csharp
private void ResetConsumerNetwork()
```

##### `ResetCustomDomain` <a name="ResetCustomDomain" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetCustomDomain"></a>

```csharp
private void ResetCustomDomain()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDenyMaintenancePeriod` <a name="ResetDenyMaintenancePeriod" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetDenyMaintenancePeriod"></a>

```csharp
private void ResetDenyMaintenancePeriod()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetEncryptionConfig"></a>

```csharp
private void ResetEncryptionConfig()
```

##### `ResetFipsEnabled` <a name="ResetFipsEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetFipsEnabled"></a>

```csharp
private void ResetFipsEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetPlatformEdition` <a name="ResetPlatformEdition" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetPlatformEdition"></a>

```csharp
private void ResetPlatformEdition()
```

##### `ResetPrivateIpEnabled` <a name="ResetPrivateIpEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetPrivateIpEnabled"></a>

```csharp
private void ResetPrivateIpEnabled()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPscConfig` <a name="ResetPscConfig" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetPscConfig"></a>

```csharp
private void ResetPscConfig()
```

##### `ResetPscEnabled` <a name="ResetPscEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetPscEnabled"></a>

```csharp
private void ResetPscEnabled()
```

##### `ResetPublicIpEnabled` <a name="ResetPublicIpEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetPublicIpEnabled"></a>

```csharp
private void ResetPublicIpEnabled()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetReservedRange` <a name="ResetReservedRange" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetReservedRange"></a>

```csharp
private void ResetReservedRange()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserMetadata` <a name="ResetUserMetadata" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetUserMetadata"></a>

```csharp
private void ResetUserMetadata()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LookerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.lookerInstance.LookerInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

LookerInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.lookerInstance.LookerInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.lookerInstance.LookerInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

LookerInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.lookerInstance.LookerInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

LookerInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.lookerInstance.LookerInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.lookerInstance.LookerInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

LookerInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LookerInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.lookerInstance.LookerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.lookerInstance.LookerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LookerInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.lookerInstance.LookerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LookerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.lookerInstance.LookerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LookerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.adminSettings">AdminSettings</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference">LookerInstanceAdminSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.customDomain">CustomDomain</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference">LookerInstanceCustomDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.denyMaintenancePeriod">DenyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference">LookerInstanceDenyMaintenancePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.egressPublicIp">EgressPublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference">LookerInstanceEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.ingressPrivateIp">IngressPrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.ingressPublicIp">IngressPublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.lookerUri">LookerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.lookerVersion">LookerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference">LookerInstanceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference">LookerInstanceOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.pscConfig">PscConfig</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference">LookerInstancePscConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference">LookerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.userMetadata">UserMetadata</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference">LookerInstanceUserMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.adminSettingsInput">AdminSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.consumerNetworkInput">ConsumerNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.customDomainInput">CustomDomainInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.denyMaintenancePeriodInput">DenyMaintenancePeriodInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.fipsEnabledInput">FipsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.oauthConfigInput">OauthConfigInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.platformEditionInput">PlatformEditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.privateIpEnabledInput">PrivateIpEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.pscConfigInput">PscConfigInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.pscEnabledInput">PscEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.publicIpEnabledInput">PublicIpEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.reservedRangeInput">ReservedRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.userMetadataInput">UserMetadataInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.consumerNetwork">ConsumerNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.fipsEnabled">FipsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.platformEdition">PlatformEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.privateIpEnabled">PrivateIpEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.pscEnabled">PscEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.publicIpEnabled">PublicIpEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.reservedRange">ReservedRange</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdminSettings`<sup>Required</sup> <a name="AdminSettings" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.adminSettings"></a>

```csharp
public LookerInstanceAdminSettingsOutputReference AdminSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference">LookerInstanceAdminSettingsOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CustomDomain`<sup>Required</sup> <a name="CustomDomain" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.customDomain"></a>

```csharp
public LookerInstanceCustomDomainOutputReference CustomDomain { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference">LookerInstanceCustomDomainOutputReference</a>

---

##### `DenyMaintenancePeriod`<sup>Required</sup> <a name="DenyMaintenancePeriod" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.denyMaintenancePeriod"></a>

```csharp
public LookerInstanceDenyMaintenancePeriodOutputReference DenyMaintenancePeriod { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference">LookerInstanceDenyMaintenancePeriodOutputReference</a>

---

##### `EgressPublicIp`<sup>Required</sup> <a name="EgressPublicIp" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.egressPublicIp"></a>

```csharp
public string EgressPublicIp { get; }
```

- *Type:* string

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.encryptionConfig"></a>

```csharp
public LookerInstanceEncryptionConfigOutputReference EncryptionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference">LookerInstanceEncryptionConfigOutputReference</a>

---

##### `IngressPrivateIp`<sup>Required</sup> <a name="IngressPrivateIp" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.ingressPrivateIp"></a>

```csharp
public string IngressPrivateIp { get; }
```

- *Type:* string

---

##### `IngressPublicIp`<sup>Required</sup> <a name="IngressPublicIp" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.ingressPublicIp"></a>

```csharp
public string IngressPublicIp { get; }
```

- *Type:* string

---

##### `LookerUri`<sup>Required</sup> <a name="LookerUri" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.lookerUri"></a>

```csharp
public string LookerUri { get; }
```

- *Type:* string

---

##### `LookerVersion`<sup>Required</sup> <a name="LookerVersion" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.lookerVersion"></a>

```csharp
public string LookerVersion { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.maintenanceWindow"></a>

```csharp
public LookerInstanceMaintenanceWindowOutputReference MaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference">LookerInstanceMaintenanceWindowOutputReference</a>

---

##### `OauthConfig`<sup>Required</sup> <a name="OauthConfig" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.oauthConfig"></a>

```csharp
public LookerInstanceOauthConfigOutputReference OauthConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference">LookerInstanceOauthConfigOutputReference</a>

---

##### `PscConfig`<sup>Required</sup> <a name="PscConfig" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.pscConfig"></a>

```csharp
public LookerInstancePscConfigOutputReference PscConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference">LookerInstancePscConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.timeouts"></a>

```csharp
public LookerInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference">LookerInstanceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `UserMetadata`<sup>Required</sup> <a name="UserMetadata" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.userMetadata"></a>

```csharp
public LookerInstanceUserMetadataOutputReference UserMetadata { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference">LookerInstanceUserMetadataOutputReference</a>

---

##### `AdminSettingsInput`<sup>Optional</sup> <a name="AdminSettingsInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.adminSettingsInput"></a>

```csharp
public LookerInstanceAdminSettings AdminSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a>

---

##### `ConsumerNetworkInput`<sup>Optional</sup> <a name="ConsumerNetworkInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.consumerNetworkInput"></a>

```csharp
public string ConsumerNetworkInput { get; }
```

- *Type:* string

---

##### `CustomDomainInput`<sup>Optional</sup> <a name="CustomDomainInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.customDomainInput"></a>

```csharp
public LookerInstanceCustomDomain CustomDomainInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DenyMaintenancePeriodInput`<sup>Optional</sup> <a name="DenyMaintenancePeriodInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.denyMaintenancePeriodInput"></a>

```csharp
public LookerInstanceDenyMaintenancePeriod DenyMaintenancePeriodInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a>

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.encryptionConfigInput"></a>

```csharp
public LookerInstanceEncryptionConfig EncryptionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a>

---

##### `FipsEnabledInput`<sup>Optional</sup> <a name="FipsEnabledInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.fipsEnabledInput"></a>

```csharp
public object FipsEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.maintenanceWindowInput"></a>

```csharp
public LookerInstanceMaintenanceWindow MaintenanceWindowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OauthConfigInput`<sup>Optional</sup> <a name="OauthConfigInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.oauthConfigInput"></a>

```csharp
public LookerInstanceOauthConfig OauthConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a>

---

##### `PlatformEditionInput`<sup>Optional</sup> <a name="PlatformEditionInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.platformEditionInput"></a>

```csharp
public string PlatformEditionInput { get; }
```

- *Type:* string

---

##### `PrivateIpEnabledInput`<sup>Optional</sup> <a name="PrivateIpEnabledInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.privateIpEnabledInput"></a>

```csharp
public object PrivateIpEnabledInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PscConfigInput`<sup>Optional</sup> <a name="PscConfigInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.pscConfigInput"></a>

```csharp
public LookerInstancePscConfig PscConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a>

---

##### `PscEnabledInput`<sup>Optional</sup> <a name="PscEnabledInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.pscEnabledInput"></a>

```csharp
public object PscEnabledInput { get; }
```

- *Type:* object

---

##### `PublicIpEnabledInput`<sup>Optional</sup> <a name="PublicIpEnabledInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.publicIpEnabledInput"></a>

```csharp
public object PublicIpEnabledInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReservedRangeInput`<sup>Optional</sup> <a name="ReservedRangeInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.reservedRangeInput"></a>

```csharp
public string ReservedRangeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserMetadataInput`<sup>Optional</sup> <a name="UserMetadataInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.userMetadataInput"></a>

```csharp
public LookerInstanceUserMetadata UserMetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a>

---

##### `ConsumerNetwork`<sup>Required</sup> <a name="ConsumerNetwork" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.consumerNetwork"></a>

```csharp
public string ConsumerNetwork { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `FipsEnabled`<sup>Required</sup> <a name="FipsEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.fipsEnabled"></a>

```csharp
public object FipsEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PlatformEdition`<sup>Required</sup> <a name="PlatformEdition" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.platformEdition"></a>

```csharp
public string PlatformEdition { get; }
```

- *Type:* string

---

##### `PrivateIpEnabled`<sup>Required</sup> <a name="PrivateIpEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.privateIpEnabled"></a>

```csharp
public object PrivateIpEnabled { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PscEnabled`<sup>Required</sup> <a name="PscEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.pscEnabled"></a>

```csharp
public object PscEnabled { get; }
```

- *Type:* object

---

##### `PublicIpEnabled`<sup>Required</sup> <a name="PublicIpEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.publicIpEnabled"></a>

```csharp
public object PublicIpEnabled { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ReservedRange`<sup>Required</sup> <a name="ReservedRange" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.reservedRange"></a>

```csharp
public string ReservedRange { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LookerInstanceAdminSettings <a name="LookerInstanceAdminSettings" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceAdminSettings {
    string[] AllowedEmailDomains = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings.property.allowedEmailDomains">AllowedEmailDomains</a></code> | <code>string[]</code> | Email domain allowlist for the instance. |

---

##### `AllowedEmailDomains`<sup>Optional</sup> <a name="AllowedEmailDomains" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings.property.allowedEmailDomains"></a>

```csharp
public string[] AllowedEmailDomains { get; set; }
```

- *Type:* string[]

Email domain allowlist for the instance.

Define the email domains to which your users can deliver Looker (Google Cloud core) content.
Updating this list will restart the instance. Updating the allowed email domains from terraform
means the value provided will be considered as the entire list and not an amendment to the
existing list of allowed email domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#allowed_email_domains LookerInstance#allowed_email_domains}

---

### LookerInstanceConfig <a name="LookerInstanceConfig" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    LookerInstanceOauthConfig OauthConfig,
    LookerInstanceAdminSettings AdminSettings = null,
    string ConsumerNetwork = null,
    LookerInstanceCustomDomain CustomDomain = null,
    string DeletionPolicy = null,
    LookerInstanceDenyMaintenancePeriod DenyMaintenancePeriod = null,
    LookerInstanceEncryptionConfig EncryptionConfig = null,
    object FipsEnabled = null,
    string Id = null,
    LookerInstanceMaintenanceWindow MaintenanceWindow = null,
    string PlatformEdition = null,
    object PrivateIpEnabled = null,
    string Project = null,
    LookerInstancePscConfig PscConfig = null,
    object PscEnabled = null,
    object PublicIpEnabled = null,
    string Region = null,
    string ReservedRange = null,
    LookerInstanceTimeouts Timeouts = null,
    LookerInstanceUserMetadata UserMetadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.name">Name</a></code> | <code>string</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.adminSettings">AdminSettings</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a></code> | admin_settings block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.consumerNetwork">ConsumerNetwork</a></code> | <code>string</code> | Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.customDomain">CustomDomain</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a></code> | custom_domain block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Policy to determine if the cluster should be deleted forcefully. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.denyMaintenancePeriod">DenyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a></code> | deny_maintenance_period block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.fipsEnabled">FipsEnabled</a></code> | <code>object</code> | FIPS 140-2 Encryption enablement for Looker (Google Cloud Core). |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#id LookerInstance#id}. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.platformEdition">PlatformEdition</a></code> | <code>string</code> | Platform editions for a Looker instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.privateIpEnabled">PrivateIpEnabled</a></code> | <code>object</code> | Whether private IP is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#project LookerInstance#project}. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.pscConfig">PscConfig</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.pscEnabled">PscEnabled</a></code> | <code>object</code> | Whether Public Service Connect (PSC) is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.publicIpEnabled">PublicIpEnabled</a></code> | <code>object</code> | Whether public IP is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.region">Region</a></code> | <code>string</code> | The name of the Looker region of the instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.reservedRange">ReservedRange</a></code> | <code>string</code> | Name of a reserved IP address range within the consumer network, to be used for private service access connection. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.userMetadata">UserMetadata</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a></code> | user_metadata block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#name LookerInstance#name}

---

##### `OauthConfig`<sup>Required</sup> <a name="OauthConfig" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.oauthConfig"></a>

```csharp
public LookerInstanceOauthConfig OauthConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#oauth_config LookerInstance#oauth_config}

---

##### `AdminSettings`<sup>Optional</sup> <a name="AdminSettings" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.adminSettings"></a>

```csharp
public LookerInstanceAdminSettings AdminSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a>

admin_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#admin_settings LookerInstance#admin_settings}

---

##### `ConsumerNetwork`<sup>Optional</sup> <a name="ConsumerNetwork" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.consumerNetwork"></a>

```csharp
public string ConsumerNetwork { get; set; }
```

- *Type:* string

Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#consumer_network LookerInstance#consumer_network}

---

##### `CustomDomain`<sup>Optional</sup> <a name="CustomDomain" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.customDomain"></a>

```csharp
public LookerInstanceCustomDomain CustomDomain { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#custom_domain LookerInstance#custom_domain}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Policy to determine if the cluster should be deleted forcefully.

If setting deletion_policy = "FORCE", the Looker instance will be deleted regardless
of its nested resources. If set to "DEFAULT", Looker instances that still have
nested resources will return an error. Possible values: DEFAULT, FORCE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#deletion_policy LookerInstance#deletion_policy}

---

##### `DenyMaintenancePeriod`<sup>Optional</sup> <a name="DenyMaintenancePeriod" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.denyMaintenancePeriod"></a>

```csharp
public LookerInstanceDenyMaintenancePeriod DenyMaintenancePeriod { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a>

deny_maintenance_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#deny_maintenance_period LookerInstance#deny_maintenance_period}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.encryptionConfig"></a>

```csharp
public LookerInstanceEncryptionConfig EncryptionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#encryption_config LookerInstance#encryption_config}

---

##### `FipsEnabled`<sup>Optional</sup> <a name="FipsEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.fipsEnabled"></a>

```csharp
public object FipsEnabled { get; set; }
```

- *Type:* object

FIPS 140-2 Encryption enablement for Looker (Google Cloud Core).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#fips_enabled LookerInstance#fips_enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#id LookerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.maintenanceWindow"></a>

```csharp
public LookerInstanceMaintenanceWindow MaintenanceWindow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#maintenance_window LookerInstance#maintenance_window}

---

##### `PlatformEdition`<sup>Optional</sup> <a name="PlatformEdition" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.platformEdition"></a>

```csharp
public string PlatformEdition { get; set; }
```

- *Type:* string

Platform editions for a Looker instance.

Each edition maps to a set of instance features, like its size. Must be one of these values:

* LOOKER_CORE_TRIAL: trial instance (Currently Unavailable)
* LOOKER_CORE_STANDARD: pay as you go standard instance (Currently Unavailable)
* LOOKER_CORE_STANDARD_ANNUAL: subscription standard instance
* LOOKER_CORE_ENTERPRISE_ANNUAL: subscription enterprise instance
* LOOKER_CORE_EMBED_ANNUAL: subscription embed instance
* LOOKER_CORE_NONPROD_STANDARD_ANNUAL: nonprod subscription standard instance
* LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL: nonprod subscription enterprise instance
* LOOKER_CORE_NONPROD_EMBED_ANNUAL: nonprod subscription embed instance Default value: "LOOKER_CORE_TRIAL" Possible values: ["LOOKER_CORE_TRIAL", "LOOKER_CORE_STANDARD", "LOOKER_CORE_STANDARD_ANNUAL", "LOOKER_CORE_ENTERPRISE_ANNUAL", "LOOKER_CORE_EMBED_ANNUAL", "LOOKER_CORE_NONPROD_STANDARD_ANNUAL", "LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL", "LOOKER_CORE_NONPROD_EMBED_ANNUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#platform_edition LookerInstance#platform_edition}

---

##### `PrivateIpEnabled`<sup>Optional</sup> <a name="PrivateIpEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.privateIpEnabled"></a>

```csharp
public object PrivateIpEnabled { get; set; }
```

- *Type:* object

Whether private IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#private_ip_enabled LookerInstance#private_ip_enabled}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#project LookerInstance#project}.

---

##### `PscConfig`<sup>Optional</sup> <a name="PscConfig" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.pscConfig"></a>

```csharp
public LookerInstancePscConfig PscConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#psc_config LookerInstance#psc_config}

---

##### `PscEnabled`<sup>Optional</sup> <a name="PscEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.pscEnabled"></a>

```csharp
public object PscEnabled { get; set; }
```

- *Type:* object

Whether Public Service Connect (PSC) is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#psc_enabled LookerInstance#psc_enabled}

---

##### `PublicIpEnabled`<sup>Optional</sup> <a name="PublicIpEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.publicIpEnabled"></a>

```csharp
public object PublicIpEnabled { get; set; }
```

- *Type:* object

Whether public IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#public_ip_enabled LookerInstance#public_ip_enabled}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The name of the Looker region of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#region LookerInstance#region}

---

##### `ReservedRange`<sup>Optional</sup> <a name="ReservedRange" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.reservedRange"></a>

```csharp
public string ReservedRange { get; set; }
```

- *Type:* string

Name of a reserved IP address range within the consumer network, to be used for private service access connection.

User may or may not specify this in a request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#reserved_range LookerInstance#reserved_range}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.timeouts"></a>

```csharp
public LookerInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#timeouts LookerInstance#timeouts}

---

##### `UserMetadata`<sup>Optional</sup> <a name="UserMetadata" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.userMetadata"></a>

```csharp
public LookerInstanceUserMetadata UserMetadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a>

user_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#user_metadata LookerInstance#user_metadata}

---

### LookerInstanceCustomDomain <a name="LookerInstanceCustomDomain" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceCustomDomain {
    string Domain = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain.property.domain">Domain</a></code> | <code>string</code> | Domain name. |

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#domain LookerInstance#domain}

---

### LookerInstanceDenyMaintenancePeriod <a name="LookerInstanceDenyMaintenancePeriod" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceDenyMaintenancePeriod {
    LookerInstanceDenyMaintenancePeriodEndDate EndDate,
    LookerInstanceDenyMaintenancePeriodStartDate StartDate,
    LookerInstanceDenyMaintenancePeriodTime Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.endDate">EndDate</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a></code> | end_date block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.startDate">StartDate</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a></code> | start_date block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.time">Time</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a></code> | time block. |

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.endDate"></a>

```csharp
public LookerInstanceDenyMaintenancePeriodEndDate EndDate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#end_date LookerInstance#end_date}

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.startDate"></a>

```csharp
public LookerInstanceDenyMaintenancePeriodStartDate StartDate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#start_date LookerInstance#start_date}

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.time"></a>

```csharp
public LookerInstanceDenyMaintenancePeriodTime Time { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a>

time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#time LookerInstance#time}

---

### LookerInstanceDenyMaintenancePeriodEndDate <a name="LookerInstanceDenyMaintenancePeriodEndDate" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceDenyMaintenancePeriodEndDate {
    double Day = null,
    double Month = null,
    double Year = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.day">Day</a></code> | <code>double</code> | Day of a month. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.month">Month</a></code> | <code>double</code> | Month of a year. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.year">Year</a></code> | <code>double</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.day"></a>

```csharp
public double Day { get; set; }
```

- *Type:* double

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#day LookerInstance#day}

---

##### `Month`<sup>Optional</sup> <a name="Month" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.month"></a>

```csharp
public double Month { get; set; }
```

- *Type:* double

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#month LookerInstance#month}

---

##### `Year`<sup>Optional</sup> <a name="Year" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.year"></a>

```csharp
public double Year { get; set; }
```

- *Type:* double

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#year LookerInstance#year}

---

### LookerInstanceDenyMaintenancePeriodStartDate <a name="LookerInstanceDenyMaintenancePeriodStartDate" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceDenyMaintenancePeriodStartDate {
    double Day = null,
    double Month = null,
    double Year = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.day">Day</a></code> | <code>double</code> | Day of a month. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.month">Month</a></code> | <code>double</code> | Month of a year. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.year">Year</a></code> | <code>double</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.day"></a>

```csharp
public double Day { get; set; }
```

- *Type:* double

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#day LookerInstance#day}

---

##### `Month`<sup>Optional</sup> <a name="Month" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.month"></a>

```csharp
public double Month { get; set; }
```

- *Type:* double

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#month LookerInstance#month}

---

##### `Year`<sup>Optional</sup> <a name="Year" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.year"></a>

```csharp
public double Year { get; set; }
```

- *Type:* double

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#year LookerInstance#year}

---

### LookerInstanceDenyMaintenancePeriodTime <a name="LookerInstanceDenyMaintenancePeriodTime" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceDenyMaintenancePeriodTime {
    double Hours = null,
    double Minutes = null,
    double Nanos = null,
    double Seconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.hours">Hours</a></code> | <code>double</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.minutes">Minutes</a></code> | <code>double</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.nanos">Nanos</a></code> | <code>double</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.seconds">Seconds</a></code> | <code>double</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#hours LookerInstance#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#minutes LookerInstance#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#nanos LookerInstance#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#seconds LookerInstance#seconds}

---

### LookerInstanceEncryptionConfig <a name="LookerInstanceEncryptionConfig" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceEncryptionConfig {
    string KmsKeyName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | Name of the customer managed encryption key (CMEK) in KMS. |

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

Name of the customer managed encryption key (CMEK) in KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#kms_key_name LookerInstance#kms_key_name}

---

### LookerInstanceMaintenanceWindow <a name="LookerInstanceMaintenanceWindow" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceMaintenanceWindow {
    string DayOfWeek,
    LookerInstanceMaintenanceWindowStartTime StartTime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | Required. Day of the week for this MaintenanceWindow (in UTC). |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

Required. Day of the week for this MaintenanceWindow (in UTC).

* MONDAY: Monday
* TUESDAY: Tuesday
* WEDNESDAY: Wednesday
* THURSDAY: Thursday
* FRIDAY: Friday
* SATURDAY: Saturday
* SUNDAY: Sunday Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#day_of_week LookerInstance#day_of_week}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow.property.startTime"></a>

```csharp
public LookerInstanceMaintenanceWindowStartTime StartTime { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#start_time LookerInstance#start_time}

---

### LookerInstanceMaintenanceWindowStartTime <a name="LookerInstanceMaintenanceWindowStartTime" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceMaintenanceWindowStartTime {
    double Hours = null,
    double Minutes = null,
    double Nanos = null,
    double Seconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.hours">Hours</a></code> | <code>double</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.minutes">Minutes</a></code> | <code>double</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.nanos">Nanos</a></code> | <code>double</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.seconds">Seconds</a></code> | <code>double</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#hours LookerInstance#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#minutes LookerInstance#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#nanos LookerInstance#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#seconds LookerInstance#seconds}

---

### LookerInstanceOauthConfig <a name="LookerInstanceOauthConfig" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceOauthConfig {
    string ClientId,
    string ClientSecret
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig.property.clientId">ClientId</a></code> | <code>string</code> | The client ID for the Oauth config. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The client secret for the Oauth config. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client ID for the Oauth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#client_id LookerInstance#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The client secret for the Oauth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#client_secret LookerInstance#client_secret}

---

### LookerInstancePscConfig <a name="LookerInstancePscConfig" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstancePscConfig {
    string[] AllowedVpcs = null,
    object ServiceAttachments = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfig.property.allowedVpcs">AllowedVpcs</a></code> | <code>string[]</code> | List of VPCs that are allowed ingress into the Looker instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfig.property.serviceAttachments">ServiceAttachments</a></code> | <code>object</code> | service_attachments block. |

---

##### `AllowedVpcs`<sup>Optional</sup> <a name="AllowedVpcs" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfig.property.allowedVpcs"></a>

```csharp
public string[] AllowedVpcs { get; set; }
```

- *Type:* string[]

List of VPCs that are allowed ingress into the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#allowed_vpcs LookerInstance#allowed_vpcs}

---

##### `ServiceAttachments`<sup>Optional</sup> <a name="ServiceAttachments" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfig.property.serviceAttachments"></a>

```csharp
public object ServiceAttachments { get; set; }
```

- *Type:* object

service_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#service_attachments LookerInstance#service_attachments}

---

### LookerInstancePscConfigServiceAttachments <a name="LookerInstancePscConfigServiceAttachments" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstancePscConfigServiceAttachments {
    string LocalFqdn = null,
    string TargetServiceAttachmentUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments.property.localFqdn">LocalFqdn</a></code> | <code>string</code> | Fully qualified domain name that will be used in the private DNS record created for the service attachment. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments.property.targetServiceAttachmentUri">TargetServiceAttachmentUri</a></code> | <code>string</code> | URI of the service attachment to connect to. |

---

##### `LocalFqdn`<sup>Optional</sup> <a name="LocalFqdn" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments.property.localFqdn"></a>

```csharp
public string LocalFqdn { get; set; }
```

- *Type:* string

Fully qualified domain name that will be used in the private DNS record created for the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#local_fqdn LookerInstance#local_fqdn}

---

##### `TargetServiceAttachmentUri`<sup>Optional</sup> <a name="TargetServiceAttachmentUri" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments.property.targetServiceAttachmentUri"></a>

```csharp
public string TargetServiceAttachmentUri { get; set; }
```

- *Type:* string

URI of the service attachment to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#target_service_attachment_uri LookerInstance#target_service_attachment_uri}

---

### LookerInstanceTimeouts <a name="LookerInstanceTimeouts" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#create LookerInstance#create}. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#delete LookerInstance#delete}. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#update LookerInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#create LookerInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#delete LookerInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#update LookerInstance#update}.

---

### LookerInstanceUserMetadata <a name="LookerInstanceUserMetadata" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceUserMetadata {
    double AdditionalDeveloperUserCount = null,
    double AdditionalStandardUserCount = null,
    double AdditionalViewerUserCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalDeveloperUserCount">AdditionalDeveloperUserCount</a></code> | <code>double</code> | Number of additional Developer Users to allocate to the Looker Instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalStandardUserCount">AdditionalStandardUserCount</a></code> | <code>double</code> | Number of additional Standard Users to allocate to the Looker Instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalViewerUserCount">AdditionalViewerUserCount</a></code> | <code>double</code> | Number of additional Viewer Users to allocate to the Looker Instance. |

---

##### `AdditionalDeveloperUserCount`<sup>Optional</sup> <a name="AdditionalDeveloperUserCount" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalDeveloperUserCount"></a>

```csharp
public double AdditionalDeveloperUserCount { get; set; }
```

- *Type:* double

Number of additional Developer Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#additional_developer_user_count LookerInstance#additional_developer_user_count}

---

##### `AdditionalStandardUserCount`<sup>Optional</sup> <a name="AdditionalStandardUserCount" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalStandardUserCount"></a>

```csharp
public double AdditionalStandardUserCount { get; set; }
```

- *Type:* double

Number of additional Standard Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#additional_standard_user_count LookerInstance#additional_standard_user_count}

---

##### `AdditionalViewerUserCount`<sup>Optional</sup> <a name="AdditionalViewerUserCount" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalViewerUserCount"></a>

```csharp
public double AdditionalViewerUserCount { get; set; }
```

- *Type:* double

Number of additional Viewer Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/looker_instance#additional_viewer_user_count LookerInstance#additional_viewer_user_count}

---

## Classes <a name="Classes" id="Classes"></a>

### LookerInstanceAdminSettingsOutputReference <a name="LookerInstanceAdminSettingsOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceAdminSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.resetAllowedEmailDomains">ResetAllowedEmailDomains</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedEmailDomains` <a name="ResetAllowedEmailDomains" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.resetAllowedEmailDomains"></a>

```csharp
private void ResetAllowedEmailDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.allowedEmailDomainsInput">AllowedEmailDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.allowedEmailDomains">AllowedEmailDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedEmailDomainsInput`<sup>Optional</sup> <a name="AllowedEmailDomainsInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.allowedEmailDomainsInput"></a>

```csharp
public string[] AllowedEmailDomainsInput { get; }
```

- *Type:* string[]

---

##### `AllowedEmailDomains`<sup>Required</sup> <a name="AllowedEmailDomains" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.allowedEmailDomains"></a>

```csharp
public string[] AllowedEmailDomains { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.internalValue"></a>

```csharp
public LookerInstanceAdminSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a>

---


### LookerInstanceCustomDomainOutputReference <a name="LookerInstanceCustomDomainOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceCustomDomainOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.resetDomain"></a>

```csharp
private void ResetDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.internalValue"></a>

```csharp
public LookerInstanceCustomDomain InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a>

---


### LookerInstanceDenyMaintenancePeriodEndDateOutputReference <a name="LookerInstanceDenyMaintenancePeriodEndDateOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceDenyMaintenancePeriodEndDateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetMonth">ResetMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetYear">ResetYear</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetDay"></a>

```csharp
private void ResetDay()
```

##### `ResetMonth` <a name="ResetMonth" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetMonth"></a>

```csharp
private void ResetMonth()
```

##### `ResetYear` <a name="ResetYear" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetYear"></a>

```csharp
private void ResetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.dayInput">DayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.monthInput">MonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.yearInput">YearInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.month">Month</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.year">Year</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.dayInput"></a>

```csharp
public double DayInput { get; }
```

- *Type:* double

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.monthInput"></a>

```csharp
public double MonthInput { get; }
```

- *Type:* double

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.yearInput"></a>

```csharp
public double YearInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.month"></a>

```csharp
public double Month { get; }
```

- *Type:* double

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.year"></a>

```csharp
public double Year { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.internalValue"></a>

```csharp
public LookerInstanceDenyMaintenancePeriodEndDate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a>

---


### LookerInstanceDenyMaintenancePeriodOutputReference <a name="LookerInstanceDenyMaintenancePeriodOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceDenyMaintenancePeriodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putEndDate">PutEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putStartDate">PutStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putTime">PutTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEndDate` <a name="PutEndDate" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putEndDate"></a>

```csharp
private void PutEndDate(LookerInstanceDenyMaintenancePeriodEndDate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a>

---

##### `PutStartDate` <a name="PutStartDate" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putStartDate"></a>

```csharp
private void PutStartDate(LookerInstanceDenyMaintenancePeriodStartDate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a>

---

##### `PutTime` <a name="PutTime" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putTime"></a>

```csharp
private void PutTime(LookerInstanceDenyMaintenancePeriodTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.endDate">EndDate</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference">LookerInstanceDenyMaintenancePeriodEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.startDate">StartDate</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference">LookerInstanceDenyMaintenancePeriodStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.time">Time</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference">LookerInstanceDenyMaintenancePeriodTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.endDateInput">EndDateInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.startDateInput">StartDateInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.timeInput">TimeInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.endDate"></a>

```csharp
public LookerInstanceDenyMaintenancePeriodEndDateOutputReference EndDate { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference">LookerInstanceDenyMaintenancePeriodEndDateOutputReference</a>

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.startDate"></a>

```csharp
public LookerInstanceDenyMaintenancePeriodStartDateOutputReference StartDate { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference">LookerInstanceDenyMaintenancePeriodStartDateOutputReference</a>

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.time"></a>

```csharp
public LookerInstanceDenyMaintenancePeriodTimeOutputReference Time { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference">LookerInstanceDenyMaintenancePeriodTimeOutputReference</a>

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.endDateInput"></a>

```csharp
public LookerInstanceDenyMaintenancePeriodEndDate EndDateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a>

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.startDateInput"></a>

```csharp
public LookerInstanceDenyMaintenancePeriodStartDate StartDateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a>

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.timeInput"></a>

```csharp
public LookerInstanceDenyMaintenancePeriodTime TimeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.internalValue"></a>

```csharp
public LookerInstanceDenyMaintenancePeriod InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a>

---


### LookerInstanceDenyMaintenancePeriodStartDateOutputReference <a name="LookerInstanceDenyMaintenancePeriodStartDateOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceDenyMaintenancePeriodStartDateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetMonth">ResetMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetYear">ResetYear</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetDay"></a>

```csharp
private void ResetDay()
```

##### `ResetMonth` <a name="ResetMonth" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetMonth"></a>

```csharp
private void ResetMonth()
```

##### `ResetYear` <a name="ResetYear" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetYear"></a>

```csharp
private void ResetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.dayInput">DayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.monthInput">MonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.yearInput">YearInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.month">Month</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.year">Year</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.dayInput"></a>

```csharp
public double DayInput { get; }
```

- *Type:* double

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.monthInput"></a>

```csharp
public double MonthInput { get; }
```

- *Type:* double

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.yearInput"></a>

```csharp
public double YearInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.month"></a>

```csharp
public double Month { get; }
```

- *Type:* double

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.year"></a>

```csharp
public double Year { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.internalValue"></a>

```csharp
public LookerInstanceDenyMaintenancePeriodStartDate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a>

---


### LookerInstanceDenyMaintenancePeriodTimeOutputReference <a name="LookerInstanceDenyMaintenancePeriodTimeOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceDenyMaintenancePeriodTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetHours"></a>

```csharp
private void ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetSeconds"></a>

```csharp
private void ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.internalValue"></a>

```csharp
public LookerInstanceDenyMaintenancePeriodTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a>

---


### LookerInstanceEncryptionConfigOutputReference <a name="LookerInstanceEncryptionConfigOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceEncryptionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.resetKmsKeyName"></a>

```csharp
private void ResetKmsKeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameVersion">KmsKeyNameVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyState">KmsKeyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameVersion`<sup>Required</sup> <a name="KmsKeyNameVersion" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameVersion"></a>

```csharp
public string KmsKeyNameVersion { get; }
```

- *Type:* string

---

##### `KmsKeyState`<sup>Required</sup> <a name="KmsKeyState" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyState"></a>

```csharp
public string KmsKeyState { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.internalValue"></a>

```csharp
public LookerInstanceEncryptionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a>

---


### LookerInstanceMaintenanceWindowOutputReference <a name="LookerInstanceMaintenanceWindowOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartTime` <a name="PutStartTime" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.putStartTime"></a>

```csharp
private void PutStartTime(LookerInstanceMaintenanceWindowStartTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference">LookerInstanceMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.startTime"></a>

```csharp
public LookerInstanceMaintenanceWindowStartTimeOutputReference StartTime { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference">LookerInstanceMaintenanceWindowStartTimeOutputReference</a>

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.startTimeInput"></a>

```csharp
public LookerInstanceMaintenanceWindowStartTime StartTimeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a>

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public LookerInstanceMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a>

---


### LookerInstanceMaintenanceWindowStartTimeOutputReference <a name="LookerInstanceMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceMaintenanceWindowStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```csharp
private void ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```csharp
private void ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```csharp
public LookerInstanceMaintenanceWindowStartTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a>

---


### LookerInstanceOauthConfigOutputReference <a name="LookerInstanceOauthConfigOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceOauthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.internalValue"></a>

```csharp
public LookerInstanceOauthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a>

---


### LookerInstancePscConfigOutputReference <a name="LookerInstancePscConfigOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstancePscConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.putServiceAttachments">PutServiceAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.resetAllowedVpcs">ResetAllowedVpcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.resetServiceAttachments">ResetServiceAttachments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceAttachments` <a name="PutServiceAttachments" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.putServiceAttachments"></a>

```csharp
private void PutServiceAttachments(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.putServiceAttachments.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowedVpcs` <a name="ResetAllowedVpcs" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.resetAllowedVpcs"></a>

```csharp
private void ResetAllowedVpcs()
```

##### `ResetServiceAttachments` <a name="ResetServiceAttachments" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.resetServiceAttachments"></a>

```csharp
private void ResetServiceAttachments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.lookerServiceAttachmentUri">LookerServiceAttachmentUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.serviceAttachments">ServiceAttachments</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList">LookerInstancePscConfigServiceAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.allowedVpcsInput">AllowedVpcsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.serviceAttachmentsInput">ServiceAttachmentsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.allowedVpcs">AllowedVpcs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LookerServiceAttachmentUri`<sup>Required</sup> <a name="LookerServiceAttachmentUri" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.lookerServiceAttachmentUri"></a>

```csharp
public string LookerServiceAttachmentUri { get; }
```

- *Type:* string

---

##### `ServiceAttachments`<sup>Required</sup> <a name="ServiceAttachments" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.serviceAttachments"></a>

```csharp
public LookerInstancePscConfigServiceAttachmentsList ServiceAttachments { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList">LookerInstancePscConfigServiceAttachmentsList</a>

---

##### `AllowedVpcsInput`<sup>Optional</sup> <a name="AllowedVpcsInput" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.allowedVpcsInput"></a>

```csharp
public string[] AllowedVpcsInput { get; }
```

- *Type:* string[]

---

##### `ServiceAttachmentsInput`<sup>Optional</sup> <a name="ServiceAttachmentsInput" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.serviceAttachmentsInput"></a>

```csharp
public object ServiceAttachmentsInput { get; }
```

- *Type:* object

---

##### `AllowedVpcs`<sup>Required</sup> <a name="AllowedVpcs" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.allowedVpcs"></a>

```csharp
public string[] AllowedVpcs { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.internalValue"></a>

```csharp
public LookerInstancePscConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a>

---


### LookerInstancePscConfigServiceAttachmentsList <a name="LookerInstancePscConfigServiceAttachmentsList" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstancePscConfigServiceAttachmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.get"></a>

```csharp
private LookerInstancePscConfigServiceAttachmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LookerInstancePscConfigServiceAttachmentsOutputReference <a name="LookerInstancePscConfigServiceAttachmentsOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstancePscConfigServiceAttachmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.resetLocalFqdn">ResetLocalFqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.resetTargetServiceAttachmentUri">ResetTargetServiceAttachmentUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocalFqdn` <a name="ResetLocalFqdn" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.resetLocalFqdn"></a>

```csharp
private void ResetLocalFqdn()
```

##### `ResetTargetServiceAttachmentUri` <a name="ResetTargetServiceAttachmentUri" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.resetTargetServiceAttachmentUri"></a>

```csharp
private void ResetTargetServiceAttachmentUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.connectionStatus">ConnectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdnInput">LocalFqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUriInput">TargetServiceAttachmentUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdn">LocalFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUri">TargetServiceAttachmentUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionStatus`<sup>Required</sup> <a name="ConnectionStatus" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.connectionStatus"></a>

```csharp
public string ConnectionStatus { get; }
```

- *Type:* string

---

##### `LocalFqdnInput`<sup>Optional</sup> <a name="LocalFqdnInput" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdnInput"></a>

```csharp
public string LocalFqdnInput { get; }
```

- *Type:* string

---

##### `TargetServiceAttachmentUriInput`<sup>Optional</sup> <a name="TargetServiceAttachmentUriInput" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUriInput"></a>

```csharp
public string TargetServiceAttachmentUriInput { get; }
```

- *Type:* string

---

##### `LocalFqdn`<sup>Required</sup> <a name="LocalFqdn" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdn"></a>

```csharp
public string LocalFqdn { get; }
```

- *Type:* string

---

##### `TargetServiceAttachmentUri`<sup>Required</sup> <a name="TargetServiceAttachmentUri" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUri"></a>

```csharp
public string TargetServiceAttachmentUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LookerInstanceTimeoutsOutputReference <a name="LookerInstanceTimeoutsOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LookerInstanceUserMetadataOutputReference <a name="LookerInstanceUserMetadataOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LookerInstanceUserMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalDeveloperUserCount">ResetAdditionalDeveloperUserCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalStandardUserCount">ResetAdditionalStandardUserCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalViewerUserCount">ResetAdditionalViewerUserCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalDeveloperUserCount` <a name="ResetAdditionalDeveloperUserCount" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalDeveloperUserCount"></a>

```csharp
private void ResetAdditionalDeveloperUserCount()
```

##### `ResetAdditionalStandardUserCount` <a name="ResetAdditionalStandardUserCount" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalStandardUserCount"></a>

```csharp
private void ResetAdditionalStandardUserCount()
```

##### `ResetAdditionalViewerUserCount` <a name="ResetAdditionalViewerUserCount" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalViewerUserCount"></a>

```csharp
private void ResetAdditionalViewerUserCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCountInput">AdditionalDeveloperUserCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalStandardUserCountInput">AdditionalStandardUserCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalViewerUserCountInput">AdditionalViewerUserCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCount">AdditionalDeveloperUserCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalStandardUserCount">AdditionalStandardUserCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalViewerUserCount">AdditionalViewerUserCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalDeveloperUserCountInput`<sup>Optional</sup> <a name="AdditionalDeveloperUserCountInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCountInput"></a>

```csharp
public double AdditionalDeveloperUserCountInput { get; }
```

- *Type:* double

---

##### `AdditionalStandardUserCountInput`<sup>Optional</sup> <a name="AdditionalStandardUserCountInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalStandardUserCountInput"></a>

```csharp
public double AdditionalStandardUserCountInput { get; }
```

- *Type:* double

---

##### `AdditionalViewerUserCountInput`<sup>Optional</sup> <a name="AdditionalViewerUserCountInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalViewerUserCountInput"></a>

```csharp
public double AdditionalViewerUserCountInput { get; }
```

- *Type:* double

---

##### `AdditionalDeveloperUserCount`<sup>Required</sup> <a name="AdditionalDeveloperUserCount" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCount"></a>

```csharp
public double AdditionalDeveloperUserCount { get; }
```

- *Type:* double

---

##### `AdditionalStandardUserCount`<sup>Required</sup> <a name="AdditionalStandardUserCount" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalStandardUserCount"></a>

```csharp
public double AdditionalStandardUserCount { get; }
```

- *Type:* double

---

##### `AdditionalViewerUserCount`<sup>Required</sup> <a name="AdditionalViewerUserCount" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalViewerUserCount"></a>

```csharp
public double AdditionalViewerUserCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.internalValue"></a>

```csharp
public LookerInstanceUserMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a>

---



