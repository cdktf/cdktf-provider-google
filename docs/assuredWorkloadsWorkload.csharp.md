# `assuredWorkloadsWorkload` Submodule <a name="`assuredWorkloadsWorkload` Submodule" id="@cdktf/provider-google.assuredWorkloadsWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AssuredWorkloadsWorkload <a name="AssuredWorkloadsWorkload" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload google_assured_workloads_workload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkload(Construct Scope, string Id, AssuredWorkloadsWorkloadConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig">AssuredWorkloadsWorkloadConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig">AssuredWorkloadsWorkloadConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putKmsSettings">PutKmsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putPartnerPermissions">PutPartnerPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putResourceSettings">PutResourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putWorkloadOptions">PutWorkloadOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetBillingAccount">ResetBillingAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetEnableSovereignControls">ResetEnableSovereignControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetKmsSettings">ResetKmsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetPartner">ResetPartner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetPartnerPermissions">ResetPartnerPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetPartnerServicesBillingAccount">ResetPartnerServicesBillingAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetProvisionedResourcesParent">ResetProvisionedResourcesParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetResourceSettings">ResetResourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetViolationNotificationsEnabled">ResetViolationNotificationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetWorkloadOptions">ResetWorkloadOptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKmsSettings` <a name="PutKmsSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putKmsSettings"></a>

