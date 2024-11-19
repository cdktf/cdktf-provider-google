# `computeRouterNat` Submodule <a name="`computeRouterNat` Submodule" id="@cdktf/provider-google.computeRouterNat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRouterNat <a name="ComputeRouterNat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat google_compute_router_nat}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterNat(Construct Scope, string Id, ComputeRouterNatConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig">ComputeRouterNatConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig">ComputeRouterNatConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putSubnetwork">PutSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetAutoNetworkTier">ResetAutoNetworkTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetDrainNatIps">ResetDrainNatIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetEnableDynamicPortAllocation">ResetEnableDynamicPortAllocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetEnableEndpointIndependentMapping">ResetEnableEndpointIndependentMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetEndpointTypes">ResetEndpointTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetIcmpIdleTimeoutSec">ResetIcmpIdleTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetInitialNatIps">ResetInitialNatIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetMaxPortsPerVm">ResetMaxPortsPerVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetMinPortsPerVm">ResetMinPortsPerVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetNatIpAllocateOption">ResetNatIpAllocateOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetNatIps">ResetNatIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpEstablishedIdleTimeoutSec">ResetTcpEstablishedIdleTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpTimeWaitTimeoutSec">ResetTcpTimeWaitTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpTransitoryIdleTimeoutSec">ResetTcpTransitoryIdleTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetUdpIdleTimeoutSec">ResetUdpIdleTimeoutSec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putLogConfig"></a>

