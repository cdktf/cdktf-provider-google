# `computeInstanceGroupManager` Submodule <a name="`computeInstanceGroupManager` Submodule" id="@cdktf/provider-google.computeInstanceGroupManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInstanceGroupManager <a name="ComputeInstanceGroupManager" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager google_compute_instance_group_manager}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManager(Construct Scope, string Id, ComputeInstanceGroupManagerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig">ComputeInstanceGroupManagerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig">ComputeInstanceGroupManagerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putAllInstancesConfig">PutAllInstancesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putAutoHealingPolicies">PutAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putInstanceLifecyclePolicy">PutInstanceLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putNamedPort">PutNamedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putStatefulDisk">PutStatefulDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putStatefulExternalIp">PutStatefulExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putStatefulInternalIp">PutStatefulInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putUpdatePolicy">PutUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putVersion">PutVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetAllInstancesConfig">ResetAllInstancesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetAutoHealingPolicies">ResetAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetInstanceLifecyclePolicy">ResetInstanceLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetListManagedInstancesResults">ResetListManagedInstancesResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetNamedPort">ResetNamedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetStatefulDisk">ResetStatefulDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetStatefulExternalIp">ResetStatefulExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetStatefulInternalIp">ResetStatefulInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetTargetPools">ResetTargetPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetTargetSize">ResetTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetUpdatePolicy">ResetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetWaitForInstances">ResetWaitForInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetWaitForInstancesStatus">ResetWaitForInstancesStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllInstancesConfig` <a name="PutAllInstancesConfig" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putAllInstancesConfig"></a>

