# `backupDrBackupVault` Submodule <a name="`backupDrBackupVault` Submodule" id="@cdktf/provider-google.backupDrBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupDrBackupVault <a name="BackupDrBackupVault" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault google_backup_dr_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BackupDrBackupVault(Construct Scope, string Id, BackupDrBackupVaultConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig">BackupDrBackupVaultConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig">BackupDrBackupVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAccessRestriction">ResetAccessRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAllowMissing">ResetAllowMissing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetEffectiveTime">ResetEffectiveTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetForceDelete">ResetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetForceUpdate">ResetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetIgnoreBackupPlanReferences">ResetIgnoreBackupPlanReferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetIgnoreInactiveDatasources">ResetIgnoreInactiveDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.putTimeouts"></a>

```csharp
private void PutTimeouts(BackupDrBackupVaultTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a>

---

##### `ResetAccessRestriction` <a name="ResetAccessRestriction" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAccessRestriction"></a>

```csharp
private void ResetAccessRestriction()
```

##### `ResetAllowMissing` <a name="ResetAllowMissing" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAllowMissing"></a>

```csharp
private void ResetAllowMissing()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEffectiveTime` <a name="ResetEffectiveTime" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetEffectiveTime"></a>

```csharp
private void ResetEffectiveTime()
```

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetForceDelete"></a>

```csharp
private void ResetForceDelete()
```

##### `ResetForceUpdate` <a name="ResetForceUpdate" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetForceUpdate"></a>

```csharp
private void ResetForceUpdate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreBackupPlanReferences` <a name="ResetIgnoreBackupPlanReferences" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetIgnoreBackupPlanReferences"></a>

```csharp
private void ResetIgnoreBackupPlanReferences()
```

##### `ResetIgnoreInactiveDatasources` <a name="ResetIgnoreInactiveDatasources" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetIgnoreInactiveDatasources"></a>

```csharp
private void ResetIgnoreInactiveDatasources()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BackupDrBackupVault resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BackupDrBackupVault.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BackupDrBackupVault.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BackupDrBackupVault.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BackupDrBackupVault.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BackupDrBackupVault resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupDrBackupVault to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupDrBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BackupDrBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupCount">BackupCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.deletable">Deletable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference">BackupDrBackupVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.totalStoredBytes">TotalStoredBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.accessRestrictionInput">AccessRestrictionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.allowMissingInput">AllowMissingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupMinimumEnforcedRetentionDurationInput">BackupMinimumEnforcedRetentionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupVaultIdInput">BackupVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveTimeInput">EffectiveTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceUpdateInput">ForceUpdateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreBackupPlanReferencesInput">IgnoreBackupPlanReferencesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreInactiveDatasourcesInput">IgnoreInactiveDatasourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.accessRestriction">AccessRestriction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.allowMissing">AllowMissing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupMinimumEnforcedRetentionDuration">BackupMinimumEnforcedRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupVaultId">BackupVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveTime">EffectiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceDelete">ForceDelete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceUpdate">ForceUpdate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreBackupPlanReferences">IgnoreBackupPlanReferences</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreInactiveDatasources">IgnoreInactiveDatasources</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackupCount`<sup>Required</sup> <a name="BackupCount" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupCount"></a>

```csharp
public string BackupCount { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Deletable`<sup>Required</sup> <a name="Deletable" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.deletable"></a>

```csharp
public IResolvable Deletable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.timeouts"></a>

```csharp
public BackupDrBackupVaultTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference">BackupDrBackupVaultTimeoutsOutputReference</a>

---

##### `TotalStoredBytes`<sup>Required</sup> <a name="TotalStoredBytes" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.totalStoredBytes"></a>

```csharp
public string TotalStoredBytes { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AccessRestrictionInput`<sup>Optional</sup> <a name="AccessRestrictionInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.accessRestrictionInput"></a>

```csharp
public string AccessRestrictionInput { get; }
```

- *Type:* string

---

##### `AllowMissingInput`<sup>Optional</sup> <a name="AllowMissingInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.allowMissingInput"></a>

```csharp
public object AllowMissingInput { get; }
```

