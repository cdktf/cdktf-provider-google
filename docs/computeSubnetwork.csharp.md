# `computeSubnetwork` Submodule <a name="`computeSubnetwork` Submodule" id="@cdktf/provider-google.computeSubnetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSubnetwork <a name="ComputeSubnetwork" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork google_compute_subnetwork}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeSubnetwork(Construct Scope, string Id, ComputeSubnetworkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig">ComputeSubnetworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig">ComputeSubnetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putSecondaryIpRange">PutSecondaryIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetExternalIpv6Prefix">ResetExternalIpv6Prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetIpCidrRange">ResetIpCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetIpv6AccessType">ResetIpv6AccessType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPrivateIpGoogleAccess">ResetPrivateIpGoogleAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPrivateIpv6GoogleAccess">ResetPrivateIpv6GoogleAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPurpose">ResetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetReservedInternalRange">ResetReservedInternalRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetSecondaryIpRange">ResetSecondaryIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetSendSecondaryIpRangeIfEmpty">ResetSendSecondaryIpRangeIfEmpty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetStackType">ResetStackType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putLogConfig"></a>

```csharp
private void PutLogConfig(ComputeSubnetworkLogConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a>

---

##### `PutSecondaryIpRange` <a name="PutSecondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putSecondaryIpRange"></a>

```csharp
private void PutSecondaryIpRange(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putSecondaryIpRange.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeSubnetworkTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExternalIpv6Prefix` <a name="ResetExternalIpv6Prefix" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetExternalIpv6Prefix"></a>

```csharp
private void ResetExternalIpv6Prefix()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpCidrRange` <a name="ResetIpCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetIpCidrRange"></a>

```csharp
private void ResetIpCidrRange()
```

##### `ResetIpv6AccessType` <a name="ResetIpv6AccessType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetIpv6AccessType"></a>

```csharp
private void ResetIpv6AccessType()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetLogConfig"></a>

```csharp
private void ResetLogConfig()
```

##### `ResetPrivateIpGoogleAccess` <a name="ResetPrivateIpGoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPrivateIpGoogleAccess"></a>

```csharp
private void ResetPrivateIpGoogleAccess()
```

##### `ResetPrivateIpv6GoogleAccess` <a name="ResetPrivateIpv6GoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPrivateIpv6GoogleAccess"></a>

```csharp
private void ResetPrivateIpv6GoogleAccess()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPurpose` <a name="ResetPurpose" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPurpose"></a>

```csharp
private void ResetPurpose()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetReservedInternalRange` <a name="ResetReservedInternalRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetReservedInternalRange"></a>

```csharp
private void ResetReservedInternalRange()
```

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetRole"></a>

```csharp
private void ResetRole()
```

##### `ResetSecondaryIpRange` <a name="ResetSecondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetSecondaryIpRange"></a>

```csharp
private void ResetSecondaryIpRange()
```

##### `ResetSendSecondaryIpRangeIfEmpty` <a name="ResetSendSecondaryIpRangeIfEmpty" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetSendSecondaryIpRangeIfEmpty"></a>

```csharp
private void ResetSendSecondaryIpRangeIfEmpty()
```

##### `ResetStackType` <a name="ResetStackType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetStackType"></a>

```csharp
private void ResetStackType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeSubnetwork resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeSubnetwork.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeSubnetwork.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeSubnetwork.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeSubnetwork.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeSubnetwork resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeSubnetwork to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeSubnetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeSubnetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.gatewayAddress">GatewayAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.internalIpv6Prefix">InternalIpv6Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6CidrRange">Ipv6CidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference">ComputeSubnetworkLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.secondaryIpRange">SecondaryIpRange</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList">ComputeSubnetworkSecondaryIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference">ComputeSubnetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.externalIpv6PrefixInput">ExternalIpv6PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCidrRangeInput">IpCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6AccessTypeInput">Ipv6AccessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpGoogleAccessInput">PrivateIpGoogleAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpv6GoogleAccessInput">PrivateIpv6GoogleAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.purposeInput">PurposeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.reservedInternalRangeInput">ReservedInternalRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.secondaryIpRangeInput">SecondaryIpRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.sendSecondaryIpRangeIfEmptyInput">SendSecondaryIpRangeIfEmptyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.stackTypeInput">StackTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.externalIpv6Prefix">ExternalIpv6Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6AccessType">Ipv6AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpGoogleAccess">PrivateIpGoogleAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpv6GoogleAccess">PrivateIpv6GoogleAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.purpose">Purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.reservedInternalRange">ReservedInternalRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.sendSecondaryIpRangeIfEmpty">SendSecondaryIpRangeIfEmpty</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.stackType">StackType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `GatewayAddress`<sup>Required</sup> <a name="GatewayAddress" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.gatewayAddress"></a>

```csharp
public string GatewayAddress { get; }
```

- *Type:* string

---

##### `InternalIpv6Prefix`<sup>Required</sup> <a name="InternalIpv6Prefix" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.internalIpv6Prefix"></a>

```csharp
public string InternalIpv6Prefix { get; }
```

- *Type:* string

---

##### `Ipv6CidrRange`<sup>Required</sup> <a name="Ipv6CidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6CidrRange"></a>

```csharp
public string Ipv6CidrRange { get; }
```

- *Type:* string

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.logConfig"></a>

```csharp
public ComputeSubnetworkLogConfigOutputReference LogConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference">ComputeSubnetworkLogConfigOutputReference</a>

---

##### `SecondaryIpRange`<sup>Required</sup> <a name="SecondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.secondaryIpRange"></a>

```csharp
public ComputeSubnetworkSecondaryIpRangeList SecondaryIpRange { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList">ComputeSubnetworkSecondaryIpRangeList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.timeouts"></a>

```csharp
public ComputeSubnetworkTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference">ComputeSubnetworkTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExternalIpv6PrefixInput`<sup>Optional</sup> <a name="ExternalIpv6PrefixInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.externalIpv6PrefixInput"></a>

```csharp
public string ExternalIpv6PrefixInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpCidrRangeInput`<sup>Optional</sup> <a name="IpCidrRangeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCidrRangeInput"></a>

```csharp
public string IpCidrRangeInput { get; }
```

- *Type:* string

---

##### `Ipv6AccessTypeInput`<sup>Optional</sup> <a name="Ipv6AccessTypeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6AccessTypeInput"></a>

```csharp
public string Ipv6AccessTypeInput { get; }
```

- *Type:* string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.logConfigInput"></a>

```csharp
public ComputeSubnetworkLogConfig LogConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `PrivateIpGoogleAccessInput`<sup>Optional</sup> <a name="PrivateIpGoogleAccessInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpGoogleAccessInput"></a>

```csharp
public object PrivateIpGoogleAccessInput { get; }
```

- *Type:* object

---

##### `PrivateIpv6GoogleAccessInput`<sup>Optional</sup> <a name="PrivateIpv6GoogleAccessInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpv6GoogleAccessInput"></a>

```csharp
public string PrivateIpv6GoogleAccessInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PurposeInput`<sup>Optional</sup> <a name="PurposeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.purposeInput"></a>

```csharp
public string PurposeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReservedInternalRangeInput`<sup>Optional</sup> <a name="ReservedInternalRangeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.reservedInternalRangeInput"></a>

```csharp
public string ReservedInternalRangeInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `SecondaryIpRangeInput`<sup>Optional</sup> <a name="SecondaryIpRangeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.secondaryIpRangeInput"></a>

```csharp
public object SecondaryIpRangeInput { get; }
```

- *Type:* object

---

##### `SendSecondaryIpRangeIfEmptyInput`<sup>Optional</sup> <a name="SendSecondaryIpRangeIfEmptyInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.sendSecondaryIpRangeIfEmptyInput"></a>

```csharp
public object SendSecondaryIpRangeIfEmptyInput { get; }
```

- *Type:* object

---

##### `StackTypeInput`<sup>Optional</sup> <a name="StackTypeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.stackTypeInput"></a>

```csharp
public string StackTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExternalIpv6Prefix`<sup>Required</sup> <a name="ExternalIpv6Prefix" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.externalIpv6Prefix"></a>

```csharp
public string ExternalIpv6Prefix { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; }
```

- *Type:* string

---

##### `Ipv6AccessType`<sup>Required</sup> <a name="Ipv6AccessType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6AccessType"></a>

```csharp
public string Ipv6AccessType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `PrivateIpGoogleAccess`<sup>Required</sup> <a name="PrivateIpGoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpGoogleAccess"></a>

```csharp
public object PrivateIpGoogleAccess { get; }
```

- *Type:* object

---

##### `PrivateIpv6GoogleAccess`<sup>Required</sup> <a name="PrivateIpv6GoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpv6GoogleAccess"></a>

```csharp
public string PrivateIpv6GoogleAccess { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.purpose"></a>

```csharp
public string Purpose { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ReservedInternalRange`<sup>Required</sup> <a name="ReservedInternalRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.reservedInternalRange"></a>

```csharp
public string ReservedInternalRange { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `SendSecondaryIpRangeIfEmpty`<sup>Required</sup> <a name="SendSecondaryIpRangeIfEmpty" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.sendSecondaryIpRangeIfEmpty"></a>

```csharp
public object SendSecondaryIpRangeIfEmpty { get; }
```

- *Type:* object

---

##### `StackType`<sup>Required</sup> <a name="StackType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.stackType"></a>

```csharp
public string StackType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSubnetworkConfig <a name="ComputeSubnetworkConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeSubnetworkConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Network,
    string Description = null,
    string ExternalIpv6Prefix = null,
    string Id = null,
    string IpCidrRange = null,
    string Ipv6AccessType = null,
    ComputeSubnetworkLogConfig LogConfig = null,
    object PrivateIpGoogleAccess = null,
    string PrivateIpv6GoogleAccess = null,
    string Project = null,
    string Purpose = null,
    string Region = null,
    string ReservedInternalRange = null,
    string Role = null,
    object SecondaryIpRange = null,
    object SendSecondaryIpRangeIfEmpty = null,
    string StackType = null,
    ComputeSubnetworkTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.name">Name</a></code> | <code>string</code> | The name of the resource, provided by the client when initially creating the resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.network">Network</a></code> | <code>string</code> | The network this subnet belongs to. Only networks that are in the distributed mode can have subnetworks. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.externalIpv6Prefix">ExternalIpv6Prefix</a></code> | <code>string</code> | The range of external IPv6 addresses that are owned by this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#id ComputeSubnetwork#id}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | The range of internal addresses that are owned by this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipv6AccessType">Ipv6AccessType</a></code> | <code>string</code> | The access type of IPv6 address this subnet holds. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.privateIpGoogleAccess">PrivateIpGoogleAccess</a></code> | <code>object</code> | When enabled, VMs in this subnetwork without external IP addresses can access Google APIs and services by using Private Google Access. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.privateIpv6GoogleAccess">PrivateIpv6GoogleAccess</a></code> | <code>string</code> | The private IPv6 google access type for the VMs in this subnet. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#project ComputeSubnetwork#project}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.purpose">Purpose</a></code> | <code>string</code> | The purpose of the resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.region">Region</a></code> | <code>string</code> | The GCP region for this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.reservedInternalRange">ReservedInternalRange</a></code> | <code>string</code> | The ID of the reserved internal range. Must be prefixed with 'networkconnectivity.googleapis.com' E.g. 'networkconnectivity.googleapis.com/projects/{project}/locations/global/internalRanges/{rangeId}'. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.role">Role</a></code> | <code>string</code> | The role of subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.secondaryIpRange">SecondaryIpRange</a></code> | <code>object</code> | secondary_ip_range block. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.sendSecondaryIpRangeIfEmpty">SendSecondaryIpRangeIfEmpty</a></code> | <code>object</code> | Controls the removal behavior of secondary_ip_range. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.stackType">StackType</a></code> | <code>string</code> | The stack type for this subnet to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the resource, provided by the client when initially creating the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#name ComputeSubnetwork#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The network this subnet belongs to. Only networks that are in the distributed mode can have subnetworks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#network ComputeSubnetwork#network}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Provide this property when
you create the resource. This field can be set only at resource
creation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#description ComputeSubnetwork#description}

---

##### `ExternalIpv6Prefix`<sup>Optional</sup> <a name="ExternalIpv6Prefix" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.externalIpv6Prefix"></a>

```csharp
public string ExternalIpv6Prefix { get; set; }
```

- *Type:* string

The range of external IPv6 addresses that are owned by this subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#external_ipv6_prefix ComputeSubnetwork#external_ipv6_prefix}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#id ComputeSubnetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpCidrRange`<sup>Optional</sup> <a name="IpCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; set; }
```

- *Type:* string

The range of internal addresses that are owned by this subnetwork.

Provide this property when you create the subnetwork. For example,
10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and
non-overlapping within a network. Only IPv4 is supported.
Field is optional when 'reserved_internal_range' is defined, otherwise required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#ip_cidr_range ComputeSubnetwork#ip_cidr_range}

---

##### `Ipv6AccessType`<sup>Optional</sup> <a name="Ipv6AccessType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipv6AccessType"></a>

```csharp
public string Ipv6AccessType { get; set; }
```

- *Type:* string

The access type of IPv6 address this subnet holds.

It's immutable and can only be specified during creation
or the first time the subnet is updated into IPV4_IPV6 dual stack. If the ipv6_type is EXTERNAL then this subnet
cannot enable direct path. Possible values: ["EXTERNAL", "INTERNAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#ipv6_access_type ComputeSubnetwork#ipv6_access_type}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.logConfig"></a>

```csharp
public ComputeSubnetworkLogConfig LogConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#log_config ComputeSubnetwork#log_config}

---

##### `PrivateIpGoogleAccess`<sup>Optional</sup> <a name="PrivateIpGoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.privateIpGoogleAccess"></a>

```csharp
public object PrivateIpGoogleAccess { get; set; }
```

- *Type:* object

When enabled, VMs in this subnetwork without external IP addresses can access Google APIs and services by using Private Google Access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#private_ip_google_access ComputeSubnetwork#private_ip_google_access}

---

##### `PrivateIpv6GoogleAccess`<sup>Optional</sup> <a name="PrivateIpv6GoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.privateIpv6GoogleAccess"></a>

```csharp
public string PrivateIpv6GoogleAccess { get; set; }
```

- *Type:* string

The private IPv6 google access type for the VMs in this subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#private_ipv6_google_access ComputeSubnetwork#private_ipv6_google_access}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#project ComputeSubnetwork#project}.

---

##### `Purpose`<sup>Optional</sup> <a name="Purpose" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.purpose"></a>

```csharp
public string Purpose { get; set; }
```

- *Type:* string

The purpose of the resource.

This field can be either 'PRIVATE_RFC_1918', 'REGIONAL_MANAGED_PROXY', 'GLOBAL_MANAGED_PROXY', 'PRIVATE_SERVICE_CONNECT' or 'PRIVATE_NAT'([Beta](https://terraform.io/docs/providers/google/guides/provider_versions.html)).
A subnet with purpose set to 'REGIONAL_MANAGED_PROXY' is a user-created subnetwork that is reserved for regional Envoy-based load balancers.
A subnetwork in a given region with purpose set to 'GLOBAL_MANAGED_PROXY' is a proxy-only subnet and is shared between all the cross-regional Envoy-based load balancers.
A subnetwork with purpose set to 'PRIVATE_SERVICE_CONNECT' reserves the subnet for hosting a Private Service Connect published service.
A subnetwork with purpose set to 'PRIVATE_NAT' is used as source range for Private NAT gateways.
Note that 'REGIONAL_MANAGED_PROXY' is the preferred setting for all regional Envoy load balancers.
If unspecified, the purpose defaults to 'PRIVATE_RFC_1918'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#purpose ComputeSubnetwork#purpose}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The GCP region for this subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#region ComputeSubnetwork#region}

---

##### `ReservedInternalRange`<sup>Optional</sup> <a name="ReservedInternalRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.reservedInternalRange"></a>

```csharp
public string ReservedInternalRange { get; set; }
```

- *Type:* string

The ID of the reserved internal range. Must be prefixed with 'networkconnectivity.googleapis.com' E.g. 'networkconnectivity.googleapis.com/projects/{project}/locations/global/internalRanges/{rangeId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#reserved_internal_range ComputeSubnetwork#reserved_internal_range}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

The role of subnetwork.

Currently, this field is only used when 'purpose' is 'REGIONAL_MANAGED_PROXY'.
The value can be set to 'ACTIVE' or 'BACKUP'.
An 'ACTIVE' subnetwork is one that is currently being used for Envoy-based load balancers in a region.
A 'BACKUP' subnetwork is one that is ready to be promoted to 'ACTIVE' or is currently draining. Possible values: ["ACTIVE", "BACKUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#role ComputeSubnetwork#role}

---

##### `SecondaryIpRange`<sup>Optional</sup> <a name="SecondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.secondaryIpRange"></a>

```csharp
public object SecondaryIpRange { get; set; }
```

- *Type:* object

secondary_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#secondary_ip_range ComputeSubnetwork#secondary_ip_range}

---

##### `SendSecondaryIpRangeIfEmpty`<sup>Optional</sup> <a name="SendSecondaryIpRangeIfEmpty" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.sendSecondaryIpRangeIfEmpty"></a>

```csharp
public object SendSecondaryIpRangeIfEmpty { get; set; }
```

- *Type:* object

Controls the removal behavior of secondary_ip_range.

When false, removing secondary_ip_range from config will not produce a diff as
the provider will default to the API's value.
When true, the provider will treat removing secondary_ip_range as sending an
empty list of secondary IP ranges to the API.
Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#send_secondary_ip_range_if_empty ComputeSubnetwork#send_secondary_ip_range_if_empty}

---

##### `StackType`<sup>Optional</sup> <a name="StackType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.stackType"></a>

```csharp
public string StackType { get; set; }
```

- *Type:* string

The stack type for this subnet to identify whether the IPv6 feature is enabled or not.

If not specified IPV4_ONLY will be used. Possible values: ["IPV4_ONLY", "IPV4_IPV6"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#stack_type ComputeSubnetwork#stack_type}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.timeouts"></a>

```csharp
public ComputeSubnetworkTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#timeouts ComputeSubnetwork#timeouts}

---

### ComputeSubnetworkLogConfig <a name="ComputeSubnetworkLogConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeSubnetworkLogConfig {
    string AggregationInterval = null,
    string FilterExpr = null,
    double FlowSampling = null,
    string Metadata = null,
    string[] MetadataFields = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.aggregationInterval">AggregationInterval</a></code> | <code>string</code> | Can only be specified if VPC flow logging for this subnetwork is enabled. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.filterExpr">FilterExpr</a></code> | <code>string</code> | Export filter used to define which VPC flow logs should be logged, as as CEL expression. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.flowSampling">FlowSampling</a></code> | <code>double</code> | Can only be specified if VPC flow logging for this subnetwork is enabled. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.metadata">Metadata</a></code> | <code>string</code> | Can only be specified if VPC flow logging for this subnetwork is enabled. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.metadataFields">MetadataFields</a></code> | <code>string[]</code> | List of metadata fields that should be added to reported logs. |

---

##### `AggregationInterval`<sup>Optional</sup> <a name="AggregationInterval" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.aggregationInterval"></a>

```csharp
public string AggregationInterval { get; set; }
```

- *Type:* string

Can only be specified if VPC flow logging for this subnetwork is enabled.

Toggles the aggregation interval for collecting flow logs. Increasing the
interval time will reduce the amount of generated flow logs for long
lasting connections. Default is an interval of 5 seconds per connection. Default value: "INTERVAL_5_SEC" Possible values: ["INTERVAL_5_SEC", "INTERVAL_30_SEC", "INTERVAL_1_MIN", "INTERVAL_5_MIN", "INTERVAL_10_MIN", "INTERVAL_15_MIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#aggregation_interval ComputeSubnetwork#aggregation_interval}

---

##### `FilterExpr`<sup>Optional</sup> <a name="FilterExpr" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.filterExpr"></a>

```csharp
public string FilterExpr { get; set; }
```

- *Type:* string

Export filter used to define which VPC flow logs should be logged, as as CEL expression.

See
https://cloud.google.com/vpc/docs/flow-logs#filtering for details on how to format this field.
The default value is 'true', which evaluates to include everything.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#filter_expr ComputeSubnetwork#filter_expr}

---

##### `FlowSampling`<sup>Optional</sup> <a name="FlowSampling" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.flowSampling"></a>

```csharp
public double FlowSampling { get; set; }
```

- *Type:* double

Can only be specified if VPC flow logging for this subnetwork is enabled.

The value of the field must be in [0, 1]. Set the sampling rate of VPC
flow logs within the subnetwork where 1.0 means all collected logs are
reported and 0.0 means no logs are reported. Default is 0.5 which means
half of all collected logs are reported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#flow_sampling ComputeSubnetwork#flow_sampling}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.metadata"></a>

```csharp
public string Metadata { get; set; }
```

- *Type:* string

Can only be specified if VPC flow logging for this subnetwork is enabled.

Configures whether metadata fields should be added to the reported VPC
flow logs. Default value: "INCLUDE_ALL_METADATA" Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA", "CUSTOM_METADATA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#metadata ComputeSubnetwork#metadata}

---

##### `MetadataFields`<sup>Optional</sup> <a name="MetadataFields" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.metadataFields"></a>

```csharp
public string[] MetadataFields { get; set; }
```

- *Type:* string[]

List of metadata fields that should be added to reported logs.

Can only be specified if VPC flow logs for this subnetwork is enabled and "metadata" is set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#metadata_fields ComputeSubnetwork#metadata_fields}

---

### ComputeSubnetworkSecondaryIpRange <a name="ComputeSubnetworkSecondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeSubnetworkSecondaryIpRange {
    string RangeName,
    string IpCidrRange = null,
    string ReservedInternalRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.rangeName">RangeName</a></code> | <code>string</code> | The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | The range of IP addresses belonging to this subnetwork secondary range. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.reservedInternalRange">ReservedInternalRange</a></code> | <code>string</code> | The ID of the reserved internal range. Must be prefixed with 'networkconnectivity.googleapis.com' E.g. 'networkconnectivity.googleapis.com/projects/{project}/locations/global/internalRanges/{rangeId}'. |

---

##### `RangeName`<sup>Required</sup> <a name="RangeName" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.rangeName"></a>

```csharp
public string RangeName { get; set; }
```

- *Type:* string

The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance.

The name must
be 1-63 characters long, and comply with RFC1035. The name
must be unique within the subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#range_name ComputeSubnetwork#range_name}

---

##### `IpCidrRange`<sup>Optional</sup> <a name="IpCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; set; }
```

- *Type:* string

The range of IP addresses belonging to this subnetwork secondary range.

Provide this property when you create the subnetwork.
Ranges must be unique and non-overlapping with all primary and
secondary IP ranges within a network. Only IPv4 is supported.
Field is optional when 'reserved_internal_range' is defined, otherwise required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#ip_cidr_range ComputeSubnetwork#ip_cidr_range}

---

##### `ReservedInternalRange`<sup>Optional</sup> <a name="ReservedInternalRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.reservedInternalRange"></a>

```csharp
public string ReservedInternalRange { get; set; }
```

- *Type:* string

The ID of the reserved internal range. Must be prefixed with 'networkconnectivity.googleapis.com' E.g. 'networkconnectivity.googleapis.com/projects/{project}/locations/global/internalRanges/{rangeId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#reserved_internal_range ComputeSubnetwork#reserved_internal_range}

---

### ComputeSubnetworkTimeouts <a name="ComputeSubnetworkTimeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeSubnetworkTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#create ComputeSubnetwork#create}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#delete ComputeSubnetwork#delete}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#update ComputeSubnetwork#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#create ComputeSubnetwork#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#delete ComputeSubnetwork#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_subnetwork#update ComputeSubnetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeSubnetworkLogConfigOutputReference <a name="ComputeSubnetworkLogConfigOutputReference" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeSubnetworkLogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetAggregationInterval">ResetAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetFilterExpr">ResetFilterExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetFlowSampling">ResetFlowSampling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetMetadataFields">ResetMetadataFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregationInterval` <a name="ResetAggregationInterval" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetAggregationInterval"></a>

```csharp
private void ResetAggregationInterval()
```

##### `ResetFilterExpr` <a name="ResetFilterExpr" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetFilterExpr"></a>

```csharp
private void ResetFilterExpr()
```

##### `ResetFlowSampling` <a name="ResetFlowSampling" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetFlowSampling"></a>

```csharp
private void ResetFlowSampling()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetMetadataFields` <a name="ResetMetadataFields" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetMetadataFields"></a>

```csharp
private void ResetMetadataFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.aggregationIntervalInput">AggregationIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.filterExprInput">FilterExprInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.flowSamplingInput">FlowSamplingInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataFieldsInput">MetadataFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataInput">MetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.aggregationInterval">AggregationInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.filterExpr">FilterExpr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.flowSampling">FlowSampling</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataFields">MetadataFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggregationIntervalInput`<sup>Optional</sup> <a name="AggregationIntervalInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.aggregationIntervalInput"></a>

```csharp
public string AggregationIntervalInput { get; }
```

- *Type:* string

---

##### `FilterExprInput`<sup>Optional</sup> <a name="FilterExprInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.filterExprInput"></a>

```csharp
public string FilterExprInput { get; }
```

- *Type:* string

---

##### `FlowSamplingInput`<sup>Optional</sup> <a name="FlowSamplingInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.flowSamplingInput"></a>

```csharp
public double FlowSamplingInput { get; }
```

- *Type:* double

---

##### `MetadataFieldsInput`<sup>Optional</sup> <a name="MetadataFieldsInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataFieldsInput"></a>

```csharp
public string[] MetadataFieldsInput { get; }
```

- *Type:* string[]

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataInput"></a>

```csharp
public string MetadataInput { get; }
```

- *Type:* string

---

##### `AggregationInterval`<sup>Required</sup> <a name="AggregationInterval" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.aggregationInterval"></a>

```csharp
public string AggregationInterval { get; }
```

- *Type:* string

---

##### `FilterExpr`<sup>Required</sup> <a name="FilterExpr" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.filterExpr"></a>

```csharp
public string FilterExpr { get; }
```

- *Type:* string

---

##### `FlowSampling`<sup>Required</sup> <a name="FlowSampling" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.flowSampling"></a>

```csharp
public double FlowSampling { get; }
```

- *Type:* double

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `MetadataFields`<sup>Required</sup> <a name="MetadataFields" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataFields"></a>

```csharp
public string[] MetadataFields { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.internalValue"></a>

```csharp
public ComputeSubnetworkLogConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a>

---


### ComputeSubnetworkSecondaryIpRangeList <a name="ComputeSubnetworkSecondaryIpRangeList" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeSubnetworkSecondaryIpRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.get"></a>

```csharp
private ComputeSubnetworkSecondaryIpRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeSubnetworkSecondaryIpRangeOutputReference <a name="ComputeSubnetworkSecondaryIpRangeOutputReference" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeSubnetworkSecondaryIpRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resetIpCidrRange">ResetIpCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resetReservedInternalRange">ResetReservedInternalRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpCidrRange` <a name="ResetIpCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resetIpCidrRange"></a>

```csharp
private void ResetIpCidrRange()
```

##### `ResetReservedInternalRange` <a name="ResetReservedInternalRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resetReservedInternalRange"></a>

```csharp
private void ResetReservedInternalRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRangeInput">IpCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeNameInput">RangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.reservedInternalRangeInput">ReservedInternalRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeName">RangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.reservedInternalRange">ReservedInternalRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpCidrRangeInput`<sup>Optional</sup> <a name="IpCidrRangeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRangeInput"></a>

```csharp
public string IpCidrRangeInput { get; }
```

- *Type:* string

---

##### `RangeNameInput`<sup>Optional</sup> <a name="RangeNameInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeNameInput"></a>

```csharp
public string RangeNameInput { get; }
```

- *Type:* string

---

##### `ReservedInternalRangeInput`<sup>Optional</sup> <a name="ReservedInternalRangeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.reservedInternalRangeInput"></a>

```csharp
public string ReservedInternalRangeInput { get; }
```

- *Type:* string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; }
```

- *Type:* string

---

##### `RangeName`<sup>Required</sup> <a name="RangeName" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeName"></a>

```csharp
public string RangeName { get; }
```

- *Type:* string

---

##### `ReservedInternalRange`<sup>Required</sup> <a name="ReservedInternalRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.reservedInternalRange"></a>

```csharp
public string ReservedInternalRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeSubnetworkTimeoutsOutputReference <a name="ComputeSubnetworkTimeoutsOutputReference" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeSubnetworkTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