```csharp
private void PutAllInstancesConfig(ComputeInstanceGroupManagerAllInstancesConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putAllInstancesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfig">ComputeInstanceGroupManagerAllInstancesConfig</a>

---

##### `PutAutoHealingPolicies` <a name="PutAutoHealingPolicies" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putAutoHealingPolicies"></a>

```csharp
private void PutAutoHealingPolicies(ComputeInstanceGroupManagerAutoHealingPolicies Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putAutoHealingPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPolicies">ComputeInstanceGroupManagerAutoHealingPolicies</a>

---

##### `PutInstanceLifecyclePolicy` <a name="PutInstanceLifecyclePolicy" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putInstanceLifecyclePolicy"></a>

```csharp
private void PutInstanceLifecyclePolicy(ComputeInstanceGroupManagerInstanceLifecyclePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putInstanceLifecyclePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicy">ComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

---

##### `PutNamedPort` <a name="PutNamedPort" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putNamedPort"></a>

```csharp
private void PutNamedPort(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putNamedPort.parameter.value"></a>

- *Type:* object

---

##### `PutStatefulDisk` <a name="PutStatefulDisk" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putStatefulDisk"></a>

```csharp
private void PutStatefulDisk(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putStatefulDisk.parameter.value"></a>

- *Type:* object

---

##### `PutStatefulExternalIp` <a name="PutStatefulExternalIp" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putStatefulExternalIp"></a>

```csharp
private void PutStatefulExternalIp(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putStatefulExternalIp.parameter.value"></a>

- *Type:* object

---

##### `PutStatefulInternalIp` <a name="PutStatefulInternalIp" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putStatefulInternalIp"></a>

```csharp
private void PutStatefulInternalIp(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putStatefulInternalIp.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeInstanceGroupManagerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeouts">ComputeInstanceGroupManagerTimeouts</a>

---

##### `PutUpdatePolicy` <a name="PutUpdatePolicy" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putUpdatePolicy"></a>

```csharp
private void PutUpdatePolicy(ComputeInstanceGroupManagerUpdatePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy">ComputeInstanceGroupManagerUpdatePolicy</a>

---

##### `PutVersion` <a name="PutVersion" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putVersion"></a>

```csharp
private void PutVersion(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.putVersion.parameter.value"></a>

- *Type:* object

---

##### `ResetAllInstancesConfig` <a name="ResetAllInstancesConfig" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetAllInstancesConfig"></a>

```csharp
private void ResetAllInstancesConfig()
```

##### `ResetAutoHealingPolicies` <a name="ResetAutoHealingPolicies" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetAutoHealingPolicies"></a>

```csharp
private void ResetAutoHealingPolicies()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceLifecyclePolicy` <a name="ResetInstanceLifecyclePolicy" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetInstanceLifecyclePolicy"></a>

```csharp
private void ResetInstanceLifecyclePolicy()
```

##### `ResetListManagedInstancesResults` <a name="ResetListManagedInstancesResults" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetListManagedInstancesResults"></a>

```csharp
private void ResetListManagedInstancesResults()
```

##### `ResetNamedPort` <a name="ResetNamedPort" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetNamedPort"></a>

```csharp
private void ResetNamedPort()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetStatefulDisk` <a name="ResetStatefulDisk" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetStatefulDisk"></a>

```csharp
private void ResetStatefulDisk()
```

##### `ResetStatefulExternalIp` <a name="ResetStatefulExternalIp" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetStatefulExternalIp"></a>

```csharp
private void ResetStatefulExternalIp()
```

##### `ResetStatefulInternalIp` <a name="ResetStatefulInternalIp" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetStatefulInternalIp"></a>

```csharp
private void ResetStatefulInternalIp()
```

##### `ResetTargetPools` <a name="ResetTargetPools" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetTargetPools"></a>

```csharp
private void ResetTargetPools()
```

##### `ResetTargetSize` <a name="ResetTargetSize" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetTargetSize"></a>

```csharp
private void ResetTargetSize()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUpdatePolicy` <a name="ResetUpdatePolicy" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetUpdatePolicy"></a>

```csharp
private void ResetUpdatePolicy()
```

##### `ResetWaitForInstances` <a name="ResetWaitForInstances" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetWaitForInstances"></a>

```csharp
private void ResetWaitForInstances()
```

##### `ResetWaitForInstancesStatus` <a name="ResetWaitForInstancesStatus" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetWaitForInstancesStatus"></a>

```csharp
private void ResetWaitForInstancesStatus()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeInstanceGroupManager resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeInstanceGroupManager.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeInstanceGroupManager.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeInstanceGroupManager.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeInstanceGroupManager.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeInstanceGroupManager resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeInstanceGroupManager to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeInstanceGroupManager that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeInstanceGroupManager to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.allInstancesConfig">AllInstancesConfig</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference">ComputeInstanceGroupManagerAllInstancesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.autoHealingPolicies">AutoHealingPolicies</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference">ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.instanceGroup">InstanceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.instanceLifecyclePolicy">InstanceLifecyclePolicy</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference">ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.namedPort">NamedPort</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList">ComputeInstanceGroupManagerNamedPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.statefulDisk">StatefulDisk</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList">ComputeInstanceGroupManagerStatefulDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.statefulExternalIp">StatefulExternalIp</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList">ComputeInstanceGroupManagerStatefulExternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.statefulInternalIp">StatefulInternalIp</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList">ComputeInstanceGroupManagerStatefulInternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList">ComputeInstanceGroupManagerStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference">ComputeInstanceGroupManagerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference">ComputeInstanceGroupManagerUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.version">Version</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList">ComputeInstanceGroupManagerVersionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.allInstancesConfigInput">AllInstancesConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfig">ComputeInstanceGroupManagerAllInstancesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.autoHealingPoliciesInput">AutoHealingPoliciesInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPolicies">ComputeInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.baseInstanceNameInput">BaseInstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.instanceLifecyclePolicyInput">InstanceLifecyclePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicy">ComputeInstanceGroupManagerInstanceLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.listManagedInstancesResultsInput">ListManagedInstancesResultsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.namedPortInput">NamedPortInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.statefulDiskInput">StatefulDiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.statefulExternalIpInput">StatefulExternalIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.statefulInternalIpInput">StatefulInternalIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.targetPoolsInput">TargetPoolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.targetSizeInput">TargetSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.updatePolicyInput">UpdatePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy">ComputeInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.versionInput">VersionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.waitForInstancesInput">WaitForInstancesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.waitForInstancesStatusInput">WaitForInstancesStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.baseInstanceName">BaseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.listManagedInstancesResults">ListManagedInstancesResults</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.targetPools">TargetPools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.targetSize">TargetSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.waitForInstances">WaitForInstances</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.waitForInstancesStatus">WaitForInstancesStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllInstancesConfig`<sup>Required</sup> <a name="AllInstancesConfig" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.allInstancesConfig"></a>

```csharp
public ComputeInstanceGroupManagerAllInstancesConfigOutputReference AllInstancesConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference">ComputeInstanceGroupManagerAllInstancesConfigOutputReference</a>

---

##### `AutoHealingPolicies`<sup>Required</sup> <a name="AutoHealingPolicies" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.autoHealingPolicies"></a>

```csharp
public ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference AutoHealingPolicies { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference">ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `InstanceGroup`<sup>Required</sup> <a name="InstanceGroup" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.instanceGroup"></a>

```csharp
public string InstanceGroup { get; }
```

- *Type:* string

---

##### `InstanceLifecyclePolicy`<sup>Required</sup> <a name="InstanceLifecyclePolicy" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.instanceLifecyclePolicy"></a>

```csharp
public ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference InstanceLifecyclePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference">ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference</a>

---

##### `NamedPort`<sup>Required</sup> <a name="NamedPort" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.namedPort"></a>

```csharp
public ComputeInstanceGroupManagerNamedPortList NamedPort { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList">ComputeInstanceGroupManagerNamedPortList</a>

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `StatefulDisk`<sup>Required</sup> <a name="StatefulDisk" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.statefulDisk"></a>

```csharp
public ComputeInstanceGroupManagerStatefulDiskList StatefulDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList">ComputeInstanceGroupManagerStatefulDiskList</a>

---

##### `StatefulExternalIp`<sup>Required</sup> <a name="StatefulExternalIp" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.statefulExternalIp"></a>

```csharp
public ComputeInstanceGroupManagerStatefulExternalIpList StatefulExternalIp { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList">ComputeInstanceGroupManagerStatefulExternalIpList</a>

---

##### `StatefulInternalIp`<sup>Required</sup> <a name="StatefulInternalIp" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.statefulInternalIp"></a>

```csharp
public ComputeInstanceGroupManagerStatefulInternalIpList StatefulInternalIp { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList">ComputeInstanceGroupManagerStatefulInternalIpList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.status"></a>

```csharp
public ComputeInstanceGroupManagerStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList">ComputeInstanceGroupManagerStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.timeouts"></a>

```csharp
public ComputeInstanceGroupManagerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference">ComputeInstanceGroupManagerTimeoutsOutputReference</a>

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.updatePolicy"></a>

```csharp
public ComputeInstanceGroupManagerUpdatePolicyOutputReference UpdatePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference">ComputeInstanceGroupManagerUpdatePolicyOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.version"></a>

```csharp
public ComputeInstanceGroupManagerVersionList Version { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList">ComputeInstanceGroupManagerVersionList</a>

---

##### `AllInstancesConfigInput`<sup>Optional</sup> <a name="AllInstancesConfigInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.allInstancesConfigInput"></a>

```csharp
public ComputeInstanceGroupManagerAllInstancesConfig AllInstancesConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfig">ComputeInstanceGroupManagerAllInstancesConfig</a>

---

##### `AutoHealingPoliciesInput`<sup>Optional</sup> <a name="AutoHealingPoliciesInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.autoHealingPoliciesInput"></a>

```csharp
public ComputeInstanceGroupManagerAutoHealingPolicies AutoHealingPoliciesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPolicies">ComputeInstanceGroupManagerAutoHealingPolicies</a>

---

##### `BaseInstanceNameInput`<sup>Optional</sup> <a name="BaseInstanceNameInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.baseInstanceNameInput"></a>

```csharp
public string BaseInstanceNameInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceLifecyclePolicyInput`<sup>Optional</sup> <a name="InstanceLifecyclePolicyInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.instanceLifecyclePolicyInput"></a>

```csharp
public ComputeInstanceGroupManagerInstanceLifecyclePolicy InstanceLifecyclePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicy">ComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

---

##### `ListManagedInstancesResultsInput`<sup>Optional</sup> <a name="ListManagedInstancesResultsInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.listManagedInstancesResultsInput"></a>

```csharp
public string ListManagedInstancesResultsInput { get; }
```

- *Type:* string

---

##### `NamedPortInput`<sup>Optional</sup> <a name="NamedPortInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.namedPortInput"></a>

```csharp
public object NamedPortInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `StatefulDiskInput`<sup>Optional</sup> <a name="StatefulDiskInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.statefulDiskInput"></a>

```csharp
public object StatefulDiskInput { get; }
```

- *Type:* object

---

##### `StatefulExternalIpInput`<sup>Optional</sup> <a name="StatefulExternalIpInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.statefulExternalIpInput"></a>

```csharp
public object StatefulExternalIpInput { get; }
```

- *Type:* object

---

##### `StatefulInternalIpInput`<sup>Optional</sup> <a name="StatefulInternalIpInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.statefulInternalIpInput"></a>

```csharp
public object StatefulInternalIpInput { get; }
```

- *Type:* object

---

##### `TargetPoolsInput`<sup>Optional</sup> <a name="TargetPoolsInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.targetPoolsInput"></a>

```csharp
public string[] TargetPoolsInput { get; }
```

- *Type:* string[]

---

##### `TargetSizeInput`<sup>Optional</sup> <a name="TargetSizeInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.targetSizeInput"></a>

```csharp
public double TargetSizeInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UpdatePolicyInput`<sup>Optional</sup> <a name="UpdatePolicyInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.updatePolicyInput"></a>

```csharp
public ComputeInstanceGroupManagerUpdatePolicy UpdatePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy">ComputeInstanceGroupManagerUpdatePolicy</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.versionInput"></a>

```csharp
public object VersionInput { get; }
```

- *Type:* object

---

##### `WaitForInstancesInput`<sup>Optional</sup> <a name="WaitForInstancesInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.waitForInstancesInput"></a>

```csharp
public object WaitForInstancesInput { get; }
```

- *Type:* object

---

##### `WaitForInstancesStatusInput`<sup>Optional</sup> <a name="WaitForInstancesStatusInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.waitForInstancesStatusInput"></a>

```csharp
public string WaitForInstancesStatusInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `BaseInstanceName`<sup>Required</sup> <a name="BaseInstanceName" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.baseInstanceName"></a>

```csharp
public string BaseInstanceName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListManagedInstancesResults`<sup>Required</sup> <a name="ListManagedInstancesResults" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.listManagedInstancesResults"></a>

```csharp
public string ListManagedInstancesResults { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `TargetPools`<sup>Required</sup> <a name="TargetPools" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.targetPools"></a>

```csharp
public string[] TargetPools { get; }
```

- *Type:* string[]

---

##### `TargetSize`<sup>Required</sup> <a name="TargetSize" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.targetSize"></a>

```csharp
public double TargetSize { get; }
```

- *Type:* double

---

##### `WaitForInstances`<sup>Required</sup> <a name="WaitForInstances" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.waitForInstances"></a>

```csharp
public object WaitForInstances { get; }
```

- *Type:* object

---

##### `WaitForInstancesStatus`<sup>Required</sup> <a name="WaitForInstancesStatus" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.waitForInstancesStatus"></a>

```csharp
public string WaitForInstancesStatus { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManager.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInstanceGroupManagerAllInstancesConfig <a name="ComputeInstanceGroupManagerAllInstancesConfig" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerAllInstancesConfig {
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The label key-value pairs that you want to patch onto the instance,. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The metadata key-value pairs that you want to patch onto the instance. |

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The label key-value pairs that you want to patch onto the instance,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#labels ComputeInstanceGroupManager#labels}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The metadata key-value pairs that you want to patch onto the instance.

For more information, see Project and instance metadata,

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#metadata ComputeInstanceGroupManager#metadata}

---

### ComputeInstanceGroupManagerAutoHealingPolicies <a name="ComputeInstanceGroupManagerAutoHealingPolicies" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerAutoHealingPolicies {
    string HealthCheck,
    double InitialDelaySec
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPolicies.property.healthCheck">HealthCheck</a></code> | <code>string</code> | The health check resource that signals autohealing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPolicies.property.initialDelaySec">InitialDelaySec</a></code> | <code>double</code> | The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances. |

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPolicies.property.healthCheck"></a>

```csharp
public string HealthCheck { get; set; }
```

- *Type:* string

The health check resource that signals autohealing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#health_check ComputeInstanceGroupManager#health_check}

---

##### `InitialDelaySec`<sup>Required</sup> <a name="InitialDelaySec" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPolicies.property.initialDelaySec"></a>

```csharp
public double InitialDelaySec { get; set; }
```

- *Type:* double

The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances.

Between 0 and 3600.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#initial_delay_sec ComputeInstanceGroupManager#initial_delay_sec}

---

### ComputeInstanceGroupManagerConfig <a name="ComputeInstanceGroupManagerConfig" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BaseInstanceName,
    string Name,
    object Version,
    ComputeInstanceGroupManagerAllInstancesConfig AllInstancesConfig = null,
    ComputeInstanceGroupManagerAutoHealingPolicies AutoHealingPolicies = null,
    string Description = null,
    string Id = null,
    ComputeInstanceGroupManagerInstanceLifecyclePolicy InstanceLifecyclePolicy = null,
    string ListManagedInstancesResults = null,
    object NamedPort = null,
    string Project = null,
    object StatefulDisk = null,
    object StatefulExternalIp = null,
    object StatefulInternalIp = null,
    string[] TargetPools = null,
    double TargetSize = null,
    ComputeInstanceGroupManagerTimeouts Timeouts = null,
    ComputeInstanceGroupManagerUpdatePolicy UpdatePolicy = null,
    object WaitForInstances = null,
    string WaitForInstancesStatus = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.baseInstanceName">BaseInstanceName</a></code> | <code>string</code> | The base instance name to use for instances in this group. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.name">Name</a></code> | <code>string</code> | The name of the instance group manager. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.version">Version</a></code> | <code>object</code> | version block. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.allInstancesConfig">AllInstancesConfig</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfig">ComputeInstanceGroupManagerAllInstancesConfig</a></code> | all_instances_config block. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.autoHealingPolicies">AutoHealingPolicies</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPolicies">ComputeInstanceGroupManagerAutoHealingPolicies</a></code> | auto_healing_policies block. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.description">Description</a></code> | <code>string</code> | An optional textual description of the instance group manager. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#id ComputeInstanceGroupManager#id}. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.instanceLifecyclePolicy">InstanceLifecyclePolicy</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicy">ComputeInstanceGroupManagerInstanceLifecyclePolicy</a></code> | instance_lifecycle_policy block. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.listManagedInstancesResults">ListManagedInstancesResults</a></code> | <code>string</code> | Pagination behavior of the listManagedInstances API method for this managed instance group. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.namedPort">NamedPort</a></code> | <code>object</code> | named_port block. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.statefulDisk">StatefulDisk</a></code> | <code>object</code> | stateful_disk block. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.statefulExternalIp">StatefulExternalIp</a></code> | <code>object</code> | stateful_external_ip block. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.statefulInternalIp">StatefulInternalIp</a></code> | <code>object</code> | stateful_internal_ip block. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.targetPools">TargetPools</a></code> | <code>string[]</code> | The full URL of all target pools to which new instances in the group are added. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.targetSize">TargetSize</a></code> | <code>double</code> | The target number of running instances for this managed instance group. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeouts">ComputeInstanceGroupManagerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy">ComputeInstanceGroupManagerUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.waitForInstances">WaitForInstances</a></code> | <code>object</code> | Whether to wait for all instances to be created/updated before returning. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.waitForInstancesStatus">WaitForInstancesStatus</a></code> | <code>string</code> | When used with wait_for_instances specifies the status to wait for. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.zone">Zone</a></code> | <code>string</code> | The zone that instances in this group should be created in. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BaseInstanceName`<sup>Required</sup> <a name="BaseInstanceName" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.baseInstanceName"></a>

```csharp
public string BaseInstanceName { get; set; }
```

- *Type:* string

The base instance name to use for instances in this group.

The value must be a valid RFC1035 name. Supported characters are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character string to the base instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#base_instance_name ComputeInstanceGroupManager#base_instance_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the instance group manager.

Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#name ComputeInstanceGroupManager#name}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.version"></a>

```csharp
public object Version { get; set; }
```

- *Type:* object

version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#version ComputeInstanceGroupManager#version}

---

##### `AllInstancesConfig`<sup>Optional</sup> <a name="AllInstancesConfig" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.allInstancesConfig"></a>

```csharp
public ComputeInstanceGroupManagerAllInstancesConfig AllInstancesConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfig">ComputeInstanceGroupManagerAllInstancesConfig</a>

all_instances_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#all_instances_config ComputeInstanceGroupManager#all_instances_config}

---

##### `AutoHealingPolicies`<sup>Optional</sup> <a name="AutoHealingPolicies" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.autoHealingPolicies"></a>

```csharp
public ComputeInstanceGroupManagerAutoHealingPolicies AutoHealingPolicies { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPolicies">ComputeInstanceGroupManagerAutoHealingPolicies</a>

auto_healing_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#auto_healing_policies ComputeInstanceGroupManager#auto_healing_policies}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional textual description of the instance group manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#description ComputeInstanceGroupManager#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#id ComputeInstanceGroupManager#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceLifecyclePolicy`<sup>Optional</sup> <a name="InstanceLifecyclePolicy" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.instanceLifecyclePolicy"></a>

```csharp
public ComputeInstanceGroupManagerInstanceLifecyclePolicy InstanceLifecyclePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicy">ComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

instance_lifecycle_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#instance_lifecycle_policy ComputeInstanceGroupManager#instance_lifecycle_policy}

---

##### `ListManagedInstancesResults`<sup>Optional</sup> <a name="ListManagedInstancesResults" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.listManagedInstancesResults"></a>

```csharp
public string ListManagedInstancesResults { get; set; }
```

- *Type:* string

Pagination behavior of the listManagedInstances API method for this managed instance group.

Valid values are: "PAGELESS", "PAGINATED". If PAGELESS (default), Pagination is disabled for the group's listManagedInstances API method. maxResults and pageToken query parameters are ignored and all instances are returned in a single response. If PAGINATED, pagination is enabled, maxResults and pageToken query parameters are respected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#list_managed_instances_results ComputeInstanceGroupManager#list_managed_instances_results}

---

##### `NamedPort`<sup>Optional</sup> <a name="NamedPort" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.namedPort"></a>

```csharp
public object NamedPort { get; set; }
```

- *Type:* object

named_port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#named_port ComputeInstanceGroupManager#named_port}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#project ComputeInstanceGroupManager#project}

---

##### `StatefulDisk`<sup>Optional</sup> <a name="StatefulDisk" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.statefulDisk"></a>

```csharp
public object StatefulDisk { get; set; }
```

- *Type:* object

stateful_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#stateful_disk ComputeInstanceGroupManager#stateful_disk}

---

##### `StatefulExternalIp`<sup>Optional</sup> <a name="StatefulExternalIp" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.statefulExternalIp"></a>

```csharp
public object StatefulExternalIp { get; set; }
```

- *Type:* object

stateful_external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#stateful_external_ip ComputeInstanceGroupManager#stateful_external_ip}

---

##### `StatefulInternalIp`<sup>Optional</sup> <a name="StatefulInternalIp" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.statefulInternalIp"></a>

```csharp
public object StatefulInternalIp { get; set; }
```

- *Type:* object

stateful_internal_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#stateful_internal_ip ComputeInstanceGroupManager#stateful_internal_ip}

---

##### `TargetPools`<sup>Optional</sup> <a name="TargetPools" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.targetPools"></a>

```csharp
public string[] TargetPools { get; set; }
```

- *Type:* string[]

The full URL of all target pools to which new instances in the group are added.

Updating the target pools attribute does not affect existing instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#target_pools ComputeInstanceGroupManager#target_pools}

---

##### `TargetSize`<sup>Optional</sup> <a name="TargetSize" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.targetSize"></a>

```csharp
public double TargetSize { get; set; }
```

- *Type:* double

The target number of running instances for this managed instance group.

This value should always be explicitly set unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#target_size ComputeInstanceGroupManager#target_size}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.timeouts"></a>

```csharp
public ComputeInstanceGroupManagerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeouts">ComputeInstanceGroupManagerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#timeouts ComputeInstanceGroupManager#timeouts}

---

##### `UpdatePolicy`<sup>Optional</sup> <a name="UpdatePolicy" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.updatePolicy"></a>

```csharp
public ComputeInstanceGroupManagerUpdatePolicy UpdatePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy">ComputeInstanceGroupManagerUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#update_policy ComputeInstanceGroupManager#update_policy}

---

##### `WaitForInstances`<sup>Optional</sup> <a name="WaitForInstances" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.waitForInstances"></a>

```csharp
public object WaitForInstances { get; set; }
```

- *Type:* object

Whether to wait for all instances to be created/updated before returning.

Note that if this is set to true and the operation does not succeed, Terraform will continue trying until it times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#wait_for_instances ComputeInstanceGroupManager#wait_for_instances}

---

##### `WaitForInstancesStatus`<sup>Optional</sup> <a name="WaitForInstancesStatus" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.waitForInstancesStatus"></a>

```csharp
public string WaitForInstancesStatus { get; set; }
```

- *Type:* string

When used with wait_for_instances specifies the status to wait for.

When STABLE is specified this resource will wait until the instances are stable before returning. When UPDATED is set, it will wait for the version target to be reached and any per instance configs to be effective and all instances configs to be effective as well as all instances to be stable before returning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#wait_for_instances_status ComputeInstanceGroupManager#wait_for_instances_status}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The zone that instances in this group should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#zone ComputeInstanceGroupManager#zone}

---

### ComputeInstanceGroupManagerInstanceLifecyclePolicy <a name="ComputeInstanceGroupManagerInstanceLifecyclePolicy" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerInstanceLifecyclePolicy {
    string DefaultActionOnFailure = null,
    string ForceUpdateOnRepair = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicy.property.defaultActionOnFailure">DefaultActionOnFailure</a></code> | <code>string</code> | Default behavior for all instance or health check failures. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicy.property.forceUpdateOnRepair">ForceUpdateOnRepair</a></code> | <code>string</code> | Specifies whether to apply the group's latest configuration when repairing a VM. |

---

##### `DefaultActionOnFailure`<sup>Optional</sup> <a name="DefaultActionOnFailure" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicy.property.defaultActionOnFailure"></a>

```csharp
public string DefaultActionOnFailure { get; set; }
```

- *Type:* string

Default behavior for all instance or health check failures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#default_action_on_failure ComputeInstanceGroupManager#default_action_on_failure}

---

##### `ForceUpdateOnRepair`<sup>Optional</sup> <a name="ForceUpdateOnRepair" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicy.property.forceUpdateOnRepair"></a>

```csharp
public string ForceUpdateOnRepair { get; set; }
```

- *Type:* string

Specifies whether to apply the group's latest configuration when repairing a VM.

Valid options are: YES, NO. If YES and you updated the group's instance template or per-instance configurations after the VM was created, then these changes are applied when VM is repaired. If NO (default), then updates are applied in accordance with the group's update policy type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#force_update_on_repair ComputeInstanceGroupManager#force_update_on_repair}

---

### ComputeInstanceGroupManagerNamedPort <a name="ComputeInstanceGroupManagerNamedPort" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPort.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerNamedPort {
    string Name,
    double Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPort.property.name">Name</a></code> | <code>string</code> | The name of the port. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPort.property.port">Port</a></code> | <code>double</code> | The port number. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPort.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#name ComputeInstanceGroupManager#name}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPort.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#port ComputeInstanceGroupManager#port}

---

### ComputeInstanceGroupManagerStatefulDisk <a name="ComputeInstanceGroupManagerStatefulDisk" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatefulDisk {
    string DeviceName,
    string DeleteRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDisk.property.deviceName">DeviceName</a></code> | <code>string</code> | The device name of the disk to be attached. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDisk.property.deleteRule">DeleteRule</a></code> | <code>string</code> | A value that prescribes what should happen to the stateful disk when the VM instance is deleted. |

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDisk.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

The device name of the disk to be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#device_name ComputeInstanceGroupManager#device_name}

---

##### `DeleteRule`<sup>Optional</sup> <a name="DeleteRule" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDisk.property.deleteRule"></a>

```csharp
public string DeleteRule { get; set; }
```

- *Type:* string

A value that prescribes what should happen to the stateful disk when the VM instance is deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the disk when the VM is deleted, but do not delete the disk. ON_PERMANENT_INSTANCE_DELETION will delete the stateful disk when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#delete_rule ComputeInstanceGroupManager#delete_rule}

---

### ComputeInstanceGroupManagerStatefulExternalIp <a name="ComputeInstanceGroupManagerStatefulExternalIp" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatefulExternalIp {
    string DeleteRule = null,
    string InterfaceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIp.property.deleteRule">DeleteRule</a></code> | <code>string</code> | A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIp.property.interfaceName">InterfaceName</a></code> | <code>string</code> | The network interface name. |

---

##### `DeleteRule`<sup>Optional</sup> <a name="DeleteRule" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIp.property.deleteRule"></a>

```csharp
public string DeleteRule { get; set; }
```

- *Type:* string

A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the IP when the VM is deleted, but do not delete the address resource. ON_PERMANENT_INSTANCE_DELETION will delete the stateful address when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#delete_rule ComputeInstanceGroupManager#delete_rule}

---

##### `InterfaceName`<sup>Optional</sup> <a name="InterfaceName" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIp.property.interfaceName"></a>

```csharp
public string InterfaceName { get; set; }
```

- *Type:* string

The network interface name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#interface_name ComputeInstanceGroupManager#interface_name}

---

### ComputeInstanceGroupManagerStatefulInternalIp <a name="ComputeInstanceGroupManagerStatefulInternalIp" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatefulInternalIp {
    string DeleteRule = null,
    string InterfaceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIp.property.deleteRule">DeleteRule</a></code> | <code>string</code> | A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIp.property.interfaceName">InterfaceName</a></code> | <code>string</code> | The network interface name. |

---

##### `DeleteRule`<sup>Optional</sup> <a name="DeleteRule" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIp.property.deleteRule"></a>

```csharp
public string DeleteRule { get; set; }
```

- *Type:* string

A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the IP when the VM is deleted, but do not delete the address resource. ON_PERMANENT_INSTANCE_DELETION will delete the stateful address when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#delete_rule ComputeInstanceGroupManager#delete_rule}

---

##### `InterfaceName`<sup>Optional</sup> <a name="InterfaceName" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIp.property.interfaceName"></a>

```csharp
public string InterfaceName { get; set; }
```

- *Type:* string

The network interface name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#interface_name ComputeInstanceGroupManager#interface_name}

---

### ComputeInstanceGroupManagerStatus <a name="ComputeInstanceGroupManagerStatus" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatus {

};
```


### ComputeInstanceGroupManagerStatusAllInstancesConfig <a name="ComputeInstanceGroupManagerStatusAllInstancesConfig" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatusAllInstancesConfig {

};
```


### ComputeInstanceGroupManagerStatusStateful <a name="ComputeInstanceGroupManagerStatusStateful" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStateful"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStateful.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatusStateful {

};
```


### ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs <a name="ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs {

};
```


### ComputeInstanceGroupManagerStatusVersionTarget <a name="ComputeInstanceGroupManagerStatusVersionTarget" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatusVersionTarget {

};
```


### ComputeInstanceGroupManagerTimeouts <a name="ComputeInstanceGroupManagerTimeouts" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#create ComputeInstanceGroupManager#create}. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#delete ComputeInstanceGroupManager#delete}. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#update ComputeInstanceGroupManager#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#create ComputeInstanceGroupManager#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#delete ComputeInstanceGroupManager#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#update ComputeInstanceGroupManager#update}.

---

### ComputeInstanceGroupManagerUpdatePolicy <a name="ComputeInstanceGroupManagerUpdatePolicy" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerUpdatePolicy {
    string MinimalAction,
    string Type,
    double MaxSurgeFixed = null,
    double MaxSurgePercent = null,
    double MaxUnavailableFixed = null,
    double MaxUnavailablePercent = null,
    string MostDisruptiveAllowedAction = null,
    string ReplacementMethod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy.property.minimalAction">MinimalAction</a></code> | <code>string</code> | Minimal action to be taken on an instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy.property.type">Type</a></code> | <code>string</code> | The type of update process. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy.property.maxSurgeFixed">MaxSurgeFixed</a></code> | <code>double</code> | The maximum number of instances that can be created above the specified targetSize during the update process. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy.property.maxSurgePercent">MaxSurgePercent</a></code> | <code>double</code> | The maximum number of instances(calculated as percentage) that can be created above the specified targetSize during the update process. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy.property.maxUnavailableFixed">MaxUnavailableFixed</a></code> | <code>double</code> | The maximum number of instances that can be unavailable during the update process. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy.property.maxUnavailablePercent">MaxUnavailablePercent</a></code> | <code>double</code> | The maximum number of instances(calculated as percentage) that can be unavailable during the update process. Conflicts with max_unavailable_fixed. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy.property.mostDisruptiveAllowedAction">MostDisruptiveAllowedAction</a></code> | <code>string</code> | Most disruptive action that is allowed to be taken on an instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy.property.replacementMethod">ReplacementMethod</a></code> | <code>string</code> | The instance replacement method for managed instance groups. |

---

##### `MinimalAction`<sup>Required</sup> <a name="MinimalAction" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy.property.minimalAction"></a>

```csharp
public string MinimalAction { get; set; }
```

- *Type:* string

Minimal action to be taken on an instance.

You can specify either REFRESH to update without stopping instances, RESTART to restart existing instances or REPLACE to delete and create new instances from the target template. If you specify a REFRESH, the Updater will attempt to perform that action only. However, if the Updater determines that the minimal action you specify is not enough to perform the update, it might perform a more disruptive action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#minimal_action ComputeInstanceGroupManager#minimal_action}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of update process.

You can specify either PROACTIVE so that the instance group manager proactively executes actions in order to bring instances to their target versions or OPPORTUNISTIC so that no action is proactively executed but the update will be performed as part of other actions (for example, resizes or recreateInstances calls).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#type ComputeInstanceGroupManager#type}

---

##### `MaxSurgeFixed`<sup>Optional</sup> <a name="MaxSurgeFixed" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy.property.maxSurgeFixed"></a>

```csharp
public double MaxSurgeFixed { get; set; }
```

- *Type:* double

The maximum number of instances that can be created above the specified targetSize during the update process.

Conflicts with max_surge_percent. If neither is set, defaults to 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#max_surge_fixed ComputeInstanceGroupManager#max_surge_fixed}

---

##### `MaxSurgePercent`<sup>Optional</sup> <a name="MaxSurgePercent" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy.property.maxSurgePercent"></a>

```csharp
public double MaxSurgePercent { get; set; }
```

- *Type:* double

The maximum number of instances(calculated as percentage) that can be created above the specified targetSize during the update process.

Conflicts with max_surge_fixed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#max_surge_percent ComputeInstanceGroupManager#max_surge_percent}

---

##### `MaxUnavailableFixed`<sup>Optional</sup> <a name="MaxUnavailableFixed" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy.property.maxUnavailableFixed"></a>

```csharp
public double MaxUnavailableFixed { get; set; }
```

- *Type:* double

The maximum number of instances that can be unavailable during the update process.

Conflicts with max_unavailable_percent. If neither is set, defaults to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#max_unavailable_fixed ComputeInstanceGroupManager#max_unavailable_fixed}

---

##### `MaxUnavailablePercent`<sup>Optional</sup> <a name="MaxUnavailablePercent" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy.property.maxUnavailablePercent"></a>

```csharp
public double MaxUnavailablePercent { get; set; }
```

- *Type:* double

The maximum number of instances(calculated as percentage) that can be unavailable during the update process. Conflicts with max_unavailable_fixed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#max_unavailable_percent ComputeInstanceGroupManager#max_unavailable_percent}

---

##### `MostDisruptiveAllowedAction`<sup>Optional</sup> <a name="MostDisruptiveAllowedAction" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy.property.mostDisruptiveAllowedAction"></a>

```csharp
public string MostDisruptiveAllowedAction { get; set; }
```

- *Type:* string

Most disruptive action that is allowed to be taken on an instance.

You can specify either NONE to forbid any actions, REFRESH to allow actions that do not need instance restart, RESTART to allow actions that can be applied without instance replacing or REPLACE to allow all possible actions. If the Updater determines that the minimal update action needed is more disruptive than most disruptive allowed action you specify it will not perform the update at all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#most_disruptive_allowed_action ComputeInstanceGroupManager#most_disruptive_allowed_action}

---

##### `ReplacementMethod`<sup>Optional</sup> <a name="ReplacementMethod" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy.property.replacementMethod"></a>

```csharp
public string ReplacementMethod { get; set; }
```

- *Type:* string

The instance replacement method for managed instance groups.

Valid values are: "RECREATE", "SUBSTITUTE". If SUBSTITUTE (default), the group replaces VM instances with new instances that have randomly generated names. If RECREATE, instance names are preserved.  You must also set max_unavailable_fixed or max_unavailable_percent to be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#replacement_method ComputeInstanceGroupManager#replacement_method}

---

### ComputeInstanceGroupManagerVersion <a name="ComputeInstanceGroupManagerVersion" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerVersion {
    string InstanceTemplate,
    string Name = null,
    ComputeInstanceGroupManagerVersionTargetSize TargetSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersion.property.instanceTemplate">InstanceTemplate</a></code> | <code>string</code> | The full URL to an instance template from which all new instances of this version will be created. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersion.property.name">Name</a></code> | <code>string</code> | Version name. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersion.property.targetSize">TargetSize</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSize">ComputeInstanceGroupManagerVersionTargetSize</a></code> | target_size block. |

---

##### `InstanceTemplate`<sup>Required</sup> <a name="InstanceTemplate" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersion.property.instanceTemplate"></a>

```csharp
public string InstanceTemplate { get; set; }
```

- *Type:* string

The full URL to an instance template from which all new instances of this version will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#instance_template ComputeInstanceGroupManager#instance_template}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersion.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Version name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#name ComputeInstanceGroupManager#name}

---

##### `TargetSize`<sup>Optional</sup> <a name="TargetSize" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersion.property.targetSize"></a>

```csharp
public ComputeInstanceGroupManagerVersionTargetSize TargetSize { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSize">ComputeInstanceGroupManagerVersionTargetSize</a>

target_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#target_size ComputeInstanceGroupManager#target_size}

---

### ComputeInstanceGroupManagerVersionTargetSize <a name="ComputeInstanceGroupManagerVersionTargetSize" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSize.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerVersionTargetSize {
    double Fixed = null,
    double Percent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSize.property.fixed">Fixed</a></code> | <code>double</code> | The number of instances which are managed for this version. Conflicts with percent. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSize.property.percent">Percent</a></code> | <code>double</code> | The number of instances (calculated as percentage) which are managed for this version. |

---

##### `Fixed`<sup>Optional</sup> <a name="Fixed" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSize.property.fixed"></a>

```csharp
public double Fixed { get; set; }
```

- *Type:* double

The number of instances which are managed for this version. Conflicts with percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#fixed ComputeInstanceGroupManager#fixed}

---

##### `Percent`<sup>Optional</sup> <a name="Percent" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSize.property.percent"></a>

```csharp
public double Percent { get; set; }
```

- *Type:* double

The number of instances (calculated as percentage) which are managed for this version.

Conflicts with fixed. Note that when using percent, rounding will be in favor of explicitly set target_size values; a managed instance group with 2 instances and 2 versions, one of which has a target_size.percent of 60 will create 2 instances of that version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_manager#percent ComputeInstanceGroupManager#percent}

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInstanceGroupManagerAllInstancesConfigOutputReference <a name="ComputeInstanceGroupManagerAllInstancesConfigOutputReference" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerAllInstancesConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfig">ComputeInstanceGroupManagerAllInstancesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceGroupManagerAllInstancesConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAllInstancesConfig">ComputeInstanceGroupManagerAllInstancesConfig</a>

---


### ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference <a name="ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheckInput">HealthCheckInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySecInput">InitialDelaySecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck">HealthCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec">InitialDelaySec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPolicies">ComputeInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheckInput"></a>

```csharp
public string HealthCheckInput { get; }
```

- *Type:* string

---

##### `InitialDelaySecInput`<sup>Optional</sup> <a name="InitialDelaySecInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySecInput"></a>

```csharp
public double InitialDelaySecInput { get; }
```

- *Type:* double

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck"></a>

```csharp
public string HealthCheck { get; }
```

- *Type:* string

---

##### `InitialDelaySec`<sup>Required</sup> <a name="InitialDelaySec" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec"></a>

```csharp
public double InitialDelaySec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceGroupManagerAutoHealingPolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerAutoHealingPolicies">ComputeInstanceGroupManagerAutoHealingPolicies</a>

---


### ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference <a name="ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetDefaultActionOnFailure">ResetDefaultActionOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetForceUpdateOnRepair">ResetForceUpdateOnRepair</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultActionOnFailure` <a name="ResetDefaultActionOnFailure" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetDefaultActionOnFailure"></a>

```csharp
private void ResetDefaultActionOnFailure()
```

##### `ResetForceUpdateOnRepair` <a name="ResetForceUpdateOnRepair" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetForceUpdateOnRepair"></a>

```csharp
private void ResetForceUpdateOnRepair()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailureInput">DefaultActionOnFailureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepairInput">ForceUpdateOnRepairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailure">DefaultActionOnFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepair">ForceUpdateOnRepair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicy">ComputeInstanceGroupManagerInstanceLifecyclePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultActionOnFailureInput`<sup>Optional</sup> <a name="DefaultActionOnFailureInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailureInput"></a>

```csharp
public string DefaultActionOnFailureInput { get; }
```

- *Type:* string

---

##### `ForceUpdateOnRepairInput`<sup>Optional</sup> <a name="ForceUpdateOnRepairInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepairInput"></a>

```csharp
public string ForceUpdateOnRepairInput { get; }
```

- *Type:* string

---

##### `DefaultActionOnFailure`<sup>Required</sup> <a name="DefaultActionOnFailure" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailure"></a>

```csharp
public string DefaultActionOnFailure { get; }
```

- *Type:* string

---

##### `ForceUpdateOnRepair`<sup>Required</sup> <a name="ForceUpdateOnRepair" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepair"></a>

```csharp
public string ForceUpdateOnRepair { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceGroupManagerInstanceLifecyclePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerInstanceLifecyclePolicy">ComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

---


### ComputeInstanceGroupManagerNamedPortList <a name="ComputeInstanceGroupManagerNamedPortList" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerNamedPortList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.get"></a>

```csharp
private ComputeInstanceGroupManagerNamedPortOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceGroupManagerNamedPortOutputReference <a name="ComputeInstanceGroupManagerNamedPortOutputReference" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerNamedPortOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerNamedPortOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceGroupManagerStatefulDiskList <a name="ComputeInstanceGroupManagerStatefulDiskList" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatefulDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.get"></a>

```csharp
private ComputeInstanceGroupManagerStatefulDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceGroupManagerStatefulDiskOutputReference <a name="ComputeInstanceGroupManagerStatefulDiskOutputReference" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatefulDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.resetDeleteRule">ResetDeleteRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteRule` <a name="ResetDeleteRule" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.resetDeleteRule"></a>

```csharp
private void ResetDeleteRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRuleInput">DeleteRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule">DeleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteRuleInput`<sup>Optional</sup> <a name="DeleteRuleInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRuleInput"></a>

```csharp
public string DeleteRuleInput { get; }
```

- *Type:* string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule"></a>

```csharp
public string DeleteRule { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulDiskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceGroupManagerStatefulExternalIpList <a name="ComputeInstanceGroupManagerStatefulExternalIpList" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatefulExternalIpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.get"></a>

```csharp
private ComputeInstanceGroupManagerStatefulExternalIpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceGroupManagerStatefulExternalIpOutputReference <a name="ComputeInstanceGroupManagerStatefulExternalIpOutputReference" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatefulExternalIpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.resetDeleteRule">ResetDeleteRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.resetInterfaceName">ResetInterfaceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteRule` <a name="ResetDeleteRule" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.resetDeleteRule"></a>

```csharp
private void ResetDeleteRule()
```

##### `ResetInterfaceName` <a name="ResetInterfaceName" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.resetInterfaceName"></a>

```csharp
private void ResetInterfaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRuleInput">DeleteRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceNameInput">InterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule">DeleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName">InterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteRuleInput`<sup>Optional</sup> <a name="DeleteRuleInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRuleInput"></a>

```csharp
public string DeleteRuleInput { get; }
```

- *Type:* string

---

##### `InterfaceNameInput`<sup>Optional</sup> <a name="InterfaceNameInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceNameInput"></a>

```csharp
public string InterfaceNameInput { get; }
```

- *Type:* string

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule"></a>

```csharp
public string DeleteRule { get; }
```

- *Type:* string

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName"></a>

```csharp
public string InterfaceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceGroupManagerStatefulInternalIpList <a name="ComputeInstanceGroupManagerStatefulInternalIpList" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatefulInternalIpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.get"></a>

```csharp
private ComputeInstanceGroupManagerStatefulInternalIpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceGroupManagerStatefulInternalIpOutputReference <a name="ComputeInstanceGroupManagerStatefulInternalIpOutputReference" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatefulInternalIpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.resetDeleteRule">ResetDeleteRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.resetInterfaceName">ResetInterfaceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteRule` <a name="ResetDeleteRule" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.resetDeleteRule"></a>

```csharp
private void ResetDeleteRule()
```

##### `ResetInterfaceName` <a name="ResetInterfaceName" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.resetInterfaceName"></a>

```csharp
private void ResetInterfaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRuleInput">DeleteRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceNameInput">InterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule">DeleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName">InterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteRuleInput`<sup>Optional</sup> <a name="DeleteRuleInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRuleInput"></a>

```csharp
public string DeleteRuleInput { get; }
```

- *Type:* string

---

##### `InterfaceNameInput`<sup>Optional</sup> <a name="InterfaceNameInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceNameInput"></a>

```csharp
public string InterfaceNameInput { get; }
```

- *Type:* string

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule"></a>

```csharp
public string DeleteRule { get; }
```

- *Type:* string

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName"></a>

```csharp
public string InterfaceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceGroupManagerStatusAllInstancesConfigList <a name="ComputeInstanceGroupManagerStatusAllInstancesConfigList" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatusAllInstancesConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.get"></a>

```csharp
private ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference <a name="ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.currentRevision">CurrentRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective">Effective</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfig">ComputeInstanceGroupManagerStatusAllInstancesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentRevision`<sup>Required</sup> <a name="CurrentRevision" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.currentRevision"></a>

```csharp
public string CurrentRevision { get; }
```

- *Type:* string

---

##### `Effective`<sup>Required</sup> <a name="Effective" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective"></a>

```csharp
public IResolvable Effective { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceGroupManagerStatusAllInstancesConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfig">ComputeInstanceGroupManagerStatusAllInstancesConfig</a>

---


### ComputeInstanceGroupManagerStatusList <a name="ComputeInstanceGroupManagerStatusList" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.get"></a>

```csharp
private ComputeInstanceGroupManagerStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeInstanceGroupManagerStatusOutputReference <a name="ComputeInstanceGroupManagerStatusOutputReference" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.property.allInstancesConfig">AllInstancesConfig</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList">ComputeInstanceGroupManagerStatusAllInstancesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.property.isStable">IsStable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.property.stateful">Stateful</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList">ComputeInstanceGroupManagerStatusStatefulList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.property.versionTarget">VersionTarget</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList">ComputeInstanceGroupManagerStatusVersionTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatus">ComputeInstanceGroupManagerStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllInstancesConfig`<sup>Required</sup> <a name="AllInstancesConfig" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.property.allInstancesConfig"></a>

```csharp
public ComputeInstanceGroupManagerStatusAllInstancesConfigList AllInstancesConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusAllInstancesConfigList">ComputeInstanceGroupManagerStatusAllInstancesConfigList</a>

---

##### `IsStable`<sup>Required</sup> <a name="IsStable" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.property.isStable"></a>

```csharp
public IResolvable IsStable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Stateful`<sup>Required</sup> <a name="Stateful" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.property.stateful"></a>

```csharp
public ComputeInstanceGroupManagerStatusStatefulList Stateful { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList">ComputeInstanceGroupManagerStatusStatefulList</a>

---

##### `VersionTarget`<sup>Required</sup> <a name="VersionTarget" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.property.versionTarget"></a>

```csharp
public ComputeInstanceGroupManagerStatusVersionTargetList VersionTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList">ComputeInstanceGroupManagerStatusVersionTargetList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceGroupManagerStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatus">ComputeInstanceGroupManagerStatus</a>

---


### ComputeInstanceGroupManagerStatusStatefulList <a name="ComputeInstanceGroupManagerStatusStatefulList" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatusStatefulList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.get"></a>

```csharp
private ComputeInstanceGroupManagerStatusStatefulOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeInstanceGroupManagerStatusStatefulOutputReference <a name="ComputeInstanceGroupManagerStatusStatefulOutputReference" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatusStatefulOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig">HasStatefulConfig</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs">PerInstanceConfigs</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList">ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStateful">ComputeInstanceGroupManagerStatusStateful</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HasStatefulConfig`<sup>Required</sup> <a name="HasStatefulConfig" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig"></a>

```csharp
public IResolvable HasStatefulConfig { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PerInstanceConfigs`<sup>Required</sup> <a name="PerInstanceConfigs" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs"></a>

```csharp
public ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList PerInstanceConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList">ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceGroupManagerStatusStateful InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStateful">ComputeInstanceGroupManagerStatusStateful</a>

---


### ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList <a name="ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get"></a>

```csharp
private ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference <a name="ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective">AllEffective</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs">ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllEffective`<sup>Required</sup> <a name="AllEffective" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective"></a>

```csharp
public IResolvable AllEffective { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs">ComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs</a>

---


### ComputeInstanceGroupManagerStatusVersionTargetList <a name="ComputeInstanceGroupManagerStatusVersionTargetList" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatusVersionTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.get"></a>

```csharp
private ComputeInstanceGroupManagerStatusVersionTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeInstanceGroupManagerStatusVersionTargetOutputReference <a name="ComputeInstanceGroupManagerStatusVersionTargetOutputReference" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerStatusVersionTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached">IsReached</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTarget">ComputeInstanceGroupManagerStatusVersionTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsReached`<sup>Required</sup> <a name="IsReached" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached"></a>

```csharp
public IResolvable IsReached { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceGroupManagerStatusVersionTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerStatusVersionTarget">ComputeInstanceGroupManagerStatusVersionTarget</a>

---


### ComputeInstanceGroupManagerTimeoutsOutputReference <a name="ComputeInstanceGroupManagerTimeoutsOutputReference" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceGroupManagerUpdatePolicyOutputReference <a name="ComputeInstanceGroupManagerUpdatePolicyOutputReference" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerUpdatePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgeFixed">ResetMaxSurgeFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgePercent">ResetMaxSurgePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailableFixed">ResetMaxUnavailableFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailablePercent">ResetMaxUnavailablePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMostDisruptiveAllowedAction">ResetMostDisruptiveAllowedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.resetReplacementMethod">ResetReplacementMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxSurgeFixed` <a name="ResetMaxSurgeFixed" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgeFixed"></a>

```csharp
private void ResetMaxSurgeFixed()
```

##### `ResetMaxSurgePercent` <a name="ResetMaxSurgePercent" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgePercent"></a>

```csharp
private void ResetMaxSurgePercent()
```

##### `ResetMaxUnavailableFixed` <a name="ResetMaxUnavailableFixed" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailableFixed"></a>

```csharp
private void ResetMaxUnavailableFixed()
```

##### `ResetMaxUnavailablePercent` <a name="ResetMaxUnavailablePercent" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailablePercent"></a>

```csharp
private void ResetMaxUnavailablePercent()
```

##### `ResetMostDisruptiveAllowedAction` <a name="ResetMostDisruptiveAllowedAction" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMostDisruptiveAllowedAction"></a>

```csharp
private void ResetMostDisruptiveAllowedAction()
```

##### `ResetReplacementMethod` <a name="ResetReplacementMethod" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.resetReplacementMethod"></a>

```csharp
private void ResetReplacementMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixedInput">MaxSurgeFixedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercentInput">MaxSurgePercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixedInput">MaxUnavailableFixedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercentInput">MaxUnavailablePercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalActionInput">MinimalActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedActionInput">MostDisruptiveAllowedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethodInput">ReplacementMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed">MaxSurgeFixed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent">MaxSurgePercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed">MaxUnavailableFixed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent">MaxUnavailablePercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction">MinimalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction">MostDisruptiveAllowedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod">ReplacementMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy">ComputeInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxSurgeFixedInput`<sup>Optional</sup> <a name="MaxSurgeFixedInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixedInput"></a>

```csharp
public double MaxSurgeFixedInput { get; }
```

- *Type:* double

---

##### `MaxSurgePercentInput`<sup>Optional</sup> <a name="MaxSurgePercentInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercentInput"></a>

```csharp
public double MaxSurgePercentInput { get; }
```

- *Type:* double

---

##### `MaxUnavailableFixedInput`<sup>Optional</sup> <a name="MaxUnavailableFixedInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixedInput"></a>

```csharp
public double MaxUnavailableFixedInput { get; }
```

- *Type:* double

---

##### `MaxUnavailablePercentInput`<sup>Optional</sup> <a name="MaxUnavailablePercentInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercentInput"></a>

```csharp
public double MaxUnavailablePercentInput { get; }
```

- *Type:* double

---

##### `MinimalActionInput`<sup>Optional</sup> <a name="MinimalActionInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalActionInput"></a>

```csharp
public string MinimalActionInput { get; }
```

- *Type:* string

---

##### `MostDisruptiveAllowedActionInput`<sup>Optional</sup> <a name="MostDisruptiveAllowedActionInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedActionInput"></a>

```csharp
public string MostDisruptiveAllowedActionInput { get; }
```

- *Type:* string

---

##### `ReplacementMethodInput`<sup>Optional</sup> <a name="ReplacementMethodInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethodInput"></a>

```csharp
public string ReplacementMethodInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `MaxSurgeFixed`<sup>Required</sup> <a name="MaxSurgeFixed" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed"></a>

```csharp
public double MaxSurgeFixed { get; }
```

- *Type:* double

---

##### `MaxSurgePercent`<sup>Required</sup> <a name="MaxSurgePercent" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent"></a>

```csharp
public double MaxSurgePercent { get; }
```

- *Type:* double

---

##### `MaxUnavailableFixed`<sup>Required</sup> <a name="MaxUnavailableFixed" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed"></a>

```csharp
public double MaxUnavailableFixed { get; }
```

- *Type:* double

---

##### `MaxUnavailablePercent`<sup>Required</sup> <a name="MaxUnavailablePercent" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent"></a>

```csharp
public double MaxUnavailablePercent { get; }
```

- *Type:* double

---

##### `MinimalAction`<sup>Required</sup> <a name="MinimalAction" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction"></a>

```csharp
public string MinimalAction { get; }
```

- *Type:* string

---

##### `MostDisruptiveAllowedAction`<sup>Required</sup> <a name="MostDisruptiveAllowedAction" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction"></a>

```csharp
public string MostDisruptiveAllowedAction { get; }
```

- *Type:* string

---

##### `ReplacementMethod`<sup>Required</sup> <a name="ReplacementMethod" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod"></a>

```csharp
public string ReplacementMethod { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceGroupManagerUpdatePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerUpdatePolicy">ComputeInstanceGroupManagerUpdatePolicy</a>

---


### ComputeInstanceGroupManagerVersionList <a name="ComputeInstanceGroupManagerVersionList" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerVersionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.get"></a>

```csharp
private ComputeInstanceGroupManagerVersionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceGroupManagerVersionOutputReference <a name="ComputeInstanceGroupManagerVersionOutputReference" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.putTargetSize">PutTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.resetTargetSize">ResetTargetSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetSize` <a name="PutTargetSize" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.putTargetSize"></a>

```csharp
private void PutTargetSize(ComputeInstanceGroupManagerVersionTargetSize Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.putTargetSize.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSize">ComputeInstanceGroupManagerVersionTargetSize</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTargetSize` <a name="ResetTargetSize" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.resetTargetSize"></a>

```csharp
private void ResetTargetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.property.targetSize">TargetSize</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference">ComputeInstanceGroupManagerVersionTargetSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplateInput">InstanceTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.property.targetSizeInput">TargetSizeInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSize">ComputeInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplate">InstanceTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetSize`<sup>Required</sup> <a name="TargetSize" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.property.targetSize"></a>

```csharp
public ComputeInstanceGroupManagerVersionTargetSizeOutputReference TargetSize { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference">ComputeInstanceGroupManagerVersionTargetSizeOutputReference</a>

---

##### `InstanceTemplateInput`<sup>Optional</sup> <a name="InstanceTemplateInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplateInput"></a>

```csharp
public string InstanceTemplateInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TargetSizeInput`<sup>Optional</sup> <a name="TargetSizeInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.property.targetSizeInput"></a>

```csharp
public ComputeInstanceGroupManagerVersionTargetSize TargetSizeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSize">ComputeInstanceGroupManagerVersionTargetSize</a>

---

##### `InstanceTemplate`<sup>Required</sup> <a name="InstanceTemplate" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplate"></a>

```csharp
public string InstanceTemplate { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInstanceGroupManagerVersionTargetSizeOutputReference <a name="ComputeInstanceGroupManagerVersionTargetSizeOutputReference" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInstanceGroupManagerVersionTargetSizeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.resetFixed">ResetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.resetPercent">ResetPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFixed` <a name="ResetFixed" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.resetFixed"></a>

```csharp
private void ResetFixed()
```

##### `ResetPercent` <a name="ResetPercent" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.resetPercent"></a>

```csharp
private void ResetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixedInput">FixedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percentInput">PercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed">Fixed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percent">Percent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSize">ComputeInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FixedInput`<sup>Optional</sup> <a name="FixedInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixedInput"></a>

```csharp
public double FixedInput { get; }
```

- *Type:* double

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percentInput"></a>

```csharp
public double PercentInput { get; }
```

- *Type:* double

---

##### `Fixed`<sup>Required</sup> <a name="Fixed" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed"></a>

```csharp
public double Fixed { get; }
```

- *Type:* double

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percent"></a>

```csharp
public double Percent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue"></a>

```csharp
public ComputeInstanceGroupManagerVersionTargetSize InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupManager.ComputeInstanceGroupManagerVersionTargetSize">ComputeInstanceGroupManagerVersionTargetSize</a>

---