- *Type:* object

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BackupMinimumEnforcedRetentionDurationInput`<sup>Optional</sup> <a name="BackupMinimumEnforcedRetentionDurationInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupMinimumEnforcedRetentionDurationInput"></a>

```csharp
public string BackupMinimumEnforcedRetentionDurationInput { get; }
```

- *Type:* string

---

##### `BackupVaultIdInput`<sup>Optional</sup> <a name="BackupVaultIdInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupVaultIdInput"></a>

```csharp
public string BackupVaultIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EffectiveTimeInput`<sup>Optional</sup> <a name="EffectiveTimeInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveTimeInput"></a>

```csharp
public string EffectiveTimeInput { get; }
```

- *Type:* string

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceDeleteInput"></a>

```csharp
public object ForceDeleteInput { get; }
```

- *Type:* object

---

##### `ForceUpdateInput`<sup>Optional</sup> <a name="ForceUpdateInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceUpdateInput"></a>

```csharp
public object ForceUpdateInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreBackupPlanReferencesInput`<sup>Optional</sup> <a name="IgnoreBackupPlanReferencesInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreBackupPlanReferencesInput"></a>

```csharp
public object IgnoreBackupPlanReferencesInput { get; }
```

- *Type:* object

---

##### `IgnoreInactiveDatasourcesInput`<sup>Optional</sup> <a name="IgnoreInactiveDatasourcesInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreInactiveDatasourcesInput"></a>

```csharp
public object IgnoreInactiveDatasourcesInput { get; }
```

- *Type:* object

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AccessRestriction`<sup>Required</sup> <a name="AccessRestriction" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.accessRestriction"></a>

```csharp
public string AccessRestriction { get; }
```

- *Type:* string

---

##### `AllowMissing`<sup>Required</sup> <a name="AllowMissing" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.allowMissing"></a>

```csharp
public object AllowMissing { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BackupMinimumEnforcedRetentionDuration`<sup>Required</sup> <a name="BackupMinimumEnforcedRetentionDuration" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupMinimumEnforcedRetentionDuration"></a>

```csharp
public string BackupMinimumEnforcedRetentionDuration { get; }
```

- *Type:* string

---

##### `BackupVaultId`<sup>Required</sup> <a name="BackupVaultId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupVaultId"></a>

```csharp
public string BackupVaultId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EffectiveTime`<sup>Required</sup> <a name="EffectiveTime" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveTime"></a>

```csharp
public string EffectiveTime { get; }
```

- *Type:* string

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceDelete"></a>

```csharp
public object ForceDelete { get; }
```

- *Type:* object

---

##### `ForceUpdate`<sup>Required</sup> <a name="ForceUpdate" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceUpdate"></a>

```csharp
public object ForceUpdate { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreBackupPlanReferences`<sup>Required</sup> <a name="IgnoreBackupPlanReferences" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreBackupPlanReferences"></a>

```csharp
public object IgnoreBackupPlanReferences { get; }
```

- *Type:* object

---

##### `IgnoreInactiveDatasources`<sup>Required</sup> <a name="IgnoreInactiveDatasources" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreInactiveDatasources"></a>

```csharp
public object IgnoreInactiveDatasources { get; }
```

- *Type:* object

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupDrBackupVaultConfig <a name="BackupDrBackupVaultConfig" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BackupDrBackupVaultConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BackupMinimumEnforcedRetentionDuration,
    string BackupVaultId,
    string Location,
    string AccessRestriction = null,
    object AllowMissing = null,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string Description = null,
    string EffectiveTime = null,
    object ForceDelete = null,
    object ForceUpdate = null,
    string Id = null,
    object IgnoreBackupPlanReferences = null,
    object IgnoreInactiveDatasources = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    BackupDrBackupVaultTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupMinimumEnforcedRetentionDuration">BackupMinimumEnforcedRetentionDuration</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupVaultId">BackupVaultId</a></code> | <code>string</code> | Required. ID of the requesting object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.location">Location</a></code> | <code>string</code> | The GCP location for the backup vault. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.accessRestriction">AccessRestriction</a></code> | <code>string</code> | Access restriction for the backup vault. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.allowMissing">AllowMissing</a></code> | <code>object</code> | Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.description">Description</a></code> | <code>string</code> | Optional. The description of the BackupVault instance (2048 characters or less). |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.effectiveTime">EffectiveTime</a></code> | <code>string</code> | Optional. Time after which the BackupVault resource is locked. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forceDelete">ForceDelete</a></code> | <code>object</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forceUpdate">ForceUpdate</a></code> | <code>object</code> | If set, allow update to extend the minimum enforced retention for backup vault. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#id BackupDrBackupVault#id}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.ignoreBackupPlanReferences">IgnoreBackupPlanReferences</a></code> | <code>object</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.ignoreInactiveDatasources">IgnoreInactiveDatasources</a></code> | <code>object</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#project BackupDrBackupVault#project}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BackupMinimumEnforcedRetentionDuration`<sup>Required</sup> <a name="BackupMinimumEnforcedRetentionDuration" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupMinimumEnforcedRetentionDuration"></a>

