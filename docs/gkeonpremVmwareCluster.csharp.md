# `gkeonpremVmwareCluster` Submodule <a name="`gkeonpremVmwareCluster` Submodule" id="@cdktf/provider-google.gkeonpremVmwareCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeonpremVmwareCluster <a name="GkeonpremVmwareCluster" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster google_gkeonprem_vmware_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareCluster(Construct Scope, string Id, GkeonpremVmwareClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig">GkeonpremVmwareClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig">GkeonpremVmwareClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putAntiAffinityGroups">PutAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putAuthorization">PutAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putAutoRepairConfig">PutAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putControlPlaneNode">PutControlPlaneNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putDataplaneV2">PutDataplaneV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putLoadBalancer">PutLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putUpgradePolicy">PutUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putVcenter">PutVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetAntiAffinityGroups">ResetAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetAutoRepairConfig">ResetAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetDataplaneV2">ResetDataplaneV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetDisableBundledIngress">ResetDisableBundledIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetEnableAdvancedCluster">ResetEnableAdvancedCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetEnableControlPlaneV2">ResetEnableControlPlaneV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetLoadBalancer">ResetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetStorage">ResetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetUpgradePolicy">ResetUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetVcenter">ResetVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetVmTrackingEnabled">ResetVmTrackingEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAntiAffinityGroups` <a name="PutAntiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putAntiAffinityGroups"></a>

