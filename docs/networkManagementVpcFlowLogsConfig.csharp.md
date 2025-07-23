# `networkManagementVpcFlowLogsConfig` Submodule <a name="`networkManagementVpcFlowLogsConfig` Submodule" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagementVpcFlowLogsConfig <a name="NetworkManagementVpcFlowLogsConfig" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config google_network_management_vpc_flow_logs_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkManagementVpcFlowLogsConfig(Construct Scope, string Id, NetworkManagementVpcFlowLogsConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig">NetworkManagementVpcFlowLogsConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig">NetworkManagementVpcFlowLogsConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetAggregationInterval">ResetAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetFilterExpr">ResetFilterExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetFlowSampling">ResetFlowSampling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetInterconnectAttachment">ResetInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetMetadataFields">ResetMetadataFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetVpnTunnel">ResetVpnTunnel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkManagementVpcFlowLogsConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts">NetworkManagementVpcFlowLogsConfigTimeouts</a>

---

##### `ResetAggregationInterval` <a name="ResetAggregationInterval" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetAggregationInterval"></a>

```csharp
private void ResetAggregationInterval()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFilterExpr` <a name="ResetFilterExpr" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetFilterExpr"></a>

```csharp
private void ResetFilterExpr()
```

##### `ResetFlowSampling` <a name="ResetFlowSampling" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetFlowSampling"></a>

```csharp
private void ResetFlowSampling()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInterconnectAttachment` <a name="ResetInterconnectAttachment" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetInterconnectAttachment"></a>

```csharp
private void ResetInterconnectAttachment()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetMetadataFields` <a name="ResetMetadataFields" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetMetadataFields"></a>

```csharp
private void ResetMetadataFields()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVpnTunnel` <a name="ResetVpnTunnel" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetVpnTunnel"></a>

```csharp
private void ResetVpnTunnel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkManagementVpcFlowLogsConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkManagementVpcFlowLogsConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkManagementVpcFlowLogsConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkManagementVpcFlowLogsConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkManagementVpcFlowLogsConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkManagementVpcFlowLogsConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkManagementVpcFlowLogsConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkManagementVpcFlowLogsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkManagementVpcFlowLogsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference">NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.aggregationIntervalInput">AggregationIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.filterExprInput">FilterExprInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.flowSamplingInput">FlowSamplingInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.interconnectAttachmentInput">InterconnectAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadataFieldsInput">MetadataFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadataInput">MetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput">VpcFlowLogsConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpnTunnelInput">VpnTunnelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.aggregationInterval">AggregationInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.filterExpr">FilterExpr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.flowSampling">FlowSampling</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.interconnectAttachment">InterconnectAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadataFields">MetadataFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpcFlowLogsConfigId">VpcFlowLogsConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpnTunnel">VpnTunnel</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.timeouts"></a>

```csharp
public NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference">NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AggregationIntervalInput`<sup>Optional</sup> <a name="AggregationIntervalInput" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.aggregationIntervalInput"></a>

```csharp
public string AggregationIntervalInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FilterExprInput`<sup>Optional</sup> <a name="FilterExprInput" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.filterExprInput"></a>

```csharp
public string FilterExprInput { get; }
```

- *Type:* string

---

##### `FlowSamplingInput`<sup>Optional</sup> <a name="FlowSamplingInput" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.flowSamplingInput"></a>

```csharp
public double FlowSamplingInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InterconnectAttachmentInput`<sup>Optional</sup> <a name="InterconnectAttachmentInput" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.interconnectAttachmentInput"></a>

```csharp
public string InterconnectAttachmentInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MetadataFieldsInput`<sup>Optional</sup> <a name="MetadataFieldsInput" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadataFieldsInput"></a>

```csharp
public string[] MetadataFieldsInput { get; }
```

- *Type:* string[]

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadataInput"></a>

```csharp
public string MetadataInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpcFlowLogsConfigIdInput`<sup>Optional</sup> <a name="VpcFlowLogsConfigIdInput" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput"></a>