```csharp
public string BackupMinimumEnforcedRetentionDuration { get; set; }
```

- *Type:* string

Required.

The default and minimum enforced retention for each backup within the backup vault. The enforced retention for each backup can be extended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#backup_minimum_enforced_retention_duration BackupDrBackupVault#backup_minimum_enforced_retention_duration}

---

##### `BackupVaultId`<sup>Required</sup> <a name="BackupVaultId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupVaultId"></a>

```csharp
public string BackupVaultId { get; set; }
```

- *Type:* string

Required. ID of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#backup_vault_id BackupDrBackupVault#backup_vault_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The GCP location for the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#location BackupDrBackupVault#location}

---

##### `AccessRestriction`<sup>Optional</sup> <a name="AccessRestriction" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.accessRestriction"></a>

```csharp
public string AccessRestriction { get; set; }
```

- *Type:* string

Access restriction for the backup vault.

Default value is 'WITHIN_ORGANIZATION' if not provided during creation. Default value: "WITHIN_ORGANIZATION" Possible values: ["ACCESS_RESTRICTION_UNSPECIFIED", "WITHIN_PROJECT", "WITHIN_ORGANIZATION", "UNRESTRICTED", "WITHIN_ORG_BUT_UNRESTRICTED_FOR_BA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#access_restriction BackupDrBackupVault#access_restriction}

---

##### `AllowMissing`<sup>Optional</sup> <a name="AllowMissing" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.allowMissing"></a>

```csharp
public object AllowMissing { get; set; }
```

- *Type:* object

Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#allow_missing BackupDrBackupVault#allow_missing}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#annotations BackupDrBackupVault#annotations}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. The description of the BackupVault instance (2048 characters or less).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#description BackupDrBackupVault#description}

---

##### `EffectiveTime`<sup>Optional</sup> <a name="EffectiveTime" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.effectiveTime"></a>

```csharp
public string EffectiveTime { get; set; }
```

- *Type:* string

Optional. Time after which the BackupVault resource is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#effective_time BackupDrBackupVault#effective_time}

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forceDelete"></a>

```csharp
public object ForceDelete { get; set; }
```

- *Type:* object

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

* deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#force_delete BackupDrBackupVault#force_delete}

---

##### `ForceUpdate`<sup>Optional</sup> <a name="ForceUpdate" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forceUpdate"></a>

```csharp
public object ForceUpdate { get; set; }
```

- *Type:* object

If set, allow update to extend the minimum enforced retention for backup vault.

This overrides
the restriction against conflicting retention periods. This conflict may occur when the
expiration schedule defined by the associated backup plan is shorter than the minimum
retention set by the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#force_update BackupDrBackupVault#force_update}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#id BackupDrBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreBackupPlanReferences`<sup>Optional</sup> <a name="IgnoreBackupPlanReferences" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.ignoreBackupPlanReferences"></a>

```csharp
public object IgnoreBackupPlanReferences { get; set; }
```

- *Type:* object

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#ignore_backup_plan_references BackupDrBackupVault#ignore_backup_plan_references}

---

##### `IgnoreInactiveDatasources`<sup>Optional</sup> <a name="IgnoreInactiveDatasources" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.ignoreInactiveDatasources"></a>

```csharp
public object IgnoreInactiveDatasources { get; set; }
```

- *Type:* object

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#ignore_inactive_datasources BackupDrBackupVault#ignore_inactive_datasources}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#labels BackupDrBackupVault#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#project BackupDrBackupVault#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.timeouts"></a>

```csharp
public BackupDrBackupVaultTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#timeouts BackupDrBackupVault#timeouts}

---

### BackupDrBackupVaultTimeouts <a name="BackupDrBackupVaultTimeouts" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BackupDrBackupVaultTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#create BackupDrBackupVault#create}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#delete BackupDrBackupVault#delete}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#update BackupDrBackupVault#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#create BackupDrBackupVault#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#delete BackupDrBackupVault#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/backup_dr_backup_vault#update BackupDrBackupVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupDrBackupVaultTimeoutsOutputReference <a name="BackupDrBackupVaultTimeoutsOutputReference" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BackupDrBackupVaultTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