```csharp
private void PutLogConfig(ComputeRouterNatLogConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a>

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putRules.parameter.value"></a>

- *Type:* object

---

##### `PutSubnetwork` <a name="PutSubnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putSubnetwork"></a>

```csharp
private void PutSubnetwork(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putSubnetwork.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeRouterNatTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a>

---

##### `ResetAutoNetworkTier` <a name="ResetAutoNetworkTier" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetAutoNetworkTier"></a>

```csharp
private void ResetAutoNetworkTier()
```

##### `ResetDrainNatIps` <a name="ResetDrainNatIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetDrainNatIps"></a>

```csharp
private void ResetDrainNatIps()
```

##### `ResetEnableDynamicPortAllocation` <a name="ResetEnableDynamicPortAllocation" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetEnableDynamicPortAllocation"></a>

```csharp
private void ResetEnableDynamicPortAllocation()
```

##### `ResetEnableEndpointIndependentMapping` <a name="ResetEnableEndpointIndependentMapping" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetEnableEndpointIndependentMapping"></a>

```csharp
private void ResetEnableEndpointIndependentMapping()
```

##### `ResetEndpointTypes` <a name="ResetEndpointTypes" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetEndpointTypes"></a>

```csharp
private void ResetEndpointTypes()
```

##### `ResetIcmpIdleTimeoutSec` <a name="ResetIcmpIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetIcmpIdleTimeoutSec"></a>

```csharp
private void ResetIcmpIdleTimeoutSec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitialNatIps` <a name="ResetInitialNatIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetInitialNatIps"></a>

```csharp
private void ResetInitialNatIps()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetLogConfig"></a>

```csharp
private void ResetLogConfig()
```

##### `ResetMaxPortsPerVm` <a name="ResetMaxPortsPerVm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetMaxPortsPerVm"></a>

```csharp
private void ResetMaxPortsPerVm()
```

##### `ResetMinPortsPerVm` <a name="ResetMinPortsPerVm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetMinPortsPerVm"></a>

```csharp
private void ResetMinPortsPerVm()
```

##### `ResetNatIpAllocateOption` <a name="ResetNatIpAllocateOption" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetNatIpAllocateOption"></a>

```csharp
private void ResetNatIpAllocateOption()
```

##### `ResetNatIps` <a name="ResetNatIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetNatIps"></a>

```csharp
private void ResetNatIps()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetRules"></a>

```csharp
private void ResetRules()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetSubnetwork"></a>

```csharp
private void ResetSubnetwork()
```

##### `ResetTcpEstablishedIdleTimeoutSec` <a name="ResetTcpEstablishedIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpEstablishedIdleTimeoutSec"></a>

```csharp
private void ResetTcpEstablishedIdleTimeoutSec()
```

##### `ResetTcpTimeWaitTimeoutSec` <a name="ResetTcpTimeWaitTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpTimeWaitTimeoutSec"></a>

```csharp
private void ResetTcpTimeWaitTimeoutSec()
```

##### `ResetTcpTransitoryIdleTimeoutSec` <a name="ResetTcpTransitoryIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpTransitoryIdleTimeoutSec"></a>

```csharp
private void ResetTcpTransitoryIdleTimeoutSec()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUdpIdleTimeoutSec` <a name="ResetUdpIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetUdpIdleTimeoutSec"></a>

```csharp
private void ResetUdpIdleTimeoutSec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRouterNat resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRouterNat.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRouterNat.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRouterNat.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRouterNat.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeRouterNat resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRouterNat to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRouterNat that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRouterNat to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference">ComputeRouterNatLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList">ComputeRouterNatRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.subnetwork">Subnetwork</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList">ComputeRouterNatSubnetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference">ComputeRouterNatTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.autoNetworkTierInput">AutoNetworkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.drainNatIpsInput">DrainNatIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableDynamicPortAllocationInput">EnableDynamicPortAllocationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableEndpointIndependentMappingInput">EnableEndpointIndependentMappingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.endpointTypesInput">EndpointTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.icmpIdleTimeoutSecInput">IcmpIdleTimeoutSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.initialNatIpsInput">InitialNatIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.maxPortsPerVmInput">MaxPortsPerVmInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.minPortsPerVmInput">MinPortsPerVmInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpAllocateOptionInput">NatIpAllocateOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpsInput">NatIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.routerInput">RouterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.sourceSubnetworkIpRangesToNatInput">SourceSubnetworkIpRangesToNatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.subnetworkInput">SubnetworkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpEstablishedIdleTimeoutSecInput">TcpEstablishedIdleTimeoutSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTimeWaitTimeoutSecInput">TcpTimeWaitTimeoutSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTransitoryIdleTimeoutSecInput">TcpTransitoryIdleTimeoutSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.udpIdleTimeoutSecInput">UdpIdleTimeoutSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.autoNetworkTier">AutoNetworkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.drainNatIps">DrainNatIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableDynamicPortAllocation">EnableDynamicPortAllocation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableEndpointIndependentMapping">EnableEndpointIndependentMapping</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.endpointTypes">EndpointTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.icmpIdleTimeoutSec">IcmpIdleTimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.initialNatIps">InitialNatIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.maxPortsPerVm">MaxPortsPerVm</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.minPortsPerVm">MinPortsPerVm</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpAllocateOption">NatIpAllocateOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIps">NatIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.router">Router</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.sourceSubnetworkIpRangesToNat">SourceSubnetworkIpRangesToNat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpEstablishedIdleTimeoutSec">TcpEstablishedIdleTimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTimeWaitTimeoutSec">TcpTimeWaitTimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTransitoryIdleTimeoutSec">TcpTransitoryIdleTimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.udpIdleTimeoutSec">UdpIdleTimeoutSec</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.logConfig"></a>

```csharp
public ComputeRouterNatLogConfigOutputReference LogConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference">ComputeRouterNatLogConfigOutputReference</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.rules"></a>

```csharp
public ComputeRouterNatRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList">ComputeRouterNatRulesList</a>

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.subnetwork"></a>

```csharp
public ComputeRouterNatSubnetworkList Subnetwork { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList">ComputeRouterNatSubnetworkList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.timeouts"></a>

```csharp
public ComputeRouterNatTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference">ComputeRouterNatTimeoutsOutputReference</a>

---

##### `AutoNetworkTierInput`<sup>Optional</sup> <a name="AutoNetworkTierInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.autoNetworkTierInput"></a>

```csharp
public string AutoNetworkTierInput { get; }
```

- *Type:* string

---

##### `DrainNatIpsInput`<sup>Optional</sup> <a name="DrainNatIpsInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.drainNatIpsInput"></a>

```csharp
public string[] DrainNatIpsInput { get; }
```

- *Type:* string[]

---

##### `EnableDynamicPortAllocationInput`<sup>Optional</sup> <a name="EnableDynamicPortAllocationInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableDynamicPortAllocationInput"></a>

```csharp
public object EnableDynamicPortAllocationInput { get; }
```

- *Type:* object

---

##### `EnableEndpointIndependentMappingInput`<sup>Optional</sup> <a name="EnableEndpointIndependentMappingInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableEndpointIndependentMappingInput"></a>

```csharp
public object EnableEndpointIndependentMappingInput { get; }
```

- *Type:* object

---

##### `EndpointTypesInput`<sup>Optional</sup> <a name="EndpointTypesInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.endpointTypesInput"></a>

```csharp
public string[] EndpointTypesInput { get; }
```

- *Type:* string[]

---

##### `IcmpIdleTimeoutSecInput`<sup>Optional</sup> <a name="IcmpIdleTimeoutSecInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.icmpIdleTimeoutSecInput"></a>

```csharp
public double IcmpIdleTimeoutSecInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitialNatIpsInput`<sup>Optional</sup> <a name="InitialNatIpsInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.initialNatIpsInput"></a>

```csharp
public string[] InitialNatIpsInput { get; }
```

- *Type:* string[]

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.logConfigInput"></a>

```csharp
public ComputeRouterNatLogConfig LogConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a>

---

##### `MaxPortsPerVmInput`<sup>Optional</sup> <a name="MaxPortsPerVmInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.maxPortsPerVmInput"></a>

```csharp
public double MaxPortsPerVmInput { get; }
```

- *Type:* double

---

##### `MinPortsPerVmInput`<sup>Optional</sup> <a name="MinPortsPerVmInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.minPortsPerVmInput"></a>

```csharp
public double MinPortsPerVmInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NatIpAllocateOptionInput`<sup>Optional</sup> <a name="NatIpAllocateOptionInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpAllocateOptionInput"></a>

```csharp
public string NatIpAllocateOptionInput { get; }
```

- *Type:* string

---

##### `NatIpsInput`<sup>Optional</sup> <a name="NatIpsInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpsInput"></a>

```csharp
public string[] NatIpsInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.routerInput"></a>

```csharp
public string RouterInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `SourceSubnetworkIpRangesToNatInput`<sup>Optional</sup> <a name="SourceSubnetworkIpRangesToNatInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.sourceSubnetworkIpRangesToNatInput"></a>

```csharp
public string SourceSubnetworkIpRangesToNatInput { get; }
```

- *Type:* string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.subnetworkInput"></a>

```csharp
public object SubnetworkInput { get; }
```

- *Type:* object

---

##### `TcpEstablishedIdleTimeoutSecInput`<sup>Optional</sup> <a name="TcpEstablishedIdleTimeoutSecInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpEstablishedIdleTimeoutSecInput"></a>

```csharp
public double TcpEstablishedIdleTimeoutSecInput { get; }
```

- *Type:* double

---

##### `TcpTimeWaitTimeoutSecInput`<sup>Optional</sup> <a name="TcpTimeWaitTimeoutSecInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTimeWaitTimeoutSecInput"></a>

```csharp
public double TcpTimeWaitTimeoutSecInput { get; }
```

- *Type:* double

---

##### `TcpTransitoryIdleTimeoutSecInput`<sup>Optional</sup> <a name="TcpTransitoryIdleTimeoutSecInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTransitoryIdleTimeoutSecInput"></a>

```csharp
public double TcpTransitoryIdleTimeoutSecInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UdpIdleTimeoutSecInput`<sup>Optional</sup> <a name="UdpIdleTimeoutSecInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.udpIdleTimeoutSecInput"></a>

```csharp
public double UdpIdleTimeoutSecInput { get; }
```

- *Type:* double

---

##### `AutoNetworkTier`<sup>Required</sup> <a name="AutoNetworkTier" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.autoNetworkTier"></a>

```csharp
public string AutoNetworkTier { get; }
```

- *Type:* string

---

##### `DrainNatIps`<sup>Required</sup> <a name="DrainNatIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.drainNatIps"></a>

```csharp
public string[] DrainNatIps { get; }
```

- *Type:* string[]

---

##### `EnableDynamicPortAllocation`<sup>Required</sup> <a name="EnableDynamicPortAllocation" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableDynamicPortAllocation"></a>

```csharp
public object EnableDynamicPortAllocation { get; }
```

- *Type:* object

---

##### `EnableEndpointIndependentMapping`<sup>Required</sup> <a name="EnableEndpointIndependentMapping" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableEndpointIndependentMapping"></a>

```csharp
public object EnableEndpointIndependentMapping { get; }
```

- *Type:* object

---

##### `EndpointTypes`<sup>Required</sup> <a name="EndpointTypes" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.endpointTypes"></a>

```csharp
public string[] EndpointTypes { get; }
```

- *Type:* string[]

---

##### `IcmpIdleTimeoutSec`<sup>Required</sup> <a name="IcmpIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.icmpIdleTimeoutSec"></a>

```csharp
public double IcmpIdleTimeoutSec { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitialNatIps`<sup>Required</sup> <a name="InitialNatIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.initialNatIps"></a>

```csharp
public string[] InitialNatIps { get; }
```

- *Type:* string[]

---

##### `MaxPortsPerVm`<sup>Required</sup> <a name="MaxPortsPerVm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.maxPortsPerVm"></a>

```csharp
public double MaxPortsPerVm { get; }
```

- *Type:* double

---

##### `MinPortsPerVm`<sup>Required</sup> <a name="MinPortsPerVm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.minPortsPerVm"></a>

```csharp
public double MinPortsPerVm { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NatIpAllocateOption`<sup>Required</sup> <a name="NatIpAllocateOption" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpAllocateOption"></a>

```csharp
public string NatIpAllocateOption { get; }
```

- *Type:* string

---

##### `NatIps`<sup>Required</sup> <a name="NatIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIps"></a>

```csharp
public string[] NatIps { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.router"></a>

```csharp
public string Router { get; }
```

- *Type:* string

---

##### `SourceSubnetworkIpRangesToNat`<sup>Required</sup> <a name="SourceSubnetworkIpRangesToNat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.sourceSubnetworkIpRangesToNat"></a>

```csharp
public string SourceSubnetworkIpRangesToNat { get; }
```

- *Type:* string

---

##### `TcpEstablishedIdleTimeoutSec`<sup>Required</sup> <a name="TcpEstablishedIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpEstablishedIdleTimeoutSec"></a>

```csharp
public double TcpEstablishedIdleTimeoutSec { get; }
```

- *Type:* double

---

##### `TcpTimeWaitTimeoutSec`<sup>Required</sup> <a name="TcpTimeWaitTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTimeWaitTimeoutSec"></a>

```csharp
public double TcpTimeWaitTimeoutSec { get; }
```

- *Type:* double

---

##### `TcpTransitoryIdleTimeoutSec`<sup>Required</sup> <a name="TcpTransitoryIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTransitoryIdleTimeoutSec"></a>

```csharp
public double TcpTransitoryIdleTimeoutSec { get; }
```

- *Type:* double

---

##### `UdpIdleTimeoutSec`<sup>Required</sup> <a name="UdpIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.udpIdleTimeoutSec"></a>

```csharp
public double UdpIdleTimeoutSec { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRouterNatConfig <a name="ComputeRouterNatConfig" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterNatConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Router,
    string SourceSubnetworkIpRangesToNat,
    string AutoNetworkTier = null,
    string[] DrainNatIps = null,
    object EnableDynamicPortAllocation = null,
    object EnableEndpointIndependentMapping = null,
    string[] EndpointTypes = null,
    double IcmpIdleTimeoutSec = null,
    string Id = null,
    string[] InitialNatIps = null,
    ComputeRouterNatLogConfig LogConfig = null,
    double MaxPortsPerVm = null,
    double MinPortsPerVm = null,
    string NatIpAllocateOption = null,
    string[] NatIps = null,
    string Project = null,
    string Region = null,
    object Rules = null,
    object Subnetwork = null,
    double TcpEstablishedIdleTimeoutSec = null,
    double TcpTimeWaitTimeoutSec = null,
    double TcpTransitoryIdleTimeoutSec = null,
    ComputeRouterNatTimeouts Timeouts = null,
    double UdpIdleTimeoutSec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.name">Name</a></code> | <code>string</code> | Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.router">Router</a></code> | <code>string</code> | The name of the Cloud Router in which this NAT will be configured. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.sourceSubnetworkIpRangesToNat">SourceSubnetworkIpRangesToNat</a></code> | <code>string</code> | How NAT should be configured per Subnetwork. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.autoNetworkTier">AutoNetworkTier</a></code> | <code>string</code> | The network tier to use when automatically reserving NAT IP addresses. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.drainNatIps">DrainNatIps</a></code> | <code>string[]</code> | A list of URLs of the IP resources to be drained. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.enableDynamicPortAllocation">EnableDynamicPortAllocation</a></code> | <code>object</code> | Enable Dynamic Port Allocation. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.enableEndpointIndependentMapping">EnableEndpointIndependentMapping</a></code> | <code>object</code> | Enable endpoint independent mapping. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs). |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.endpointTypes">EndpointTypes</a></code> | <code>string[]</code> | Specifies the endpoint Types supported by the NAT Gateway. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.icmpIdleTimeoutSec">IcmpIdleTimeoutSec</a></code> | <code>double</code> | Timeout (in seconds) for ICMP connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#id ComputeRouterNat#id}. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.initialNatIps">InitialNatIps</a></code> | <code>string[]</code> | Self-links of NAT IPs to be used as initial value for creation alongside a RouterNatAddress resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.maxPortsPerVm">MaxPortsPerVm</a></code> | <code>double</code> | Maximum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.minPortsPerVm">MinPortsPerVm</a></code> | <code>double</code> | Minimum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.natIpAllocateOption">NatIpAllocateOption</a></code> | <code>string</code> | How external IPs should be allocated for this NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.natIps">NatIps</a></code> | <code>string[]</code> | Self-links of NAT IPs. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#project ComputeRouterNat#project}. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.region">Region</a></code> | <code>string</code> | Region where the router and NAT reside. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.rules">Rules</a></code> | <code>object</code> | rules block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.subnetwork">Subnetwork</a></code> | <code>object</code> | subnetwork block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpEstablishedIdleTimeoutSec">TcpEstablishedIdleTimeoutSec</a></code> | <code>double</code> | Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpTimeWaitTimeoutSec">TcpTimeWaitTimeoutSec</a></code> | <code>double</code> | Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpTransitoryIdleTimeoutSec">TcpTransitoryIdleTimeoutSec</a></code> | <code>double</code> | Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.udpIdleTimeoutSec">UdpIdleTimeoutSec</a></code> | <code>double</code> | Timeout (in seconds) for UDP connections. Defaults to 30s if not set. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#name ComputeRouterNat#name}

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.router"></a>

```csharp
public string Router { get; set; }
```

- *Type:* string

The name of the Cloud Router in which this NAT will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#router ComputeRouterNat#router}

---

##### `SourceSubnetworkIpRangesToNat`<sup>Required</sup> <a name="SourceSubnetworkIpRangesToNat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.sourceSubnetworkIpRangesToNat"></a>

```csharp
public string SourceSubnetworkIpRangesToNat { get; set; }
```

- *Type:* string

How NAT should be configured per Subnetwork.

If 'ALL_SUBNETWORKS_ALL_IP_RANGES', all of the
IP ranges in every Subnetwork are allowed to Nat.
If 'ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES', all of the primary IP
ranges in every Subnetwork are allowed to Nat.
'LIST_OF_SUBNETWORKS': A list of Subnetworks are allowed to Nat
(specified in the field subnetwork below). Note that if this field
contains ALL_SUBNETWORKS_ALL_IP_RANGES or
ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any
other RouterNat section in any Router for this network in this region. Possible values: ["ALL_SUBNETWORKS_ALL_IP_RANGES", "ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES", "LIST_OF_SUBNETWORKS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#source_subnetwork_ip_ranges_to_nat ComputeRouterNat#source_subnetwork_ip_ranges_to_nat}

---

##### `AutoNetworkTier`<sup>Optional</sup> <a name="AutoNetworkTier" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.autoNetworkTier"></a>

```csharp
public string AutoNetworkTier { get; set; }
```

- *Type:* string

The network tier to use when automatically reserving NAT IP addresses.

Must be one of: PREMIUM, STANDARD. If not specified, then the current
project-level default tier is used. Possible values: ["PREMIUM", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#auto_network_tier ComputeRouterNat#auto_network_tier}

---

##### `DrainNatIps`<sup>Optional</sup> <a name="DrainNatIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.drainNatIps"></a>

```csharp
public string[] DrainNatIps { get; set; }
```

- *Type:* string[]

A list of URLs of the IP resources to be drained.

These IPs must be
valid static external IPs that have been assigned to the NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#drain_nat_ips ComputeRouterNat#drain_nat_ips}

---

##### `EnableDynamicPortAllocation`<sup>Optional</sup> <a name="EnableDynamicPortAllocation" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.enableDynamicPortAllocation"></a>

```csharp
public object EnableDynamicPortAllocation { get; set; }
```

- *Type:* object

Enable Dynamic Port Allocation.

If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.
If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.
If maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.
If maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.

Mutually exclusive with enableEndpointIndependentMapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#enable_dynamic_port_allocation ComputeRouterNat#enable_dynamic_port_allocation}

---

##### `EnableEndpointIndependentMapping`<sup>Optional</sup> <a name="EnableEndpointIndependentMapping" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.enableEndpointIndependentMapping"></a>

```csharp
public object EnableEndpointIndependentMapping { get; set; }
```

- *Type:* object

Enable endpoint independent mapping. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#enable_endpoint_independent_mapping ComputeRouterNat#enable_endpoint_independent_mapping}

---

##### `EndpointTypes`<sup>Optional</sup> <a name="EndpointTypes" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.endpointTypes"></a>

```csharp
public string[] EndpointTypes { get; set; }
```

- *Type:* string[]

Specifies the endpoint Types supported by the NAT Gateway.

Supported values include:
'ENDPOINT_TYPE_VM', 'ENDPOINT_TYPE_SWG',
'ENDPOINT_TYPE_MANAGED_PROXY_LB'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#endpoint_types ComputeRouterNat#endpoint_types}

---

##### `IcmpIdleTimeoutSec`<sup>Optional</sup> <a name="IcmpIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.icmpIdleTimeoutSec"></a>

```csharp
public double IcmpIdleTimeoutSec { get; set; }
```

- *Type:* double

Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#icmp_idle_timeout_sec ComputeRouterNat#icmp_idle_timeout_sec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#id ComputeRouterNat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialNatIps`<sup>Optional</sup> <a name="InitialNatIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.initialNatIps"></a>

```csharp
public string[] InitialNatIps { get; set; }
```

- *Type:* string[]

Self-links of NAT IPs to be used as initial value for creation alongside a RouterNatAddress resource.

Conflicts with natIps and drainNatIps. Only valid if natIpAllocateOption is set to MANUAL_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#initial_nat_ips ComputeRouterNat#initial_nat_ips}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.logConfig"></a>

```csharp
public ComputeRouterNatLogConfig LogConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#log_config ComputeRouterNat#log_config}

---

##### `MaxPortsPerVm`<sup>Optional</sup> <a name="MaxPortsPerVm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.maxPortsPerVm"></a>

```csharp
public double MaxPortsPerVm { get; set; }
```

- *Type:* double

Maximum number of ports allocated to a VM from this NAT.

This field can only be set when enableDynamicPortAllocation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#max_ports_per_vm ComputeRouterNat#max_ports_per_vm}

---

##### `MinPortsPerVm`<sup>Optional</sup> <a name="MinPortsPerVm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.minPortsPerVm"></a>

```csharp
public double MinPortsPerVm { get; set; }
```

- *Type:* double

Minimum number of ports allocated to a VM from this NAT.

Defaults to 64 for static port allocation and 32 dynamic port allocation if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#min_ports_per_vm ComputeRouterNat#min_ports_per_vm}

---

##### `NatIpAllocateOption`<sup>Optional</sup> <a name="NatIpAllocateOption" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.natIpAllocateOption"></a>

```csharp
public string NatIpAllocateOption { get; set; }
```

- *Type:* string

How external IPs should be allocated for this NAT.

Valid values are
'AUTO_ONLY' for only allowing NAT IPs allocated by Google Cloud
Platform, or 'MANUAL_ONLY' for only user-allocated NAT IP addresses. Possible values: ["MANUAL_ONLY", "AUTO_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#nat_ip_allocate_option ComputeRouterNat#nat_ip_allocate_option}

---

##### `NatIps`<sup>Optional</sup> <a name="NatIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.natIps"></a>

```csharp
public string[] NatIps { get; set; }
```

- *Type:* string[]

Self-links of NAT IPs.

Only valid if natIpAllocateOption
is set to MANUAL_ONLY.
If this field is used alongside with a count created list of address resources 'google_compute_address.foobar.*.self_link',
the access level resource for the address resource must have a 'lifecycle' block with 'create_before_destroy = true' so
the number of resources can be increased/decreased without triggering the 'resourceInUseByAnotherResource' error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#nat_ips ComputeRouterNat#nat_ips}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#project ComputeRouterNat#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where the router and NAT reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#region ComputeRouterNat#region}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#rules ComputeRouterNat#rules}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.subnetwork"></a>

```csharp
public object Subnetwork { get; set; }
```

- *Type:* object

subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#subnetwork ComputeRouterNat#subnetwork}

---

##### `TcpEstablishedIdleTimeoutSec`<sup>Optional</sup> <a name="TcpEstablishedIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpEstablishedIdleTimeoutSec"></a>

```csharp
public double TcpEstablishedIdleTimeoutSec { get; set; }
```

- *Type:* double

Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#tcp_established_idle_timeout_sec ComputeRouterNat#tcp_established_idle_timeout_sec}

---

##### `TcpTimeWaitTimeoutSec`<sup>Optional</sup> <a name="TcpTimeWaitTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpTimeWaitTimeoutSec"></a>

```csharp
public double TcpTimeWaitTimeoutSec { get; set; }
```

- *Type:* double

Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#tcp_time_wait_timeout_sec ComputeRouterNat#tcp_time_wait_timeout_sec}

---

##### `TcpTransitoryIdleTimeoutSec`<sup>Optional</sup> <a name="TcpTransitoryIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpTransitoryIdleTimeoutSec"></a>

```csharp
public double TcpTransitoryIdleTimeoutSec { get; set; }
```

- *Type:* double

Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#tcp_transitory_idle_timeout_sec ComputeRouterNat#tcp_transitory_idle_timeout_sec}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.timeouts"></a>

```csharp
public ComputeRouterNatTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#timeouts ComputeRouterNat#timeouts}

---

##### `UdpIdleTimeoutSec`<sup>Optional</sup> <a name="UdpIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.udpIdleTimeoutSec"></a>

```csharp
public double UdpIdleTimeoutSec { get; set; }
```

- *Type:* double

Timeout (in seconds) for UDP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#udp_idle_timeout_sec ComputeRouterNat#udp_idle_timeout_sec}

---

### ComputeRouterNatLogConfig <a name="ComputeRouterNatLogConfig" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterNatLogConfig {
    object Enable,
    string Filter
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig.property.enable">Enable</a></code> | <code>object</code> | Indicates whether or not to export logs. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig.property.filter">Filter</a></code> | <code>string</code> | Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"]. |

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Indicates whether or not to export logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#enable ComputeRouterNat#enable}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#filter ComputeRouterNat#filter}

---

### ComputeRouterNatRules <a name="ComputeRouterNatRules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterNatRules {
    string Match,
    double RuleNumber,
    ComputeRouterNatRulesAction Action = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.match">Match</a></code> | <code>string</code> | CEL expression that specifies the match condition that egress traffic from a VM is evaluated against. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.ruleNumber">RuleNumber</a></code> | <code>double</code> | An integer uniquely identifying a rule in the list. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.description">Description</a></code> | <code>string</code> | An optional description of this rule. |

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.match"></a>

```csharp
public string Match { get; set; }
```

- *Type:* string

CEL expression that specifies the match condition that egress traffic from a VM is evaluated against.

If it evaluates to true, the corresponding action is enforced.

The following examples are valid match expressions for public NAT:

"inIpRange(destination.ip, '1.1.0.0/16') || inIpRange(destination.ip, '2.2.0.0/16')"

"destination.ip == '1.1.0.1' || destination.ip == '8.8.8.8'"

The following example is a valid match expression for private NAT:

"nexthop.hub == 'https://networkconnectivity.googleapis.com/v1alpha1/projects/my-project/global/hub/hub-1'"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#match ComputeRouterNat#match}

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.ruleNumber"></a>

```csharp
public double RuleNumber { get; set; }
```

- *Type:* double

An integer uniquely identifying a rule in the list.

The rule number must be a positive value between 0 and 65000, and must be unique among rules within a NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#rule_number ComputeRouterNat#rule_number}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.action"></a>

```csharp
public ComputeRouterNatRulesAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#action ComputeRouterNat#action}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#description ComputeRouterNat#description}

---

### ComputeRouterNatRulesAction <a name="ComputeRouterNatRulesAction" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterNatRulesAction {
    string[] SourceNatActiveIps = null,
    string[] SourceNatDrainIps = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction.property.sourceNatActiveIps">SourceNatActiveIps</a></code> | <code>string[]</code> | A list of URLs of the IP resources used for this NAT rule. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction.property.sourceNatDrainIps">SourceNatDrainIps</a></code> | <code>string[]</code> | A list of URLs of the IP resources to be drained. |

---

##### `SourceNatActiveIps`<sup>Optional</sup> <a name="SourceNatActiveIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction.property.sourceNatActiveIps"></a>

```csharp
public string[] SourceNatActiveIps { get; set; }
```

- *Type:* string[]

A list of URLs of the IP resources used for this NAT rule.

These IP addresses must be valid static external IP addresses assigned to the project.
This field is used for public NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#source_nat_active_ips ComputeRouterNat#source_nat_active_ips}

---

##### `SourceNatDrainIps`<sup>Optional</sup> <a name="SourceNatDrainIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction.property.sourceNatDrainIps"></a>

```csharp
public string[] SourceNatDrainIps { get; set; }
```

- *Type:* string[]

A list of URLs of the IP resources to be drained.

These IPs must be valid static external IPs that have been assigned to the NAT.
These IPs should be used for updating/patching a NAT rule only.
This field is used for public NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#source_nat_drain_ips ComputeRouterNat#source_nat_drain_ips}

---

### ComputeRouterNatSubnetwork <a name="ComputeRouterNatSubnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterNatSubnetwork {
    string Name,
    string[] SourceIpRangesToNat,
    string[] SecondaryIpRangeNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.name">Name</a></code> | <code>string</code> | Self-link of subnetwork to NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.sourceIpRangesToNat">SourceIpRangesToNat</a></code> | <code>string[]</code> | List of options for which source IPs in the subnetwork should have NAT enabled. Supported values include: 'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES', 'PRIMARY_IP_RANGE'. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.secondaryIpRangeNames">SecondaryIpRangeNames</a></code> | <code>string[]</code> | List of the secondary ranges of the subnetwork that are allowed to use NAT. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Self-link of subnetwork to NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#name ComputeRouterNat#name}

---

##### `SourceIpRangesToNat`<sup>Required</sup> <a name="SourceIpRangesToNat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.sourceIpRangesToNat"></a>

```csharp
public string[] SourceIpRangesToNat { get; set; }
```

- *Type:* string[]

List of options for which source IPs in the subnetwork should have NAT enabled. Supported values include: 'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES', 'PRIMARY_IP_RANGE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#source_ip_ranges_to_nat ComputeRouterNat#source_ip_ranges_to_nat}

---

##### `SecondaryIpRangeNames`<sup>Optional</sup> <a name="SecondaryIpRangeNames" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.secondaryIpRangeNames"></a>

```csharp
public string[] SecondaryIpRangeNames { get; set; }
```

- *Type:* string[]

List of the secondary ranges of the subnetwork that are allowed to use NAT.

This can be populated only if
'LIST_OF_SECONDARY_IP_RANGES' is one of the values in
sourceIpRangesToNat

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#secondary_ip_range_names ComputeRouterNat#secondary_ip_range_names}

---

### ComputeRouterNatTimeouts <a name="ComputeRouterNatTimeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterNatTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#create ComputeRouterNat#create}. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#delete ComputeRouterNat#delete}. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#update ComputeRouterNat#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#create ComputeRouterNat#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#delete ComputeRouterNat#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_router_nat#update ComputeRouterNat#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRouterNatLogConfigOutputReference <a name="ComputeRouterNatLogConfigOutputReference" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterNatLogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.internalValue"></a>

```csharp
public ComputeRouterNatLogConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a>

---


### ComputeRouterNatRulesActionOutputReference <a name="ComputeRouterNatRulesActionOutputReference" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterNatRulesActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resetSourceNatActiveIps">ResetSourceNatActiveIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resetSourceNatDrainIps">ResetSourceNatDrainIps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceNatActiveIps` <a name="ResetSourceNatActiveIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resetSourceNatActiveIps"></a>

```csharp
private void ResetSourceNatActiveIps()
```

##### `ResetSourceNatDrainIps` <a name="ResetSourceNatDrainIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resetSourceNatDrainIps"></a>

```csharp
private void ResetSourceNatDrainIps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIpsInput">SourceNatActiveIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIpsInput">SourceNatDrainIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIps">SourceNatActiveIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIps">SourceNatDrainIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceNatActiveIpsInput`<sup>Optional</sup> <a name="SourceNatActiveIpsInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIpsInput"></a>

```csharp
public string[] SourceNatActiveIpsInput { get; }
```

- *Type:* string[]

---

##### `SourceNatDrainIpsInput`<sup>Optional</sup> <a name="SourceNatDrainIpsInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIpsInput"></a>

```csharp
public string[] SourceNatDrainIpsInput { get; }
```

- *Type:* string[]

---

##### `SourceNatActiveIps`<sup>Required</sup> <a name="SourceNatActiveIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIps"></a>

```csharp
public string[] SourceNatActiveIps { get; }
```

- *Type:* string[]

---

##### `SourceNatDrainIps`<sup>Required</sup> <a name="SourceNatDrainIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIps"></a>

```csharp
public string[] SourceNatDrainIps { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.internalValue"></a>

```csharp
public ComputeRouterNatRulesAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a>

---


### ComputeRouterNatRulesList <a name="ComputeRouterNatRulesList" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterNatRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.get"></a>

```csharp
private ComputeRouterNatRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRouterNatRulesOutputReference <a name="ComputeRouterNatRulesOutputReference" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterNatRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.putAction"></a>

```csharp
private void PutAction(ComputeRouterNatRulesAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference">ComputeRouterNatRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.matchInput">MatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.ruleNumberInput">RuleNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.match">Match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.ruleNumber">RuleNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.action"></a>

```csharp
public ComputeRouterNatRulesActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference">ComputeRouterNatRulesActionOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.actionInput"></a>

```csharp
public ComputeRouterNatRulesAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.matchInput"></a>

```csharp
public string MatchInput { get; }
```

- *Type:* string

---

##### `RuleNumberInput`<sup>Optional</sup> <a name="RuleNumberInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.ruleNumberInput"></a>

```csharp
public double RuleNumberInput { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.match"></a>

```csharp
public string Match { get; }
```

- *Type:* string

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.ruleNumber"></a>

```csharp
public double RuleNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRouterNatSubnetworkList <a name="ComputeRouterNatSubnetworkList" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterNatSubnetworkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.get"></a>

```csharp
private ComputeRouterNatSubnetworkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRouterNatSubnetworkOutputReference <a name="ComputeRouterNatSubnetworkOutputReference" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterNatSubnetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.resetSecondaryIpRangeNames">ResetSecondaryIpRangeNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecondaryIpRangeNames` <a name="ResetSecondaryIpRangeNames" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.resetSecondaryIpRangeNames"></a>

```csharp
private void ResetSecondaryIpRangeNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNamesInput">SecondaryIpRangeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNatInput">SourceIpRangesToNatInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNames">SecondaryIpRangeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNat">SourceIpRangesToNat</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SecondaryIpRangeNamesInput`<sup>Optional</sup> <a name="SecondaryIpRangeNamesInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNamesInput"></a>

```csharp
public string[] SecondaryIpRangeNamesInput { get; }
```

- *Type:* string[]

---

##### `SourceIpRangesToNatInput`<sup>Optional</sup> <a name="SourceIpRangesToNatInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNatInput"></a>

```csharp
public string[] SourceIpRangesToNatInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecondaryIpRangeNames`<sup>Required</sup> <a name="SecondaryIpRangeNames" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNames"></a>

```csharp
public string[] SecondaryIpRangeNames { get; }
```

- *Type:* string[]

---

##### `SourceIpRangesToNat`<sup>Required</sup> <a name="SourceIpRangesToNat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNat"></a>

```csharp
public string[] SourceIpRangesToNat { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRouterNatTimeoutsOutputReference <a name="ComputeRouterNatTimeoutsOutputReference" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterNatTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