```csharp
private void PutKmsSettings(AssuredWorkloadsWorkloadKmsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putKmsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a>

---

##### `PutPartnerPermissions` <a name="PutPartnerPermissions" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putPartnerPermissions"></a>

```csharp
private void PutPartnerPermissions(AssuredWorkloadsWorkloadPartnerPermissions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putPartnerPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions">AssuredWorkloadsWorkloadPartnerPermissions</a>

---

##### `PutResourceSettings` <a name="PutResourceSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putResourceSettings"></a>

```csharp
private void PutResourceSettings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putResourceSettings.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putTimeouts"></a>

```csharp
private void PutTimeouts(AssuredWorkloadsWorkloadTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts">AssuredWorkloadsWorkloadTimeouts</a>

---

##### `PutWorkloadOptions` <a name="PutWorkloadOptions" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putWorkloadOptions"></a>

```csharp
private void PutWorkloadOptions(AssuredWorkloadsWorkloadWorkloadOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putWorkloadOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions">AssuredWorkloadsWorkloadWorkloadOptions</a>

---

##### `ResetBillingAccount` <a name="ResetBillingAccount" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetBillingAccount"></a>

```csharp
private void ResetBillingAccount()
```

##### `ResetEnableSovereignControls` <a name="ResetEnableSovereignControls" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetEnableSovereignControls"></a>

```csharp
private void ResetEnableSovereignControls()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsSettings` <a name="ResetKmsSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetKmsSettings"></a>

```csharp
private void ResetKmsSettings()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetPartner` <a name="ResetPartner" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetPartner"></a>

```csharp
private void ResetPartner()
```

##### `ResetPartnerPermissions` <a name="ResetPartnerPermissions" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetPartnerPermissions"></a>

```csharp
private void ResetPartnerPermissions()
```

##### `ResetPartnerServicesBillingAccount` <a name="ResetPartnerServicesBillingAccount" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetPartnerServicesBillingAccount"></a>

```csharp
private void ResetPartnerServicesBillingAccount()
```

##### `ResetProvisionedResourcesParent` <a name="ResetProvisionedResourcesParent" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetProvisionedResourcesParent"></a>

```csharp
private void ResetProvisionedResourcesParent()
```

##### `ResetResourceSettings` <a name="ResetResourceSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetResourceSettings"></a>

```csharp
private void ResetResourceSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetViolationNotificationsEnabled` <a name="ResetViolationNotificationsEnabled" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetViolationNotificationsEnabled"></a>

```csharp
private void ResetViolationNotificationsEnabled()
```

##### `ResetWorkloadOptions` <a name="ResetWorkloadOptions" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetWorkloadOptions"></a>

```csharp
private void ResetWorkloadOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AssuredWorkloadsWorkload resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AssuredWorkloadsWorkload.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AssuredWorkloadsWorkload.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AssuredWorkloadsWorkload.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AssuredWorkloadsWorkload.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AssuredWorkloadsWorkload resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AssuredWorkloadsWorkload to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AssuredWorkloadsWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AssuredWorkloadsWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.complianceStatus">ComplianceStatus</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList">AssuredWorkloadsWorkloadComplianceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.compliantButDisallowedServices">CompliantButDisallowedServices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.ekmProvisioningResponse">EkmProvisioningResponse</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList">AssuredWorkloadsWorkloadEkmProvisioningResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.kajEnrollmentState">KajEnrollmentState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.kmsSettings">KmsSettings</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference">AssuredWorkloadsWorkloadKmsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partnerPermissions">PartnerPermissions</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference">AssuredWorkloadsWorkloadPartnerPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList">AssuredWorkloadsWorkloadResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.resourceSettings">ResourceSettings</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList">AssuredWorkloadsWorkloadResourceSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.saaEnrollmentResponse">SaaEnrollmentResponse</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList">AssuredWorkloadsWorkloadSaaEnrollmentResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference">AssuredWorkloadsWorkloadTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.workloadOptions">WorkloadOptions</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference">AssuredWorkloadsWorkloadWorkloadOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.billingAccountInput">BillingAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.complianceRegimeInput">ComplianceRegimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.enableSovereignControlsInput">EnableSovereignControlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.kmsSettingsInput">KmsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partnerInput">PartnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partnerPermissionsInput">PartnerPermissionsInput</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions">AssuredWorkloadsWorkloadPartnerPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partnerServicesBillingAccountInput">PartnerServicesBillingAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provisionedResourcesParentInput">ProvisionedResourcesParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.resourceSettingsInput">ResourceSettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.violationNotificationsEnabledInput">ViolationNotificationsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.workloadOptionsInput">WorkloadOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions">AssuredWorkloadsWorkloadWorkloadOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.billingAccount">BillingAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.complianceRegime">ComplianceRegime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.enableSovereignControls">EnableSovereignControls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partner">Partner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partnerServicesBillingAccount">PartnerServicesBillingAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provisionedResourcesParent">ProvisionedResourcesParent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.violationNotificationsEnabled">ViolationNotificationsEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ComplianceStatus`<sup>Required</sup> <a name="ComplianceStatus" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.complianceStatus"></a>

```csharp
public AssuredWorkloadsWorkloadComplianceStatusList ComplianceStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList">AssuredWorkloadsWorkloadComplianceStatusList</a>

---

##### `CompliantButDisallowedServices`<sup>Required</sup> <a name="CompliantButDisallowedServices" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.compliantButDisallowedServices"></a>

```csharp
public string[] CompliantButDisallowedServices { get; }
```

- *Type:* string[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EkmProvisioningResponse`<sup>Required</sup> <a name="EkmProvisioningResponse" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.ekmProvisioningResponse"></a>

```csharp
public AssuredWorkloadsWorkloadEkmProvisioningResponseList EkmProvisioningResponse { get; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList">AssuredWorkloadsWorkloadEkmProvisioningResponseList</a>

---

##### `KajEnrollmentState`<sup>Required</sup> <a name="KajEnrollmentState" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.kajEnrollmentState"></a>

```csharp
public string KajEnrollmentState { get; }
```

- *Type:* string

---

##### `KmsSettings`<sup>Required</sup> <a name="KmsSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.kmsSettings"></a>

```csharp
public AssuredWorkloadsWorkloadKmsSettingsOutputReference KmsSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference">AssuredWorkloadsWorkloadKmsSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartnerPermissions`<sup>Required</sup> <a name="PartnerPermissions" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partnerPermissions"></a>

```csharp
public AssuredWorkloadsWorkloadPartnerPermissionsOutputReference PartnerPermissions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference">AssuredWorkloadsWorkloadPartnerPermissionsOutputReference</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.resources"></a>

```csharp
public AssuredWorkloadsWorkloadResourcesList Resources { get; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList">AssuredWorkloadsWorkloadResourcesList</a>

---

##### `ResourceSettings`<sup>Required</sup> <a name="ResourceSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.resourceSettings"></a>

```csharp
public AssuredWorkloadsWorkloadResourceSettingsList ResourceSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList">AssuredWorkloadsWorkloadResourceSettingsList</a>

---

##### `SaaEnrollmentResponse`<sup>Required</sup> <a name="SaaEnrollmentResponse" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.saaEnrollmentResponse"></a>

```csharp
public AssuredWorkloadsWorkloadSaaEnrollmentResponseList SaaEnrollmentResponse { get; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList">AssuredWorkloadsWorkloadSaaEnrollmentResponseList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.timeouts"></a>

```csharp
public AssuredWorkloadsWorkloadTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference">AssuredWorkloadsWorkloadTimeoutsOutputReference</a>

---

##### `WorkloadOptions`<sup>Required</sup> <a name="WorkloadOptions" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.workloadOptions"></a>

```csharp
public AssuredWorkloadsWorkloadWorkloadOptionsOutputReference WorkloadOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference">AssuredWorkloadsWorkloadWorkloadOptionsOutputReference</a>

---

##### `BillingAccountInput`<sup>Optional</sup> <a name="BillingAccountInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.billingAccountInput"></a>

```csharp
public string BillingAccountInput { get; }
```

- *Type:* string

---

##### `ComplianceRegimeInput`<sup>Optional</sup> <a name="ComplianceRegimeInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.complianceRegimeInput"></a>

```csharp
public string ComplianceRegimeInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnableSovereignControlsInput`<sup>Optional</sup> <a name="EnableSovereignControlsInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.enableSovereignControlsInput"></a>

```csharp
public object EnableSovereignControlsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsSettingsInput`<sup>Optional</sup> <a name="KmsSettingsInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.kmsSettingsInput"></a>

```csharp
public AssuredWorkloadsWorkloadKmsSettings KmsSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `PartnerInput`<sup>Optional</sup> <a name="PartnerInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partnerInput"></a>

```csharp
public string PartnerInput { get; }
```

- *Type:* string

---

##### `PartnerPermissionsInput`<sup>Optional</sup> <a name="PartnerPermissionsInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partnerPermissionsInput"></a>

```csharp
public AssuredWorkloadsWorkloadPartnerPermissions PartnerPermissionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions">AssuredWorkloadsWorkloadPartnerPermissions</a>

---

##### `PartnerServicesBillingAccountInput`<sup>Optional</sup> <a name="PartnerServicesBillingAccountInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partnerServicesBillingAccountInput"></a>

```csharp
public string PartnerServicesBillingAccountInput { get; }
```

- *Type:* string

---

##### `ProvisionedResourcesParentInput`<sup>Optional</sup> <a name="ProvisionedResourcesParentInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provisionedResourcesParentInput"></a>

```csharp
public string ProvisionedResourcesParentInput { get; }
```

- *Type:* string

---

##### `ResourceSettingsInput`<sup>Optional</sup> <a name="ResourceSettingsInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.resourceSettingsInput"></a>

```csharp
public object ResourceSettingsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ViolationNotificationsEnabledInput`<sup>Optional</sup> <a name="ViolationNotificationsEnabledInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.violationNotificationsEnabledInput"></a>

```csharp
public object ViolationNotificationsEnabledInput { get; }
```

- *Type:* object

---

##### `WorkloadOptionsInput`<sup>Optional</sup> <a name="WorkloadOptionsInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.workloadOptionsInput"></a>

```csharp
public AssuredWorkloadsWorkloadWorkloadOptions WorkloadOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions">AssuredWorkloadsWorkloadWorkloadOptions</a>

---

##### `BillingAccount`<sup>Required</sup> <a name="BillingAccount" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.billingAccount"></a>

```csharp
public string BillingAccount { get; }
```

- *Type:* string

---

##### `ComplianceRegime`<sup>Required</sup> <a name="ComplianceRegime" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.complianceRegime"></a>

```csharp
public string ComplianceRegime { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnableSovereignControls`<sup>Required</sup> <a name="EnableSovereignControls" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.enableSovereignControls"></a>

```csharp
public object EnableSovereignControls { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `Partner`<sup>Required</sup> <a name="Partner" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partner"></a>

```csharp
public string Partner { get; }
```

- *Type:* string

---

##### `PartnerServicesBillingAccount`<sup>Required</sup> <a name="PartnerServicesBillingAccount" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partnerServicesBillingAccount"></a>

```csharp
public string PartnerServicesBillingAccount { get; }
```

- *Type:* string

---

##### `ProvisionedResourcesParent`<sup>Required</sup> <a name="ProvisionedResourcesParent" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provisionedResourcesParent"></a>

```csharp
public string ProvisionedResourcesParent { get; }
```

- *Type:* string

---

##### `ViolationNotificationsEnabled`<sup>Required</sup> <a name="ViolationNotificationsEnabled" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.violationNotificationsEnabled"></a>

```csharp
public object ViolationNotificationsEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AssuredWorkloadsWorkloadComplianceStatus <a name="AssuredWorkloadsWorkloadComplianceStatus" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadComplianceStatus {

};
```


### AssuredWorkloadsWorkloadConfig <a name="AssuredWorkloadsWorkloadConfig" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ComplianceRegime,
    string DisplayName,
    string Location,
    string Organization,
    string BillingAccount = null,
    object EnableSovereignControls = null,
    string Id = null,
    AssuredWorkloadsWorkloadKmsSettings KmsSettings = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Partner = null,
    AssuredWorkloadsWorkloadPartnerPermissions PartnerPermissions = null,
    string PartnerServicesBillingAccount = null,
    string ProvisionedResourcesParent = null,
    object ResourceSettings = null,
    AssuredWorkloadsWorkloadTimeouts Timeouts = null,
    object ViolationNotificationsEnabled = null,
    AssuredWorkloadsWorkloadWorkloadOptions WorkloadOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.complianceRegime">ComplianceRegime</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.organization">Organization</a></code> | <code>string</code> | The organization for the resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.billingAccount">BillingAccount</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.enableSovereignControls">EnableSovereignControls</a></code> | <code>object</code> | Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#id AssuredWorkloadsWorkload#id}. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.kmsSettings">KmsSettings</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a></code> | kms_settings block. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Labels applied to the workload. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.partner">Partner</a></code> | <code>string</code> | Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS, SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN, SOVEREIGN_CONTROLS_BY_CNTXT, SOVEREIGN_CONTROLS_BY_CNTXT_NO_EKM. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.partnerPermissions">PartnerPermissions</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions">AssuredWorkloadsWorkloadPartnerPermissions</a></code> | partner_permissions block. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.partnerServicesBillingAccount">PartnerServicesBillingAccount</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.provisionedResourcesParent">ProvisionedResourcesParent</a></code> | <code>string</code> | Input only. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.resourceSettings">ResourceSettings</a></code> | <code>object</code> | resource_settings block. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts">AssuredWorkloadsWorkloadTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.violationNotificationsEnabled">ViolationNotificationsEnabled</a></code> | <code>object</code> | Optional. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.workloadOptions">WorkloadOptions</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions">AssuredWorkloadsWorkloadWorkloadOptions</a></code> | workload_options block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ComplianceRegime`<sup>Required</sup> <a name="ComplianceRegime" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.complianceRegime"></a>

```csharp
public string ComplianceRegime { get; set; }
```

- *Type:* string

Required.

Immutable. Compliance Regime associated with this workload. Possible values: COMPLIANCE_REGIME_UNSPECIFIED, IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE, US_REGIONAL_ACCESS, HIPAA, HITRUST, EU_REGIONS_AND_SUPPORT, CA_REGIONS_AND_SUPPORT, ITAR, AU_REGIONS_AND_US_SUPPORT, ASSURED_WORKLOADS_FOR_PARTNERS, ISR_REGIONS, ISR_REGIONS_AND_SUPPORT, CA_PROTECTED_B, IL5, IL2, JP_REGIONS_AND_SUPPORT, KSA_REGIONS_AND_SUPPORT_WITH_SOVEREIGNTY_CONTROLS, REGIONAL_CONTROLS, HEALTHCARE_AND_LIFE_SCIENCES_CONTROLS, HEALTHCARE_AND_LIFE_SCIENCES_CONTROLS_US_SUPPORT, IRS_1075

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#compliance_regime AssuredWorkloadsWorkload#compliance_regime}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Required.

The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#display_name AssuredWorkloadsWorkload#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#location AssuredWorkloadsWorkload#location}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

The organization for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#organization AssuredWorkloadsWorkload#organization}

---

##### `BillingAccount`<sup>Optional</sup> <a name="BillingAccount" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.billingAccount"></a>

```csharp
public string BillingAccount { get; set; }
```

- *Type:* string

Optional.

Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#billing_account AssuredWorkloadsWorkload#billing_account}

---

##### `EnableSovereignControls`<sup>Optional</sup> <a name="EnableSovereignControls" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.enableSovereignControls"></a>

```csharp
public object EnableSovereignControls { get; set; }
```

- *Type:* object

Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#enable_sovereign_controls AssuredWorkloadsWorkload#enable_sovereign_controls}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#id AssuredWorkloadsWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsSettings`<sup>Optional</sup> <a name="KmsSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.kmsSettings"></a>

```csharp
public AssuredWorkloadsWorkloadKmsSettings KmsSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a>

kms_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#kms_settings AssuredWorkloadsWorkload#kms_settings}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Labels applied to the workload.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#labels AssuredWorkloadsWorkload#labels}

---

##### `Partner`<sup>Optional</sup> <a name="Partner" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.partner"></a>

```csharp
public string Partner { get; set; }
```

- *Type:* string

Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS, SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN, SOVEREIGN_CONTROLS_BY_CNTXT, SOVEREIGN_CONTROLS_BY_CNTXT_NO_EKM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#partner AssuredWorkloadsWorkload#partner}

---

##### `PartnerPermissions`<sup>Optional</sup> <a name="PartnerPermissions" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.partnerPermissions"></a>

```csharp
public AssuredWorkloadsWorkloadPartnerPermissions PartnerPermissions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions">AssuredWorkloadsWorkloadPartnerPermissions</a>

partner_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#partner_permissions AssuredWorkloadsWorkload#partner_permissions}

---

##### `PartnerServicesBillingAccount`<sup>Optional</sup> <a name="PartnerServicesBillingAccount" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.partnerServicesBillingAccount"></a>

```csharp
public string PartnerServicesBillingAccount { get; set; }
```

- *Type:* string

Optional.

Input only. Billing account necessary for purchasing services from Sovereign Partners. This field is required for creating SIA/PSN/CNTXT partner workloads. The caller should have 'billing.resourceAssociations.create' IAM permission on this billing-account. The format of this string is billingAccounts/AAAAAA-BBBBBB-CCCCCC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#partner_services_billing_account AssuredWorkloadsWorkload#partner_services_billing_account}

---

##### `ProvisionedResourcesParent`<sup>Optional</sup> <a name="ProvisionedResourcesParent" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.provisionedResourcesParent"></a>

```csharp
public string ProvisionedResourcesParent { get; set; }
```

- *Type:* string

Input only.

The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#provisioned_resources_parent AssuredWorkloadsWorkload#provisioned_resources_parent}

---

##### `ResourceSettings`<sup>Optional</sup> <a name="ResourceSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.resourceSettings"></a>

```csharp
public object ResourceSettings { get; set; }
```

- *Type:* object

resource_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#resource_settings AssuredWorkloadsWorkload#resource_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.timeouts"></a>

```csharp
public AssuredWorkloadsWorkloadTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts">AssuredWorkloadsWorkloadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#timeouts AssuredWorkloadsWorkload#timeouts}

---

##### `ViolationNotificationsEnabled`<sup>Optional</sup> <a name="ViolationNotificationsEnabled" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.violationNotificationsEnabled"></a>

```csharp
public object ViolationNotificationsEnabled { get; set; }
```

- *Type:* object

Optional.

Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#violation_notifications_enabled AssuredWorkloadsWorkload#violation_notifications_enabled}

---

##### `WorkloadOptions`<sup>Optional</sup> <a name="WorkloadOptions" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.workloadOptions"></a>

```csharp
public AssuredWorkloadsWorkloadWorkloadOptions WorkloadOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions">AssuredWorkloadsWorkloadWorkloadOptions</a>

workload_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#workload_options AssuredWorkloadsWorkload#workload_options}

---

### AssuredWorkloadsWorkloadEkmProvisioningResponse <a name="AssuredWorkloadsWorkloadEkmProvisioningResponse" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadEkmProvisioningResponse {

};
```


### AssuredWorkloadsWorkloadKmsSettings <a name="AssuredWorkloadsWorkloadKmsSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadKmsSettings {
    string NextRotationTime,
    string RotationPeriod
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings.property.nextRotationTime">NextRotationTime</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings.property.rotationPeriod">RotationPeriod</a></code> | <code>string</code> | Required. |

---

##### `NextRotationTime`<sup>Required</sup> <a name="NextRotationTime" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings.property.nextRotationTime"></a>

```csharp
public string NextRotationTime { get; set; }
```

- *Type:* string

Required.

Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#next_rotation_time AssuredWorkloadsWorkload#next_rotation_time}

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings.property.rotationPeriod"></a>

```csharp
public string RotationPeriod { get; set; }
```

- *Type:* string

Required.

Input only. Immutable. will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#rotation_period AssuredWorkloadsWorkload#rotation_period}

---

### AssuredWorkloadsWorkloadPartnerPermissions <a name="AssuredWorkloadsWorkloadPartnerPermissions" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadPartnerPermissions {
    object AssuredWorkloadsMonitoring = null,
    object DataLogsViewer = null,
    object ServiceAccessApprover = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions.property.assuredWorkloadsMonitoring">AssuredWorkloadsMonitoring</a></code> | <code>object</code> | Optional. Allow partner to view violation alerts. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions.property.dataLogsViewer">DataLogsViewer</a></code> | <code>object</code> | Allow the partner to view inspectability logs and monitoring violations. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions.property.serviceAccessApprover">ServiceAccessApprover</a></code> | <code>object</code> | Optional. Allow partner to view access approval logs. |

---

##### `AssuredWorkloadsMonitoring`<sup>Optional</sup> <a name="AssuredWorkloadsMonitoring" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions.property.assuredWorkloadsMonitoring"></a>

```csharp
public object AssuredWorkloadsMonitoring { get; set; }
```

- *Type:* object

Optional. Allow partner to view violation alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#assured_workloads_monitoring AssuredWorkloadsWorkload#assured_workloads_monitoring}

---

##### `DataLogsViewer`<sup>Optional</sup> <a name="DataLogsViewer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions.property.dataLogsViewer"></a>

```csharp
public object DataLogsViewer { get; set; }
```

- *Type:* object

Allow the partner to view inspectability logs and monitoring violations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#data_logs_viewer AssuredWorkloadsWorkload#data_logs_viewer}

---

##### `ServiceAccessApprover`<sup>Optional</sup> <a name="ServiceAccessApprover" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions.property.serviceAccessApprover"></a>

```csharp
public object ServiceAccessApprover { get; set; }
```

- *Type:* object

Optional. Allow partner to view access approval logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#service_access_approver AssuredWorkloadsWorkload#service_access_approver}

---

### AssuredWorkloadsWorkloadResources <a name="AssuredWorkloadsWorkloadResources" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadResources {

};
```


### AssuredWorkloadsWorkloadResourceSettings <a name="AssuredWorkloadsWorkloadResourceSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadResourceSettings {
    string DisplayName = null,
    string ResourceId = null,
    string ResourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings.property.displayName">DisplayName</a></code> | <code>string</code> | User-assigned resource display name. If not empty it will be used to create a resource with the specified name. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings.property.resourceId">ResourceId</a></code> | <code>string</code> | Resource identifier. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings.property.resourceType">ResourceType</a></code> | <code>string</code> | Indicates the type of resource. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-assigned resource display name. If not empty it will be used to create a resource with the specified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#display_name AssuredWorkloadsWorkload#display_name}

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Resource identifier.

For a project this represents projectId. If the project is already taken, the workload creation will fail. For KeyRing, this represents the keyring_id. For a folder, don't set this value as folder_id is assigned by Google.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#resource_id AssuredWorkloadsWorkload#resource_id}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Indicates the type of resource.

This field should be specified to correspond the id to the right project type (CONSUMER_PROJECT or ENCRYPTION_KEYS_PROJECT) Possible values: RESOURCE_TYPE_UNSPECIFIED, CONSUMER_PROJECT, ENCRYPTION_KEYS_PROJECT, KEYRING, CONSUMER_FOLDER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#resource_type AssuredWorkloadsWorkload#resource_type}

---

### AssuredWorkloadsWorkloadSaaEnrollmentResponse <a name="AssuredWorkloadsWorkloadSaaEnrollmentResponse" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadSaaEnrollmentResponse {

};
```


### AssuredWorkloadsWorkloadTimeouts <a name="AssuredWorkloadsWorkloadTimeouts" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#create AssuredWorkloadsWorkload#create}. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#delete AssuredWorkloadsWorkload#delete}. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#update AssuredWorkloadsWorkload#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#create AssuredWorkloadsWorkload#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#delete AssuredWorkloadsWorkload#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#update AssuredWorkloadsWorkload#update}.

---

### AssuredWorkloadsWorkloadWorkloadOptions <a name="AssuredWorkloadsWorkloadWorkloadOptions" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadWorkloadOptions {
    string KajEnrollmentType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions.property.kajEnrollmentType">KajEnrollmentType</a></code> | <code>string</code> | Indicates type of KAJ enrollment for the workload. |

---

##### `KajEnrollmentType`<sup>Optional</sup> <a name="KajEnrollmentType" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions.property.kajEnrollmentType"></a>

```csharp
public string KajEnrollmentType { get; set; }
```

- *Type:* string

Indicates type of KAJ enrollment for the workload.

Currently, only specifiying KEY_ACCESS_TRANSPARENCY_OFF is implemented to not enroll in KAT-level KAJ enrollment for Regional Controls workloads. Possible values: KAJ_ENROLLMENT_TYPE_UNSPECIFIED, FULL_KAJ, EKM_ONLY, KEY_ACCESS_TRANSPARENCY_OFF

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#kaj_enrollment_type AssuredWorkloadsWorkload#kaj_enrollment_type}

---

## Classes <a name="Classes" id="Classes"></a>

### AssuredWorkloadsWorkloadComplianceStatusList <a name="AssuredWorkloadsWorkloadComplianceStatusList" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadComplianceStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.get"></a>

```csharp
private AssuredWorkloadsWorkloadComplianceStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### AssuredWorkloadsWorkloadComplianceStatusOutputReference <a name="AssuredWorkloadsWorkloadComplianceStatusOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadComplianceStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.property.acknowledgedViolationCount">AcknowledgedViolationCount</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.property.activeViolationCount">ActiveViolationCount</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatus">AssuredWorkloadsWorkloadComplianceStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcknowledgedViolationCount`<sup>Required</sup> <a name="AcknowledgedViolationCount" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.property.acknowledgedViolationCount"></a>

```csharp
public double[] AcknowledgedViolationCount { get; }
```

- *Type:* double[]

---

##### `ActiveViolationCount`<sup>Required</sup> <a name="ActiveViolationCount" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.property.activeViolationCount"></a>

```csharp
public double[] ActiveViolationCount { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.property.internalValue"></a>

```csharp
public AssuredWorkloadsWorkloadComplianceStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatus">AssuredWorkloadsWorkloadComplianceStatus</a>

---


### AssuredWorkloadsWorkloadEkmProvisioningResponseList <a name="AssuredWorkloadsWorkloadEkmProvisioningResponseList" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadEkmProvisioningResponseList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.get"></a>

```csharp
private AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference <a name="AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningErrorDomain">EkmProvisioningErrorDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningErrorMapping">EkmProvisioningErrorMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningState">EkmProvisioningState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponse">AssuredWorkloadsWorkloadEkmProvisioningResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EkmProvisioningErrorDomain`<sup>Required</sup> <a name="EkmProvisioningErrorDomain" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningErrorDomain"></a>

```csharp
public string EkmProvisioningErrorDomain { get; }
```

- *Type:* string

---

##### `EkmProvisioningErrorMapping`<sup>Required</sup> <a name="EkmProvisioningErrorMapping" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningErrorMapping"></a>

```csharp
public string EkmProvisioningErrorMapping { get; }
```

- *Type:* string

---

##### `EkmProvisioningState`<sup>Required</sup> <a name="EkmProvisioningState" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningState"></a>

```csharp
public string EkmProvisioningState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.internalValue"></a>

```csharp
public AssuredWorkloadsWorkloadEkmProvisioningResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponse">AssuredWorkloadsWorkloadEkmProvisioningResponse</a>

---


### AssuredWorkloadsWorkloadKmsSettingsOutputReference <a name="AssuredWorkloadsWorkloadKmsSettingsOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadKmsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTimeInput">NextRotationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTime">NextRotationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriod">RotationPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NextRotationTimeInput`<sup>Optional</sup> <a name="NextRotationTimeInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTimeInput"></a>

```csharp
public string NextRotationTimeInput { get; }
```

- *Type:* string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriodInput"></a>

```csharp
public string RotationPeriodInput { get; }
```

- *Type:* string

---

##### `NextRotationTime`<sup>Required</sup> <a name="NextRotationTime" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTime"></a>

```csharp
public string NextRotationTime { get; }
```

- *Type:* string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriod"></a>

```csharp
public string RotationPeriod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.internalValue"></a>

```csharp
public AssuredWorkloadsWorkloadKmsSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a>

---


### AssuredWorkloadsWorkloadPartnerPermissionsOutputReference <a name="AssuredWorkloadsWorkloadPartnerPermissionsOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadPartnerPermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetAssuredWorkloadsMonitoring">ResetAssuredWorkloadsMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetDataLogsViewer">ResetDataLogsViewer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetServiceAccessApprover">ResetServiceAccessApprover</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssuredWorkloadsMonitoring` <a name="ResetAssuredWorkloadsMonitoring" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetAssuredWorkloadsMonitoring"></a>

```csharp
private void ResetAssuredWorkloadsMonitoring()
```

##### `ResetDataLogsViewer` <a name="ResetDataLogsViewer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetDataLogsViewer"></a>

```csharp
private void ResetDataLogsViewer()
```

##### `ResetServiceAccessApprover` <a name="ResetServiceAccessApprover" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetServiceAccessApprover"></a>

```csharp
private void ResetServiceAccessApprover()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.assuredWorkloadsMonitoringInput">AssuredWorkloadsMonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.dataLogsViewerInput">DataLogsViewerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.serviceAccessApproverInput">ServiceAccessApproverInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.assuredWorkloadsMonitoring">AssuredWorkloadsMonitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.dataLogsViewer">DataLogsViewer</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.serviceAccessApprover">ServiceAccessApprover</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions">AssuredWorkloadsWorkloadPartnerPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssuredWorkloadsMonitoringInput`<sup>Optional</sup> <a name="AssuredWorkloadsMonitoringInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.assuredWorkloadsMonitoringInput"></a>

```csharp
public object AssuredWorkloadsMonitoringInput { get; }
```

- *Type:* object

---

##### `DataLogsViewerInput`<sup>Optional</sup> <a name="DataLogsViewerInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.dataLogsViewerInput"></a>

```csharp
public object DataLogsViewerInput { get; }
```

- *Type:* object

---

##### `ServiceAccessApproverInput`<sup>Optional</sup> <a name="ServiceAccessApproverInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.serviceAccessApproverInput"></a>

```csharp
public object ServiceAccessApproverInput { get; }
```

- *Type:* object

---

##### `AssuredWorkloadsMonitoring`<sup>Required</sup> <a name="AssuredWorkloadsMonitoring" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.assuredWorkloadsMonitoring"></a>

```csharp
public object AssuredWorkloadsMonitoring { get; }
```

- *Type:* object

---

##### `DataLogsViewer`<sup>Required</sup> <a name="DataLogsViewer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.dataLogsViewer"></a>

```csharp
public object DataLogsViewer { get; }
```

- *Type:* object

---

##### `ServiceAccessApprover`<sup>Required</sup> <a name="ServiceAccessApprover" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.serviceAccessApprover"></a>

```csharp
public object ServiceAccessApprover { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.internalValue"></a>

```csharp
public AssuredWorkloadsWorkloadPartnerPermissions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions">AssuredWorkloadsWorkloadPartnerPermissions</a>

---


### AssuredWorkloadsWorkloadResourceSettingsList <a name="AssuredWorkloadsWorkloadResourceSettingsList" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadResourceSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.get"></a>

```csharp
private AssuredWorkloadsWorkloadResourceSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AssuredWorkloadsWorkloadResourceSettingsOutputReference <a name="AssuredWorkloadsWorkloadResourceSettingsOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadResourceSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceId"></a>

```csharp
private void ResetResourceId()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceType"></a>

```csharp
private void ResetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AssuredWorkloadsWorkloadResourcesList <a name="AssuredWorkloadsWorkloadResourcesList" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.get"></a>

```csharp
private AssuredWorkloadsWorkloadResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### AssuredWorkloadsWorkloadResourcesOutputReference <a name="AssuredWorkloadsWorkloadResourcesOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.resourceId">ResourceId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResources">AssuredWorkloadsWorkloadResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.resourceId"></a>

```csharp
public double ResourceId { get; }
```

- *Type:* double

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.internalValue"></a>

```csharp
public AssuredWorkloadsWorkloadResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResources">AssuredWorkloadsWorkloadResources</a>

---


### AssuredWorkloadsWorkloadSaaEnrollmentResponseList <a name="AssuredWorkloadsWorkloadSaaEnrollmentResponseList" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadSaaEnrollmentResponseList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.get"></a>

```csharp
private AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference <a name="AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.setupErrors">SetupErrors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.setupStatus">SetupStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponse">AssuredWorkloadsWorkloadSaaEnrollmentResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SetupErrors`<sup>Required</sup> <a name="SetupErrors" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.setupErrors"></a>

```csharp
public string[] SetupErrors { get; }
```

- *Type:* string[]

---

##### `SetupStatus`<sup>Required</sup> <a name="SetupStatus" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.setupStatus"></a>

```csharp
public string SetupStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.internalValue"></a>

```csharp
public AssuredWorkloadsWorkloadSaaEnrollmentResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponse">AssuredWorkloadsWorkloadSaaEnrollmentResponse</a>

---


### AssuredWorkloadsWorkloadTimeoutsOutputReference <a name="AssuredWorkloadsWorkloadTimeoutsOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AssuredWorkloadsWorkloadWorkloadOptionsOutputReference <a name="AssuredWorkloadsWorkloadWorkloadOptionsOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AssuredWorkloadsWorkloadWorkloadOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.resetKajEnrollmentType">ResetKajEnrollmentType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKajEnrollmentType` <a name="ResetKajEnrollmentType" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.resetKajEnrollmentType"></a>

```csharp
private void ResetKajEnrollmentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.kajEnrollmentTypeInput">KajEnrollmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.kajEnrollmentType">KajEnrollmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions">AssuredWorkloadsWorkloadWorkloadOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KajEnrollmentTypeInput`<sup>Optional</sup> <a name="KajEnrollmentTypeInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.kajEnrollmentTypeInput"></a>

```csharp
public string KajEnrollmentTypeInput { get; }
```

- *Type:* string

---

##### `KajEnrollmentType`<sup>Required</sup> <a name="KajEnrollmentType" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.kajEnrollmentType"></a>

```csharp
public string KajEnrollmentType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.internalValue"></a>

```csharp
public AssuredWorkloadsWorkloadWorkloadOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions">AssuredWorkloadsWorkloadWorkloadOptions</a>

---



