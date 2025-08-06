# `bigqueryDatasetAccess` Submodule <a name="`bigqueryDatasetAccess` Submodule" id="@cdktf/provider-google.bigqueryDatasetAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDatasetAccessA <a name="BigqueryDatasetAccessA" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access google_bigquery_dataset_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDatasetAccessA(Construct Scope, string Id, BigqueryDatasetAccessAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig">BigqueryDatasetAccessAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig">BigqueryDatasetAccessAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putDataset">PutDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putRoutine">PutRoutine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putView">PutView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetGroupByEmail">ResetGroupByEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetIamMember">ResetIamMember</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetRoutine">ResetRoutine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetSpecialGroup">ResetSpecialGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetUserByEmail">ResetUserByEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetView">ResetView</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putCondition"></a>

```csharp
private void PutCondition(BigqueryDatasetAccessConditionA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionA">BigqueryDatasetAccessConditionA</a>

---

##### `PutDataset` <a name="PutDataset" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putDataset"></a>

```csharp
private void PutDataset(BigqueryDatasetAccessDatasetA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA">BigqueryDatasetAccessDatasetA</a>

---

##### `PutRoutine` <a name="PutRoutine" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putRoutine"></a>

```csharp
private void PutRoutine(BigqueryDatasetAccessRoutineA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putRoutine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA">BigqueryDatasetAccessRoutineA</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putTimeouts"></a>

```csharp
private void PutTimeouts(BigqueryDatasetAccessTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts">BigqueryDatasetAccessTimeouts</a>

---

##### `PutView` <a name="PutView" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putView"></a>

```csharp
private void PutView(BigqueryDatasetAccessViewA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA">BigqueryDatasetAccessViewA</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetDataset"></a>

```csharp
private void ResetDataset()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetGroupByEmail` <a name="ResetGroupByEmail" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetGroupByEmail"></a>

```csharp
private void ResetGroupByEmail()
```

##### `ResetIamMember` <a name="ResetIamMember" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetIamMember"></a>

```csharp
private void ResetIamMember()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetRole"></a>

```csharp
private void ResetRole()
```

##### `ResetRoutine` <a name="ResetRoutine" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetRoutine"></a>

```csharp
private void ResetRoutine()
```

##### `ResetSpecialGroup` <a name="ResetSpecialGroup" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetSpecialGroup"></a>

```csharp
private void ResetSpecialGroup()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserByEmail` <a name="ResetUserByEmail" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetUserByEmail"></a>

```csharp
private void ResetUserByEmail()
```

##### `ResetView` <a name="ResetView" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetView"></a>

```csharp
private void ResetView()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryDatasetAccessA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryDatasetAccessA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryDatasetAccessA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryDatasetAccessA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryDatasetAccessA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BigqueryDatasetAccessA resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryDatasetAccessA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryDatasetAccessA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryDatasetAccessA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.apiUpdatedMember">ApiUpdatedMember</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference">BigqueryDatasetAccessConditionAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference">BigqueryDatasetAccessDatasetAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.routine">Routine</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference">BigqueryDatasetAccessRoutineAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference">BigqueryDatasetAccessTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.view">View</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference">BigqueryDatasetAccessViewAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionA">BigqueryDatasetAccessConditionA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.datasetInput">DatasetInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA">BigqueryDatasetAccessDatasetA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.groupByEmailInput">GroupByEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.iamMemberInput">IamMemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.routineInput">RoutineInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA">BigqueryDatasetAccessRoutineA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.specialGroupInput">SpecialGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.userByEmailInput">UserByEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.viewInput">ViewInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA">BigqueryDatasetAccessViewA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.groupByEmail">GroupByEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.iamMember">IamMember</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.specialGroup">SpecialGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.userByEmail">UserByEmail</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApiUpdatedMember`<sup>Required</sup> <a name="ApiUpdatedMember" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.apiUpdatedMember"></a>

```csharp
public IResolvable ApiUpdatedMember { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.condition"></a>

```csharp
public BigqueryDatasetAccessConditionAOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference">BigqueryDatasetAccessConditionAOutputReference</a>

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.dataset"></a>

```csharp
public BigqueryDatasetAccessDatasetAOutputReference Dataset { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference">BigqueryDatasetAccessDatasetAOutputReference</a>

---

##### `Routine`<sup>Required</sup> <a name="Routine" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.routine"></a>

```csharp
public BigqueryDatasetAccessRoutineAOutputReference Routine { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference">BigqueryDatasetAccessRoutineAOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.timeouts"></a>

```csharp
public BigqueryDatasetAccessTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference">BigqueryDatasetAccessTimeoutsOutputReference</a>

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.view"></a>

```csharp
public BigqueryDatasetAccessViewAOutputReference View { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference">BigqueryDatasetAccessViewAOutputReference</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.conditionInput"></a>

```csharp
public BigqueryDatasetAccessConditionA ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionA">BigqueryDatasetAccessConditionA</a>

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.datasetInput"></a>

```csharp
public BigqueryDatasetAccessDatasetA DatasetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA">BigqueryDatasetAccessDatasetA</a>

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `GroupByEmailInput`<sup>Optional</sup> <a name="GroupByEmailInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.groupByEmailInput"></a>

```csharp
public string GroupByEmailInput { get; }
```

- *Type:* string

---

##### `IamMemberInput`<sup>Optional</sup> <a name="IamMemberInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.iamMemberInput"></a>

```csharp
public string IamMemberInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `RoutineInput`<sup>Optional</sup> <a name="RoutineInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.routineInput"></a>

```csharp
public BigqueryDatasetAccessRoutineA RoutineInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA">BigqueryDatasetAccessRoutineA</a>

---

##### `SpecialGroupInput`<sup>Optional</sup> <a name="SpecialGroupInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.specialGroupInput"></a>

```csharp
public string SpecialGroupInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserByEmailInput`<sup>Optional</sup> <a name="UserByEmailInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.userByEmailInput"></a>

```csharp
public string UserByEmailInput { get; }
```

- *Type:* string

---

##### `ViewInput`<sup>Optional</sup> <a name="ViewInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.viewInput"></a>

```csharp
public BigqueryDatasetAccessViewA ViewInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA">BigqueryDatasetAccessViewA</a>

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `GroupByEmail`<sup>Required</sup> <a name="GroupByEmail" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.groupByEmail"></a>

```csharp
public string GroupByEmail { get; }
```

- *Type:* string

---

##### `IamMember`<sup>Required</sup> <a name="IamMember" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.iamMember"></a>

```csharp
public string IamMember { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `SpecialGroup`<sup>Required</sup> <a name="SpecialGroup" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.specialGroup"></a>

```csharp
public string SpecialGroup { get; }
```

- *Type:* string

---

##### `UserByEmail`<sup>Required</sup> <a name="UserByEmail" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.userByEmail"></a>

```csharp
public string UserByEmail { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDatasetAccessAConfig <a name="BigqueryDatasetAccessAConfig" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDatasetAccessAConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatasetId,
    BigqueryDatasetAccessConditionA Condition = null,
    BigqueryDatasetAccessDatasetA Dataset = null,
    string Domain = null,
    string GroupByEmail = null,
    string IamMember = null,
    string Id = null,
    string Project = null,
    string Role = null,
    BigqueryDatasetAccessRoutineA Routine = null,
    string SpecialGroup = null,
    BigqueryDatasetAccessTimeouts Timeouts = null,
    string UserByEmail = null,
    BigqueryDatasetAccessViewA View = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.datasetId">DatasetId</a></code> | <code>string</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionA">BigqueryDatasetAccessConditionA</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA">BigqueryDatasetAccessDatasetA</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.domain">Domain</a></code> | <code>string</code> | A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.groupByEmail">GroupByEmail</a></code> | <code>string</code> | An email address of a Google Group to grant access to. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.iamMember">IamMember</a></code> | <code>string</code> | Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#id BigqueryDatasetAccessA#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#project BigqueryDatasetAccessA#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.role">Role</a></code> | <code>string</code> | Describes the rights granted to the user specified by the other member of the access object. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.routine">Routine</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA">BigqueryDatasetAccessRoutineA</a></code> | routine block. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.specialGroup">SpecialGroup</a></code> | <code>string</code> | A special group to grant access to. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts">BigqueryDatasetAccessTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.userByEmail">UserByEmail</a></code> | <code>string</code> | An email address of a user to grant access to. For example: fred@example.com. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.view">View</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA">BigqueryDatasetAccessViewA</a></code> | view block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

A unique ID for this dataset, without the project name.

The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#dataset_id BigqueryDatasetAccessA#dataset_id}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.condition"></a>

```csharp
public BigqueryDatasetAccessConditionA Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionA">BigqueryDatasetAccessConditionA</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#condition BigqueryDatasetAccessA#condition}

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.dataset"></a>

```csharp
public BigqueryDatasetAccessDatasetA Dataset { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA">BigqueryDatasetAccessDatasetA</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#dataset BigqueryDatasetAccessA#dataset}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

A domain to grant access to. Any users signed in with the domain specified will be granted the specified access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#domain BigqueryDatasetAccessA#domain}

---

##### `GroupByEmail`<sup>Optional</sup> <a name="GroupByEmail" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.groupByEmail"></a>

```csharp
public string GroupByEmail { get; set; }
```

- *Type:* string

An email address of a Google Group to grant access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#group_by_email BigqueryDatasetAccessA#group_by_email}

---

##### `IamMember`<sup>Optional</sup> <a name="IamMember" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.iamMember"></a>

```csharp
public string IamMember { get; set; }
```

- *Type:* string

Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group.

For example: 'allUsers'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#iam_member BigqueryDatasetAccessA#iam_member}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#id BigqueryDatasetAccessA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#project BigqueryDatasetAccessA#project}.

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Describes the rights granted to the user specified by the other member of the access object.

Basic, predefined, and custom roles are
supported. Predefined roles that have equivalent basic roles are
swapped by the API to their basic counterparts, and will show a diff
post-create. See
[official docs](https://cloud.google.com/bigquery/docs/access-control).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#role BigqueryDatasetAccessA#role}

---

##### `Routine`<sup>Optional</sup> <a name="Routine" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.routine"></a>

```csharp
public BigqueryDatasetAccessRoutineA Routine { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA">BigqueryDatasetAccessRoutineA</a>

routine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#routine BigqueryDatasetAccessA#routine}

---

##### `SpecialGroup`<sup>Optional</sup> <a name="SpecialGroup" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.specialGroup"></a>

```csharp
public string SpecialGroup { get; set; }
```

- *Type:* string

A special group to grant access to.

Possible values include:

* 'projectOwners': Owners of the enclosing project.
* 'projectReaders': Readers of the enclosing project.
* 'projectWriters': Writers of the enclosing project.
* 'allAuthenticatedUsers': All authenticated BigQuery users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#special_group BigqueryDatasetAccessA#special_group}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.timeouts"></a>

```csharp
public BigqueryDatasetAccessTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts">BigqueryDatasetAccessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#timeouts BigqueryDatasetAccessA#timeouts}

---

##### `UserByEmail`<sup>Optional</sup> <a name="UserByEmail" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.userByEmail"></a>

```csharp
public string UserByEmail { get; set; }
```

- *Type:* string

An email address of a user to grant access to. For example: fred@example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#user_by_email BigqueryDatasetAccessA#user_by_email}

---

##### `View`<sup>Optional</sup> <a name="View" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.view"></a>

```csharp
public BigqueryDatasetAccessViewA View { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA">BigqueryDatasetAccessViewA</a>

view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#view BigqueryDatasetAccessA#view}

---

### BigqueryDatasetAccessConditionA <a name="BigqueryDatasetAccessConditionA" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDatasetAccessConditionA {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionA.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionA.property.description">Description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionA.property.location">Location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionA.property.title">Title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionA.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#expression BigqueryDatasetAccessA#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionA.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#description BigqueryDatasetAccessA#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionA.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#location BigqueryDatasetAccessA#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionA.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#title BigqueryDatasetAccessA#title}

---

### BigqueryDatasetAccessDatasetA <a name="BigqueryDatasetAccessDatasetA" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDatasetAccessDatasetA {
    BigqueryDatasetAccessDatasetDatasetA Dataset,
    string[] TargetTypes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA">BigqueryDatasetAccessDatasetDatasetA</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA.property.targetTypes">TargetTypes</a></code> | <code>string[]</code> | Which resources in the dataset this entry applies to. |

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA.property.dataset"></a>

```csharp
public BigqueryDatasetAccessDatasetDatasetA Dataset { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA">BigqueryDatasetAccessDatasetDatasetA</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#dataset BigqueryDatasetAccessA#dataset}

---

##### `TargetTypes`<sup>Required</sup> <a name="TargetTypes" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA.property.targetTypes"></a>

```csharp
public string[] TargetTypes { get; set; }
```

- *Type:* string[]

Which resources in the dataset this entry applies to.

Currently, only views are supported,
but additional target types may be added in the future. Possible values: VIEWS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#target_types BigqueryDatasetAccessA#target_types}

---

### BigqueryDatasetAccessDatasetDatasetA <a name="BigqueryDatasetAccessDatasetDatasetA" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDatasetAccessDatasetDatasetA {
    string DatasetId,
    string ProjectId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA.property.datasetId">DatasetId</a></code> | <code>string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the project containing this table. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#dataset_id BigqueryDatasetAccessA#dataset_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#project_id BigqueryDatasetAccessA#project_id}

---

### BigqueryDatasetAccessRoutineA <a name="BigqueryDatasetAccessRoutineA" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDatasetAccessRoutineA {
    string DatasetId,
    string ProjectId,
    string RoutineId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA.property.datasetId">DatasetId</a></code> | <code>string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the project containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA.property.routineId">RoutineId</a></code> | <code>string</code> | The ID of the routine. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#dataset_id BigqueryDatasetAccessA#dataset_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#project_id BigqueryDatasetAccessA#project_id}

---

##### `RoutineId`<sup>Required</sup> <a name="RoutineId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA.property.routineId"></a>

```csharp
public string RoutineId { get; set; }
```

- *Type:* string

The ID of the routine.

The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#routine_id BigqueryDatasetAccessA#routine_id}

---

### BigqueryDatasetAccessTimeouts <a name="BigqueryDatasetAccessTimeouts" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDatasetAccessTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#create BigqueryDatasetAccessA#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#delete BigqueryDatasetAccessA#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#create BigqueryDatasetAccessA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#delete BigqueryDatasetAccessA#delete}.

---

### BigqueryDatasetAccessViewA <a name="BigqueryDatasetAccessViewA" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDatasetAccessViewA {
    string DatasetId,
    string ProjectId,
    string TableId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA.property.datasetId">DatasetId</a></code> | <code>string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the project containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA.property.tableId">TableId</a></code> | <code>string</code> | The ID of the table. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#dataset_id BigqueryDatasetAccessA#dataset_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#project_id BigqueryDatasetAccessA#project_id}

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA.property.tableId"></a>

```csharp
public string TableId { get; set; }
```

- *Type:* string

The ID of the table.

The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/bigquery_dataset_access#table_id BigqueryDatasetAccessA#table_id}

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDatasetAccessConditionAOutputReference <a name="BigqueryDatasetAccessConditionAOutputReference" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDatasetAccessConditionAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionA">BigqueryDatasetAccessConditionA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionAOutputReference.property.internalValue"></a>

```csharp
public BigqueryDatasetAccessConditionA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessConditionA">BigqueryDatasetAccessConditionA</a>

---


### BigqueryDatasetAccessDatasetAOutputReference <a name="BigqueryDatasetAccessDatasetAOutputReference" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDatasetAccessDatasetAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.putDataset">PutDataset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataset` <a name="PutDataset" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.putDataset"></a>

```csharp
private void PutDataset(BigqueryDatasetAccessDatasetDatasetA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA">BigqueryDatasetAccessDatasetDatasetA</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference">BigqueryDatasetAccessDatasetDatasetAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.datasetInput">DatasetInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA">BigqueryDatasetAccessDatasetDatasetA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.targetTypesInput">TargetTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.targetTypes">TargetTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA">BigqueryDatasetAccessDatasetA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.dataset"></a>

```csharp
public BigqueryDatasetAccessDatasetDatasetAOutputReference Dataset { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference">BigqueryDatasetAccessDatasetDatasetAOutputReference</a>

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.datasetInput"></a>

```csharp
public BigqueryDatasetAccessDatasetDatasetA DatasetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA">BigqueryDatasetAccessDatasetDatasetA</a>

---

##### `TargetTypesInput`<sup>Optional</sup> <a name="TargetTypesInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.targetTypesInput"></a>

```csharp
public string[] TargetTypesInput { get; }
```

- *Type:* string[]

---

##### `TargetTypes`<sup>Required</sup> <a name="TargetTypes" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.targetTypes"></a>

```csharp
public string[] TargetTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.internalValue"></a>

```csharp
public BigqueryDatasetAccessDatasetA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA">BigqueryDatasetAccessDatasetA</a>

---


### BigqueryDatasetAccessDatasetDatasetAOutputReference <a name="BigqueryDatasetAccessDatasetDatasetAOutputReference" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDatasetAccessDatasetDatasetAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA">BigqueryDatasetAccessDatasetDatasetA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.internalValue"></a>

```csharp
public BigqueryDatasetAccessDatasetDatasetA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA">BigqueryDatasetAccessDatasetDatasetA</a>

---


### BigqueryDatasetAccessRoutineAOutputReference <a name="BigqueryDatasetAccessRoutineAOutputReference" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDatasetAccessRoutineAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.routineIdInput">RoutineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.routineId">RoutineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA">BigqueryDatasetAccessRoutineA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RoutineIdInput`<sup>Optional</sup> <a name="RoutineIdInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.routineIdInput"></a>

```csharp
public string RoutineIdInput { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `RoutineId`<sup>Required</sup> <a name="RoutineId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.routineId"></a>

```csharp
public string RoutineId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.internalValue"></a>

```csharp
public BigqueryDatasetAccessRoutineA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA">BigqueryDatasetAccessRoutineA</a>

---


### BigqueryDatasetAccessTimeoutsOutputReference <a name="BigqueryDatasetAccessTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDatasetAccessTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BigqueryDatasetAccessViewAOutputReference <a name="BigqueryDatasetAccessViewAOutputReference" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDatasetAccessViewAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.tableId">TableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA">BigqueryDatasetAccessViewA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.tableIdInput"></a>

```csharp
public string TableIdInput { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.tableId"></a>

```csharp
public string TableId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.internalValue"></a>

```csharp
public BigqueryDatasetAccessViewA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA">BigqueryDatasetAccessViewA</a>

---