```csharp
private void PutAntiAffinityGroups(GkeonpremVmwareClusterAntiAffinityGroups Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putAntiAffinityGroups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups">GkeonpremVmwareClusterAntiAffinityGroups</a>

---

##### `PutAuthorization` <a name="PutAuthorization" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putAuthorization"></a>

```csharp
private void PutAuthorization(GkeonpremVmwareClusterAuthorization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization">GkeonpremVmwareClusterAuthorization</a>

---

##### `PutAutoRepairConfig` <a name="PutAutoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putAutoRepairConfig"></a>

```csharp
private void PutAutoRepairConfig(GkeonpremVmwareClusterAutoRepairConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putAutoRepairConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig">GkeonpremVmwareClusterAutoRepairConfig</a>

---

##### `PutControlPlaneNode` <a name="PutControlPlaneNode" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putControlPlaneNode"></a>

```csharp
private void PutControlPlaneNode(GkeonpremVmwareClusterControlPlaneNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putControlPlaneNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode">GkeonpremVmwareClusterControlPlaneNode</a>

---

##### `PutDataplaneV2` <a name="PutDataplaneV2" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putDataplaneV2"></a>

```csharp
private void PutDataplaneV2(GkeonpremVmwareClusterDataplaneV2 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putDataplaneV2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2">GkeonpremVmwareClusterDataplaneV2</a>

---

##### `PutLoadBalancer` <a name="PutLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putLoadBalancer"></a>

```csharp
private void PutLoadBalancer(GkeonpremVmwareClusterLoadBalancer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putLoadBalancer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer">GkeonpremVmwareClusterLoadBalancer</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putNetworkConfig"></a>

```csharp
private void PutNetworkConfig(GkeonpremVmwareClusterNetworkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig">GkeonpremVmwareClusterNetworkConfig</a>

---

##### `PutStorage` <a name="PutStorage" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putStorage"></a>

```csharp
private void PutStorage(GkeonpremVmwareClusterStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage">GkeonpremVmwareClusterStorage</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(GkeonpremVmwareClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts">GkeonpremVmwareClusterTimeouts</a>

---

##### `PutUpgradePolicy` <a name="PutUpgradePolicy" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putUpgradePolicy"></a>

```csharp
private void PutUpgradePolicy(GkeonpremVmwareClusterUpgradePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putUpgradePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy">GkeonpremVmwareClusterUpgradePolicy</a>

---

##### `PutVcenter` <a name="PutVcenter" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putVcenter"></a>

```csharp
private void PutVcenter(GkeonpremVmwareClusterVcenter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putVcenter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter">GkeonpremVmwareClusterVcenter</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetAntiAffinityGroups` <a name="ResetAntiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetAntiAffinityGroups"></a>

```csharp
private void ResetAntiAffinityGroups()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetAutoRepairConfig` <a name="ResetAutoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetAutoRepairConfig"></a>

```csharp
private void ResetAutoRepairConfig()
```

##### `ResetDataplaneV2` <a name="ResetDataplaneV2" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetDataplaneV2"></a>

```csharp
private void ResetDataplaneV2()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableBundledIngress` <a name="ResetDisableBundledIngress" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetDisableBundledIngress"></a>

```csharp
private void ResetDisableBundledIngress()
```

##### `ResetEnableAdvancedCluster` <a name="ResetEnableAdvancedCluster" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetEnableAdvancedCluster"></a>

```csharp
private void ResetEnableAdvancedCluster()
```

##### `ResetEnableControlPlaneV2` <a name="ResetEnableControlPlaneV2" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetEnableControlPlaneV2"></a>

```csharp
private void ResetEnableControlPlaneV2()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLoadBalancer` <a name="ResetLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetLoadBalancer"></a>

```csharp
private void ResetLoadBalancer()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetNetworkConfig"></a>

```csharp
private void ResetNetworkConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetStorage"></a>

```csharp
private void ResetStorage()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUpgradePolicy` <a name="ResetUpgradePolicy" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetUpgradePolicy"></a>

```csharp
private void ResetUpgradePolicy()
```

##### `ResetVcenter` <a name="ResetVcenter" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetVcenter"></a>

```csharp
private void ResetVcenter()
```

##### `ResetVmTrackingEnabled` <a name="ResetVmTrackingEnabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetVmTrackingEnabled"></a>

```csharp
private void ResetVmTrackingEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GkeonpremVmwareCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GkeonpremVmwareCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GkeonpremVmwareCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GkeonpremVmwareCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GkeonpremVmwareCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GkeonpremVmwareCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GkeonpremVmwareCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GkeonpremVmwareCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GkeonpremVmwareCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.antiAffinityGroups">AntiAffinityGroups</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference">GkeonpremVmwareClusterAntiAffinityGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference">GkeonpremVmwareClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.autoRepairConfig">AutoRepairConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference">GkeonpremVmwareClusterAutoRepairConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.controlPlaneNode">ControlPlaneNode</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference">GkeonpremVmwareClusterControlPlaneNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.dataplaneV2">DataplaneV2</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference">GkeonpremVmwareClusterDataplaneV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList">GkeonpremVmwareClusterFleetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference">GkeonpremVmwareClusterLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.localName">LocalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference">GkeonpremVmwareClusterNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList">GkeonpremVmwareClusterStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference">GkeonpremVmwareClusterStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference">GkeonpremVmwareClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.upgradePolicy">UpgradePolicy</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference">GkeonpremVmwareClusterUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.validationCheck">ValidationCheck</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList">GkeonpremVmwareClusterValidationCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.vcenter">Vcenter</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference">GkeonpremVmwareClusterVcenterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.adminClusterMembershipInput">AdminClusterMembershipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.antiAffinityGroupsInput">AntiAffinityGroupsInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups">GkeonpremVmwareClusterAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.authorizationInput">AuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization">GkeonpremVmwareClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.autoRepairConfigInput">AutoRepairConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig">GkeonpremVmwareClusterAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.controlPlaneNodeInput">ControlPlaneNodeInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode">GkeonpremVmwareClusterControlPlaneNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.dataplaneV2Input">DataplaneV2Input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2">GkeonpremVmwareClusterDataplaneV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.disableBundledIngressInput">DisableBundledIngressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.enableAdvancedClusterInput">EnableAdvancedClusterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.enableControlPlaneV2Input">EnableControlPlaneV2Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.loadBalancerInput">LoadBalancerInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer">GkeonpremVmwareClusterLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig">GkeonpremVmwareClusterNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.onPremVersionInput">OnPremVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.storageInput">StorageInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage">GkeonpremVmwareClusterStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.upgradePolicyInput">UpgradePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy">GkeonpremVmwareClusterUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.vcenterInput">VcenterInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter">GkeonpremVmwareClusterVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.vmTrackingEnabledInput">VmTrackingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.adminClusterMembership">AdminClusterMembership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.disableBundledIngress">DisableBundledIngress</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.enableAdvancedCluster">EnableAdvancedCluster</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.enableControlPlaneV2">EnableControlPlaneV2</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.onPremVersion">OnPremVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.vmTrackingEnabled">VmTrackingEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AntiAffinityGroups`<sup>Required</sup> <a name="AntiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.antiAffinityGroups"></a>

```csharp
public GkeonpremVmwareClusterAntiAffinityGroupsOutputReference AntiAffinityGroups { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference">GkeonpremVmwareClusterAntiAffinityGroupsOutputReference</a>

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.authorization"></a>

```csharp
public GkeonpremVmwareClusterAuthorizationOutputReference Authorization { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference">GkeonpremVmwareClusterAuthorizationOutputReference</a>

---

##### `AutoRepairConfig`<sup>Required</sup> <a name="AutoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.autoRepairConfig"></a>

```csharp
public GkeonpremVmwareClusterAutoRepairConfigOutputReference AutoRepairConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference">GkeonpremVmwareClusterAutoRepairConfigOutputReference</a>

---

##### `ControlPlaneNode`<sup>Required</sup> <a name="ControlPlaneNode" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.controlPlaneNode"></a>

```csharp
public GkeonpremVmwareClusterControlPlaneNodeOutputReference ControlPlaneNode { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference">GkeonpremVmwareClusterControlPlaneNodeOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DataplaneV2`<sup>Required</sup> <a name="DataplaneV2" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.dataplaneV2"></a>

```csharp
public GkeonpremVmwareClusterDataplaneV2OutputReference DataplaneV2 { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference">GkeonpremVmwareClusterDataplaneV2OutputReference</a>

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.fleet"></a>

```csharp
public GkeonpremVmwareClusterFleetList Fleet { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList">GkeonpremVmwareClusterFleetList</a>

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.loadBalancer"></a>

```csharp
public GkeonpremVmwareClusterLoadBalancerOutputReference LoadBalancer { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference">GkeonpremVmwareClusterLoadBalancerOutputReference</a>

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.localName"></a>

```csharp
public string LocalName { get; }
```

- *Type:* string

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.networkConfig"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigOutputReference NetworkConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference">GkeonpremVmwareClusterNetworkConfigOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.status"></a>

```csharp
public GkeonpremVmwareClusterStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList">GkeonpremVmwareClusterStatusList</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.storage"></a>

```csharp
public GkeonpremVmwareClusterStorageOutputReference Storage { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference">GkeonpremVmwareClusterStorageOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.timeouts"></a>

```csharp
public GkeonpremVmwareClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference">GkeonpremVmwareClusterTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `UpgradePolicy`<sup>Required</sup> <a name="UpgradePolicy" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.upgradePolicy"></a>

```csharp
public GkeonpremVmwareClusterUpgradePolicyOutputReference UpgradePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference">GkeonpremVmwareClusterUpgradePolicyOutputReference</a>

---

##### `ValidationCheck`<sup>Required</sup> <a name="ValidationCheck" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.validationCheck"></a>

```csharp
public GkeonpremVmwareClusterValidationCheckList ValidationCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList">GkeonpremVmwareClusterValidationCheckList</a>

---

##### `Vcenter`<sup>Required</sup> <a name="Vcenter" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.vcenter"></a>

```csharp
public GkeonpremVmwareClusterVcenterOutputReference Vcenter { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference">GkeonpremVmwareClusterVcenterOutputReference</a>

---

##### `AdminClusterMembershipInput`<sup>Optional</sup> <a name="AdminClusterMembershipInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.adminClusterMembershipInput"></a>

```csharp
public string AdminClusterMembershipInput { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AntiAffinityGroupsInput`<sup>Optional</sup> <a name="AntiAffinityGroupsInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.antiAffinityGroupsInput"></a>

```csharp
public GkeonpremVmwareClusterAntiAffinityGroups AntiAffinityGroupsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups">GkeonpremVmwareClusterAntiAffinityGroups</a>

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.authorizationInput"></a>

```csharp
public GkeonpremVmwareClusterAuthorization AuthorizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization">GkeonpremVmwareClusterAuthorization</a>

---

##### `AutoRepairConfigInput`<sup>Optional</sup> <a name="AutoRepairConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.autoRepairConfigInput"></a>

```csharp
public GkeonpremVmwareClusterAutoRepairConfig AutoRepairConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig">GkeonpremVmwareClusterAutoRepairConfig</a>

---

##### `ControlPlaneNodeInput`<sup>Optional</sup> <a name="ControlPlaneNodeInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.controlPlaneNodeInput"></a>

```csharp
public GkeonpremVmwareClusterControlPlaneNode ControlPlaneNodeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode">GkeonpremVmwareClusterControlPlaneNode</a>

---

##### `DataplaneV2Input`<sup>Optional</sup> <a name="DataplaneV2Input" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.dataplaneV2Input"></a>

```csharp
public GkeonpremVmwareClusterDataplaneV2 DataplaneV2Input { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2">GkeonpremVmwareClusterDataplaneV2</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableBundledIngressInput`<sup>Optional</sup> <a name="DisableBundledIngressInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.disableBundledIngressInput"></a>

```csharp
public object DisableBundledIngressInput { get; }
```

- *Type:* object

---

##### `EnableAdvancedClusterInput`<sup>Optional</sup> <a name="EnableAdvancedClusterInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.enableAdvancedClusterInput"></a>

```csharp
public object EnableAdvancedClusterInput { get; }
```

- *Type:* object

---

##### `EnableControlPlaneV2Input`<sup>Optional</sup> <a name="EnableControlPlaneV2Input" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.enableControlPlaneV2Input"></a>

```csharp
public object EnableControlPlaneV2Input { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.loadBalancerInput"></a>

```csharp
public GkeonpremVmwareClusterLoadBalancer LoadBalancerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer">GkeonpremVmwareClusterLoadBalancer</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.networkConfigInput"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfig NetworkConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig">GkeonpremVmwareClusterNetworkConfig</a>

---

##### `OnPremVersionInput`<sup>Optional</sup> <a name="OnPremVersionInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.onPremVersionInput"></a>

```csharp
public string OnPremVersionInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.storageInput"></a>

```csharp
public GkeonpremVmwareClusterStorage StorageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage">GkeonpremVmwareClusterStorage</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UpgradePolicyInput`<sup>Optional</sup> <a name="UpgradePolicyInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.upgradePolicyInput"></a>

```csharp
public GkeonpremVmwareClusterUpgradePolicy UpgradePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy">GkeonpremVmwareClusterUpgradePolicy</a>

---

##### `VcenterInput`<sup>Optional</sup> <a name="VcenterInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.vcenterInput"></a>

```csharp
public GkeonpremVmwareClusterVcenter VcenterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter">GkeonpremVmwareClusterVcenter</a>

---

##### `VmTrackingEnabledInput`<sup>Optional</sup> <a name="VmTrackingEnabledInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.vmTrackingEnabledInput"></a>

```csharp
public object VmTrackingEnabledInput { get; }
```

- *Type:* object

---

##### `AdminClusterMembership`<sup>Required</sup> <a name="AdminClusterMembership" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.adminClusterMembership"></a>

```csharp
public string AdminClusterMembership { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableBundledIngress`<sup>Required</sup> <a name="DisableBundledIngress" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.disableBundledIngress"></a>

```csharp
public object DisableBundledIngress { get; }
```

- *Type:* object

---

##### `EnableAdvancedCluster`<sup>Required</sup> <a name="EnableAdvancedCluster" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.enableAdvancedCluster"></a>

```csharp
public object EnableAdvancedCluster { get; }
```

- *Type:* object

---

##### `EnableControlPlaneV2`<sup>Required</sup> <a name="EnableControlPlaneV2" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.enableControlPlaneV2"></a>

```csharp
public object EnableControlPlaneV2 { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OnPremVersion`<sup>Required</sup> <a name="OnPremVersion" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.onPremVersion"></a>

```csharp
public string OnPremVersion { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `VmTrackingEnabled`<sup>Required</sup> <a name="VmTrackingEnabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.vmTrackingEnabled"></a>

```csharp
public object VmTrackingEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeonpremVmwareClusterAntiAffinityGroups <a name="GkeonpremVmwareClusterAntiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterAntiAffinityGroups {
    object AagConfigDisabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups.property.aagConfigDisabled">AagConfigDisabled</a></code> | <code>object</code> | Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default. |

---

##### `AagConfigDisabled`<sup>Required</sup> <a name="AagConfigDisabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups.property.aagConfigDisabled"></a>

```csharp
public object AagConfigDisabled { get; set; }
```

- *Type:* object

Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#aag_config_disabled GkeonpremVmwareCluster#aag_config_disabled}

---

### GkeonpremVmwareClusterAuthorization <a name="GkeonpremVmwareClusterAuthorization" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterAuthorization {
    object AdminUsers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization.property.adminUsers">AdminUsers</a></code> | <code>object</code> | admin_users block. |

---

##### `AdminUsers`<sup>Optional</sup> <a name="AdminUsers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization.property.adminUsers"></a>

```csharp
public object AdminUsers { get; set; }
```

- *Type:* object

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#admin_users GkeonpremVmwareCluster#admin_users}

---

### GkeonpremVmwareClusterAuthorizationAdminUsers <a name="GkeonpremVmwareClusterAuthorizationAdminUsers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterAuthorizationAdminUsers {
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsers.property.username">Username</a></code> | <code>string</code> | The name of the user, e.g. 'my-gcp-id@gmail.com'. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsers.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The name of the user, e.g. 'my-gcp-id@gmail.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#username GkeonpremVmwareCluster#username}

---

### GkeonpremVmwareClusterAutoRepairConfig <a name="GkeonpremVmwareClusterAutoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterAutoRepairConfig {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether auto repair is enabled. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether auto repair is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#enabled GkeonpremVmwareCluster#enabled}

---

### GkeonpremVmwareClusterConfig <a name="GkeonpremVmwareClusterConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AdminClusterMembership,
    GkeonpremVmwareClusterControlPlaneNode ControlPlaneNode,
    string Location,
    string Name,
    string OnPremVersion,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    GkeonpremVmwareClusterAntiAffinityGroups AntiAffinityGroups = null,
    GkeonpremVmwareClusterAuthorization Authorization = null,
    GkeonpremVmwareClusterAutoRepairConfig AutoRepairConfig = null,
    GkeonpremVmwareClusterDataplaneV2 DataplaneV2 = null,
    string Description = null,
    object DisableBundledIngress = null,
    object EnableAdvancedCluster = null,
    object EnableControlPlaneV2 = null,
    string Id = null,
    GkeonpremVmwareClusterLoadBalancer LoadBalancer = null,
    GkeonpremVmwareClusterNetworkConfig NetworkConfig = null,
    string Project = null,
    GkeonpremVmwareClusterStorage Storage = null,
    GkeonpremVmwareClusterTimeouts Timeouts = null,
    GkeonpremVmwareClusterUpgradePolicy UpgradePolicy = null,
    GkeonpremVmwareClusterVcenter Vcenter = null,
    object VmTrackingEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.adminClusterMembership">AdminClusterMembership</a></code> | <code>string</code> | The admin cluster this VMware User Cluster belongs to. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.controlPlaneNode">ControlPlaneNode</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode">GkeonpremVmwareClusterControlPlaneNode</a></code> | control_plane_node block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.name">Name</a></code> | <code>string</code> | The VMware cluster name. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.onPremVersion">OnPremVersion</a></code> | <code>string</code> | The Anthos clusters on the VMware version for your user cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Annotations on the VMware User Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.antiAffinityGroups">AntiAffinityGroups</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups">GkeonpremVmwareClusterAntiAffinityGroups</a></code> | anti_affinity_groups block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization">GkeonpremVmwareClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.autoRepairConfig">AutoRepairConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig">GkeonpremVmwareClusterAutoRepairConfig</a></code> | auto_repair_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.dataplaneV2">DataplaneV2</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2">GkeonpremVmwareClusterDataplaneV2</a></code> | dataplane_v2 block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.description">Description</a></code> | <code>string</code> | A human readable description of this VMware User Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.disableBundledIngress">DisableBundledIngress</a></code> | <code>object</code> | Disable bundled ingress. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.enableAdvancedCluster">EnableAdvancedCluster</a></code> | <code>object</code> | Enable advanced cluster. Default to false. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.enableControlPlaneV2">EnableControlPlaneV2</a></code> | <code>object</code> | Enable control plane V2. Default to false. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#id GkeonpremVmwareCluster#id}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer">GkeonpremVmwareClusterLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig">GkeonpremVmwareClusterNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#project GkeonpremVmwareCluster#project}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage">GkeonpremVmwareClusterStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts">GkeonpremVmwareClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.upgradePolicy">UpgradePolicy</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy">GkeonpremVmwareClusterUpgradePolicy</a></code> | upgrade_policy block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.vcenter">Vcenter</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter">GkeonpremVmwareClusterVcenter</a></code> | vcenter block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.vmTrackingEnabled">VmTrackingEnabled</a></code> | <code>object</code> | Enable VM tracking. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AdminClusterMembership`<sup>Required</sup> <a name="AdminClusterMembership" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.adminClusterMembership"></a>

```csharp
public string AdminClusterMembership { get; set; }
```

- *Type:* string

The admin cluster this VMware User Cluster belongs to.

This is the full resource name of the admin cluster's hub membership.
In the future, references to other resource types might be allowed if
admin clusters are modeled as their own resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#admin_cluster_membership GkeonpremVmwareCluster#admin_cluster_membership}

---

##### `ControlPlaneNode`<sup>Required</sup> <a name="ControlPlaneNode" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.controlPlaneNode"></a>

```csharp
public GkeonpremVmwareClusterControlPlaneNode ControlPlaneNode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode">GkeonpremVmwareClusterControlPlaneNode</a>

control_plane_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#control_plane_node GkeonpremVmwareCluster#control_plane_node}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#location GkeonpremVmwareCluster#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The VMware cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#name GkeonpremVmwareCluster#name}

---

##### `OnPremVersion`<sup>Required</sup> <a name="OnPremVersion" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.onPremVersion"></a>

```csharp
public string OnPremVersion { get; set; }
```

- *Type:* string

The Anthos clusters on the VMware version for your user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#on_prem_version GkeonpremVmwareCluster#on_prem_version}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Annotations on the VMware User Cluster.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#annotations GkeonpremVmwareCluster#annotations}

---

##### `AntiAffinityGroups`<sup>Optional</sup> <a name="AntiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.antiAffinityGroups"></a>

```csharp
public GkeonpremVmwareClusterAntiAffinityGroups AntiAffinityGroups { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups">GkeonpremVmwareClusterAntiAffinityGroups</a>

anti_affinity_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#anti_affinity_groups GkeonpremVmwareCluster#anti_affinity_groups}

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.authorization"></a>

```csharp
public GkeonpremVmwareClusterAuthorization Authorization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization">GkeonpremVmwareClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#authorization GkeonpremVmwareCluster#authorization}

---

##### `AutoRepairConfig`<sup>Optional</sup> <a name="AutoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.autoRepairConfig"></a>

```csharp
public GkeonpremVmwareClusterAutoRepairConfig AutoRepairConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig">GkeonpremVmwareClusterAutoRepairConfig</a>

auto_repair_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#auto_repair_config GkeonpremVmwareCluster#auto_repair_config}

---

##### `DataplaneV2`<sup>Optional</sup> <a name="DataplaneV2" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.dataplaneV2"></a>

```csharp
public GkeonpremVmwareClusterDataplaneV2 DataplaneV2 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2">GkeonpremVmwareClusterDataplaneV2</a>

dataplane_v2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#dataplane_v2 GkeonpremVmwareCluster#dataplane_v2}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human readable description of this VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#description GkeonpremVmwareCluster#description}

---

##### `DisableBundledIngress`<sup>Optional</sup> <a name="DisableBundledIngress" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.disableBundledIngress"></a>

```csharp
public object DisableBundledIngress { get; set; }
```

- *Type:* object

Disable bundled ingress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#disable_bundled_ingress GkeonpremVmwareCluster#disable_bundled_ingress}

---

##### `EnableAdvancedCluster`<sup>Optional</sup> <a name="EnableAdvancedCluster" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.enableAdvancedCluster"></a>

```csharp
public object EnableAdvancedCluster { get; set; }
```

- *Type:* object

Enable advanced cluster. Default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#enable_advanced_cluster GkeonpremVmwareCluster#enable_advanced_cluster}

---

##### `EnableControlPlaneV2`<sup>Optional</sup> <a name="EnableControlPlaneV2" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.enableControlPlaneV2"></a>

```csharp
public object EnableControlPlaneV2 { get; set; }
```

- *Type:* object

Enable control plane V2. Default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#enable_control_plane_v2 GkeonpremVmwareCluster#enable_control_plane_v2}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#id GkeonpremVmwareCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoadBalancer`<sup>Optional</sup> <a name="LoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.loadBalancer"></a>

```csharp
public GkeonpremVmwareClusterLoadBalancer LoadBalancer { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer">GkeonpremVmwareClusterLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#load_balancer GkeonpremVmwareCluster#load_balancer}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.networkConfig"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfig NetworkConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig">GkeonpremVmwareClusterNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#network_config GkeonpremVmwareCluster#network_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#project GkeonpremVmwareCluster#project}.

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.storage"></a>

```csharp
public GkeonpremVmwareClusterStorage Storage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage">GkeonpremVmwareClusterStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#storage GkeonpremVmwareCluster#storage}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.timeouts"></a>

```csharp
public GkeonpremVmwareClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts">GkeonpremVmwareClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#timeouts GkeonpremVmwareCluster#timeouts}

---

##### `UpgradePolicy`<sup>Optional</sup> <a name="UpgradePolicy" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.upgradePolicy"></a>

```csharp
public GkeonpremVmwareClusterUpgradePolicy UpgradePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy">GkeonpremVmwareClusterUpgradePolicy</a>

upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#upgrade_policy GkeonpremVmwareCluster#upgrade_policy}

---

##### `Vcenter`<sup>Optional</sup> <a name="Vcenter" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.vcenter"></a>

```csharp
public GkeonpremVmwareClusterVcenter Vcenter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter">GkeonpremVmwareClusterVcenter</a>

vcenter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#vcenter GkeonpremVmwareCluster#vcenter}

---

##### `VmTrackingEnabled`<sup>Optional</sup> <a name="VmTrackingEnabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.vmTrackingEnabled"></a>

```csharp
public object VmTrackingEnabled { get; set; }
```

- *Type:* object

Enable VM tracking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#vm_tracking_enabled GkeonpremVmwareCluster#vm_tracking_enabled}

---

### GkeonpremVmwareClusterControlPlaneNode <a name="GkeonpremVmwareClusterControlPlaneNode" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterControlPlaneNode {
    GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig AutoResizeConfig = null,
    double Cpus = null,
    double Memory = null,
    double Replicas = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode.property.autoResizeConfig">AutoResizeConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a></code> | auto_resize_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode.property.cpus">Cpus</a></code> | <code>double</code> | The number of CPUs for each admin cluster node that serve as control planes for this VMware User Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode.property.memory">Memory</a></code> | <code>double</code> | The megabytes of memory for each admin cluster node that serves as a control plane for this VMware User Cluster (default: 8192 MB memory). |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode.property.replicas">Replicas</a></code> | <code>double</code> | The number of control plane nodes for this VMware User Cluster. (default: 1 replica). |

---

##### `AutoResizeConfig`<sup>Optional</sup> <a name="AutoResizeConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode.property.autoResizeConfig"></a>

```csharp
public GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig AutoResizeConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a>

auto_resize_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#auto_resize_config GkeonpremVmwareCluster#auto_resize_config}

---

##### `Cpus`<sup>Optional</sup> <a name="Cpus" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode.property.cpus"></a>

```csharp
public double Cpus { get; set; }
```

- *Type:* double

The number of CPUs for each admin cluster node that serve as control planes for this VMware User Cluster.

(default: 4 CPUs)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#cpus GkeonpremVmwareCluster#cpus}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode.property.memory"></a>

```csharp
public double Memory { get; set; }
```

- *Type:* double

The megabytes of memory for each admin cluster node that serves as a control plane for this VMware User Cluster (default: 8192 MB memory).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#memory GkeonpremVmwareCluster#memory}

---

##### `Replicas`<sup>Optional</sup> <a name="Replicas" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode.property.replicas"></a>

```csharp
public double Replicas { get; set; }
```

- *Type:* double

The number of control plane nodes for this VMware User Cluster. (default: 1 replica).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#replicas GkeonpremVmwareCluster#replicas}

---

### GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig <a name="GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether to enable control plane node auto resizing. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether to enable control plane node auto resizing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#enabled GkeonpremVmwareCluster#enabled}

---

### GkeonpremVmwareClusterControlPlaneNodeVsphereConfig <a name="GkeonpremVmwareClusterControlPlaneNodeVsphereConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterControlPlaneNodeVsphereConfig {

};
```


### GkeonpremVmwareClusterDataplaneV2 <a name="GkeonpremVmwareClusterDataplaneV2" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterDataplaneV2 {
    object AdvancedNetworking = null,
    object DataplaneV2Enabled = null,
    object WindowsDataplaneV2Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2.property.advancedNetworking">AdvancedNetworking</a></code> | <code>object</code> | Enable advanced networking which requires dataplane_v2_enabled to be set true. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2.property.dataplaneV2Enabled">DataplaneV2Enabled</a></code> | <code>object</code> | Enables Dataplane V2. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2.property.windowsDataplaneV2Enabled">WindowsDataplaneV2Enabled</a></code> | <code>object</code> | Enable Dataplane V2 for clusters with Windows nodes. |

---

##### `AdvancedNetworking`<sup>Optional</sup> <a name="AdvancedNetworking" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2.property.advancedNetworking"></a>

```csharp
public object AdvancedNetworking { get; set; }
```

- *Type:* object

Enable advanced networking which requires dataplane_v2_enabled to be set true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#advanced_networking GkeonpremVmwareCluster#advanced_networking}

---

##### `DataplaneV2Enabled`<sup>Optional</sup> <a name="DataplaneV2Enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2.property.dataplaneV2Enabled"></a>

```csharp
public object DataplaneV2Enabled { get; set; }
```

- *Type:* object

Enables Dataplane V2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#dataplane_v2_enabled GkeonpremVmwareCluster#dataplane_v2_enabled}

---

##### `WindowsDataplaneV2Enabled`<sup>Optional</sup> <a name="WindowsDataplaneV2Enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2.property.windowsDataplaneV2Enabled"></a>

```csharp
public object WindowsDataplaneV2Enabled { get; set; }
```

- *Type:* object

Enable Dataplane V2 for clusters with Windows nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#windows_dataplane_v2_enabled GkeonpremVmwareCluster#windows_dataplane_v2_enabled}

---

### GkeonpremVmwareClusterFleet <a name="GkeonpremVmwareClusterFleet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterFleet {

};
```


### GkeonpremVmwareClusterLoadBalancer <a name="GkeonpremVmwareClusterLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterLoadBalancer {
    GkeonpremVmwareClusterLoadBalancerF5Config F5Config = null,
    GkeonpremVmwareClusterLoadBalancerManualLbConfig ManualLbConfig = null,
    GkeonpremVmwareClusterLoadBalancerMetalLbConfig MetalLbConfig = null,
    GkeonpremVmwareClusterLoadBalancerVipConfig VipConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer.property.f5Config">F5Config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config">GkeonpremVmwareClusterLoadBalancerF5Config</a></code> | f5_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer.property.manualLbConfig">ManualLbConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig">GkeonpremVmwareClusterLoadBalancerManualLbConfig</a></code> | manual_lb_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer.property.metalLbConfig">MetalLbConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig">GkeonpremVmwareClusterLoadBalancerMetalLbConfig</a></code> | metal_lb_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer.property.vipConfig">VipConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig">GkeonpremVmwareClusterLoadBalancerVipConfig</a></code> | vip_config block. |

---

##### `F5Config`<sup>Optional</sup> <a name="F5Config" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer.property.f5Config"></a>

```csharp
public GkeonpremVmwareClusterLoadBalancerF5Config F5Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config">GkeonpremVmwareClusterLoadBalancerF5Config</a>

f5_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#f5_config GkeonpremVmwareCluster#f5_config}

---

##### `ManualLbConfig`<sup>Optional</sup> <a name="ManualLbConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer.property.manualLbConfig"></a>

```csharp
public GkeonpremVmwareClusterLoadBalancerManualLbConfig ManualLbConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig">GkeonpremVmwareClusterLoadBalancerManualLbConfig</a>

manual_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#manual_lb_config GkeonpremVmwareCluster#manual_lb_config}

---

##### `MetalLbConfig`<sup>Optional</sup> <a name="MetalLbConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer.property.metalLbConfig"></a>

```csharp
public GkeonpremVmwareClusterLoadBalancerMetalLbConfig MetalLbConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig">GkeonpremVmwareClusterLoadBalancerMetalLbConfig</a>

metal_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#metal_lb_config GkeonpremVmwareCluster#metal_lb_config}

---

##### `VipConfig`<sup>Optional</sup> <a name="VipConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer.property.vipConfig"></a>

```csharp
public GkeonpremVmwareClusterLoadBalancerVipConfig VipConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig">GkeonpremVmwareClusterLoadBalancerVipConfig</a>

vip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#vip_config GkeonpremVmwareCluster#vip_config}

---

### GkeonpremVmwareClusterLoadBalancerF5Config <a name="GkeonpremVmwareClusterLoadBalancerF5Config" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterLoadBalancerF5Config {
    string Address = null,
    string Partition = null,
    string SnatPool = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config.property.address">Address</a></code> | <code>string</code> | The load balancer's IP address. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config.property.partition">Partition</a></code> | <code>string</code> | he preexisting partition to be used by the load balancer. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config.property.snatPool">SnatPool</a></code> | <code>string</code> | The pool name. Only necessary, if using SNAT. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

The load balancer's IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#address GkeonpremVmwareCluster#address}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config.property.partition"></a>

```csharp
public string Partition { get; set; }
```

- *Type:* string

he preexisting partition to be used by the load balancer.

T
his partition is usually created for the admin cluster for example:
'my-f5-admin-partition'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#partition GkeonpremVmwareCluster#partition}

---

##### `SnatPool`<sup>Optional</sup> <a name="SnatPool" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config.property.snatPool"></a>

```csharp
public string SnatPool { get; set; }
```

- *Type:* string

The pool name. Only necessary, if using SNAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#snat_pool GkeonpremVmwareCluster#snat_pool}

---

### GkeonpremVmwareClusterLoadBalancerManualLbConfig <a name="GkeonpremVmwareClusterLoadBalancerManualLbConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterLoadBalancerManualLbConfig {
    double ControlPlaneNodePort = null,
    double IngressHttpNodePort = null,
    double IngressHttpsNodePort = null,
    double KonnectivityServerNodePort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig.property.controlPlaneNodePort">ControlPlaneNodePort</a></code> | <code>double</code> | NodePort for control plane service. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig.property.ingressHttpNodePort">IngressHttpNodePort</a></code> | <code>double</code> | NodePort for ingress service's http. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig.property.ingressHttpsNodePort">IngressHttpsNodePort</a></code> | <code>double</code> | NodePort for ingress service's https. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig.property.konnectivityServerNodePort">KonnectivityServerNodePort</a></code> | <code>double</code> | NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564). |

---

##### `ControlPlaneNodePort`<sup>Optional</sup> <a name="ControlPlaneNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig.property.controlPlaneNodePort"></a>

```csharp
public double ControlPlaneNodePort { get; set; }
```

- *Type:* double

NodePort for control plane service.

The Kubernetes API server in the admin
cluster is implemented as a Service of type NodePort (ex. 30968).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#control_plane_node_port GkeonpremVmwareCluster#control_plane_node_port}

---

##### `IngressHttpNodePort`<sup>Optional</sup> <a name="IngressHttpNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig.property.ingressHttpNodePort"></a>

```csharp
public double IngressHttpNodePort { get; set; }
```

- *Type:* double

NodePort for ingress service's http.

The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 32527).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#ingress_http_node_port GkeonpremVmwareCluster#ingress_http_node_port}

---

##### `IngressHttpsNodePort`<sup>Optional</sup> <a name="IngressHttpsNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig.property.ingressHttpsNodePort"></a>

```csharp
public double IngressHttpsNodePort { get; set; }
```

- *Type:* double

NodePort for ingress service's https.

The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 30139).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#ingress_https_node_port GkeonpremVmwareCluster#ingress_https_node_port}

---

##### `KonnectivityServerNodePort`<sup>Optional</sup> <a name="KonnectivityServerNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig.property.konnectivityServerNodePort"></a>

```csharp
public double KonnectivityServerNodePort { get; set; }
```

- *Type:* double

NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#konnectivity_server_node_port GkeonpremVmwareCluster#konnectivity_server_node_port}

---

### GkeonpremVmwareClusterLoadBalancerMetalLbConfig <a name="GkeonpremVmwareClusterLoadBalancerMetalLbConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterLoadBalancerMetalLbConfig {
    object AddressPools
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig.property.addressPools">AddressPools</a></code> | <code>object</code> | address_pools block. |

---

##### `AddressPools`<sup>Required</sup> <a name="AddressPools" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig.property.addressPools"></a>

```csharp
public object AddressPools { get; set; }
```

- *Type:* object

address_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#address_pools GkeonpremVmwareCluster#address_pools}

---

### GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools <a name="GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools {
    string[] Addresses,
    string Pool,
    object AvoidBuggyIps = null,
    object ManualAssign = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.addresses">Addresses</a></code> | <code>string[]</code> | The addresses that are part of this pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.pool">Pool</a></code> | <code>string</code> | The name of the address pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.avoidBuggyIps">AvoidBuggyIps</a></code> | <code>object</code> | If true, avoid using IPs ending in .0 or .255. This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.manualAssign">ManualAssign</a></code> | <code>object</code> | If true, prevent IP addresses from being automatically assigned. |

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.addresses"></a>

```csharp
public string[] Addresses { get; set; }
```

- *Type:* string[]

The addresses that are part of this pool.

Each address
must be either in the CIDR form (1.2.3.0/24) or range
form (1.2.3.1-1.2.3.5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#addresses GkeonpremVmwareCluster#addresses}

---

##### `Pool`<sup>Required</sup> <a name="Pool" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.pool"></a>

```csharp
public string Pool { get; set; }
```

- *Type:* string

The name of the address pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#pool GkeonpremVmwareCluster#pool}

---

##### `AvoidBuggyIps`<sup>Optional</sup> <a name="AvoidBuggyIps" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.avoidBuggyIps"></a>

```csharp
public object AvoidBuggyIps { get; set; }
```

- *Type:* object

If true, avoid using IPs ending in .0 or .255. This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#avoid_buggy_ips GkeonpremVmwareCluster#avoid_buggy_ips}

---

##### `ManualAssign`<sup>Optional</sup> <a name="ManualAssign" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.manualAssign"></a>

```csharp
public object ManualAssign { get; set; }
```

- *Type:* object

If true, prevent IP addresses from being automatically assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#manual_assign GkeonpremVmwareCluster#manual_assign}

---

### GkeonpremVmwareClusterLoadBalancerVipConfig <a name="GkeonpremVmwareClusterLoadBalancerVipConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterLoadBalancerVipConfig {
    string ControlPlaneVip = null,
    string IngressVip = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig.property.controlPlaneVip">ControlPlaneVip</a></code> | <code>string</code> | The VIP which you previously set aside for the Kubernetes API of this cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig.property.ingressVip">IngressVip</a></code> | <code>string</code> | The VIP which you previously set aside for ingress traffic into this cluster. |

---

##### `ControlPlaneVip`<sup>Optional</sup> <a name="ControlPlaneVip" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig.property.controlPlaneVip"></a>

```csharp
public string ControlPlaneVip { get; set; }
```

- *Type:* string

The VIP which you previously set aside for the Kubernetes API of this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#control_plane_vip GkeonpremVmwareCluster#control_plane_vip}

---

##### `IngressVip`<sup>Optional</sup> <a name="IngressVip" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig.property.ingressVip"></a>

```csharp
public string IngressVip { get; set; }
```

- *Type:* string

The VIP which you previously set aside for ingress traffic into this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#ingress_vip GkeonpremVmwareCluster#ingress_vip}

---

### GkeonpremVmwareClusterNetworkConfig <a name="GkeonpremVmwareClusterNetworkConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterNetworkConfig {
    string[] PodAddressCidrBlocks,
    string[] ServiceAddressCidrBlocks,
    GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config ControlPlaneV2Config = null,
    GkeonpremVmwareClusterNetworkConfigDhcpIpConfig DhcpIpConfig = null,
    GkeonpremVmwareClusterNetworkConfigHostConfig HostConfig = null,
    GkeonpremVmwareClusterNetworkConfigStaticIpConfig StaticIpConfig = null,
    string VcenterNetwork = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.podAddressCidrBlocks">PodAddressCidrBlocks</a></code> | <code>string[]</code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.serviceAddressCidrBlocks">ServiceAddressCidrBlocks</a></code> | <code>string[]</code> | All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.controlPlaneV2Config">ControlPlaneV2Config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a></code> | control_plane_v2_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.dhcpIpConfig">DhcpIpConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a></code> | dhcp_ip_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.hostConfig">HostConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig">GkeonpremVmwareClusterNetworkConfigHostConfig</a></code> | host_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.staticIpConfig">StaticIpConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig">GkeonpremVmwareClusterNetworkConfigStaticIpConfig</a></code> | static_ip_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.vcenterNetwork">VcenterNetwork</a></code> | <code>string</code> | vcenter_network specifies vCenter network name. Inherited from the admin cluster. |

---

##### `PodAddressCidrBlocks`<sup>Required</sup> <a name="PodAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.podAddressCidrBlocks"></a>

```csharp
public string[] PodAddressCidrBlocks { get; set; }
```

- *Type:* string[]

All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#pod_address_cidr_blocks GkeonpremVmwareCluster#pod_address_cidr_blocks}

---

##### `ServiceAddressCidrBlocks`<sup>Required</sup> <a name="ServiceAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.serviceAddressCidrBlocks"></a>

```csharp
public string[] ServiceAddressCidrBlocks { get; set; }
```

- *Type:* string[]

All services in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported.. This field
cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#service_address_cidr_blocks GkeonpremVmwareCluster#service_address_cidr_blocks}

---

##### `ControlPlaneV2Config`<sup>Optional</sup> <a name="ControlPlaneV2Config" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.controlPlaneV2Config"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config ControlPlaneV2Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a>

control_plane_v2_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#control_plane_v2_config GkeonpremVmwareCluster#control_plane_v2_config}

---

##### `DhcpIpConfig`<sup>Optional</sup> <a name="DhcpIpConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.dhcpIpConfig"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigDhcpIpConfig DhcpIpConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a>

dhcp_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#dhcp_ip_config GkeonpremVmwareCluster#dhcp_ip_config}

---

##### `HostConfig`<sup>Optional</sup> <a name="HostConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.hostConfig"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigHostConfig HostConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig">GkeonpremVmwareClusterNetworkConfigHostConfig</a>

host_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#host_config GkeonpremVmwareCluster#host_config}

---

##### `StaticIpConfig`<sup>Optional</sup> <a name="StaticIpConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.staticIpConfig"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigStaticIpConfig StaticIpConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig">GkeonpremVmwareClusterNetworkConfigStaticIpConfig</a>

static_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#static_ip_config GkeonpremVmwareCluster#static_ip_config}

---

##### `VcenterNetwork`<sup>Optional</sup> <a name="VcenterNetwork" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.vcenterNetwork"></a>

```csharp
public string VcenterNetwork { get; set; }
```

- *Type:* string

vcenter_network specifies vCenter network name. Inherited from the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#vcenter_network GkeonpremVmwareCluster#vcenter_network}

---

### GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config <a name="GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config {
    GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock ControlPlaneIpBlock = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config.property.controlPlaneIpBlock">ControlPlaneIpBlock</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a></code> | control_plane_ip_block block. |

---

##### `ControlPlaneIpBlock`<sup>Optional</sup> <a name="ControlPlaneIpBlock" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config.property.controlPlaneIpBlock"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock ControlPlaneIpBlock { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a>

control_plane_ip_block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#control_plane_ip_block GkeonpremVmwareCluster#control_plane_ip_block}

---

### GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock <a name="GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock {
    string Gateway = null,
    object Ips = null,
    string Netmask = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.gateway">Gateway</a></code> | <code>string</code> | The network gateway used by the VMware User Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.ips">Ips</a></code> | <code>object</code> | ips block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.netmask">Netmask</a></code> | <code>string</code> | The netmask used by the VMware User Cluster. |

---

##### `Gateway`<sup>Optional</sup> <a name="Gateway" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.gateway"></a>

```csharp
public string Gateway { get; set; }
```

- *Type:* string

The network gateway used by the VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#gateway GkeonpremVmwareCluster#gateway}

---

##### `Ips`<sup>Optional</sup> <a name="Ips" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.ips"></a>

```csharp
public object Ips { get; set; }
```

- *Type:* object

ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#ips GkeonpremVmwareCluster#ips}

---

##### `Netmask`<sup>Optional</sup> <a name="Netmask" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.netmask"></a>

```csharp
public string Netmask { get; set; }
```

- *Type:* string

The netmask used by the VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#netmask GkeonpremVmwareCluster#netmask}

---

### GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps <a name="GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps {
    string Hostname = null,
    string Ip = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.property.hostname">Hostname</a></code> | <code>string</code> | Hostname of the machine. VM's name will be used if this field is empty. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.property.ip">Ip</a></code> | <code>string</code> | IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). |

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Hostname of the machine. VM's name will be used if this field is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#hostname GkeonpremVmwareCluster#hostname}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.property.ip"></a>

```csharp
public string Ip { get; set; }
```

- *Type:* string

IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#ip GkeonpremVmwareCluster#ip}

---

### GkeonpremVmwareClusterNetworkConfigDhcpIpConfig <a name="GkeonpremVmwareClusterNetworkConfigDhcpIpConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterNetworkConfigDhcpIpConfig {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig.property.enabled">Enabled</a></code> | <code>object</code> | enabled is a flag to mark if DHCP IP allocation is used for VMware user clusters. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

enabled is a flag to mark if DHCP IP allocation is used for VMware user clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#enabled GkeonpremVmwareCluster#enabled}

---

### GkeonpremVmwareClusterNetworkConfigHostConfig <a name="GkeonpremVmwareClusterNetworkConfigHostConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterNetworkConfigHostConfig {
    string[] DnsSearchDomains = null,
    string[] DnsServers = null,
    string[] NtpServers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig.property.dnsSearchDomains">DnsSearchDomains</a></code> | <code>string[]</code> | DNS search domains. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig.property.dnsServers">DnsServers</a></code> | <code>string[]</code> | DNS servers. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig.property.ntpServers">NtpServers</a></code> | <code>string[]</code> | NTP servers. |

---

##### `DnsSearchDomains`<sup>Optional</sup> <a name="DnsSearchDomains" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig.property.dnsSearchDomains"></a>

```csharp
public string[] DnsSearchDomains { get; set; }
```

- *Type:* string[]

DNS search domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#dns_search_domains GkeonpremVmwareCluster#dns_search_domains}

---

##### `DnsServers`<sup>Optional</sup> <a name="DnsServers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig.property.dnsServers"></a>

```csharp
public string[] DnsServers { get; set; }
```

- *Type:* string[]

DNS servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#dns_servers GkeonpremVmwareCluster#dns_servers}

---

##### `NtpServers`<sup>Optional</sup> <a name="NtpServers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig.property.ntpServers"></a>

```csharp
public string[] NtpServers { get; set; }
```

- *Type:* string[]

NTP servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#ntp_servers GkeonpremVmwareCluster#ntp_servers}

---

### GkeonpremVmwareClusterNetworkConfigStaticIpConfig <a name="GkeonpremVmwareClusterNetworkConfigStaticIpConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterNetworkConfigStaticIpConfig {
    object IpBlocks
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig.property.ipBlocks">IpBlocks</a></code> | <code>object</code> | ip_blocks block. |

---

##### `IpBlocks`<sup>Required</sup> <a name="IpBlocks" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig.property.ipBlocks"></a>

```csharp
public object IpBlocks { get; set; }
```

- *Type:* object

ip_blocks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#ip_blocks GkeonpremVmwareCluster#ip_blocks}

---

### GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks <a name="GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks {
    string Gateway,
    object Ips,
    string Netmask
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.gateway">Gateway</a></code> | <code>string</code> | The network gateway used by the VMware User Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.ips">Ips</a></code> | <code>object</code> | ips block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.netmask">Netmask</a></code> | <code>string</code> | The netmask used by the VMware User Cluster. |

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.gateway"></a>

```csharp
public string Gateway { get; set; }
```

- *Type:* string

The network gateway used by the VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#gateway GkeonpremVmwareCluster#gateway}

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.ips"></a>

```csharp
public object Ips { get; set; }
```

- *Type:* object

ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#ips GkeonpremVmwareCluster#ips}

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.netmask"></a>

```csharp
public string Netmask { get; set; }
```

- *Type:* string

The netmask used by the VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#netmask GkeonpremVmwareCluster#netmask}

---

### GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps <a name="GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps {
    string Ip,
    string Hostname = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.property.ip">Ip</a></code> | <code>string</code> | IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.property.hostname">Hostname</a></code> | <code>string</code> | Hostname of the machine. VM's name will be used if this field is empty. |

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.property.ip"></a>

```csharp
public string Ip { get; set; }
```

- *Type:* string

IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#ip GkeonpremVmwareCluster#ip}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Hostname of the machine. VM's name will be used if this field is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#hostname GkeonpremVmwareCluster#hostname}

---

### GkeonpremVmwareClusterStatus <a name="GkeonpremVmwareClusterStatus" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterStatus {

};
```


### GkeonpremVmwareClusterStatusConditions <a name="GkeonpremVmwareClusterStatusConditions" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterStatusConditions {

};
```


### GkeonpremVmwareClusterStorage <a name="GkeonpremVmwareClusterStorage" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterStorage {
    object VsphereCsiDisabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage.property.vsphereCsiDisabled">VsphereCsiDisabled</a></code> | <code>object</code> | Whether or not to deploy vSphere CSI components in the VMware User Cluster. Enabled by default. |

---

##### `VsphereCsiDisabled`<sup>Required</sup> <a name="VsphereCsiDisabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage.property.vsphereCsiDisabled"></a>

```csharp
public object VsphereCsiDisabled { get; set; }
```

- *Type:* object

Whether or not to deploy vSphere CSI components in the VMware User Cluster. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#vsphere_csi_disabled GkeonpremVmwareCluster#vsphere_csi_disabled}

---

### GkeonpremVmwareClusterTimeouts <a name="GkeonpremVmwareClusterTimeouts" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#create GkeonpremVmwareCluster#create}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#delete GkeonpremVmwareCluster#delete}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#update GkeonpremVmwareCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#create GkeonpremVmwareCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#delete GkeonpremVmwareCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#update GkeonpremVmwareCluster#update}.

---

### GkeonpremVmwareClusterUpgradePolicy <a name="GkeonpremVmwareClusterUpgradePolicy" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterUpgradePolicy {
    object ControlPlaneOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy.property.controlPlaneOnly">ControlPlaneOnly</a></code> | <code>object</code> | Controls whether the upgrade applies to the control plane only. |

---

##### `ControlPlaneOnly`<sup>Optional</sup> <a name="ControlPlaneOnly" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy.property.controlPlaneOnly"></a>

```csharp
public object ControlPlaneOnly { get; set; }
```

- *Type:* object

Controls whether the upgrade applies to the control plane only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#control_plane_only GkeonpremVmwareCluster#control_plane_only}

---

### GkeonpremVmwareClusterValidationCheck <a name="GkeonpremVmwareClusterValidationCheck" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterValidationCheck {

};
```


### GkeonpremVmwareClusterValidationCheckStatus <a name="GkeonpremVmwareClusterValidationCheckStatus" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterValidationCheckStatus {

};
```


### GkeonpremVmwareClusterValidationCheckStatusResult <a name="GkeonpremVmwareClusterValidationCheckStatusResult" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterValidationCheckStatusResult {

};
```


### GkeonpremVmwareClusterVcenter <a name="GkeonpremVmwareClusterVcenter" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterVcenter {
    string CaCertData = null,
    string Cluster = null,
    string Datacenter = null,
    string Datastore = null,
    string Folder = null,
    string ResourcePool = null,
    string StoragePolicyName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.caCertData">CaCertData</a></code> | <code>string</code> | Contains the vCenter CA certificate public key for SSL verification. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.cluster">Cluster</a></code> | <code>string</code> | The name of the vCenter cluster for the user cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.datacenter">Datacenter</a></code> | <code>string</code> | The name of the vCenter datacenter for the user cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.datastore">Datastore</a></code> | <code>string</code> | The name of the vCenter datastore for the user cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.folder">Folder</a></code> | <code>string</code> | The name of the vCenter folder for the user cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.resourcePool">ResourcePool</a></code> | <code>string</code> | The name of the vCenter resource pool for the user cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.storagePolicyName">StoragePolicyName</a></code> | <code>string</code> | The name of the vCenter storage policy for the user cluster. |

---

##### `CaCertData`<sup>Optional</sup> <a name="CaCertData" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.caCertData"></a>

```csharp
public string CaCertData { get; set; }
```

- *Type:* string

Contains the vCenter CA certificate public key for SSL verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#ca_cert_data GkeonpremVmwareCluster#ca_cert_data}

---

##### `Cluster`<sup>Optional</sup> <a name="Cluster" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

The name of the vCenter cluster for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#cluster GkeonpremVmwareCluster#cluster}

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.datacenter"></a>

```csharp
public string Datacenter { get; set; }
```

- *Type:* string

The name of the vCenter datacenter for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#datacenter GkeonpremVmwareCluster#datacenter}

---

##### `Datastore`<sup>Optional</sup> <a name="Datastore" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.datastore"></a>

```csharp
public string Datastore { get; set; }
```

- *Type:* string

The name of the vCenter datastore for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#datastore GkeonpremVmwareCluster#datastore}

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

The name of the vCenter folder for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#folder GkeonpremVmwareCluster#folder}

---

##### `ResourcePool`<sup>Optional</sup> <a name="ResourcePool" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.resourcePool"></a>

```csharp
public string ResourcePool { get; set; }
```

- *Type:* string

The name of the vCenter resource pool for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#resource_pool GkeonpremVmwareCluster#resource_pool}

---

##### `StoragePolicyName`<sup>Optional</sup> <a name="StoragePolicyName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.storagePolicyName"></a>

```csharp
public string StoragePolicyName { get; set; }
```

- *Type:* string

The name of the vCenter storage policy for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gkeonprem_vmware_cluster#storage_policy_name GkeonpremVmwareCluster#storage_policy_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GkeonpremVmwareClusterAntiAffinityGroupsOutputReference <a name="GkeonpremVmwareClusterAntiAffinityGroupsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterAntiAffinityGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabledInput">AagConfigDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabled">AagConfigDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups">GkeonpremVmwareClusterAntiAffinityGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AagConfigDisabledInput`<sup>Optional</sup> <a name="AagConfigDisabledInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabledInput"></a>

```csharp
public object AagConfigDisabledInput { get; }
```

- *Type:* object

---

##### `AagConfigDisabled`<sup>Required</sup> <a name="AagConfigDisabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabled"></a>

```csharp
public object AagConfigDisabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterAntiAffinityGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups">GkeonpremVmwareClusterAntiAffinityGroups</a>

---


### GkeonpremVmwareClusterAuthorizationAdminUsersList <a name="GkeonpremVmwareClusterAuthorizationAdminUsersList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterAuthorizationAdminUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.get"></a>

```csharp
private GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference <a name="GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GkeonpremVmwareClusterAuthorizationOutputReference <a name="GkeonpremVmwareClusterAuthorizationOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.putAdminUsers">PutAdminUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.resetAdminUsers">ResetAdminUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminUsers` <a name="PutAdminUsers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.putAdminUsers"></a>

```csharp
private void PutAdminUsers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* object

---

##### `ResetAdminUsers` <a name="ResetAdminUsers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.resetAdminUsers"></a>

```csharp
private void ResetAdminUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.property.adminUsers">AdminUsers</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList">GkeonpremVmwareClusterAuthorizationAdminUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.property.adminUsersInput">AdminUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization">GkeonpremVmwareClusterAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminUsers`<sup>Required</sup> <a name="AdminUsers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.property.adminUsers"></a>

```csharp
public GkeonpremVmwareClusterAuthorizationAdminUsersList AdminUsers { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList">GkeonpremVmwareClusterAuthorizationAdminUsersList</a>

---

##### `AdminUsersInput`<sup>Optional</sup> <a name="AdminUsersInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```csharp
public object AdminUsersInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterAuthorization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization">GkeonpremVmwareClusterAuthorization</a>

---


### GkeonpremVmwareClusterAutoRepairConfigOutputReference <a name="GkeonpremVmwareClusterAutoRepairConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterAutoRepairConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig">GkeonpremVmwareClusterAutoRepairConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterAutoRepairConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig">GkeonpremVmwareClusterAutoRepairConfig</a>

---


### GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference <a name="GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a>

---


### GkeonpremVmwareClusterControlPlaneNodeOutputReference <a name="GkeonpremVmwareClusterControlPlaneNodeOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterControlPlaneNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.putAutoResizeConfig">PutAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resetAutoResizeConfig">ResetAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resetCpus">ResetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resetReplicas">ResetReplicas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoResizeConfig` <a name="PutAutoResizeConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.putAutoResizeConfig"></a>

```csharp
private void PutAutoResizeConfig(GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.putAutoResizeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a>

---

##### `ResetAutoResizeConfig` <a name="ResetAutoResizeConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resetAutoResizeConfig"></a>

```csharp
private void ResetAutoResizeConfig()
```

##### `ResetCpus` <a name="ResetCpus" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resetCpus"></a>

```csharp
private void ResetCpus()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resetMemory"></a>

```csharp
private void ResetMemory()
```

##### `ResetReplicas` <a name="ResetReplicas" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resetReplicas"></a>

```csharp
private void ResetReplicas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.autoResizeConfig">AutoResizeConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference">GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.vsphereConfig">VsphereConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList">GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.autoResizeConfigInput">AutoResizeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.cpusInput">CpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.memoryInput">MemoryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.replicasInput">ReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.cpus">Cpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.memory">Memory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.replicas">Replicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode">GkeonpremVmwareClusterControlPlaneNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoResizeConfig`<sup>Required</sup> <a name="AutoResizeConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.autoResizeConfig"></a>

```csharp
public GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference AutoResizeConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference">GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference</a>

---

##### `VsphereConfig`<sup>Required</sup> <a name="VsphereConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.vsphereConfig"></a>

```csharp
public GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList VsphereConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList">GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList</a>

---

##### `AutoResizeConfigInput`<sup>Optional</sup> <a name="AutoResizeConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.autoResizeConfigInput"></a>

```csharp
public GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig AutoResizeConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a>

---

##### `CpusInput`<sup>Optional</sup> <a name="CpusInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.cpusInput"></a>

```csharp
public double CpusInput { get; }
```

- *Type:* double

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.memoryInput"></a>

```csharp
public double MemoryInput { get; }
```

- *Type:* double

---

##### `ReplicasInput`<sup>Optional</sup> <a name="ReplicasInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.replicasInput"></a>

```csharp
public double ReplicasInput { get; }
```

- *Type:* double

---

##### `Cpus`<sup>Required</sup> <a name="Cpus" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.cpus"></a>

```csharp
public double Cpus { get; }
```

- *Type:* double

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.memory"></a>

```csharp
public double Memory { get; }
```

- *Type:* double

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.replicas"></a>

```csharp
public double Replicas { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterControlPlaneNode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode">GkeonpremVmwareClusterControlPlaneNode</a>

---


### GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList <a name="GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.get"></a>

```csharp
private GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference <a name="GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.datastore">Datastore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.storagePolicyName">StoragePolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfig">GkeonpremVmwareClusterControlPlaneNodeVsphereConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.datastore"></a>

```csharp
public string Datastore { get; }
```

- *Type:* string

---

##### `StoragePolicyName`<sup>Required</sup> <a name="StoragePolicyName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.storagePolicyName"></a>

```csharp
public string StoragePolicyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterControlPlaneNodeVsphereConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfig">GkeonpremVmwareClusterControlPlaneNodeVsphereConfig</a>

---


### GkeonpremVmwareClusterDataplaneV2OutputReference <a name="GkeonpremVmwareClusterDataplaneV2OutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterDataplaneV2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.resetAdvancedNetworking">ResetAdvancedNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.resetDataplaneV2Enabled">ResetDataplaneV2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.resetWindowsDataplaneV2Enabled">ResetWindowsDataplaneV2Enabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdvancedNetworking` <a name="ResetAdvancedNetworking" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.resetAdvancedNetworking"></a>

```csharp
private void ResetAdvancedNetworking()
```

##### `ResetDataplaneV2Enabled` <a name="ResetDataplaneV2Enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.resetDataplaneV2Enabled"></a>

```csharp
private void ResetDataplaneV2Enabled()
```

##### `ResetWindowsDataplaneV2Enabled` <a name="ResetWindowsDataplaneV2Enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.resetWindowsDataplaneV2Enabled"></a>

```csharp
private void ResetWindowsDataplaneV2Enabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.advancedNetworkingInput">AdvancedNetworkingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.dataplaneV2EnabledInput">DataplaneV2EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.windowsDataplaneV2EnabledInput">WindowsDataplaneV2EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.advancedNetworking">AdvancedNetworking</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.dataplaneV2Enabled">DataplaneV2Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.windowsDataplaneV2Enabled">WindowsDataplaneV2Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2">GkeonpremVmwareClusterDataplaneV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvancedNetworkingInput`<sup>Optional</sup> <a name="AdvancedNetworkingInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.advancedNetworkingInput"></a>

```csharp
public object AdvancedNetworkingInput { get; }
```

- *Type:* object

---

##### `DataplaneV2EnabledInput`<sup>Optional</sup> <a name="DataplaneV2EnabledInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.dataplaneV2EnabledInput"></a>

```csharp
public object DataplaneV2EnabledInput { get; }
```

- *Type:* object

---

##### `WindowsDataplaneV2EnabledInput`<sup>Optional</sup> <a name="WindowsDataplaneV2EnabledInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.windowsDataplaneV2EnabledInput"></a>

```csharp
public object WindowsDataplaneV2EnabledInput { get; }
```

- *Type:* object

---

##### `AdvancedNetworking`<sup>Required</sup> <a name="AdvancedNetworking" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.advancedNetworking"></a>

```csharp
public object AdvancedNetworking { get; }
```

- *Type:* object

---

##### `DataplaneV2Enabled`<sup>Required</sup> <a name="DataplaneV2Enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.dataplaneV2Enabled"></a>

```csharp
public object DataplaneV2Enabled { get; }
```

- *Type:* object

---

##### `WindowsDataplaneV2Enabled`<sup>Required</sup> <a name="WindowsDataplaneV2Enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.windowsDataplaneV2Enabled"></a>

```csharp
public object WindowsDataplaneV2Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterDataplaneV2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2">GkeonpremVmwareClusterDataplaneV2</a>

---


### GkeonpremVmwareClusterFleetList <a name="GkeonpremVmwareClusterFleetList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterFleetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.get"></a>

```csharp
private GkeonpremVmwareClusterFleetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GkeonpremVmwareClusterFleetOutputReference <a name="GkeonpremVmwareClusterFleetOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterFleetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.property.membership">Membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleet">GkeonpremVmwareClusterFleet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.property.membership"></a>

```csharp
public string Membership { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterFleet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleet">GkeonpremVmwareClusterFleet</a>

---


### GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference <a name="GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetSnatPool">ResetSnatPool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetPartition"></a>

```csharp
private void ResetPartition()
```

##### `ResetSnatPool` <a name="ResetSnatPool" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetSnatPool"></a>

```csharp
private void ResetSnatPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.partitionInput">PartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.snatPoolInput">SnatPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.partition">Partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.snatPool">SnatPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config">GkeonpremVmwareClusterLoadBalancerF5Config</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.partitionInput"></a>

```csharp
public string PartitionInput { get; }
```

- *Type:* string

---

##### `SnatPoolInput`<sup>Optional</sup> <a name="SnatPoolInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.snatPoolInput"></a>

```csharp
public string SnatPoolInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.partition"></a>

```csharp
public string Partition { get; }
```

- *Type:* string

---

##### `SnatPool`<sup>Required</sup> <a name="SnatPool" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.snatPool"></a>

```csharp
public string SnatPool { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterLoadBalancerF5Config InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config">GkeonpremVmwareClusterLoadBalancerF5Config</a>

---


### GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference <a name="GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetControlPlaneNodePort">ResetControlPlaneNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpNodePort">ResetIngressHttpNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpsNodePort">ResetIngressHttpsNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetKonnectivityServerNodePort">ResetKonnectivityServerNodePort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetControlPlaneNodePort` <a name="ResetControlPlaneNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetControlPlaneNodePort"></a>

```csharp
private void ResetControlPlaneNodePort()
```

##### `ResetIngressHttpNodePort` <a name="ResetIngressHttpNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpNodePort"></a>

```csharp
private void ResetIngressHttpNodePort()
```

##### `ResetIngressHttpsNodePort` <a name="ResetIngressHttpsNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpsNodePort"></a>

```csharp
private void ResetIngressHttpsNodePort()
```

##### `ResetKonnectivityServerNodePort` <a name="ResetKonnectivityServerNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetKonnectivityServerNodePort"></a>

```csharp
private void ResetKonnectivityServerNodePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePortInput">ControlPlaneNodePortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePortInput">IngressHttpNodePortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePortInput">IngressHttpsNodePortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePortInput">KonnectivityServerNodePortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePort">ControlPlaneNodePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePort">IngressHttpNodePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePort">IngressHttpsNodePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePort">KonnectivityServerNodePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig">GkeonpremVmwareClusterLoadBalancerManualLbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ControlPlaneNodePortInput`<sup>Optional</sup> <a name="ControlPlaneNodePortInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePortInput"></a>

```csharp
public double ControlPlaneNodePortInput { get; }
```

- *Type:* double

---

##### `IngressHttpNodePortInput`<sup>Optional</sup> <a name="IngressHttpNodePortInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePortInput"></a>

```csharp
public double IngressHttpNodePortInput { get; }
```

- *Type:* double

---

##### `IngressHttpsNodePortInput`<sup>Optional</sup> <a name="IngressHttpsNodePortInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePortInput"></a>

```csharp
public double IngressHttpsNodePortInput { get; }
```

- *Type:* double

---

##### `KonnectivityServerNodePortInput`<sup>Optional</sup> <a name="KonnectivityServerNodePortInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePortInput"></a>

```csharp
public double KonnectivityServerNodePortInput { get; }
```

- *Type:* double

---

##### `ControlPlaneNodePort`<sup>Required</sup> <a name="ControlPlaneNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePort"></a>

```csharp
public double ControlPlaneNodePort { get; }
```

- *Type:* double

---

##### `IngressHttpNodePort`<sup>Required</sup> <a name="IngressHttpNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePort"></a>

```csharp
public double IngressHttpNodePort { get; }
```

- *Type:* double

---

##### `IngressHttpsNodePort`<sup>Required</sup> <a name="IngressHttpsNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePort"></a>

```csharp
public double IngressHttpsNodePort { get; }
```

- *Type:* double

---

##### `KonnectivityServerNodePort`<sup>Required</sup> <a name="KonnectivityServerNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePort"></a>

```csharp
public double KonnectivityServerNodePort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterLoadBalancerManualLbConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig">GkeonpremVmwareClusterLoadBalancerManualLbConfig</a>

---


### GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList <a name="GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.get"></a>

```csharp
private GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference <a name="GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resetAvoidBuggyIps">ResetAvoidBuggyIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resetManualAssign">ResetManualAssign</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvoidBuggyIps` <a name="ResetAvoidBuggyIps" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resetAvoidBuggyIps"></a>

```csharp
private void ResetAvoidBuggyIps()
```

##### `ResetManualAssign` <a name="ResetManualAssign" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resetManualAssign"></a>

```csharp
private void ResetManualAssign()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.addressesInput">AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.avoidBuggyIpsInput">AvoidBuggyIpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.manualAssignInput">ManualAssignInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.poolInput">PoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.addresses">Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.avoidBuggyIps">AvoidBuggyIps</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.manualAssign">ManualAssign</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.pool">Pool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressesInput`<sup>Optional</sup> <a name="AddressesInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.addressesInput"></a>

```csharp
public string[] AddressesInput { get; }
```

- *Type:* string[]

---

##### `AvoidBuggyIpsInput`<sup>Optional</sup> <a name="AvoidBuggyIpsInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.avoidBuggyIpsInput"></a>

```csharp
public object AvoidBuggyIpsInput { get; }
```

- *Type:* object

---

##### `ManualAssignInput`<sup>Optional</sup> <a name="ManualAssignInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.manualAssignInput"></a>

```csharp
public object ManualAssignInput { get; }
```

- *Type:* object

---

##### `PoolInput`<sup>Optional</sup> <a name="PoolInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.poolInput"></a>

```csharp
public string PoolInput { get; }
```

- *Type:* string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.addresses"></a>

```csharp
public string[] Addresses { get; }
```

- *Type:* string[]

---

##### `AvoidBuggyIps`<sup>Required</sup> <a name="AvoidBuggyIps" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.avoidBuggyIps"></a>

```csharp
public object AvoidBuggyIps { get; }
```

- *Type:* object

---

##### `ManualAssign`<sup>Required</sup> <a name="ManualAssign" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.manualAssign"></a>

```csharp
public object ManualAssign { get; }
```

- *Type:* object

---

##### `Pool`<sup>Required</sup> <a name="Pool" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.pool"></a>

```csharp
public string Pool { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference <a name="GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.putAddressPools">PutAddressPools</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAddressPools` <a name="PutAddressPools" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.putAddressPools"></a>

```csharp
private void PutAddressPools(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.putAddressPools.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.addressPools">AddressPools</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList">GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.addressPoolsInput">AddressPoolsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig">GkeonpremVmwareClusterLoadBalancerMetalLbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressPools`<sup>Required</sup> <a name="AddressPools" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.addressPools"></a>

```csharp
public GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList AddressPools { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList">GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList</a>

---

##### `AddressPoolsInput`<sup>Optional</sup> <a name="AddressPoolsInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.addressPoolsInput"></a>

```csharp
public object AddressPoolsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterLoadBalancerMetalLbConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig">GkeonpremVmwareClusterLoadBalancerMetalLbConfig</a>

---


### GkeonpremVmwareClusterLoadBalancerOutputReference <a name="GkeonpremVmwareClusterLoadBalancerOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterLoadBalancerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putF5Config">PutF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putManualLbConfig">PutManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putMetalLbConfig">PutMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putVipConfig">PutVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resetF5Config">ResetF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resetManualLbConfig">ResetManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resetMetalLbConfig">ResetMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resetVipConfig">ResetVipConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutF5Config` <a name="PutF5Config" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putF5Config"></a>

```csharp
private void PutF5Config(GkeonpremVmwareClusterLoadBalancerF5Config Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putF5Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config">GkeonpremVmwareClusterLoadBalancerF5Config</a>

---

##### `PutManualLbConfig` <a name="PutManualLbConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putManualLbConfig"></a>

```csharp
private void PutManualLbConfig(GkeonpremVmwareClusterLoadBalancerManualLbConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putManualLbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig">GkeonpremVmwareClusterLoadBalancerManualLbConfig</a>

---

##### `PutMetalLbConfig` <a name="PutMetalLbConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putMetalLbConfig"></a>

```csharp
private void PutMetalLbConfig(GkeonpremVmwareClusterLoadBalancerMetalLbConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putMetalLbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig">GkeonpremVmwareClusterLoadBalancerMetalLbConfig</a>

---

##### `PutVipConfig` <a name="PutVipConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putVipConfig"></a>

```csharp
private void PutVipConfig(GkeonpremVmwareClusterLoadBalancerVipConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putVipConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig">GkeonpremVmwareClusterLoadBalancerVipConfig</a>

---

##### `ResetF5Config` <a name="ResetF5Config" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resetF5Config"></a>

```csharp
private void ResetF5Config()
```

##### `ResetManualLbConfig` <a name="ResetManualLbConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resetManualLbConfig"></a>

```csharp
private void ResetManualLbConfig()
```

##### `ResetMetalLbConfig` <a name="ResetMetalLbConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resetMetalLbConfig"></a>

```csharp
private void ResetMetalLbConfig()
```

##### `ResetVipConfig` <a name="ResetVipConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resetVipConfig"></a>

```csharp
private void ResetVipConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.f5Config">F5Config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference">GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.manualLbConfig">ManualLbConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference">GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.metalLbConfig">MetalLbConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference">GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.vipConfig">VipConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference">GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.f5ConfigInput">F5ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config">GkeonpremVmwareClusterLoadBalancerF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.manualLbConfigInput">ManualLbConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig">GkeonpremVmwareClusterLoadBalancerManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.metalLbConfigInput">MetalLbConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig">GkeonpremVmwareClusterLoadBalancerMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.vipConfigInput">VipConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig">GkeonpremVmwareClusterLoadBalancerVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer">GkeonpremVmwareClusterLoadBalancer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `F5Config`<sup>Required</sup> <a name="F5Config" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.f5Config"></a>

```csharp
public GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference F5Config { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference">GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference</a>

---

##### `ManualLbConfig`<sup>Required</sup> <a name="ManualLbConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.manualLbConfig"></a>

```csharp
public GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference ManualLbConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference">GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference</a>

---

##### `MetalLbConfig`<sup>Required</sup> <a name="MetalLbConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.metalLbConfig"></a>

```csharp
public GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference MetalLbConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference">GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference</a>

---

##### `VipConfig`<sup>Required</sup> <a name="VipConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.vipConfig"></a>

```csharp
public GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference VipConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference">GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference</a>

---

##### `F5ConfigInput`<sup>Optional</sup> <a name="F5ConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.f5ConfigInput"></a>

```csharp
public GkeonpremVmwareClusterLoadBalancerF5Config F5ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config">GkeonpremVmwareClusterLoadBalancerF5Config</a>

---

##### `ManualLbConfigInput`<sup>Optional</sup> <a name="ManualLbConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.manualLbConfigInput"></a>

```csharp
public GkeonpremVmwareClusterLoadBalancerManualLbConfig ManualLbConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig">GkeonpremVmwareClusterLoadBalancerManualLbConfig</a>

---

##### `MetalLbConfigInput`<sup>Optional</sup> <a name="MetalLbConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.metalLbConfigInput"></a>

```csharp
public GkeonpremVmwareClusterLoadBalancerMetalLbConfig MetalLbConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig">GkeonpremVmwareClusterLoadBalancerMetalLbConfig</a>

---

##### `VipConfigInput`<sup>Optional</sup> <a name="VipConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.vipConfigInput"></a>

```csharp
public GkeonpremVmwareClusterLoadBalancerVipConfig VipConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig">GkeonpremVmwareClusterLoadBalancerVipConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterLoadBalancer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer">GkeonpremVmwareClusterLoadBalancer</a>

---


### GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference <a name="GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resetControlPlaneVip">ResetControlPlaneVip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resetIngressVip">ResetIngressVip</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetControlPlaneVip` <a name="ResetControlPlaneVip" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resetControlPlaneVip"></a>

```csharp
private void ResetControlPlaneVip()
```

##### `ResetIngressVip` <a name="ResetIngressVip" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resetIngressVip"></a>

```csharp
private void ResetIngressVip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput">ControlPlaneVipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.ingressVipInput">IngressVipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip">ControlPlaneVip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.ingressVip">IngressVip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig">GkeonpremVmwareClusterLoadBalancerVipConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ControlPlaneVipInput`<sup>Optional</sup> <a name="ControlPlaneVipInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput"></a>

```csharp
public string ControlPlaneVipInput { get; }
```

- *Type:* string

---

##### `IngressVipInput`<sup>Optional</sup> <a name="IngressVipInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.ingressVipInput"></a>

```csharp
public string IngressVipInput { get; }
```

- *Type:* string

---

##### `ControlPlaneVip`<sup>Required</sup> <a name="ControlPlaneVip" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip"></a>

```csharp
public string ControlPlaneVip { get; }
```

- *Type:* string

---

##### `IngressVip`<sup>Required</sup> <a name="IngressVip" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.ingressVip"></a>

```csharp
public string IngressVip { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterLoadBalancerVipConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig">GkeonpremVmwareClusterLoadBalancerVipConfig</a>

---


### GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList <a name="GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.get"></a>

```csharp
private GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference <a name="GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resetIp">ResetIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resetHostname"></a>

```csharp
private void ResetHostname()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resetIp"></a>

```csharp
private void ResetIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.ipInput">IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.ipInput"></a>

```csharp
public string IpInput { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference <a name="GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.putIps">PutIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetGateway">ResetGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetIps">ResetIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetNetmask">ResetNetmask</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIps` <a name="PutIps" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.putIps"></a>

```csharp
private void PutIps(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.putIps.parameter.value"></a>

- *Type:* object

---

##### `ResetGateway` <a name="ResetGateway" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetGateway"></a>

```csharp
private void ResetGateway()
```

##### `ResetIps` <a name="ResetIps" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetIps"></a>

```csharp
private void ResetIps()
```

##### `ResetNetmask` <a name="ResetNetmask" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetNetmask"></a>

```csharp
private void ResetNetmask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.ips">Ips</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.gatewayInput">GatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.ipsInput">IpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.netmaskInput">NetmaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.gateway">Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.netmask">Netmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.ips"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList Ips { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList</a>

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.gatewayInput"></a>

```csharp
public string GatewayInput { get; }
```

- *Type:* string

---

##### `IpsInput`<sup>Optional</sup> <a name="IpsInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.ipsInput"></a>

```csharp
public object IpsInput { get; }
```

- *Type:* object

---

##### `NetmaskInput`<sup>Optional</sup> <a name="NetmaskInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.netmaskInput"></a>

```csharp
public string NetmaskInput { get; }
```

- *Type:* string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.gateway"></a>

```csharp
public string Gateway { get; }
```

- *Type:* string

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.netmask"></a>

```csharp
public string Netmask { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a>

---


### GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference <a name="GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.putControlPlaneIpBlock">PutControlPlaneIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resetControlPlaneIpBlock">ResetControlPlaneIpBlock</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutControlPlaneIpBlock` <a name="PutControlPlaneIpBlock" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.putControlPlaneIpBlock"></a>

```csharp
private void PutControlPlaneIpBlock(GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.putControlPlaneIpBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a>

---

##### `ResetControlPlaneIpBlock` <a name="ResetControlPlaneIpBlock" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resetControlPlaneIpBlock"></a>

```csharp
private void ResetControlPlaneIpBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.controlPlaneIpBlock">ControlPlaneIpBlock</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.controlPlaneIpBlockInput">ControlPlaneIpBlockInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ControlPlaneIpBlock`<sup>Required</sup> <a name="ControlPlaneIpBlock" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.controlPlaneIpBlock"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference ControlPlaneIpBlock { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference</a>

---

##### `ControlPlaneIpBlockInput`<sup>Optional</sup> <a name="ControlPlaneIpBlockInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.controlPlaneIpBlockInput"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock ControlPlaneIpBlockInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a>

---


### GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference <a name="GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigDhcpIpConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a>

---


### GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference <a name="GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetDnsSearchDomains">ResetDnsSearchDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetDnsServers">ResetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetNtpServers">ResetNtpServers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsSearchDomains` <a name="ResetDnsSearchDomains" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetDnsSearchDomains"></a>

```csharp
private void ResetDnsSearchDomains()
```

##### `ResetDnsServers` <a name="ResetDnsServers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetDnsServers"></a>

```csharp
private void ResetDnsServers()
```

##### `ResetNtpServers` <a name="ResetNtpServers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetNtpServers"></a>

```csharp
private void ResetNtpServers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomainsInput">DnsSearchDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsServersInput">DnsServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.ntpServersInput">NtpServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomains">DnsSearchDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsServers">DnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.ntpServers">NtpServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig">GkeonpremVmwareClusterNetworkConfigHostConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsSearchDomainsInput`<sup>Optional</sup> <a name="DnsSearchDomainsInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomainsInput"></a>

```csharp
public string[] DnsSearchDomainsInput { get; }
```

- *Type:* string[]

---

##### `DnsServersInput`<sup>Optional</sup> <a name="DnsServersInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsServersInput"></a>

```csharp
public string[] DnsServersInput { get; }
```

- *Type:* string[]

---

##### `NtpServersInput`<sup>Optional</sup> <a name="NtpServersInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.ntpServersInput"></a>

```csharp
public string[] NtpServersInput { get; }
```

- *Type:* string[]

---

##### `DnsSearchDomains`<sup>Required</sup> <a name="DnsSearchDomains" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomains"></a>

```csharp
public string[] DnsSearchDomains { get; }
```

- *Type:* string[]

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsServers"></a>

```csharp
public string[] DnsServers { get; }
```

- *Type:* string[]

---

##### `NtpServers`<sup>Required</sup> <a name="NtpServers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.ntpServers"></a>

```csharp
public string[] NtpServers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigHostConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig">GkeonpremVmwareClusterNetworkConfigHostConfig</a>

---


### GkeonpremVmwareClusterNetworkConfigOutputReference <a name="GkeonpremVmwareClusterNetworkConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putControlPlaneV2Config">PutControlPlaneV2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putDhcpIpConfig">PutDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putHostConfig">PutHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putStaticIpConfig">PutStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resetControlPlaneV2Config">ResetControlPlaneV2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resetDhcpIpConfig">ResetDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resetHostConfig">ResetHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resetStaticIpConfig">ResetStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resetVcenterNetwork">ResetVcenterNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutControlPlaneV2Config` <a name="PutControlPlaneV2Config" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putControlPlaneV2Config"></a>

```csharp
private void PutControlPlaneV2Config(GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putControlPlaneV2Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a>

---

##### `PutDhcpIpConfig` <a name="PutDhcpIpConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putDhcpIpConfig"></a>

```csharp
private void PutDhcpIpConfig(GkeonpremVmwareClusterNetworkConfigDhcpIpConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putDhcpIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a>

---

##### `PutHostConfig` <a name="PutHostConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putHostConfig"></a>

```csharp
private void PutHostConfig(GkeonpremVmwareClusterNetworkConfigHostConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putHostConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig">GkeonpremVmwareClusterNetworkConfigHostConfig</a>

---

##### `PutStaticIpConfig` <a name="PutStaticIpConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putStaticIpConfig"></a>

```csharp
private void PutStaticIpConfig(GkeonpremVmwareClusterNetworkConfigStaticIpConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putStaticIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig">GkeonpremVmwareClusterNetworkConfigStaticIpConfig</a>

---

##### `ResetControlPlaneV2Config` <a name="ResetControlPlaneV2Config" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resetControlPlaneV2Config"></a>

```csharp
private void ResetControlPlaneV2Config()
```

##### `ResetDhcpIpConfig` <a name="ResetDhcpIpConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resetDhcpIpConfig"></a>

```csharp
private void ResetDhcpIpConfig()
```

##### `ResetHostConfig` <a name="ResetHostConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resetHostConfig"></a>

```csharp
private void ResetHostConfig()
```

##### `ResetStaticIpConfig` <a name="ResetStaticIpConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resetStaticIpConfig"></a>

```csharp
private void ResetStaticIpConfig()
```

##### `ResetVcenterNetwork` <a name="ResetVcenterNetwork" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resetVcenterNetwork"></a>

```csharp
private void ResetVcenterNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.controlPlaneV2Config">ControlPlaneV2Config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.dhcpIpConfig">DhcpIpConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference">GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.hostConfig">HostConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference">GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.staticIpConfig">StaticIpConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference">GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.controlPlaneV2ConfigInput">ControlPlaneV2ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.dhcpIpConfigInput">DhcpIpConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.hostConfigInput">HostConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig">GkeonpremVmwareClusterNetworkConfigHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.podAddressCidrBlocksInput">PodAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocksInput">ServiceAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.staticIpConfigInput">StaticIpConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig">GkeonpremVmwareClusterNetworkConfigStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.vcenterNetworkInput">VcenterNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.podAddressCidrBlocks">PodAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocks">ServiceAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.vcenterNetwork">VcenterNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig">GkeonpremVmwareClusterNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ControlPlaneV2Config`<sup>Required</sup> <a name="ControlPlaneV2Config" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.controlPlaneV2Config"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference ControlPlaneV2Config { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference</a>

---

##### `DhcpIpConfig`<sup>Required</sup> <a name="DhcpIpConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.dhcpIpConfig"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference DhcpIpConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference">GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference</a>

---

##### `HostConfig`<sup>Required</sup> <a name="HostConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.hostConfig"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference HostConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference">GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference</a>

---

##### `StaticIpConfig`<sup>Required</sup> <a name="StaticIpConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.staticIpConfig"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference StaticIpConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference">GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference</a>

---

##### `ControlPlaneV2ConfigInput`<sup>Optional</sup> <a name="ControlPlaneV2ConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.controlPlaneV2ConfigInput"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config ControlPlaneV2ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a>

---

##### `DhcpIpConfigInput`<sup>Optional</sup> <a name="DhcpIpConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.dhcpIpConfigInput"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigDhcpIpConfig DhcpIpConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a>

---

##### `HostConfigInput`<sup>Optional</sup> <a name="HostConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.hostConfigInput"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigHostConfig HostConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig">GkeonpremVmwareClusterNetworkConfigHostConfig</a>

---

##### `PodAddressCidrBlocksInput`<sup>Optional</sup> <a name="PodAddressCidrBlocksInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.podAddressCidrBlocksInput"></a>

```csharp
public string[] PodAddressCidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `ServiceAddressCidrBlocksInput`<sup>Optional</sup> <a name="ServiceAddressCidrBlocksInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocksInput"></a>

```csharp
public string[] ServiceAddressCidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `StaticIpConfigInput`<sup>Optional</sup> <a name="StaticIpConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.staticIpConfigInput"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigStaticIpConfig StaticIpConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig">GkeonpremVmwareClusterNetworkConfigStaticIpConfig</a>

---

##### `VcenterNetworkInput`<sup>Optional</sup> <a name="VcenterNetworkInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.vcenterNetworkInput"></a>

```csharp
public string VcenterNetworkInput { get; }
```

- *Type:* string

---

##### `PodAddressCidrBlocks`<sup>Required</sup> <a name="PodAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.podAddressCidrBlocks"></a>

```csharp
public string[] PodAddressCidrBlocks { get; }
```

- *Type:* string[]

---

##### `ServiceAddressCidrBlocks`<sup>Required</sup> <a name="ServiceAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocks"></a>

```csharp
public string[] ServiceAddressCidrBlocks { get; }
```

- *Type:* string[]

---

##### `VcenterNetwork`<sup>Required</sup> <a name="VcenterNetwork" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.vcenterNetwork"></a>

```csharp
public string VcenterNetwork { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig">GkeonpremVmwareClusterNetworkConfig</a>

---


### GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList <a name="GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get"></a>

```csharp
private GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference <a name="GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resetHostname"></a>

```csharp
private void ResetHostname()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ipInput">IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ipInput"></a>

```csharp
public string IpInput { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList <a name="GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.get"></a>

```csharp
private GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference <a name="GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps">PutIps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIps` <a name="PutIps" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps"></a>

```csharp
private void PutIps(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ips">Ips</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gatewayInput">GatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ipsInput">IpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmaskInput">NetmaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gateway">Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmask">Netmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ips"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList Ips { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList</a>

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gatewayInput"></a>

```csharp
public string GatewayInput { get; }
```

- *Type:* string

---

##### `IpsInput`<sup>Optional</sup> <a name="IpsInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ipsInput"></a>

```csharp
public object IpsInput { get; }
```

- *Type:* object

---

##### `NetmaskInput`<sup>Optional</sup> <a name="NetmaskInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmaskInput"></a>

```csharp
public string NetmaskInput { get; }
```

- *Type:* string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gateway"></a>

```csharp
public string Gateway { get; }
```

- *Type:* string

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmask"></a>

```csharp
public string Netmask { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference <a name="GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks">PutIpBlocks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpBlocks` <a name="PutIpBlocks" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks"></a>

```csharp
private void PutIpBlocks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocks">IpBlocks</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocksInput">IpBlocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig">GkeonpremVmwareClusterNetworkConfigStaticIpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpBlocks`<sup>Required</sup> <a name="IpBlocks" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocks"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList IpBlocks { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList</a>

---

##### `IpBlocksInput`<sup>Optional</sup> <a name="IpBlocksInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocksInput"></a>

```csharp
public object IpBlocksInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterNetworkConfigStaticIpConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig">GkeonpremVmwareClusterNetworkConfigStaticIpConfig</a>

---


### GkeonpremVmwareClusterStatusConditionsList <a name="GkeonpremVmwareClusterStatusConditionsList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterStatusConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.get"></a>

```csharp
private GkeonpremVmwareClusterStatusConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GkeonpremVmwareClusterStatusConditionsOutputReference <a name="GkeonpremVmwareClusterStatusConditionsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterStatusConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditions">GkeonpremVmwareClusterStatusConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.lastTransitionTime"></a>

```csharp
public string LastTransitionTime { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterStatusConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditions">GkeonpremVmwareClusterStatusConditions</a>

---


### GkeonpremVmwareClusterStatusList <a name="GkeonpremVmwareClusterStatusList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.get"></a>

```csharp
private GkeonpremVmwareClusterStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GkeonpremVmwareClusterStatusOutputReference <a name="GkeonpremVmwareClusterStatusOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList">GkeonpremVmwareClusterStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatus">GkeonpremVmwareClusterStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.property.conditions"></a>

```csharp
public GkeonpremVmwareClusterStatusConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList">GkeonpremVmwareClusterStatusConditionsList</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatus">GkeonpremVmwareClusterStatus</a>

---


### GkeonpremVmwareClusterStorageOutputReference <a name="GkeonpremVmwareClusterStorageOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.property.vsphereCsiDisabledInput">VsphereCsiDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.property.vsphereCsiDisabled">VsphereCsiDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage">GkeonpremVmwareClusterStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VsphereCsiDisabledInput`<sup>Optional</sup> <a name="VsphereCsiDisabledInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.property.vsphereCsiDisabledInput"></a>

```csharp
public object VsphereCsiDisabledInput { get; }
```

- *Type:* object

---

##### `VsphereCsiDisabled`<sup>Required</sup> <a name="VsphereCsiDisabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.property.vsphereCsiDisabled"></a>

```csharp
public object VsphereCsiDisabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage">GkeonpremVmwareClusterStorage</a>

---


### GkeonpremVmwareClusterTimeoutsOutputReference <a name="GkeonpremVmwareClusterTimeoutsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GkeonpremVmwareClusterUpgradePolicyOutputReference <a name="GkeonpremVmwareClusterUpgradePolicyOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterUpgradePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.resetControlPlaneOnly">ResetControlPlaneOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetControlPlaneOnly` <a name="ResetControlPlaneOnly" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.resetControlPlaneOnly"></a>

```csharp
private void ResetControlPlaneOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.property.controlPlaneOnlyInput">ControlPlaneOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.property.controlPlaneOnly">ControlPlaneOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy">GkeonpremVmwareClusterUpgradePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ControlPlaneOnlyInput`<sup>Optional</sup> <a name="ControlPlaneOnlyInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.property.controlPlaneOnlyInput"></a>

```csharp
public object ControlPlaneOnlyInput { get; }
```

- *Type:* object

---

##### `ControlPlaneOnly`<sup>Required</sup> <a name="ControlPlaneOnly" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.property.controlPlaneOnly"></a>

```csharp
public object ControlPlaneOnly { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterUpgradePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy">GkeonpremVmwareClusterUpgradePolicy</a>

---


### GkeonpremVmwareClusterValidationCheckList <a name="GkeonpremVmwareClusterValidationCheckList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterValidationCheckList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.get"></a>

```csharp
private GkeonpremVmwareClusterValidationCheckOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GkeonpremVmwareClusterValidationCheckOutputReference <a name="GkeonpremVmwareClusterValidationCheckOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterValidationCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.options">Options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.scenario">Scenario</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList">GkeonpremVmwareClusterValidationCheckStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheck">GkeonpremVmwareClusterValidationCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.options"></a>

```csharp
public string Options { get; }
```

- *Type:* string

---

##### `Scenario`<sup>Required</sup> <a name="Scenario" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.scenario"></a>

```csharp
public string Scenario { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.status"></a>

```csharp
public GkeonpremVmwareClusterValidationCheckStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList">GkeonpremVmwareClusterValidationCheckStatusList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterValidationCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheck">GkeonpremVmwareClusterValidationCheck</a>

---


### GkeonpremVmwareClusterValidationCheckStatusList <a name="GkeonpremVmwareClusterValidationCheckStatusList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterValidationCheckStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.get"></a>

```csharp
private GkeonpremVmwareClusterValidationCheckStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GkeonpremVmwareClusterValidationCheckStatusOutputReference <a name="GkeonpremVmwareClusterValidationCheckStatusOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterValidationCheckStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.property.result">Result</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList">GkeonpremVmwareClusterValidationCheckStatusResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatus">GkeonpremVmwareClusterValidationCheckStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.property.result"></a>

```csharp
public GkeonpremVmwareClusterValidationCheckStatusResultList Result { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList">GkeonpremVmwareClusterValidationCheckStatusResultList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterValidationCheckStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatus">GkeonpremVmwareClusterValidationCheckStatus</a>

---


### GkeonpremVmwareClusterValidationCheckStatusResultList <a name="GkeonpremVmwareClusterValidationCheckStatusResultList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterValidationCheckStatusResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.get"></a>

```csharp
private GkeonpremVmwareClusterValidationCheckStatusResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GkeonpremVmwareClusterValidationCheckStatusResultOutputReference <a name="GkeonpremVmwareClusterValidationCheckStatusResultOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterValidationCheckStatusResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.details">Details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.options">Options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResult">GkeonpremVmwareClusterValidationCheckStatusResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.details"></a>

```csharp
public string Details { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.options"></a>

```csharp
public string Options { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterValidationCheckStatusResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResult">GkeonpremVmwareClusterValidationCheckStatusResult</a>

---


### GkeonpremVmwareClusterVcenterOutputReference <a name="GkeonpremVmwareClusterVcenterOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareClusterVcenterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetCaCertData">ResetCaCertData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetCluster">ResetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetDatastore">ResetDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetResourcePool">ResetResourcePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetStoragePolicyName">ResetStoragePolicyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaCertData` <a name="ResetCaCertData" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetCaCertData"></a>

```csharp
private void ResetCaCertData()
```

##### `ResetCluster` <a name="ResetCluster" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetCluster"></a>

```csharp
private void ResetCluster()
```

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetDatacenter"></a>

```csharp
private void ResetDatacenter()
```

##### `ResetDatastore` <a name="ResetDatastore" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetDatastore"></a>

```csharp
private void ResetDatastore()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetFolder"></a>

```csharp
private void ResetFolder()
```

##### `ResetResourcePool` <a name="ResetResourcePool" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetResourcePool"></a>

```csharp
private void ResetResourcePool()
```

##### `ResetStoragePolicyName` <a name="ResetStoragePolicyName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetStoragePolicyName"></a>

```csharp
private void ResetStoragePolicyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.caCertDataInput">CaCertDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.datacenterInput">DatacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.datastoreInput">DatastoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.resourcePoolInput">ResourcePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.storagePolicyNameInput">StoragePolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.caCertData">CaCertData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.datastore">Datastore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.resourcePool">ResourcePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.storagePolicyName">StoragePolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter">GkeonpremVmwareClusterVcenter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `CaCertDataInput`<sup>Optional</sup> <a name="CaCertDataInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.caCertDataInput"></a>

```csharp
public string CaCertDataInput { get; }
```

- *Type:* string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.datacenterInput"></a>

```csharp
public string DatacenterInput { get; }
```

- *Type:* string

---

##### `DatastoreInput`<sup>Optional</sup> <a name="DatastoreInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.datastoreInput"></a>

```csharp
public string DatastoreInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `ResourcePoolInput`<sup>Optional</sup> <a name="ResourcePoolInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.resourcePoolInput"></a>

```csharp
public string ResourcePoolInput { get; }
```

- *Type:* string

---

##### `StoragePolicyNameInput`<sup>Optional</sup> <a name="StoragePolicyNameInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.storagePolicyNameInput"></a>

```csharp
public string StoragePolicyNameInput { get; }
```

- *Type:* string

---

##### `CaCertData`<sup>Required</sup> <a name="CaCertData" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.caCertData"></a>

```csharp
public string CaCertData { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.datastore"></a>

```csharp
public string Datastore { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `ResourcePool`<sup>Required</sup> <a name="ResourcePool" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.resourcePool"></a>

```csharp
public string ResourcePool { get; }
```

- *Type:* string

---

##### `StoragePolicyName`<sup>Required</sup> <a name="StoragePolicyName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.storagePolicyName"></a>

```csharp
public string StoragePolicyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareClusterVcenter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter">GkeonpremVmwareClusterVcenter</a>

---