```csharp
public string VpcFlowLogsConfigIdInput { get; }
```

- *Type:* string

---

##### `VpnTunnelInput`<sup>Optional</sup> <a name="VpnTunnelInput" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpnTunnelInput"></a>

```csharp
public string VpnTunnelInput { get; }
```

- *Type:* string

---

##### `AggregationInterval`<sup>Required</sup> <a name="AggregationInterval" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.aggregationInterval"></a>

```csharp
public string AggregationInterval { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FilterExpr`<sup>Required</sup> <a name="FilterExpr" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.filterExpr"></a>

```csharp
public string FilterExpr { get; }
```

- *Type:* string

---

##### `FlowSampling`<sup>Required</sup> <a name="FlowSampling" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.flowSampling"></a>

```csharp
public double FlowSampling { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InterconnectAttachment`<sup>Required</sup> <a name="InterconnectAttachment" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.interconnectAttachment"></a>

```csharp
public string InterconnectAttachment { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `MetadataFields`<sup>Required</sup> <a name="MetadataFields" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadataFields"></a>

```csharp
public string[] MetadataFields { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `VpcFlowLogsConfigId`<sup>Required</sup> <a name="VpcFlowLogsConfigId" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpcFlowLogsConfigId"></a>

```csharp
public string VpcFlowLogsConfigId { get; }
```

- *Type:* string

---

##### `VpnTunnel`<sup>Required</sup> <a name="VpnTunnel" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpnTunnel"></a>

```csharp
public string VpnTunnel { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagementVpcFlowLogsConfigConfig <a name="NetworkManagementVpcFlowLogsConfigConfig" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkManagementVpcFlowLogsConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string VpcFlowLogsConfigId,
    string AggregationInterval = null,
    string Description = null,
    string FilterExpr = null,
    double FlowSampling = null,
    string Id = null,
    string InterconnectAttachment = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Metadata = null,
    string[] MetadataFields = null,
    string Project = null,
    string State = null,
    NetworkManagementVpcFlowLogsConfigTimeouts Timeouts = null,
    string VpnTunnel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId">VpcFlowLogsConfigId</a></code> | <code>string</code> | Required. ID of the 'VpcFlowLogsConfig'. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.aggregationInterval">AggregationInterval</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.description">Description</a></code> | <code>string</code> | Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.filterExpr">FilterExpr</a></code> | <code>string</code> | Optional. Export filter used to define which VPC Flow Logs should be logged. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.flowSampling">FlowSampling</a></code> | <code>double</code> | Optional. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#id NetworkManagementVpcFlowLogsConfig#id}. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.interconnectAttachment">InterconnectAttachment</a></code> | <code>string</code> | Traffic will be logged from the Interconnect Attachment. Format: projects/{project_id}/regions/{region}/interconnectAttachments/{name}. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.metadata">Metadata</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.metadataFields">MetadataFields</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#project NetworkManagementVpcFlowLogsConfig#project}. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.state">State</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts">NetworkManagementVpcFlowLogsConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.vpnTunnel">VpnTunnel</a></code> | <code>string</code> | Traffic will be logged from the VPN Tunnel. Format: projects/{project_id}/regions/{region}/vpnTunnels/{name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'.

It identifies the resource
within its parent collection as described in https://google.aip.dev/122. See documentation
for resource type 'networkmanagement.googleapis.com/VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#location NetworkManagementVpcFlowLogsConfig#location}

---

##### `VpcFlowLogsConfigId`<sup>Required</sup> <a name="VpcFlowLogsConfigId" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId"></a>

```csharp
public string VpcFlowLogsConfigId { get; set; }
```

- *Type:* string

Required. ID of the 'VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#vpc_flow_logs_config_id NetworkManagementVpcFlowLogsConfig#vpc_flow_logs_config_id}

---

##### `AggregationInterval`<sup>Optional</sup> <a name="AggregationInterval" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.aggregationInterval"></a>

```csharp
public string AggregationInterval { get; set; }
```

- *Type:* string

Optional.

The aggregation interval for the logs. Default value is
INTERVAL_5_SEC.   Possible values:  AGGREGATION_INTERVAL_UNSPECIFIED INTERVAL_5_SEC INTERVAL_30_SEC INTERVAL_1_MIN INTERVAL_5_MIN INTERVAL_10_MIN INTERVAL_15_MIN"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#aggregation_interval NetworkManagementVpcFlowLogsConfig#aggregation_interval}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#description NetworkManagementVpcFlowLogsConfig#description}

---

##### `FilterExpr`<sup>Optional</sup> <a name="FilterExpr" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.filterExpr"></a>

```csharp
public string FilterExpr { get; set; }
```

- *Type:* string

Optional. Export filter used to define which VPC Flow Logs should be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#filter_expr NetworkManagementVpcFlowLogsConfig#filter_expr}

---

##### `FlowSampling`<sup>Optional</sup> <a name="FlowSampling" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.flowSampling"></a>

```csharp
public double FlowSampling { get; set; }
```

- *Type:* double

Optional.

The value of the field must be in (0, 1]. The sampling rate
of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the
sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use
the state field instead. Default value is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#flow_sampling NetworkManagementVpcFlowLogsConfig#flow_sampling}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#id NetworkManagementVpcFlowLogsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InterconnectAttachment`<sup>Optional</sup> <a name="InterconnectAttachment" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.interconnectAttachment"></a>

```csharp
public string InterconnectAttachment { get; set; }
```

- *Type:* string

Traffic will be logged from the Interconnect Attachment. Format: projects/{project_id}/regions/{region}/interconnectAttachments/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#interconnect_attachment NetworkManagementVpcFlowLogsConfig#interconnect_attachment}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#labels NetworkManagementVpcFlowLogsConfig#labels}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.metadata"></a>

```csharp
public string Metadata { get; set; }
```

- *Type:* string

Optional.

Configures whether all, none or a subset of metadata fields
should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA.
Possible values:  METADATA_UNSPECIFIED INCLUDE_ALL_METADATA EXCLUDE_ALL_METADATA CUSTOM_METADATA

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#metadata NetworkManagementVpcFlowLogsConfig#metadata}

---

##### `MetadataFields`<sup>Optional</sup> <a name="MetadataFields" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.metadataFields"></a>

```csharp
public string[] MetadataFields { get; set; }
```

- *Type:* string[]

Optional.

Custom metadata fields to include in the reported VPC flow
logs. Can only be specified if "metadata" was set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#metadata_fields NetworkManagementVpcFlowLogsConfig#metadata_fields}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#project NetworkManagementVpcFlowLogsConfig#project}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Optional.

The state of the VPC Flow Log configuration. Default value
is ENABLED. When creating a new configuration, it must be enabled.   Possible

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#state NetworkManagementVpcFlowLogsConfig#state}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.timeouts"></a>

```csharp
public NetworkManagementVpcFlowLogsConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts">NetworkManagementVpcFlowLogsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#timeouts NetworkManagementVpcFlowLogsConfig#timeouts}

---

##### `VpnTunnel`<sup>Optional</sup> <a name="VpnTunnel" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.vpnTunnel"></a>

```csharp
public string VpnTunnel { get; set; }
```

- *Type:* string

Traffic will be logged from the VPN Tunnel. Format: projects/{project_id}/regions/{region}/vpnTunnels/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#vpn_tunnel NetworkManagementVpcFlowLogsConfig#vpn_tunnel}

---

### NetworkManagementVpcFlowLogsConfigTimeouts <a name="NetworkManagementVpcFlowLogsConfigTimeouts" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkManagementVpcFlowLogsConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#create NetworkManagementVpcFlowLogsConfig#create}. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#delete NetworkManagementVpcFlowLogsConfig#delete}. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#update NetworkManagementVpcFlowLogsConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#create NetworkManagementVpcFlowLogsConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#delete NetworkManagementVpcFlowLogsConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_management_vpc_flow_logs_config#update NetworkManagementVpcFlowLogsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference <a name="NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



