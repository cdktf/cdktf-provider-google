# `dataLossPreventionDiscoveryConfig` Submodule <a name="`dataLossPreventionDiscoveryConfig` Submodule" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLossPreventionDiscoveryConfig <a name="DataLossPreventionDiscoveryConfig" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config google_data_loss_prevention_discovery_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfig(Construct Scope, string Id, DataLossPreventionDiscoveryConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig">DataLossPreventionDiscoveryConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig">DataLossPreventionDiscoveryConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.putOrgConfig">PutOrgConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.resetInspectTemplates">ResetInspectTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.resetOrgConfig">ResetOrgConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.resetTargets">ResetTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActions` <a name="PutActions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.putActions"></a>

```csharp
private void PutActions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.putActions.parameter.value"></a>

- *Type:* object

---

##### `PutOrgConfig` <a name="PutOrgConfig" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.putOrgConfig"></a>

```csharp
private void PutOrgConfig(DataLossPreventionDiscoveryConfigOrgConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.putOrgConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfig">DataLossPreventionDiscoveryConfigOrgConfig</a>

---

##### `PutTargets` <a name="PutTargets" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.putTargets"></a>

```csharp
private void PutTargets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.putTargets.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(DataLossPreventionDiscoveryConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeouts">DataLossPreventionDiscoveryConfigTimeouts</a>

---

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.resetActions"></a>

```csharp
private void ResetActions()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInspectTemplates` <a name="ResetInspectTemplates" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.resetInspectTemplates"></a>

```csharp
private void ResetInspectTemplates()
```

##### `ResetOrgConfig` <a name="ResetOrgConfig" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.resetOrgConfig"></a>

```csharp
private void ResetOrgConfig()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.resetTargets"></a>

```csharp
private void ResetTargets()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataLossPreventionDiscoveryConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataLossPreventionDiscoveryConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataLossPreventionDiscoveryConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataLossPreventionDiscoveryConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataLossPreventionDiscoveryConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataLossPreventionDiscoveryConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataLossPreventionDiscoveryConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataLossPreventionDiscoveryConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataLossPreventionDiscoveryConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList">DataLossPreventionDiscoveryConfigActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.errors">Errors</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList">DataLossPreventionDiscoveryConfigErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.lastRunTime">LastRunTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.orgConfig">OrgConfig</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference">DataLossPreventionDiscoveryConfigOrgConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.targets">Targets</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList">DataLossPreventionDiscoveryConfigTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference">DataLossPreventionDiscoveryConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.actionsInput">ActionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.inspectTemplatesInput">InspectTemplatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.orgConfigInput">OrgConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfig">DataLossPreventionDiscoveryConfigOrgConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.targetsInput">TargetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.inspectTemplates">InspectTemplates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.actions"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsList Actions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList">DataLossPreventionDiscoveryConfigActionsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.errors"></a>

```csharp
public DataLossPreventionDiscoveryConfigErrorsList Errors { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList">DataLossPreventionDiscoveryConfigErrorsList</a>

---

##### `LastRunTime`<sup>Required</sup> <a name="LastRunTime" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.lastRunTime"></a>

```csharp
public string LastRunTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrgConfig`<sup>Required</sup> <a name="OrgConfig" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.orgConfig"></a>

```csharp
public DataLossPreventionDiscoveryConfigOrgConfigOutputReference OrgConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference">DataLossPreventionDiscoveryConfigOrgConfigOutputReference</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.targets"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsList Targets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList">DataLossPreventionDiscoveryConfigTargetsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.timeouts"></a>

```csharp
public DataLossPreventionDiscoveryConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference">DataLossPreventionDiscoveryConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.actionsInput"></a>

```csharp
public object ActionsInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InspectTemplatesInput`<sup>Optional</sup> <a name="InspectTemplatesInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.inspectTemplatesInput"></a>

```csharp
public string[] InspectTemplatesInput { get; }
```

- *Type:* string[]

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OrgConfigInput`<sup>Optional</sup> <a name="OrgConfigInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.orgConfigInput"></a>

```csharp
public DataLossPreventionDiscoveryConfigOrgConfig OrgConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfig">DataLossPreventionDiscoveryConfigOrgConfig</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.targetsInput"></a>

```csharp
public object TargetsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InspectTemplates`<sup>Required</sup> <a name="InspectTemplates" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.inspectTemplates"></a>

```csharp
public string[] InspectTemplates { get; }
```

- *Type:* string[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLossPreventionDiscoveryConfigActions <a name="DataLossPreventionDiscoveryConfigActions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigActions {
    DataLossPreventionDiscoveryConfigActionsExportData ExportData = null,
    DataLossPreventionDiscoveryConfigActionsPubSubNotification PubSubNotification = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActions.property.exportData">ExportData</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportData">DataLossPreventionDiscoveryConfigActionsExportData</a></code> | export_data block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActions.property.pubSubNotification">PubSubNotification</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotification">DataLossPreventionDiscoveryConfigActionsPubSubNotification</a></code> | pub_sub_notification block. |

---

##### `ExportData`<sup>Optional</sup> <a name="ExportData" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActions.property.exportData"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsExportData ExportData { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportData">DataLossPreventionDiscoveryConfigActionsExportData</a>

export_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#export_data DataLossPreventionDiscoveryConfig#export_data}

---

##### `PubSubNotification`<sup>Optional</sup> <a name="PubSubNotification" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActions.property.pubSubNotification"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsPubSubNotification PubSubNotification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotification">DataLossPreventionDiscoveryConfigActionsPubSubNotification</a>

pub_sub_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#pub_sub_notification DataLossPreventionDiscoveryConfig#pub_sub_notification}

---

### DataLossPreventionDiscoveryConfigActionsExportData <a name="DataLossPreventionDiscoveryConfigActionsExportData" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigActionsExportData {
    DataLossPreventionDiscoveryConfigActionsExportDataProfileTable ProfileTable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportData.property.profileTable">ProfileTable</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTable">DataLossPreventionDiscoveryConfigActionsExportDataProfileTable</a></code> | profile_table block. |

---

##### `ProfileTable`<sup>Optional</sup> <a name="ProfileTable" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportData.property.profileTable"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsExportDataProfileTable ProfileTable { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTable">DataLossPreventionDiscoveryConfigActionsExportDataProfileTable</a>

profile_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#profile_table DataLossPreventionDiscoveryConfig#profile_table}

---

### DataLossPreventionDiscoveryConfigActionsExportDataProfileTable <a name="DataLossPreventionDiscoveryConfigActionsExportDataProfileTable" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigActionsExportDataProfileTable {
    string DatasetId = null,
    string ProjectId = null,
    string TableId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTable.property.datasetId">DatasetId</a></code> | <code>string</code> | Dataset Id of the table. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTable.property.projectId">ProjectId</a></code> | <code>string</code> | The Google Cloud Platform project ID of the project containing the table. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTable.property.tableId">TableId</a></code> | <code>string</code> | Name of the table. |

---

##### `DatasetId`<sup>Optional</sup> <a name="DatasetId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTable.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

Dataset Id of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#dataset_id DataLossPreventionDiscoveryConfig#dataset_id}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTable.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The Google Cloud Platform project ID of the project containing the table.

If omitted, the project ID is inferred from the API call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#project_id DataLossPreventionDiscoveryConfig#project_id}

---

##### `TableId`<sup>Optional</sup> <a name="TableId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTable.property.tableId"></a>

```csharp
public string TableId { get; set; }
```

- *Type:* string

Name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#table_id DataLossPreventionDiscoveryConfig#table_id}

---

### DataLossPreventionDiscoveryConfigActionsPubSubNotification <a name="DataLossPreventionDiscoveryConfigActionsPubSubNotification" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigActionsPubSubNotification {
    string DetailOfMessage = null,
    string Event = null,
    DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition PubsubCondition = null,
    string Topic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotification.property.detailOfMessage">DetailOfMessage</a></code> | <code>string</code> | How much data to include in the pub/sub message. Possible values: ["TABLE_PROFILE", "RESOURCE_NAME"]. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotification.property.event">Event</a></code> | <code>string</code> | The type of event that triggers a Pub/Sub. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotification.property.pubsubCondition">PubsubCondition</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition">DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition</a></code> | pubsub_condition block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotification.property.topic">Topic</a></code> | <code>string</code> | Cloud Pub/Sub topic to send notifications to. Format is projects/{project}/topics/{topic}. |

---

##### `DetailOfMessage`<sup>Optional</sup> <a name="DetailOfMessage" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotification.property.detailOfMessage"></a>

```csharp
public string DetailOfMessage { get; set; }
```

- *Type:* string

How much data to include in the pub/sub message. Possible values: ["TABLE_PROFILE", "RESOURCE_NAME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#detail_of_message DataLossPreventionDiscoveryConfig#detail_of_message}

---

##### `Event`<sup>Optional</sup> <a name="Event" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotification.property.event"></a>

```csharp
public string Event { get; set; }
```

- *Type:* string

The type of event that triggers a Pub/Sub.

At most one PubSubNotification per EventType is permitted. Possible values: ["NEW_PROFILE", "CHANGED_PROFILE", "SCORE_INCREASED", "ERROR_CHANGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#event DataLossPreventionDiscoveryConfig#event}

---

##### `PubsubCondition`<sup>Optional</sup> <a name="PubsubCondition" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotification.property.pubsubCondition"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition PubsubCondition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition">DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition</a>

pubsub_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#pubsub_condition DataLossPreventionDiscoveryConfig#pubsub_condition}

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotification.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

Cloud Pub/Sub topic to send notifications to. Format is projects/{project}/topics/{topic}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#topic DataLossPreventionDiscoveryConfig#topic}

---

### DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition <a name="DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition {
    DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions Expressions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition.property.expressions">Expressions</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions">DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions</a></code> | expressions block. |

---

##### `Expressions`<sup>Optional</sup> <a name="Expressions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition.property.expressions"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions Expressions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions">DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions</a>

expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#expressions DataLossPreventionDiscoveryConfig#expressions}

---

### DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions <a name="DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions {
    object Conditions = null,
    string LogicalOperator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions.property.conditions">Conditions</a></code> | <code>object</code> | conditions block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions.property.logicalOperator">LogicalOperator</a></code> | <code>string</code> | The operator to apply to the collection of conditions Possible values: ["OR", "AND"]. |

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions.property.conditions"></a>

```csharp
public object Conditions { get; set; }
```

- *Type:* object

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#conditions DataLossPreventionDiscoveryConfig#conditions}

---

##### `LogicalOperator`<sup>Optional</sup> <a name="LogicalOperator" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions.property.logicalOperator"></a>

```csharp
public string LogicalOperator { get; set; }
```

- *Type:* string

The operator to apply to the collection of conditions Possible values: ["OR", "AND"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#logical_operator DataLossPreventionDiscoveryConfig#logical_operator}

---

### DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions <a name="DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions {
    string MinimumRiskScore = null,
    string MinimumSensitivityScore = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions.property.minimumRiskScore">MinimumRiskScore</a></code> | <code>string</code> | The minimum data risk score that triggers the condition. Possible values: ["HIGH", "MEDIUM_OR_HIGH"]. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions.property.minimumSensitivityScore">MinimumSensitivityScore</a></code> | <code>string</code> | The minimum sensitivity level that triggers the condition. Possible values: ["HIGH", "MEDIUM_OR_HIGH"]. |

---

##### `MinimumRiskScore`<sup>Optional</sup> <a name="MinimumRiskScore" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions.property.minimumRiskScore"></a>

```csharp
public string MinimumRiskScore { get; set; }
```

- *Type:* string

The minimum data risk score that triggers the condition. Possible values: ["HIGH", "MEDIUM_OR_HIGH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#minimum_risk_score DataLossPreventionDiscoveryConfig#minimum_risk_score}

---

##### `MinimumSensitivityScore`<sup>Optional</sup> <a name="MinimumSensitivityScore" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions.property.minimumSensitivityScore"></a>

```csharp
public string MinimumSensitivityScore { get; set; }
```

- *Type:* string

The minimum sensitivity level that triggers the condition. Possible values: ["HIGH", "MEDIUM_OR_HIGH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#minimum_sensitivity_score DataLossPreventionDiscoveryConfig#minimum_sensitivity_score}

---

### DataLossPreventionDiscoveryConfigConfig <a name="DataLossPreventionDiscoveryConfigConfig" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Parent,
    object Actions = null,
    string DisplayName = null,
    string Id = null,
    string[] InspectTemplates = null,
    DataLossPreventionDiscoveryConfigOrgConfig OrgConfig = null,
    string Status = null,
    object Targets = null,
    DataLossPreventionDiscoveryConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.location">Location</a></code> | <code>string</code> | Location to create the discovery config in. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.parent">Parent</a></code> | <code>string</code> | The parent of the discovery config in any of the following formats:. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.actions">Actions</a></code> | <code>object</code> | actions block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display Name (max 1000 Chars). |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#id DataLossPreventionDiscoveryConfig#id}. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.inspectTemplates">InspectTemplates</a></code> | <code>string[]</code> | Detection logic for profile generation. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.orgConfig">OrgConfig</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfig">DataLossPreventionDiscoveryConfigOrgConfig</a></code> | org_config block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.status">Status</a></code> | <code>string</code> | Required. A status for this configuration Possible values: ["RUNNING", "PAUSED"]. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.targets">Targets</a></code> | <code>object</code> | targets block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeouts">DataLossPreventionDiscoveryConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location to create the discovery config in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#location DataLossPreventionDiscoveryConfig#location}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The parent of the discovery config in any of the following formats:.

* 'projects/{{project}}/locations/{{location}}'
* 'organizations/{{organization_id}}/locations/{{location}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#parent DataLossPreventionDiscoveryConfig#parent}

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.actions"></a>

```csharp
public object Actions { get; set; }
```

- *Type:* object

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#actions DataLossPreventionDiscoveryConfig#actions}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display Name (max 1000 Chars).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#display_name DataLossPreventionDiscoveryConfig#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#id DataLossPreventionDiscoveryConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InspectTemplates`<sup>Optional</sup> <a name="InspectTemplates" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.inspectTemplates"></a>

```csharp
public string[] InspectTemplates { get; set; }
```

- *Type:* string[]

Detection logic for profile generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#inspect_templates DataLossPreventionDiscoveryConfig#inspect_templates}

---

##### `OrgConfig`<sup>Optional</sup> <a name="OrgConfig" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.orgConfig"></a>

```csharp
public DataLossPreventionDiscoveryConfigOrgConfig OrgConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfig">DataLossPreventionDiscoveryConfigOrgConfig</a>

org_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#org_config DataLossPreventionDiscoveryConfig#org_config}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Required. A status for this configuration Possible values: ["RUNNING", "PAUSED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#status DataLossPreventionDiscoveryConfig#status}

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.targets"></a>

```csharp
public object Targets { get; set; }
```

- *Type:* object

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#targets DataLossPreventionDiscoveryConfig#targets}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigConfig.property.timeouts"></a>

```csharp
public DataLossPreventionDiscoveryConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeouts">DataLossPreventionDiscoveryConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#timeouts DataLossPreventionDiscoveryConfig#timeouts}

---

### DataLossPreventionDiscoveryConfigErrors <a name="DataLossPreventionDiscoveryConfigErrors" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigErrors {

};
```


### DataLossPreventionDiscoveryConfigErrorsDetails <a name="DataLossPreventionDiscoveryConfigErrorsDetails" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigErrorsDetails {

};
```


### DataLossPreventionDiscoveryConfigOrgConfig <a name="DataLossPreventionDiscoveryConfigOrgConfig" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigOrgConfig {
    DataLossPreventionDiscoveryConfigOrgConfigLocation Location = null,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfig.property.location">Location</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocation">DataLossPreventionDiscoveryConfigOrgConfigLocation</a></code> | location block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The project that will run the scan. |

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfig.property.location"></a>

```csharp
public DataLossPreventionDiscoveryConfigOrgConfigLocation Location { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocation">DataLossPreventionDiscoveryConfigOrgConfigLocation</a>

location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#location DataLossPreventionDiscoveryConfig#location}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The project that will run the scan.

The DLP service account that exists within this project must have access to all resources that are profiled, and the cloud DLP API must be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#project_id DataLossPreventionDiscoveryConfig#project_id}

---

### DataLossPreventionDiscoveryConfigOrgConfigLocation <a name="DataLossPreventionDiscoveryConfigOrgConfigLocation" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigOrgConfigLocation {
    string FolderId = null,
    string OrganizationId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocation.property.folderId">FolderId</a></code> | <code>string</code> | The ID for the folder within an organization to scan. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocation.property.organizationId">OrganizationId</a></code> | <code>string</code> | The ID of an organization to scan. |

---

##### `FolderId`<sup>Optional</sup> <a name="FolderId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocation.property.folderId"></a>

```csharp
public string FolderId { get; set; }
```

- *Type:* string

The ID for the folder within an organization to scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#folder_id DataLossPreventionDiscoveryConfig#folder_id}

---

##### `OrganizationId`<sup>Optional</sup> <a name="OrganizationId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocation.property.organizationId"></a>

```csharp
public string OrganizationId { get; set; }
```

- *Type:* string

The ID of an organization to scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#organization_id DataLossPreventionDiscoveryConfig#organization_id}

---

### DataLossPreventionDiscoveryConfigTargets <a name="DataLossPreventionDiscoveryConfigTargets" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargets {
    DataLossPreventionDiscoveryConfigTargetsBigQueryTarget BigQueryTarget = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargets.property.bigQueryTarget">BigQueryTarget</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTarget">DataLossPreventionDiscoveryConfigTargetsBigQueryTarget</a></code> | big_query_target block. |

---

##### `BigQueryTarget`<sup>Optional</sup> <a name="BigQueryTarget" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargets.property.bigQueryTarget"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTarget BigQueryTarget { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTarget">DataLossPreventionDiscoveryConfigTargetsBigQueryTarget</a>

big_query_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#big_query_target DataLossPreventionDiscoveryConfig#big_query_target}

---

### DataLossPreventionDiscoveryConfigTargetsBigQueryTarget <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTarget" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTarget {
    DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence Cadence = null,
    DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions Conditions = null,
    DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled Disabled = null,
    DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter Filter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTarget.property.cadence">Cadence</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence</a></code> | cadence block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTarget.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions</a></code> | conditions block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTarget.property.disabled">Disabled</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled</a></code> | disabled block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTarget.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter</a></code> | filter block. |

---

##### `Cadence`<sup>Optional</sup> <a name="Cadence" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTarget.property.cadence"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence Cadence { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence</a>

cadence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#cadence DataLossPreventionDiscoveryConfig#cadence}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTarget.property.conditions"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions Conditions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#conditions DataLossPreventionDiscoveryConfig#conditions}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTarget.property.disabled"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled Disabled { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled</a>

disabled block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#disabled DataLossPreventionDiscoveryConfig#disabled}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTarget.property.filter"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#filter DataLossPreventionDiscoveryConfig#filter}

---

### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence {
    DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence SchemaModifiedCadence = null,
    DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence TableModifiedCadence = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence.property.schemaModifiedCadence">SchemaModifiedCadence</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence</a></code> | schema_modified_cadence block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence.property.tableModifiedCadence">TableModifiedCadence</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence</a></code> | table_modified_cadence block. |

---

##### `SchemaModifiedCadence`<sup>Optional</sup> <a name="SchemaModifiedCadence" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence.property.schemaModifiedCadence"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence SchemaModifiedCadence { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence</a>

schema_modified_cadence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#schema_modified_cadence DataLossPreventionDiscoveryConfig#schema_modified_cadence}

---

##### `TableModifiedCadence`<sup>Optional</sup> <a name="TableModifiedCadence" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence.property.tableModifiedCadence"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence TableModifiedCadence { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence</a>

table_modified_cadence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#table_modified_cadence DataLossPreventionDiscoveryConfig#table_modified_cadence}

---

### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence {
    string Frequency = null,
    string[] Types = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence.property.frequency">Frequency</a></code> | <code>string</code> | How frequently profiles may be updated when schemas are modified. Default to monthly Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"]. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence.property.types">Types</a></code> | <code>string[]</code> | The type of events to consider when deciding if the table's schema has been modified and should have the profile updated. |

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

How frequently profiles may be updated when schemas are modified. Default to monthly Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#frequency DataLossPreventionDiscoveryConfig#frequency}

---

##### `Types`<sup>Optional</sup> <a name="Types" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence.property.types"></a>

```csharp
public string[] Types { get; set; }
```

- *Type:* string[]

The type of events to consider when deciding if the table's schema has been modified and should have the profile updated.

Defaults to NEW_COLUMN. Possible values: ["SCHEMA_NEW_COLUMNS", "SCHEMA_REMOVED_COLUMNS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#types DataLossPreventionDiscoveryConfig#types}

---

### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence {
    string Frequency = null,
    string[] Types = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence.property.frequency">Frequency</a></code> | <code>string</code> | How frequently data profiles can be updated when tables are modified. Defaults to never. Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"]. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence.property.types">Types</a></code> | <code>string[]</code> | The type of events to consider when deciding if the table has been modified and should have the profile updated. |

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

How frequently data profiles can be updated when tables are modified. Defaults to never. Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#frequency DataLossPreventionDiscoveryConfig#frequency}

---

##### `Types`<sup>Optional</sup> <a name="Types" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence.property.types"></a>

```csharp
public string[] Types { get; set; }
```

- *Type:* string[]

The type of events to consider when deciding if the table has been modified and should have the profile updated.

Defaults to MODIFIED_TIMESTAMP Possible values: ["TABLE_MODIFIED_TIMESTAMP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#types DataLossPreventionDiscoveryConfig#types}

---

### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions {
    string CreatedAfter = null,
    DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions OrConditions = null,
    string TypeCollection = null,
    DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes Types = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions.property.createdAfter">CreatedAfter</a></code> | <code>string</code> | A timestamp in RFC3339 UTC "Zulu" format with nanosecond resolution and upto nine fractional digits. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions.property.orConditions">OrConditions</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions</a></code> | or_conditions block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions.property.typeCollection">TypeCollection</a></code> | <code>string</code> | Restrict discovery to categories of table types. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions.property.types">Types</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes</a></code> | types block. |

---

##### `CreatedAfter`<sup>Optional</sup> <a name="CreatedAfter" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions.property.createdAfter"></a>

```csharp
public string CreatedAfter { get; set; }
```

- *Type:* string

A timestamp in RFC3339 UTC "Zulu" format with nanosecond resolution and upto nine fractional digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#created_after DataLossPreventionDiscoveryConfig#created_after}

---

##### `OrConditions`<sup>Optional</sup> <a name="OrConditions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions.property.orConditions"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions OrConditions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions</a>

or_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#or_conditions DataLossPreventionDiscoveryConfig#or_conditions}

---

##### `TypeCollection`<sup>Optional</sup> <a name="TypeCollection" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions.property.typeCollection"></a>

```csharp
public string TypeCollection { get; set; }
```

- *Type:* string

Restrict discovery to categories of table types.

Currently view, materialized view, snapshot and non-biglake external tables are supported. Possible values: ["BIG_QUERY_COLLECTION_ALL_TYPES", "BIG_QUERY_COLLECTION_ONLY_SUPPORTED_TYPES"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#type_collection DataLossPreventionDiscoveryConfig#type_collection}

---

##### `Types`<sup>Optional</sup> <a name="Types" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions.property.types"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes Types { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes</a>

types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#types DataLossPreventionDiscoveryConfig#types}

---

### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions {
    string MinAge = null,
    double MinRowCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions.property.minAge">MinAge</a></code> | <code>string</code> | Duration format. The minimum age a table must have before Cloud DLP can profile it. Value greater than 1. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions.property.minRowCount">MinRowCount</a></code> | <code>double</code> | Minimum number of rows that should be present before Cloud DLP profiles as a table. |

---

##### `MinAge`<sup>Optional</sup> <a name="MinAge" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions.property.minAge"></a>

```csharp
public string MinAge { get; set; }
```

- *Type:* string

Duration format. The minimum age a table must have before Cloud DLP can profile it. Value greater than 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#min_age DataLossPreventionDiscoveryConfig#min_age}

---

##### `MinRowCount`<sup>Optional</sup> <a name="MinRowCount" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions.property.minRowCount"></a>

```csharp
public double MinRowCount { get; set; }
```

- *Type:* double

Minimum number of rows that should be present before Cloud DLP profiles as a table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#min_row_count DataLossPreventionDiscoveryConfig#min_row_count}

---

### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes {
    string[] Types = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes.property.types">Types</a></code> | <code>string[]</code> | A set of BiqQuery table types Possible values: ["BIG_QUERY_TABLE_TYPE_TABLE", "BIG_QUERY_TABLE_TYPE_EXTERNAL_BIG_LAKE"]. |

---

##### `Types`<sup>Optional</sup> <a name="Types" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes.property.types"></a>

```csharp
public string[] Types { get; set; }
```

- *Type:* string[]

A set of BiqQuery table types Possible values: ["BIG_QUERY_TABLE_TYPE_TABLE", "BIG_QUERY_TABLE_TYPE_EXTERNAL_BIG_LAKE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#types DataLossPreventionDiscoveryConfig#types}

---

### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled {

};
```


### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter {
    DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables OtherTables = null,
    DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables Tables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter.property.otherTables">OtherTables</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables</a></code> | other_tables block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter.property.tables">Tables</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables</a></code> | tables block. |

---

##### `OtherTables`<sup>Optional</sup> <a name="OtherTables" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter.property.otherTables"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables OtherTables { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables</a>

other_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#other_tables DataLossPreventionDiscoveryConfig#other_tables}

---

##### `Tables`<sup>Optional</sup> <a name="Tables" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter.property.tables"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables Tables { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables</a>

tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#tables DataLossPreventionDiscoveryConfig#tables}

---

### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables {

};
```


### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables {
    DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes IncludeRegexes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables.property.includeRegexes">IncludeRegexes</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes</a></code> | include_regexes block. |

---

##### `IncludeRegexes`<sup>Optional</sup> <a name="IncludeRegexes" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables.property.includeRegexes"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes IncludeRegexes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes</a>

include_regexes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#include_regexes DataLossPreventionDiscoveryConfig#include_regexes}

---

### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes {
    object Patterns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes.property.patterns">Patterns</a></code> | <code>object</code> | patterns block. |

---

##### `Patterns`<sup>Optional</sup> <a name="Patterns" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes.property.patterns"></a>

```csharp
public object Patterns { get; set; }
```

- *Type:* object

patterns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#patterns DataLossPreventionDiscoveryConfig#patterns}

---

### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns {
    string DatasetIdRegex = null,
    string ProjectIdRegex = null,
    string TableIdRegex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns.property.datasetIdRegex">DatasetIdRegex</a></code> | <code>string</code> | if unset, this property matches all datasets. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns.property.projectIdRegex">ProjectIdRegex</a></code> | <code>string</code> | For organizations, if unset, will match all projects. Has no effect for data profile configurations created within a project. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns.property.tableIdRegex">TableIdRegex</a></code> | <code>string</code> | if unset, this property matches all tables. |

---

##### `DatasetIdRegex`<sup>Optional</sup> <a name="DatasetIdRegex" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns.property.datasetIdRegex"></a>

```csharp
public string DatasetIdRegex { get; set; }
```

- *Type:* string

if unset, this property matches all datasets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#dataset_id_regex DataLossPreventionDiscoveryConfig#dataset_id_regex}

---

##### `ProjectIdRegex`<sup>Optional</sup> <a name="ProjectIdRegex" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns.property.projectIdRegex"></a>

```csharp
public string ProjectIdRegex { get; set; }
```

- *Type:* string

For organizations, if unset, will match all projects. Has no effect for data profile configurations created within a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#project_id_regex DataLossPreventionDiscoveryConfig#project_id_regex}

---

##### `TableIdRegex`<sup>Optional</sup> <a name="TableIdRegex" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns.property.tableIdRegex"></a>

```csharp
public string TableIdRegex { get; set; }
```

- *Type:* string

if unset, this property matches all tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#table_id_regex DataLossPreventionDiscoveryConfig#table_id_regex}

---

### DataLossPreventionDiscoveryConfigTimeouts <a name="DataLossPreventionDiscoveryConfigTimeouts" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#create DataLossPreventionDiscoveryConfig#create}. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#delete DataLossPreventionDiscoveryConfig#delete}. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#update DataLossPreventionDiscoveryConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#create DataLossPreventionDiscoveryConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#delete DataLossPreventionDiscoveryConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_loss_prevention_discovery_config#update DataLossPreventionDiscoveryConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataLossPreventionDiscoveryConfigActionsExportDataOutputReference <a name="DataLossPreventionDiscoveryConfigActionsExportDataOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigActionsExportDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.putProfileTable">PutProfileTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.resetProfileTable">ResetProfileTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProfileTable` <a name="PutProfileTable" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.putProfileTable"></a>

```csharp
private void PutProfileTable(DataLossPreventionDiscoveryConfigActionsExportDataProfileTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.putProfileTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTable">DataLossPreventionDiscoveryConfigActionsExportDataProfileTable</a>

---

##### `ResetProfileTable` <a name="ResetProfileTable" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.resetProfileTable"></a>

```csharp
private void ResetProfileTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.property.profileTable">ProfileTable</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference">DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.property.profileTableInput">ProfileTableInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTable">DataLossPreventionDiscoveryConfigActionsExportDataProfileTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportData">DataLossPreventionDiscoveryConfigActionsExportData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProfileTable`<sup>Required</sup> <a name="ProfileTable" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.property.profileTable"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference ProfileTable { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference">DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference</a>

---

##### `ProfileTableInput`<sup>Optional</sup> <a name="ProfileTableInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.property.profileTableInput"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsExportDataProfileTable ProfileTableInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTable">DataLossPreventionDiscoveryConfigActionsExportDataProfileTable</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference.property.internalValue"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsExportData InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportData">DataLossPreventionDiscoveryConfigActionsExportData</a>

---


### DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference <a name="DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.resetDatasetId">ResetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.resetTableId">ResetTableId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetId` <a name="ResetDatasetId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.resetDatasetId"></a>

```csharp
private void ResetDatasetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetTableId` <a name="ResetTableId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.resetTableId"></a>

```csharp
private void ResetTableId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.tableId">TableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTable">DataLossPreventionDiscoveryConfigActionsExportDataProfileTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.tableIdInput"></a>

```csharp
public string TableIdInput { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.tableId"></a>

```csharp
public string TableId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.internalValue"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsExportDataProfileTable InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataProfileTable">DataLossPreventionDiscoveryConfigActionsExportDataProfileTable</a>

---


### DataLossPreventionDiscoveryConfigActionsList <a name="DataLossPreventionDiscoveryConfigActionsList" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.get"></a>

```csharp
private DataLossPreventionDiscoveryConfigActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataLossPreventionDiscoveryConfigActionsOutputReference <a name="DataLossPreventionDiscoveryConfigActionsOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.putExportData">PutExportData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.putPubSubNotification">PutPubSubNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.resetExportData">ResetExportData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.resetPubSubNotification">ResetPubSubNotification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExportData` <a name="PutExportData" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.putExportData"></a>

```csharp
private void PutExportData(DataLossPreventionDiscoveryConfigActionsExportData Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.putExportData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportData">DataLossPreventionDiscoveryConfigActionsExportData</a>

---

##### `PutPubSubNotification` <a name="PutPubSubNotification" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.putPubSubNotification"></a>

```csharp
private void PutPubSubNotification(DataLossPreventionDiscoveryConfigActionsPubSubNotification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.putPubSubNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotification">DataLossPreventionDiscoveryConfigActionsPubSubNotification</a>

---

##### `ResetExportData` <a name="ResetExportData" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.resetExportData"></a>

```csharp
private void ResetExportData()
```

##### `ResetPubSubNotification` <a name="ResetPubSubNotification" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.resetPubSubNotification"></a>

```csharp
private void ResetPubSubNotification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.property.exportData">ExportData</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference">DataLossPreventionDiscoveryConfigActionsExportDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.property.pubSubNotification">PubSubNotification</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference">DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.property.exportDataInput">ExportDataInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportData">DataLossPreventionDiscoveryConfigActionsExportData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.property.pubSubNotificationInput">PubSubNotificationInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotification">DataLossPreventionDiscoveryConfigActionsPubSubNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExportData`<sup>Required</sup> <a name="ExportData" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.property.exportData"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsExportDataOutputReference ExportData { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportDataOutputReference">DataLossPreventionDiscoveryConfigActionsExportDataOutputReference</a>

---

##### `PubSubNotification`<sup>Required</sup> <a name="PubSubNotification" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.property.pubSubNotification"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference PubSubNotification { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference">DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference</a>

---

##### `ExportDataInput`<sup>Optional</sup> <a name="ExportDataInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.property.exportDataInput"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsExportData ExportDataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsExportData">DataLossPreventionDiscoveryConfigActionsExportData</a>

---

##### `PubSubNotificationInput`<sup>Optional</sup> <a name="PubSubNotificationInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.property.pubSubNotificationInput"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsPubSubNotification PubSubNotificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotification">DataLossPreventionDiscoveryConfigActionsPubSubNotification</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference <a name="DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.putPubsubCondition">PutPubsubCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resetDetailOfMessage">ResetDetailOfMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resetEvent">ResetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resetPubsubCondition">ResetPubsubCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resetTopic">ResetTopic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPubsubCondition` <a name="PutPubsubCondition" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.putPubsubCondition"></a>

```csharp
private void PutPubsubCondition(DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.putPubsubCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition">DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition</a>

---

##### `ResetDetailOfMessage` <a name="ResetDetailOfMessage" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resetDetailOfMessage"></a>

```csharp
private void ResetDetailOfMessage()
```

##### `ResetEvent` <a name="ResetEvent" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resetEvent"></a>

```csharp
private void ResetEvent()
```

##### `ResetPubsubCondition` <a name="ResetPubsubCondition" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resetPubsubCondition"></a>

```csharp
private void ResetPubsubCondition()
```

##### `ResetTopic` <a name="ResetTopic" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resetTopic"></a>

```csharp
private void ResetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.pubsubCondition">PubsubCondition</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference">DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.detailOfMessageInput">DetailOfMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.eventInput">EventInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.pubsubConditionInput">PubsubConditionInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition">DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.detailOfMessage">DetailOfMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.event">Event</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotification">DataLossPreventionDiscoveryConfigActionsPubSubNotification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PubsubCondition`<sup>Required</sup> <a name="PubsubCondition" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.pubsubCondition"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference PubsubCondition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference">DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference</a>

---

##### `DetailOfMessageInput`<sup>Optional</sup> <a name="DetailOfMessageInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.detailOfMessageInput"></a>

```csharp
public string DetailOfMessageInput { get; }
```

- *Type:* string

---

##### `EventInput`<sup>Optional</sup> <a name="EventInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.eventInput"></a>

```csharp
public string EventInput { get; }
```

- *Type:* string

---

##### `PubsubConditionInput`<sup>Optional</sup> <a name="PubsubConditionInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.pubsubConditionInput"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition PubsubConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition">DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition</a>

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `DetailOfMessage`<sup>Required</sup> <a name="DetailOfMessage" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.detailOfMessage"></a>

```csharp
public string DetailOfMessage { get; }
```

- *Type:* string

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.event"></a>

```csharp
public string Event { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.internalValue"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsPubSubNotification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotification">DataLossPreventionDiscoveryConfigActionsPubSubNotification</a>

---


### DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList <a name="DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.get"></a>

```csharp
private DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference <a name="DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.resetMinimumRiskScore">ResetMinimumRiskScore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.resetMinimumSensitivityScore">ResetMinimumSensitivityScore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinimumRiskScore` <a name="ResetMinimumRiskScore" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.resetMinimumRiskScore"></a>

```csharp
private void ResetMinimumRiskScore()
```

##### `ResetMinimumSensitivityScore` <a name="ResetMinimumSensitivityScore" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.resetMinimumSensitivityScore"></a>

```csharp
private void ResetMinimumSensitivityScore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.minimumRiskScoreInput">MinimumRiskScoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.minimumSensitivityScoreInput">MinimumSensitivityScoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.minimumRiskScore">MinimumRiskScore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.minimumSensitivityScore">MinimumSensitivityScore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinimumRiskScoreInput`<sup>Optional</sup> <a name="MinimumRiskScoreInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.minimumRiskScoreInput"></a>

```csharp
public string MinimumRiskScoreInput { get; }
```

- *Type:* string

---

##### `MinimumSensitivityScoreInput`<sup>Optional</sup> <a name="MinimumSensitivityScoreInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.minimumSensitivityScoreInput"></a>

```csharp
public string MinimumSensitivityScoreInput { get; }
```

- *Type:* string

---

##### `MinimumRiskScore`<sup>Required</sup> <a name="MinimumRiskScore" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.minimumRiskScore"></a>

```csharp
public string MinimumRiskScore { get; }
```

- *Type:* string

---

##### `MinimumSensitivityScore`<sup>Required</sup> <a name="MinimumSensitivityScore" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.minimumSensitivityScore"></a>

```csharp
public string MinimumSensitivityScore { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference <a name="DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.resetLogicalOperator">ResetLogicalOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.putConditions"></a>

```csharp
private void PutConditions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.putConditions.parameter.value"></a>

- *Type:* object

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetLogicalOperator` <a name="ResetLogicalOperator" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.resetLogicalOperator"></a>

```csharp
private void ResetLogicalOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList">DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.logicalOperatorInput">LogicalOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.logicalOperator">LogicalOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions">DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.conditions"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList">DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.conditionsInput"></a>

```csharp
public object ConditionsInput { get; }
```

- *Type:* object

---

##### `LogicalOperatorInput`<sup>Optional</sup> <a name="LogicalOperatorInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.logicalOperatorInput"></a>

```csharp
public string LogicalOperatorInput { get; }
```

- *Type:* string

---

##### `LogicalOperator`<sup>Required</sup> <a name="LogicalOperator" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.logicalOperator"></a>

```csharp
public string LogicalOperator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.internalValue"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions">DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions</a>

---


### DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference <a name="DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.putExpressions">PutExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.resetExpressions">ResetExpressions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpressions` <a name="PutExpressions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.putExpressions"></a>

```csharp
private void PutExpressions(DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.putExpressions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions">DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions</a>

---

##### `ResetExpressions` <a name="ResetExpressions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.resetExpressions"></a>

```csharp
private void ResetExpressions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.property.expressions">Expressions</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference">DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.property.expressionsInput">ExpressionsInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions">DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition">DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expressions`<sup>Required</sup> <a name="Expressions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.property.expressions"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference Expressions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference">DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference</a>

---

##### `ExpressionsInput`<sup>Optional</sup> <a name="ExpressionsInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.property.expressionsInput"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions ExpressionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions">DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.property.internalValue"></a>

```csharp
public DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition">DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition</a>

---


### DataLossPreventionDiscoveryConfigErrorsDetailsList <a name="DataLossPreventionDiscoveryConfigErrorsDetailsList" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigErrorsDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.get"></a>

```csharp
private DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference <a name="DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.details">Details</a></code> | <code>HashiCorp.Cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetails">DataLossPreventionDiscoveryConfigErrorsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.details"></a>

```csharp
public StringMapList Details { get; }
```

- *Type:* HashiCorp.Cdktf.StringMapList

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.internalValue"></a>

```csharp
public DataLossPreventionDiscoveryConfigErrorsDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetails">DataLossPreventionDiscoveryConfigErrorsDetails</a>

---


### DataLossPreventionDiscoveryConfigErrorsList <a name="DataLossPreventionDiscoveryConfigErrorsList" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.get"></a>

```csharp
private DataLossPreventionDiscoveryConfigErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataLossPreventionDiscoveryConfigErrorsOutputReference <a name="DataLossPreventionDiscoveryConfigErrorsOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.property.details">Details</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList">DataLossPreventionDiscoveryConfigErrorsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrors">DataLossPreventionDiscoveryConfigErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.property.details"></a>

```csharp
public DataLossPreventionDiscoveryConfigErrorsDetailsList Details { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsDetailsList">DataLossPreventionDiscoveryConfigErrorsDetailsList</a>

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrorsOutputReference.property.internalValue"></a>

```csharp
public DataLossPreventionDiscoveryConfigErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigErrors">DataLossPreventionDiscoveryConfigErrors</a>

---


### DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference <a name="DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.resetFolderId">ResetFolderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.resetOrganizationId">ResetOrganizationId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFolderId` <a name="ResetFolderId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.resetFolderId"></a>

```csharp
private void ResetFolderId()
```

##### `ResetOrganizationId` <a name="ResetOrganizationId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.resetOrganizationId"></a>

```csharp
private void ResetOrganizationId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.folderIdInput">FolderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.organizationIdInput">OrganizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.folderId">FolderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocation">DataLossPreventionDiscoveryConfigOrgConfigLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FolderIdInput`<sup>Optional</sup> <a name="FolderIdInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.folderIdInput"></a>

```csharp
public string FolderIdInput { get; }
```

- *Type:* string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.organizationIdInput"></a>

```csharp
public string OrganizationIdInput { get; }
```

- *Type:* string

---

##### `FolderId`<sup>Required</sup> <a name="FolderId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.folderId"></a>

```csharp
public string FolderId { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.internalValue"></a>

```csharp
public DataLossPreventionDiscoveryConfigOrgConfigLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocation">DataLossPreventionDiscoveryConfigOrgConfigLocation</a>

---


### DataLossPreventionDiscoveryConfigOrgConfigOutputReference <a name="DataLossPreventionDiscoveryConfigOrgConfigOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigOrgConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.putLocation">PutLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocation` <a name="PutLocation" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.putLocation"></a>

```csharp
private void PutLocation(DataLossPreventionDiscoveryConfigOrgConfigLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocation">DataLossPreventionDiscoveryConfigOrgConfigLocation</a>

---

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.location">Location</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference">DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.locationInput">LocationInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocation">DataLossPreventionDiscoveryConfigOrgConfigLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfig">DataLossPreventionDiscoveryConfigOrgConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.location"></a>

```csharp
public DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference Location { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference">DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.locationInput"></a>

```csharp
public DataLossPreventionDiscoveryConfigOrgConfigLocation LocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigLocation">DataLossPreventionDiscoveryConfigOrgConfigLocation</a>

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.internalValue"></a>

```csharp
public DataLossPreventionDiscoveryConfigOrgConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigOrgConfig">DataLossPreventionDiscoveryConfigOrgConfig</a>

---


### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.putSchemaModifiedCadence">PutSchemaModifiedCadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.putTableModifiedCadence">PutTableModifiedCadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.resetSchemaModifiedCadence">ResetSchemaModifiedCadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.resetTableModifiedCadence">ResetTableModifiedCadence</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchemaModifiedCadence` <a name="PutSchemaModifiedCadence" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.putSchemaModifiedCadence"></a>

```csharp
private void PutSchemaModifiedCadence(DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.putSchemaModifiedCadence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence</a>

---

##### `PutTableModifiedCadence` <a name="PutTableModifiedCadence" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.putTableModifiedCadence"></a>

```csharp
private void PutTableModifiedCadence(DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.putTableModifiedCadence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence</a>

---

##### `ResetSchemaModifiedCadence` <a name="ResetSchemaModifiedCadence" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.resetSchemaModifiedCadence"></a>

```csharp
private void ResetSchemaModifiedCadence()
```

##### `ResetTableModifiedCadence` <a name="ResetTableModifiedCadence" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.resetTableModifiedCadence"></a>

```csharp
private void ResetTableModifiedCadence()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.schemaModifiedCadence">SchemaModifiedCadence</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.tableModifiedCadence">TableModifiedCadence</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.schemaModifiedCadenceInput">SchemaModifiedCadenceInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.tableModifiedCadenceInput">TableModifiedCadenceInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchemaModifiedCadence`<sup>Required</sup> <a name="SchemaModifiedCadence" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.schemaModifiedCadence"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference SchemaModifiedCadence { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference</a>

---

##### `TableModifiedCadence`<sup>Required</sup> <a name="TableModifiedCadence" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.tableModifiedCadence"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference TableModifiedCadence { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference</a>

---

##### `SchemaModifiedCadenceInput`<sup>Optional</sup> <a name="SchemaModifiedCadenceInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.schemaModifiedCadenceInput"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence SchemaModifiedCadenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence</a>

---

##### `TableModifiedCadenceInput`<sup>Optional</sup> <a name="TableModifiedCadenceInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.tableModifiedCadenceInput"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence TableModifiedCadenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.internalValue"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence</a>

---


### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.resetTypes">ResetTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.resetFrequency"></a>

```csharp
private void ResetFrequency()
```

##### `ResetTypes` <a name="ResetTypes" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.resetTypes"></a>

```csharp
private void ResetTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.typesInput">TypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.types">Types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `TypesInput`<sup>Optional</sup> <a name="TypesInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.typesInput"></a>

```csharp
public string[] TypesInput { get; }
```

- *Type:* string[]

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.types"></a>

```csharp
public string[] Types { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.internalValue"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence</a>

---


### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.resetTypes">ResetTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.resetFrequency"></a>

```csharp
private void ResetFrequency()
```

##### `ResetTypes` <a name="ResetTypes" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.resetTypes"></a>

```csharp
private void ResetTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.typesInput">TypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.types">Types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `TypesInput`<sup>Optional</sup> <a name="TypesInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.typesInput"></a>

```csharp
public string[] TypesInput { get; }
```

- *Type:* string[]

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.types"></a>

```csharp
public string[] Types { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.internalValue"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence</a>

---


### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.resetMinAge">ResetMinAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.resetMinRowCount">ResetMinRowCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinAge` <a name="ResetMinAge" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.resetMinAge"></a>

```csharp
private void ResetMinAge()
```

##### `ResetMinRowCount` <a name="ResetMinRowCount" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.resetMinRowCount"></a>

```csharp
private void ResetMinRowCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.minAgeInput">MinAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.minRowCountInput">MinRowCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.minAge">MinAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.minRowCount">MinRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinAgeInput`<sup>Optional</sup> <a name="MinAgeInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.minAgeInput"></a>

```csharp
public string MinAgeInput { get; }
```

- *Type:* string

---

##### `MinRowCountInput`<sup>Optional</sup> <a name="MinRowCountInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.minRowCountInput"></a>

```csharp
public double MinRowCountInput { get; }
```

- *Type:* double

---

##### `MinAge`<sup>Required</sup> <a name="MinAge" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.minAge"></a>

```csharp
public string MinAge { get; }
```

- *Type:* string

---

##### `MinRowCount`<sup>Required</sup> <a name="MinRowCount" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.minRowCount"></a>

```csharp
public double MinRowCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.internalValue"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions</a>

---


### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.putOrConditions">PutOrConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.putTypes">PutTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resetCreatedAfter">ResetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resetOrConditions">ResetOrConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resetTypeCollection">ResetTypeCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resetTypes">ResetTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOrConditions` <a name="PutOrConditions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.putOrConditions"></a>

```csharp
private void PutOrConditions(DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.putOrConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions</a>

---

##### `PutTypes` <a name="PutTypes" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.putTypes"></a>

```csharp
private void PutTypes(DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.putTypes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes</a>

---

##### `ResetCreatedAfter` <a name="ResetCreatedAfter" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resetCreatedAfter"></a>

```csharp
private void ResetCreatedAfter()
```

##### `ResetOrConditions` <a name="ResetOrConditions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resetOrConditions"></a>

```csharp
private void ResetOrConditions()
```

##### `ResetTypeCollection` <a name="ResetTypeCollection" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resetTypeCollection"></a>

```csharp
private void ResetTypeCollection()
```

##### `ResetTypes` <a name="ResetTypes" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resetTypes"></a>

```csharp
private void ResetTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.orConditions">OrConditions</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.types">Types</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.createdAfterInput">CreatedAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.orConditionsInput">OrConditionsInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.typeCollectionInput">TypeCollectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.typesInput">TypesInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.createdAfter">CreatedAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.typeCollection">TypeCollection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OrConditions`<sup>Required</sup> <a name="OrConditions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.orConditions"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference OrConditions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference</a>

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.types"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference Types { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference</a>

---

##### `CreatedAfterInput`<sup>Optional</sup> <a name="CreatedAfterInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.createdAfterInput"></a>

```csharp
public string CreatedAfterInput { get; }
```

- *Type:* string

---

##### `OrConditionsInput`<sup>Optional</sup> <a name="OrConditionsInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.orConditionsInput"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions OrConditionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions</a>

---

##### `TypeCollectionInput`<sup>Optional</sup> <a name="TypeCollectionInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.typeCollectionInput"></a>

```csharp
public string TypeCollectionInput { get; }
```

- *Type:* string

---

##### `TypesInput`<sup>Optional</sup> <a name="TypesInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.typesInput"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes TypesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes</a>

---

##### `CreatedAfter`<sup>Required</sup> <a name="CreatedAfter" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.createdAfter"></a>

```csharp
public string CreatedAfter { get; }
```

- *Type:* string

---

##### `TypeCollection`<sup>Required</sup> <a name="TypeCollection" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.typeCollection"></a>

```csharp
public string TypeCollection { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.internalValue"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions</a>

---


### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.resetTypes">ResetTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTypes` <a name="ResetTypes" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.resetTypes"></a>

```csharp
private void ResetTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.property.typesInput">TypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.property.types">Types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypesInput`<sup>Optional</sup> <a name="TypesInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.property.typesInput"></a>

```csharp
public string[] TypesInput { get; }
```

- *Type:* string[]

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.property.types"></a>

```csharp
public string[] Types { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.property.internalValue"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes</a>

---


### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.property.internalValue"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled</a>

---


### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.property.internalValue"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables</a>

---


### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.putOtherTables">PutOtherTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.putTables">PutTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.resetOtherTables">ResetOtherTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.resetTables">ResetTables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOtherTables` <a name="PutOtherTables" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.putOtherTables"></a>

```csharp
private void PutOtherTables(DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.putOtherTables.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables</a>

---

##### `PutTables` <a name="PutTables" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.putTables"></a>

```csharp
private void PutTables(DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.putTables.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables</a>

---

##### `ResetOtherTables` <a name="ResetOtherTables" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.resetOtherTables"></a>

```csharp
private void ResetOtherTables()
```

##### `ResetTables` <a name="ResetTables" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.resetTables"></a>

```csharp
private void ResetTables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.otherTables">OtherTables</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.tables">Tables</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.otherTablesInput">OtherTablesInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.tablesInput">TablesInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OtherTables`<sup>Required</sup> <a name="OtherTables" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.otherTables"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference OtherTables { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference</a>

---

##### `Tables`<sup>Required</sup> <a name="Tables" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.tables"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference Tables { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference</a>

---

##### `OtherTablesInput`<sup>Optional</sup> <a name="OtherTablesInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.otherTablesInput"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables OtherTablesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables</a>

---

##### `TablesInput`<sup>Optional</sup> <a name="TablesInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.tablesInput"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables TablesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.internalValue"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter</a>

---


### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.putPatterns">PutPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.resetPatterns">ResetPatterns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPatterns` <a name="PutPatterns" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.putPatterns"></a>

```csharp
private void PutPatterns(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.putPatterns.parameter.value"></a>

- *Type:* object

---

##### `ResetPatterns` <a name="ResetPatterns" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.resetPatterns"></a>

```csharp
private void ResetPatterns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.property.patterns">Patterns</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.property.patternsInput">PatternsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Patterns`<sup>Required</sup> <a name="Patterns" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.property.patterns"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList Patterns { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList</a>

---

##### `PatternsInput`<sup>Optional</sup> <a name="PatternsInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.property.patternsInput"></a>

```csharp
public object PatternsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.property.internalValue"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes</a>

---


### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.get"></a>

```csharp
private DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.resetDatasetIdRegex">ResetDatasetIdRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.resetProjectIdRegex">ResetProjectIdRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.resetTableIdRegex">ResetTableIdRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetIdRegex` <a name="ResetDatasetIdRegex" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.resetDatasetIdRegex"></a>

```csharp
private void ResetDatasetIdRegex()
```

##### `ResetProjectIdRegex` <a name="ResetProjectIdRegex" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.resetProjectIdRegex"></a>

```csharp
private void ResetProjectIdRegex()
```

##### `ResetTableIdRegex` <a name="ResetTableIdRegex" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.resetTableIdRegex"></a>

```csharp
private void ResetTableIdRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.datasetIdRegexInput">DatasetIdRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.projectIdRegexInput">ProjectIdRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.tableIdRegexInput">TableIdRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.datasetIdRegex">DatasetIdRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.projectIdRegex">ProjectIdRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.tableIdRegex">TableIdRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetIdRegexInput`<sup>Optional</sup> <a name="DatasetIdRegexInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.datasetIdRegexInput"></a>

```csharp
public string DatasetIdRegexInput { get; }
```

- *Type:* string

---

##### `ProjectIdRegexInput`<sup>Optional</sup> <a name="ProjectIdRegexInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.projectIdRegexInput"></a>

```csharp
public string ProjectIdRegexInput { get; }
```

- *Type:* string

---

##### `TableIdRegexInput`<sup>Optional</sup> <a name="TableIdRegexInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.tableIdRegexInput"></a>

```csharp
public string TableIdRegexInput { get; }
```

- *Type:* string

---

##### `DatasetIdRegex`<sup>Required</sup> <a name="DatasetIdRegex" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.datasetIdRegex"></a>

```csharp
public string DatasetIdRegex { get; }
```

- *Type:* string

---

##### `ProjectIdRegex`<sup>Required</sup> <a name="ProjectIdRegex" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.projectIdRegex"></a>

```csharp
public string ProjectIdRegex { get; }
```

- *Type:* string

---

##### `TableIdRegex`<sup>Required</sup> <a name="TableIdRegex" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.tableIdRegex"></a>

```csharp
public string TableIdRegex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.putIncludeRegexes">PutIncludeRegexes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.resetIncludeRegexes">ResetIncludeRegexes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIncludeRegexes` <a name="PutIncludeRegexes" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.putIncludeRegexes"></a>

```csharp
private void PutIncludeRegexes(DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.putIncludeRegexes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes</a>

---

##### `ResetIncludeRegexes` <a name="ResetIncludeRegexes" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.resetIncludeRegexes"></a>

```csharp
private void ResetIncludeRegexes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.property.includeRegexes">IncludeRegexes</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.property.includeRegexesInput">IncludeRegexesInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeRegexes`<sup>Required</sup> <a name="IncludeRegexes" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.property.includeRegexes"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference IncludeRegexes { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference</a>

---

##### `IncludeRegexesInput`<sup>Optional</sup> <a name="IncludeRegexesInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.property.includeRegexesInput"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes IncludeRegexesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.property.internalValue"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables</a>

---


### DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference <a name="DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putCadence">PutCadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putDisabled">PutDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resetCadence">ResetCadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCadence` <a name="PutCadence" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putCadence"></a>

```csharp
private void PutCadence(DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putCadence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence</a>

---

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putConditions"></a>

```csharp
private void PutConditions(DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions</a>

---

##### `PutDisabled` <a name="PutDisabled" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putDisabled"></a>

```csharp
private void PutDisabled(DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putDisabled.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled</a>

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putFilter"></a>

```csharp
private void PutFilter(DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter</a>

---

##### `ResetCadence` <a name="ResetCadence" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resetCadence"></a>

```csharp
private void ResetCadence()
```

##### `ResetConditions` <a name="ResetConditions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.cadence">Cadence</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.disabled">Disabled</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.cadenceInput">CadenceInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.disabledInput">DisabledInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTarget">DataLossPreventionDiscoveryConfigTargetsBigQueryTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cadence`<sup>Required</sup> <a name="Cadence" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.cadence"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference Cadence { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.conditions"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference</a>

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.disabled"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference Disabled { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.filter"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference</a>

---

##### `CadenceInput`<sup>Optional</sup> <a name="CadenceInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.cadenceInput"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence CadenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.conditionsInput"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions ConditionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions</a>

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.disabledInput"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled DisabledInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.filterInput"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter FilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.internalValue"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTarget">DataLossPreventionDiscoveryConfigTargetsBigQueryTarget</a>

---


### DataLossPreventionDiscoveryConfigTargetsList <a name="DataLossPreventionDiscoveryConfigTargetsList" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.get"></a>

```csharp
private DataLossPreventionDiscoveryConfigTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataLossPreventionDiscoveryConfigTargetsOutputReference <a name="DataLossPreventionDiscoveryConfigTargetsOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.putBigQueryTarget">PutBigQueryTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.resetBigQueryTarget">ResetBigQueryTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBigQueryTarget` <a name="PutBigQueryTarget" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.putBigQueryTarget"></a>

```csharp
private void PutBigQueryTarget(DataLossPreventionDiscoveryConfigTargetsBigQueryTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.putBigQueryTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTarget">DataLossPreventionDiscoveryConfigTargetsBigQueryTarget</a>

---

##### `ResetBigQueryTarget` <a name="ResetBigQueryTarget" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.resetBigQueryTarget"></a>

```csharp
private void ResetBigQueryTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.property.bigQueryTarget">BigQueryTarget</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.property.bigQueryTargetInput">BigQueryTargetInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTarget">DataLossPreventionDiscoveryConfigTargetsBigQueryTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BigQueryTarget`<sup>Required</sup> <a name="BigQueryTarget" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.property.bigQueryTarget"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference BigQueryTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference">DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference</a>

---

##### `BigQueryTargetInput`<sup>Optional</sup> <a name="BigQueryTargetInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.property.bigQueryTargetInput"></a>

```csharp
public DataLossPreventionDiscoveryConfigTargetsBigQueryTarget BigQueryTargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsBigQueryTarget">DataLossPreventionDiscoveryConfigTargetsBigQueryTarget</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTargetsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataLossPreventionDiscoveryConfigTimeoutsOutputReference <a name="DataLossPreventionDiscoveryConfigTimeoutsOutputReference" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataLossPreventionDiscoveryConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionDiscoveryConfig.DataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



