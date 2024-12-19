# `dataprocJob` Submodule <a name="`dataprocJob` Submodule" id="@cdktf/provider-google.dataprocJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocJob <a name="DataprocJob" id="@cdktf/provider-google.dataprocJob.DataprocJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job google_dataproc_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJob(Construct Scope, string Id, DataprocJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig">DataprocJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig">DataprocJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putHadoopConfig">PutHadoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putHiveConfig">PutHiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putPigConfig">PutPigConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putPlacement">PutPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putPrestoConfig">PutPrestoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putPysparkConfig">PutPysparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putReference">PutReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putScheduling">PutScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putSparkConfig">PutSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putSparksqlConfig">PutSparksqlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetForceDelete">ResetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetHadoopConfig">ResetHadoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetHiveConfig">ResetHiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetPigConfig">ResetPigConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetPrestoConfig">ResetPrestoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetPysparkConfig">ResetPysparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetReference">ResetReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetScheduling">ResetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetSparkConfig">ResetSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetSparksqlConfig">ResetSparksqlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataprocJob.DataprocJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataprocJob.DataprocJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocJob.DataprocJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataprocJob.DataprocJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataprocJob.DataprocJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataprocJob.DataprocJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataprocJob.DataprocJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataprocJob.DataprocJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dataprocJob.DataprocJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataprocJob.DataprocJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dataprocJob.DataprocJob.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dataprocJob.DataprocJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocJob.DataprocJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocJob.DataprocJob.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dataprocJob.DataprocJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocJob.DataprocJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dataprocJob.DataprocJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataprocJob.DataprocJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.dataprocJob.DataprocJob.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dataprocJob.DataprocJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocJob.DataprocJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHadoopConfig` <a name="PutHadoopConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHadoopConfig"></a>

```csharp
private void PutHadoopConfig(DataprocJobHadoopConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHadoopConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a>

---

##### `PutHiveConfig` <a name="PutHiveConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHiveConfig"></a>

```csharp
private void PutHiveConfig(DataprocJobHiveConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHiveConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a>

---

##### `PutPigConfig` <a name="PutPigConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPigConfig"></a>

```csharp
private void PutPigConfig(DataprocJobPigConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPigConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a>

---

##### `PutPlacement` <a name="PutPlacement" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPlacement"></a>

```csharp
private void PutPlacement(DataprocJobPlacement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a>

---

##### `PutPrestoConfig` <a name="PutPrestoConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPrestoConfig"></a>

```csharp
private void PutPrestoConfig(DataprocJobPrestoConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPrestoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a>

---

##### `PutPysparkConfig` <a name="PutPysparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPysparkConfig"></a>

```csharp
private void PutPysparkConfig(DataprocJobPysparkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPysparkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a>

---

##### `PutReference` <a name="PutReference" id="@cdktf/provider-google.dataprocJob.DataprocJob.putReference"></a>

```csharp
private void PutReference(DataprocJobReference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a>

---

##### `PutScheduling` <a name="PutScheduling" id="@cdktf/provider-google.dataprocJob.DataprocJob.putScheduling"></a>

```csharp
private void PutScheduling(DataprocJobScheduling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a>

---

##### `PutSparkConfig` <a name="PutSparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparkConfig"></a>

```csharp
private void PutSparkConfig(DataprocJobSparkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a>

---

##### `PutSparksqlConfig` <a name="PutSparksqlConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparksqlConfig"></a>

```csharp
private void PutSparksqlConfig(DataprocJobSparksqlConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparksqlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataprocJob.DataprocJob.putTimeouts"></a>

```csharp
private void PutTimeouts(DataprocJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a>

---

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetForceDelete"></a>

```csharp
private void ResetForceDelete()
```

##### `ResetHadoopConfig` <a name="ResetHadoopConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetHadoopConfig"></a>

```csharp
private void ResetHadoopConfig()
```

##### `ResetHiveConfig` <a name="ResetHiveConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetHiveConfig"></a>

```csharp
private void ResetHiveConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetPigConfig` <a name="ResetPigConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetPigConfig"></a>

```csharp
private void ResetPigConfig()
```

##### `ResetPrestoConfig` <a name="ResetPrestoConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetPrestoConfig"></a>

```csharp
private void ResetPrestoConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPysparkConfig` <a name="ResetPysparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetPysparkConfig"></a>

```csharp
private void ResetPysparkConfig()
```

##### `ResetReference` <a name="ResetReference" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetReference"></a>

```csharp
private void ResetReference()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetScheduling` <a name="ResetScheduling" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetScheduling"></a>

```csharp
private void ResetScheduling()
```

##### `ResetSparkConfig` <a name="ResetSparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetSparkConfig"></a>

```csharp
private void ResetSparkConfig()
```

##### `ResetSparksqlConfig` <a name="ResetSparksqlConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetSparksqlConfig"></a>

```csharp
private void ResetSparksqlConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataprocJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataprocJob.DataprocJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataprocJob.DataprocJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataprocJob.DataprocJob.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataprocJob resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataprocJob.DataprocJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataprocJob.DataprocJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataprocJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataprocJob.DataprocJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataprocJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocJob.DataprocJob.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataprocJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.driverControlsFilesUri">DriverControlsFilesUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.driverOutputResourceUri">DriverOutputResourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.hadoopConfig">HadoopConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference">DataprocJobHadoopConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.hiveConfig">HiveConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference">DataprocJobHiveConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.pigConfig">PigConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference">DataprocJobPigConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference">DataprocJobPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.prestoConfig">PrestoConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference">DataprocJobPrestoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.pysparkConfig">PysparkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference">DataprocJobPysparkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.reference">Reference</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference">DataprocJobReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference">DataprocJobSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.sparkConfig">SparkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference">DataprocJobSparkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.sparksqlConfig">SparksqlConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference">DataprocJobSparksqlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList">DataprocJobStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference">DataprocJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.hadoopConfigInput">HadoopConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.hiveConfigInput">HiveConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.pigConfigInput">PigConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.placementInput">PlacementInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.prestoConfigInput">PrestoConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.pysparkConfigInput">PysparkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.referenceInput">ReferenceInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.schedulingInput">SchedulingInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.sparkConfigInput">SparkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.sparksqlConfigInput">SparksqlConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.forceDelete">ForceDelete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DriverControlsFilesUri`<sup>Required</sup> <a name="DriverControlsFilesUri" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.driverControlsFilesUri"></a>

```csharp
public string DriverControlsFilesUri { get; }
```

- *Type:* string

---

##### `DriverOutputResourceUri`<sup>Required</sup> <a name="DriverOutputResourceUri" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.driverOutputResourceUri"></a>

```csharp
public string DriverOutputResourceUri { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HadoopConfig`<sup>Required</sup> <a name="HadoopConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.hadoopConfig"></a>

```csharp
public DataprocJobHadoopConfigOutputReference HadoopConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference">DataprocJobHadoopConfigOutputReference</a>

---

##### `HiveConfig`<sup>Required</sup> <a name="HiveConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.hiveConfig"></a>

```csharp
public DataprocJobHiveConfigOutputReference HiveConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference">DataprocJobHiveConfigOutputReference</a>

---

##### `PigConfig`<sup>Required</sup> <a name="PigConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.pigConfig"></a>

```csharp
public DataprocJobPigConfigOutputReference PigConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference">DataprocJobPigConfigOutputReference</a>

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.placement"></a>

```csharp
public DataprocJobPlacementOutputReference Placement { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference">DataprocJobPlacementOutputReference</a>

---

##### `PrestoConfig`<sup>Required</sup> <a name="PrestoConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.prestoConfig"></a>

```csharp
public DataprocJobPrestoConfigOutputReference PrestoConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference">DataprocJobPrestoConfigOutputReference</a>

---

##### `PysparkConfig`<sup>Required</sup> <a name="PysparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.pysparkConfig"></a>

```csharp
public DataprocJobPysparkConfigOutputReference PysparkConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference">DataprocJobPysparkConfigOutputReference</a>

---

##### `Reference`<sup>Required</sup> <a name="Reference" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.reference"></a>

```csharp
public DataprocJobReferenceOutputReference Reference { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference">DataprocJobReferenceOutputReference</a>

---

##### `Scheduling`<sup>Required</sup> <a name="Scheduling" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.scheduling"></a>

```csharp
public DataprocJobSchedulingOutputReference Scheduling { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference">DataprocJobSchedulingOutputReference</a>

---

##### `SparkConfig`<sup>Required</sup> <a name="SparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.sparkConfig"></a>

```csharp
public DataprocJobSparkConfigOutputReference SparkConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference">DataprocJobSparkConfigOutputReference</a>

---

##### `SparksqlConfig`<sup>Required</sup> <a name="SparksqlConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.sparksqlConfig"></a>

```csharp
public DataprocJobSparksqlConfigOutputReference SparksqlConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference">DataprocJobSparksqlConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.status"></a>

```csharp
public DataprocJobStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList">DataprocJobStatusList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.timeouts"></a>

```csharp
public DataprocJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference">DataprocJobTimeoutsOutputReference</a>

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.forceDeleteInput"></a>

```csharp
public object ForceDeleteInput { get; }
```

- *Type:* object

---

##### `HadoopConfigInput`<sup>Optional</sup> <a name="HadoopConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.hadoopConfigInput"></a>

```csharp
public DataprocJobHadoopConfig HadoopConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a>

---

##### `HiveConfigInput`<sup>Optional</sup> <a name="HiveConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.hiveConfigInput"></a>

```csharp
public DataprocJobHiveConfig HiveConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PigConfigInput`<sup>Optional</sup> <a name="PigConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.pigConfigInput"></a>

```csharp
public DataprocJobPigConfig PigConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a>

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.placementInput"></a>

```csharp
public DataprocJobPlacement PlacementInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a>

---

##### `PrestoConfigInput`<sup>Optional</sup> <a name="PrestoConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.prestoConfigInput"></a>

```csharp
public DataprocJobPrestoConfig PrestoConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PysparkConfigInput`<sup>Optional</sup> <a name="PysparkConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.pysparkConfigInput"></a>

```csharp
public DataprocJobPysparkConfig PysparkConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a>

---

##### `ReferenceInput`<sup>Optional</sup> <a name="ReferenceInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.referenceInput"></a>

```csharp
public DataprocJobReference ReferenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SchedulingInput`<sup>Optional</sup> <a name="SchedulingInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.schedulingInput"></a>

```csharp
public DataprocJobScheduling SchedulingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a>

---

##### `SparkConfigInput`<sup>Optional</sup> <a name="SparkConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.sparkConfigInput"></a>

```csharp
public DataprocJobSparkConfig SparkConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a>

---

##### `SparksqlConfigInput`<sup>Optional</sup> <a name="SparksqlConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.sparksqlConfigInput"></a>

```csharp
public DataprocJobSparksqlConfig SparksqlConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.forceDelete"></a>

```csharp
public object ForceDelete { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocJobConfig <a name="DataprocJobConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DataprocJobPlacement Placement,
    object ForceDelete = null,
    DataprocJobHadoopConfig HadoopConfig = null,
    DataprocJobHiveConfig HiveConfig = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    DataprocJobPigConfig PigConfig = null,
    DataprocJobPrestoConfig PrestoConfig = null,
    string Project = null,
    DataprocJobPysparkConfig PysparkConfig = null,
    DataprocJobReference Reference = null,
    string Region = null,
    DataprocJobScheduling Scheduling = null,
    DataprocJobSparkConfig SparkConfig = null,
    DataprocJobSparksqlConfig SparksqlConfig = null,
    DataprocJobTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.forceDelete">ForceDelete</a></code> | <code>object</code> | By default, you can only delete inactive jobs within Dataproc. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.hadoopConfig">HadoopConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a></code> | hadoop_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.hiveConfig">HiveConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a></code> | hive_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#id DataprocJob#id}. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. The labels to associate with this job. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.pigConfig">PigConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a></code> | pig_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.prestoConfig">PrestoConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a></code> | presto_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.project">Project</a></code> | <code>string</code> | The project in which the cluster can be found and jobs subsequently run against. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.pysparkConfig">PysparkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a></code> | pyspark_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.reference">Reference</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a></code> | reference block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.region">Region</a></code> | <code>string</code> | The Cloud Dataproc region. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.sparkConfig">SparkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a></code> | spark_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.sparksqlConfig">SparksqlConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a></code> | sparksql_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.placement"></a>

```csharp
public DataprocJobPlacement Placement { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#placement DataprocJob#placement}

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.forceDelete"></a>

```csharp
public object ForceDelete { get; set; }
```

- *Type:* object

By default, you can only delete inactive jobs within Dataproc.

Setting this to true, and calling destroy, will ensure that the job is first cancelled before issuing the delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#force_delete DataprocJob#force_delete}

---

##### `HadoopConfig`<sup>Optional</sup> <a name="HadoopConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.hadoopConfig"></a>

```csharp
public DataprocJobHadoopConfig HadoopConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a>

hadoop_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#hadoop_config DataprocJob#hadoop_config}

---

##### `HiveConfig`<sup>Optional</sup> <a name="HiveConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.hiveConfig"></a>

```csharp
public DataprocJobHiveConfig HiveConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a>

hive_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#hive_config DataprocJob#hive_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#id DataprocJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. The labels to associate with this job.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#labels DataprocJob#labels}

---

##### `PigConfig`<sup>Optional</sup> <a name="PigConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.pigConfig"></a>

```csharp
public DataprocJobPigConfig PigConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a>

pig_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#pig_config DataprocJob#pig_config}

---

##### `PrestoConfig`<sup>Optional</sup> <a name="PrestoConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.prestoConfig"></a>

```csharp
public DataprocJobPrestoConfig PrestoConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a>

presto_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#presto_config DataprocJob#presto_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project in which the cluster can be found and jobs subsequently run against.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#project DataprocJob#project}

---

##### `PysparkConfig`<sup>Optional</sup> <a name="PysparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.pysparkConfig"></a>

```csharp
public DataprocJobPysparkConfig PysparkConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a>

pyspark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#pyspark_config DataprocJob#pyspark_config}

---

##### `Reference`<sup>Optional</sup> <a name="Reference" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.reference"></a>

```csharp
public DataprocJobReference Reference { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a>

reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#reference DataprocJob#reference}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The Cloud Dataproc region.

This essentially determines which clusters are available for this job to be submitted to. If not specified, defaults to global.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#region DataprocJob#region}

---

##### `Scheduling`<sup>Optional</sup> <a name="Scheduling" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.scheduling"></a>

```csharp
public DataprocJobScheduling Scheduling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#scheduling DataprocJob#scheduling}

---

##### `SparkConfig`<sup>Optional</sup> <a name="SparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.sparkConfig"></a>

```csharp
public DataprocJobSparkConfig SparkConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a>

spark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#spark_config DataprocJob#spark_config}

---

##### `SparksqlConfig`<sup>Optional</sup> <a name="SparksqlConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.sparksqlConfig"></a>

```csharp
public DataprocJobSparksqlConfig SparksqlConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a>

sparksql_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#sparksql_config DataprocJob#sparksql_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.timeouts"></a>

```csharp
public DataprocJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#timeouts DataprocJob#timeouts}

---

### DataprocJobHadoopConfig <a name="DataprocJobHadoopConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobHadoopConfig {
    string[] ArchiveUris = null,
    string[] Args = null,
    string[] FileUris = null,
    string[] JarFileUris = null,
    DataprocJobHadoopConfigLoggingConfig LoggingConfig = null,
    string MainClass = null,
    string MainJarFileUri = null,
    System.Collections.Generic.IDictionary<string, string> Properties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.args">Args</a></code> | <code>string[]</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.fileUris">FileUris</a></code> | <code>string[]</code> | HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.mainClass">MainClass</a></code> | <code>string</code> | The class containing the main method of the driver. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.mainJarFileUri">MainJarFileUri</a></code> | <code>string</code> | The HCFS URI of jar file containing the driver jar. Conflicts with main_class. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A mapping of property names to values, used to configure Spark. |

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; set; }
```

- *Type:* string[]

HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#archive_uris DataprocJob#archive_uris}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

The arguments to pass to the driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#args DataprocJob#args}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.fileUris"></a>

```csharp
public string[] FileUris { get; set; }
```

- *Type:* string[]

HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks.

Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#file_uris DataprocJob#file_uris}

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; set; }
```

- *Type:* string[]

HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.loggingConfig"></a>

```csharp
public DataprocJobHadoopConfigLoggingConfig LoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `MainClass`<sup>Optional</sup> <a name="MainClass" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.mainClass"></a>

```csharp
public string MainClass { get; set; }
```

- *Type:* string

The class containing the main method of the driver.

Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#main_class DataprocJob#main_class}

---

##### `MainJarFileUri`<sup>Optional</sup> <a name="MainJarFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.mainJarFileUri"></a>

```csharp
public string MainJarFileUri { get; set; }
```

- *Type:* string

The HCFS URI of jar file containing the driver jar. Conflicts with main_class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#main_jar_file_uri DataprocJob#main_jar_file_uri}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A mapping of property names to values, used to configure Spark.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#properties DataprocJob#properties}

---

### DataprocJobHadoopConfigLoggingConfig <a name="DataprocJobHadoopConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobHadoopConfigLoggingConfig {
    System.Collections.Generic.IDictionary<string, string> DriverLogLevels
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig.property.driverLogLevels">DriverLogLevels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig.property.driverLogLevels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverLogLevels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobHiveConfig <a name="DataprocJobHiveConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobHiveConfig {
    object ContinueOnFailure = null,
    string[] JarFileUris = null,
    System.Collections.Generic.IDictionary<string, string> Properties = null,
    string QueryFileUri = null,
    string[] QueryList = null,
    System.Collections.Generic.IDictionary<string, string> ScriptVariables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.continueOnFailure">ContinueOnFailure</a></code> | <code>object</code> | Whether to continue executing queries if a query fails. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A mapping of property names and values, used to configure Hive. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.queryFileUri">QueryFileUri</a></code> | <code>string</code> | HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.queryList">QueryList</a></code> | <code>string[]</code> | The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.scriptVariables">ScriptVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Mapping of query variable names to values (equivalent to the Hive command: SET name="value";). |

---

##### `ContinueOnFailure`<sup>Optional</sup> <a name="ContinueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.continueOnFailure"></a>

```csharp
public object ContinueOnFailure { get; set; }
```

- *Type:* object

Whether to continue executing queries if a query fails.

The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#continue_on_failure DataprocJob#continue_on_failure}

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; set; }
```

- *Type:* string[]

HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks.

Can contain Hive SerDes and UDFs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A mapping of property names and values, used to configure Hive.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#properties DataprocJob#properties}

---

##### `QueryFileUri`<sup>Optional</sup> <a name="QueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.queryFileUri"></a>

```csharp
public string QueryFileUri { get; set; }
```

- *Type:* string

HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#query_file_uri DataprocJob#query_file_uri}

---

##### `QueryList`<sup>Optional</sup> <a name="QueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.queryList"></a>

```csharp
public string[] QueryList { get; set; }
```

- *Type:* string[]

The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#query_list DataprocJob#query_list}

---

##### `ScriptVariables`<sup>Optional</sup> <a name="ScriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.scriptVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ScriptVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Mapping of query variable names to values (equivalent to the Hive command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#script_variables DataprocJob#script_variables}

---

### DataprocJobPigConfig <a name="DataprocJobPigConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobPigConfig {
    object ContinueOnFailure = null,
    string[] JarFileUris = null,
    DataprocJobPigConfigLoggingConfig LoggingConfig = null,
    System.Collections.Generic.IDictionary<string, string> Properties = null,
    string QueryFileUri = null,
    string[] QueryList = null,
    System.Collections.Generic.IDictionary<string, string> ScriptVariables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.continueOnFailure">ContinueOnFailure</a></code> | <code>object</code> | Whether to continue executing queries if a query fails. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A mapping of property names to values, used to configure Pig. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.queryFileUri">QueryFileUri</a></code> | <code>string</code> | HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.queryList">QueryList</a></code> | <code>string[]</code> | The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.scriptVariables">ScriptVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Mapping of query variable names to values (equivalent to the Pig command: name=[value]). |

---

##### `ContinueOnFailure`<sup>Optional</sup> <a name="ContinueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.continueOnFailure"></a>

```csharp
public object ContinueOnFailure { get; set; }
```

- *Type:* object

Whether to continue executing queries if a query fails.

The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#continue_on_failure DataprocJob#continue_on_failure}

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; set; }
```

- *Type:* string[]

HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks.

Can contain Pig UDFs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.loggingConfig"></a>

```csharp
public DataprocJobPigConfigLoggingConfig LoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A mapping of property names to values, used to configure Pig.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#properties DataprocJob#properties}

---

##### `QueryFileUri`<sup>Optional</sup> <a name="QueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.queryFileUri"></a>

```csharp
public string QueryFileUri { get; set; }
```

- *Type:* string

HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#query_file_uri DataprocJob#query_file_uri}

---

##### `QueryList`<sup>Optional</sup> <a name="QueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.queryList"></a>

```csharp
public string[] QueryList { get; set; }
```

- *Type:* string[]

The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#query_list DataprocJob#query_list}

---

##### `ScriptVariables`<sup>Optional</sup> <a name="ScriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.scriptVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ScriptVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Mapping of query variable names to values (equivalent to the Pig command: name=[value]).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#script_variables DataprocJob#script_variables}

---

### DataprocJobPigConfigLoggingConfig <a name="DataprocJobPigConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobPigConfigLoggingConfig {
    System.Collections.Generic.IDictionary<string, string> DriverLogLevels
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig.property.driverLogLevels">DriverLogLevels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig.property.driverLogLevels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverLogLevels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobPlacement <a name="DataprocJobPlacement" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobPlacement {
    string ClusterName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement.property.clusterName">ClusterName</a></code> | <code>string</code> | The name of the cluster where the job will be submitted. |

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacement.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

The name of the cluster where the job will be submitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#cluster_name DataprocJob#cluster_name}

---

### DataprocJobPrestoConfig <a name="DataprocJobPrestoConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobPrestoConfig {
    string[] ClientTags = null,
    object ContinueOnFailure = null,
    DataprocJobPrestoConfigLoggingConfig LoggingConfig = null,
    string OutputFormat = null,
    System.Collections.Generic.IDictionary<string, string> Properties = null,
    string QueryFileUri = null,
    string[] QueryList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.clientTags">ClientTags</a></code> | <code>string[]</code> | Presto client tags to attach to this query. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.continueOnFailure">ContinueOnFailure</a></code> | <code>object</code> | Whether to continue executing queries if a query fails. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.outputFormat">OutputFormat</a></code> | <code>string</code> | The format in which query output will be displayed. See the Presto documentation for supported output formats. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A mapping of property names to values. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.queryFileUri">QueryFileUri</a></code> | <code>string</code> | The HCFS URI of the script that contains SQL queries. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.queryList">QueryList</a></code> | <code>string[]</code> | The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri. |

---

##### `ClientTags`<sup>Optional</sup> <a name="ClientTags" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.clientTags"></a>

```csharp
public string[] ClientTags { get; set; }
```

- *Type:* string[]

Presto client tags to attach to this query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#client_tags DataprocJob#client_tags}

---

##### `ContinueOnFailure`<sup>Optional</sup> <a name="ContinueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.continueOnFailure"></a>

```csharp
public object ContinueOnFailure { get; set; }
```

- *Type:* object

Whether to continue executing queries if a query fails.

Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#continue_on_failure DataprocJob#continue_on_failure}

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.loggingConfig"></a>

```csharp
public DataprocJobPrestoConfigLoggingConfig LoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `OutputFormat`<sup>Optional</sup> <a name="OutputFormat" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.outputFormat"></a>

```csharp
public string OutputFormat { get; set; }
```

- *Type:* string

The format in which query output will be displayed. See the Presto documentation for supported output formats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#output_format DataprocJob#output_format}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A mapping of property names to values.

Used to set Presto session properties Equivalent to using the --session flag in the Presto CLI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#properties DataprocJob#properties}

---

##### `QueryFileUri`<sup>Optional</sup> <a name="QueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.queryFileUri"></a>

```csharp
public string QueryFileUri { get; set; }
```

- *Type:* string

The HCFS URI of the script that contains SQL queries. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#query_file_uri DataprocJob#query_file_uri}

---

##### `QueryList`<sup>Optional</sup> <a name="QueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.queryList"></a>

```csharp
public string[] QueryList { get; set; }
```

- *Type:* string[]

The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#query_list DataprocJob#query_list}

---

### DataprocJobPrestoConfigLoggingConfig <a name="DataprocJobPrestoConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobPrestoConfigLoggingConfig {
    System.Collections.Generic.IDictionary<string, string> DriverLogLevels
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig.property.driverLogLevels">DriverLogLevels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig.property.driverLogLevels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverLogLevels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobPysparkConfig <a name="DataprocJobPysparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobPysparkConfig {
    string MainPythonFileUri,
    string[] ArchiveUris = null,
    string[] Args = null,
    string[] FileUris = null,
    string[] JarFileUris = null,
    DataprocJobPysparkConfigLoggingConfig LoggingConfig = null,
    System.Collections.Generic.IDictionary<string, string> Properties = null,
    string[] PythonFileUris = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.mainPythonFileUri">MainPythonFileUri</a></code> | <code>string</code> | Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.args">Args</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.fileUris">FileUris</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.pythonFileUris">PythonFileUris</a></code> | <code>string[]</code> | Optional. |

---

##### `MainPythonFileUri`<sup>Required</sup> <a name="MainPythonFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.mainPythonFileUri"></a>

```csharp
public string MainPythonFileUri { get; set; }
```

- *Type:* string

Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#main_python_file_uri DataprocJob#main_python_file_uri}

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; set; }
```

- *Type:* string[]

Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#archive_uris DataprocJob#archive_uris}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

Optional.

The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#args DataprocJob#args}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.fileUris"></a>

```csharp
public string[] FileUris { get; set; }
```

- *Type:* string[]

Optional.

HCFS URIs of files to be copied to the working directory of Python drivers and distributed tasks. Useful for naively parallel tasks

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#file_uris DataprocJob#file_uris}

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; set; }
```

- *Type:* string[]

Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.loggingConfig"></a>

```csharp
public DataprocJobPysparkConfigLoggingConfig LoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#properties DataprocJob#properties}

---

##### `PythonFileUris`<sup>Optional</sup> <a name="PythonFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.pythonFileUris"></a>

```csharp
public string[] PythonFileUris { get; set; }
```

- *Type:* string[]

Optional.

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#python_file_uris DataprocJob#python_file_uris}

---

### DataprocJobPysparkConfigLoggingConfig <a name="DataprocJobPysparkConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobPysparkConfigLoggingConfig {
    System.Collections.Generic.IDictionary<string, string> DriverLogLevels
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig.property.driverLogLevels">DriverLogLevels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig.property.driverLogLevels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverLogLevels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobReference <a name="DataprocJobReference" id="@cdktf/provider-google.dataprocJob.DataprocJobReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobReference {
    string JobId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference.property.jobId">JobId</a></code> | <code>string</code> | The job ID, which must be unique within the project. |

---

##### `JobId`<sup>Optional</sup> <a name="JobId" id="@cdktf/provider-google.dataprocJob.DataprocJobReference.property.jobId"></a>

```csharp
public string JobId { get; set; }
```

- *Type:* string

The job ID, which must be unique within the project.

The job ID is generated by the server upon job submission or provided by the user as a means to perform retries without creating duplicate jobs

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#job_id DataprocJob#job_id}

---

### DataprocJobScheduling <a name="DataprocJobScheduling" id="@cdktf/provider-google.dataprocJob.DataprocJobScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobScheduling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobScheduling {
    double MaxFailuresPerHour,
    double MaxFailuresTotal
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling.property.maxFailuresPerHour">MaxFailuresPerHour</a></code> | <code>double</code> | Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling.property.maxFailuresTotal">MaxFailuresTotal</a></code> | <code>double</code> | Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed. |

---

##### `MaxFailuresPerHour`<sup>Required</sup> <a name="MaxFailuresPerHour" id="@cdktf/provider-google.dataprocJob.DataprocJobScheduling.property.maxFailuresPerHour"></a>

```csharp
public double MaxFailuresPerHour { get; set; }
```

- *Type:* double

Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#max_failures_per_hour DataprocJob#max_failures_per_hour}

---

##### `MaxFailuresTotal`<sup>Required</sup> <a name="MaxFailuresTotal" id="@cdktf/provider-google.dataprocJob.DataprocJobScheduling.property.maxFailuresTotal"></a>

```csharp
public double MaxFailuresTotal { get; set; }
```

- *Type:* double

Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#max_failures_total DataprocJob#max_failures_total}

---

### DataprocJobSparkConfig <a name="DataprocJobSparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobSparkConfig {
    string[] ArchiveUris = null,
    string[] Args = null,
    string[] FileUris = null,
    string[] JarFileUris = null,
    DataprocJobSparkConfigLoggingConfig LoggingConfig = null,
    string MainClass = null,
    string MainJarFileUri = null,
    System.Collections.Generic.IDictionary<string, string> Properties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.args">Args</a></code> | <code>string[]</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.fileUris">FileUris</a></code> | <code>string[]</code> | HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.mainClass">MainClass</a></code> | <code>string</code> | The class containing the main method of the driver. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.mainJarFileUri">MainJarFileUri</a></code> | <code>string</code> | The HCFS URI of jar file containing the driver jar. Conflicts with main_class. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A mapping of property names to values, used to configure Spark. |

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; set; }
```

- *Type:* string[]

HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#archive_uris DataprocJob#archive_uris}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

The arguments to pass to the driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#args DataprocJob#args}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.fileUris"></a>

```csharp
public string[] FileUris { get; set; }
```

- *Type:* string[]

HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks.

Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#file_uris DataprocJob#file_uris}

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; set; }
```

- *Type:* string[]

HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.loggingConfig"></a>

```csharp
public DataprocJobSparkConfigLoggingConfig LoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `MainClass`<sup>Optional</sup> <a name="MainClass" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.mainClass"></a>

```csharp
public string MainClass { get; set; }
```

- *Type:* string

The class containing the main method of the driver.

Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#main_class DataprocJob#main_class}

---

##### `MainJarFileUri`<sup>Optional</sup> <a name="MainJarFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.mainJarFileUri"></a>

```csharp
public string MainJarFileUri { get; set; }
```

- *Type:* string

The HCFS URI of jar file containing the driver jar. Conflicts with main_class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#main_jar_file_uri DataprocJob#main_jar_file_uri}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A mapping of property names to values, used to configure Spark.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#properties DataprocJob#properties}

---

### DataprocJobSparkConfigLoggingConfig <a name="DataprocJobSparkConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobSparkConfigLoggingConfig {
    System.Collections.Generic.IDictionary<string, string> DriverLogLevels
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig.property.driverLogLevels">DriverLogLevels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig.property.driverLogLevels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverLogLevels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobSparksqlConfig <a name="DataprocJobSparksqlConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobSparksqlConfig {
    string[] JarFileUris = null,
    DataprocJobSparksqlConfigLoggingConfig LoggingConfig = null,
    System.Collections.Generic.IDictionary<string, string> Properties = null,
    string QueryFileUri = null,
    string[] QueryList = null,
    System.Collections.Generic.IDictionary<string, string> ScriptVariables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | HCFS URIs of jar files to be added to the Spark CLASSPATH. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A mapping of property names to values, used to configure Spark SQL's SparkConf. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.queryFileUri">QueryFileUri</a></code> | <code>string</code> | The HCFS URI of the script that contains SQL queries. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.queryList">QueryList</a></code> | <code>string[]</code> | The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.scriptVariables">ScriptVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";). |

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; set; }
```

- *Type:* string[]

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.loggingConfig"></a>

```csharp
public DataprocJobSparksqlConfigLoggingConfig LoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A mapping of property names to values, used to configure Spark SQL's SparkConf.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#properties DataprocJob#properties}

---

##### `QueryFileUri`<sup>Optional</sup> <a name="QueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.queryFileUri"></a>

```csharp
public string QueryFileUri { get; set; }
```

- *Type:* string

The HCFS URI of the script that contains SQL queries. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#query_file_uri DataprocJob#query_file_uri}

---

##### `QueryList`<sup>Optional</sup> <a name="QueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.queryList"></a>

```csharp
public string[] QueryList { get; set; }
```

- *Type:* string[]

The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#query_list DataprocJob#query_list}

---

##### `ScriptVariables`<sup>Optional</sup> <a name="ScriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.scriptVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ScriptVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#script_variables DataprocJob#script_variables}

---

### DataprocJobSparksqlConfigLoggingConfig <a name="DataprocJobSparksqlConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobSparksqlConfigLoggingConfig {
    System.Collections.Generic.IDictionary<string, string> DriverLogLevels
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig.property.driverLogLevels">DriverLogLevels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig.property.driverLogLevels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverLogLevels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobStatus <a name="DataprocJobStatus" id="@cdktf/provider-google.dataprocJob.DataprocJobStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobStatus {

};
```


### DataprocJobTimeouts <a name="DataprocJobTimeouts" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#create DataprocJob#create}. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#delete DataprocJob#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#create DataprocJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_job#delete DataprocJob#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocJobHadoopConfigLoggingConfigOutputReference <a name="DataprocJobHadoopConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobHadoopConfigLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevelsInput">DriverLogLevelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevels">DriverLogLevels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DriverLogLevelsInput`<sup>Optional</sup> <a name="DriverLogLevelsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverLogLevelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverLogLevels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocJobHadoopConfigLoggingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a>

---


### DataprocJobHadoopConfigOutputReference <a name="DataprocJobHadoopConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobHadoopConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetMainClass">ResetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetMainJarFileUri">ResetMainJarFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.putLoggingConfig"></a>

```csharp
private void PutLoggingConfig(DataprocJobHadoopConfigLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a>

---

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetArchiveUris"></a>

```csharp
private void ResetArchiveUris()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetFileUris"></a>

```csharp
private void ResetFileUris()
```

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetJarFileUris"></a>

```csharp
private void ResetJarFileUris()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetLoggingConfig"></a>

```csharp
private void ResetLoggingConfig()
```

##### `ResetMainClass` <a name="ResetMainClass" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetMainClass"></a>

```csharp
private void ResetMainClass()
```

##### `ResetMainJarFileUri` <a name="ResetMainJarFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetMainJarFileUri"></a>

```csharp
private void ResetMainJarFileUri()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference">DataprocJobHadoopConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainClassInput">MainClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainJarFileUriInput">MainJarFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fileUris">FileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainClass">MainClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainJarFileUri">MainJarFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.loggingConfig"></a>

```csharp
public DataprocJobHadoopConfigLoggingConfigOutputReference LoggingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference">DataprocJobHadoopConfigLoggingConfigOutputReference</a>

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.archiveUrisInput"></a>

```csharp
public string[] ArchiveUrisInput { get; }
```

- *Type:* string[]

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fileUrisInput"></a>

```csharp
public string[] FileUrisInput { get; }
```

- *Type:* string[]

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.jarFileUrisInput"></a>

```csharp
public string[] JarFileUrisInput { get; }
```

- *Type:* string[]

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.loggingConfigInput"></a>

```csharp
public DataprocJobHadoopConfigLoggingConfig LoggingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a>

---

##### `MainClassInput`<sup>Optional</sup> <a name="MainClassInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainClassInput"></a>

```csharp
public string MainClassInput { get; }
```

- *Type:* string

---

##### `MainJarFileUriInput`<sup>Optional</sup> <a name="MainJarFileUriInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainJarFileUriInput"></a>

```csharp
public string MainJarFileUriInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; }
```

- *Type:* string[]

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fileUris"></a>

```csharp
public string[] FileUris { get; }
```

- *Type:* string[]

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; }
```

- *Type:* string[]

---

##### `MainClass`<sup>Required</sup> <a name="MainClass" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainClass"></a>

```csharp
public string MainClass { get; }
```

- *Type:* string

---

##### `MainJarFileUri`<sup>Required</sup> <a name="MainJarFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainJarFileUri"></a>

```csharp
public string MainJarFileUri { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocJobHadoopConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a>

---


### DataprocJobHiveConfigOutputReference <a name="DataprocJobHiveConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobHiveConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetContinueOnFailure">ResetContinueOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetQueryFileUri">ResetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetQueryList">ResetQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetScriptVariables">ResetScriptVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContinueOnFailure` <a name="ResetContinueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetContinueOnFailure"></a>

```csharp
private void ResetContinueOnFailure()
```

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetJarFileUris"></a>

```csharp
private void ResetJarFileUris()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetQueryFileUri` <a name="ResetQueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetQueryFileUri"></a>

```csharp
private void ResetQueryFileUri()
```

##### `ResetQueryList` <a name="ResetQueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetQueryList"></a>

```csharp
private void ResetQueryList()
```

##### `ResetScriptVariables` <a name="ResetScriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetScriptVariables"></a>

```csharp
private void ResetScriptVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.continueOnFailureInput">ContinueOnFailureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryFileUriInput">QueryFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryListInput">QueryListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.scriptVariablesInput">ScriptVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.continueOnFailure">ContinueOnFailure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryFileUri">QueryFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryList">QueryList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.scriptVariables">ScriptVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContinueOnFailureInput`<sup>Optional</sup> <a name="ContinueOnFailureInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.continueOnFailureInput"></a>

```csharp
public object ContinueOnFailureInput { get; }
```

- *Type:* object

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.jarFileUrisInput"></a>

```csharp
public string[] JarFileUrisInput { get; }
```

- *Type:* string[]

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `QueryFileUriInput`<sup>Optional</sup> <a name="QueryFileUriInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryFileUriInput"></a>

```csharp
public string QueryFileUriInput { get; }
```

- *Type:* string

---

##### `QueryListInput`<sup>Optional</sup> <a name="QueryListInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryListInput"></a>

```csharp
public string[] QueryListInput { get; }
```

- *Type:* string[]

---

##### `ScriptVariablesInput`<sup>Optional</sup> <a name="ScriptVariablesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.scriptVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ScriptVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ContinueOnFailure`<sup>Required</sup> <a name="ContinueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.continueOnFailure"></a>

```csharp
public object ContinueOnFailure { get; }
```

- *Type:* object

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; }
```

- *Type:* string[]

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `QueryFileUri`<sup>Required</sup> <a name="QueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryFileUri"></a>

```csharp
public string QueryFileUri { get; }
```

- *Type:* string

---

##### `QueryList`<sup>Required</sup> <a name="QueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryList"></a>

```csharp
public string[] QueryList { get; }
```

- *Type:* string[]

---

##### `ScriptVariables`<sup>Required</sup> <a name="ScriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.scriptVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ScriptVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocJobHiveConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a>

---


### DataprocJobPigConfigLoggingConfigOutputReference <a name="DataprocJobPigConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobPigConfigLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevelsInput">DriverLogLevelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevels">DriverLogLevels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DriverLogLevelsInput`<sup>Optional</sup> <a name="DriverLogLevelsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverLogLevelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverLogLevels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocJobPigConfigLoggingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a>

---


### DataprocJobPigConfigOutputReference <a name="DataprocJobPigConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobPigConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetContinueOnFailure">ResetContinueOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetQueryFileUri">ResetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetQueryList">ResetQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetScriptVariables">ResetScriptVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.putLoggingConfig"></a>

```csharp
private void PutLoggingConfig(DataprocJobPigConfigLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a>

---

##### `ResetContinueOnFailure` <a name="ResetContinueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetContinueOnFailure"></a>

```csharp
private void ResetContinueOnFailure()
```

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetJarFileUris"></a>

```csharp
private void ResetJarFileUris()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetLoggingConfig"></a>

```csharp
private void ResetLoggingConfig()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetQueryFileUri` <a name="ResetQueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetQueryFileUri"></a>

```csharp
private void ResetQueryFileUri()
```

##### `ResetQueryList` <a name="ResetQueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetQueryList"></a>

```csharp
private void ResetQueryList()
```

##### `ResetScriptVariables` <a name="ResetScriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetScriptVariables"></a>

```csharp
private void ResetScriptVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference">DataprocJobPigConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.continueOnFailureInput">ContinueOnFailureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryFileUriInput">QueryFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryListInput">QueryListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.scriptVariablesInput">ScriptVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.continueOnFailure">ContinueOnFailure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryFileUri">QueryFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryList">QueryList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.scriptVariables">ScriptVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.loggingConfig"></a>

```csharp
public DataprocJobPigConfigLoggingConfigOutputReference LoggingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference">DataprocJobPigConfigLoggingConfigOutputReference</a>

---

##### `ContinueOnFailureInput`<sup>Optional</sup> <a name="ContinueOnFailureInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.continueOnFailureInput"></a>

```csharp
public object ContinueOnFailureInput { get; }
```

- *Type:* object

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.jarFileUrisInput"></a>

```csharp
public string[] JarFileUrisInput { get; }
```

- *Type:* string[]

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.loggingConfigInput"></a>

```csharp
public DataprocJobPigConfigLoggingConfig LoggingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a>

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `QueryFileUriInput`<sup>Optional</sup> <a name="QueryFileUriInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryFileUriInput"></a>

```csharp
public string QueryFileUriInput { get; }
```

- *Type:* string

---

##### `QueryListInput`<sup>Optional</sup> <a name="QueryListInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryListInput"></a>

```csharp
public string[] QueryListInput { get; }
```

- *Type:* string[]

---

##### `ScriptVariablesInput`<sup>Optional</sup> <a name="ScriptVariablesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.scriptVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ScriptVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ContinueOnFailure`<sup>Required</sup> <a name="ContinueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.continueOnFailure"></a>

```csharp
public object ContinueOnFailure { get; }
```

- *Type:* object

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; }
```

- *Type:* string[]

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `QueryFileUri`<sup>Required</sup> <a name="QueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryFileUri"></a>

```csharp
public string QueryFileUri { get; }
```

- *Type:* string

---

##### `QueryList`<sup>Required</sup> <a name="QueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryList"></a>

```csharp
public string[] QueryList { get; }
```

- *Type:* string[]

---

##### `ScriptVariables`<sup>Required</sup> <a name="ScriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.scriptVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ScriptVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocJobPigConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a>

---


### DataprocJobPlacementOutputReference <a name="DataprocJobPlacementOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobPlacementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterUuid">ClusterUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterUuid`<sup>Required</sup> <a name="ClusterUuid" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterUuid"></a>

```csharp
public string ClusterUuid { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.internalValue"></a>

```csharp
public DataprocJobPlacement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a>

---


### DataprocJobPrestoConfigLoggingConfigOutputReference <a name="DataprocJobPrestoConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobPrestoConfigLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevelsInput">DriverLogLevelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevels">DriverLogLevels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DriverLogLevelsInput`<sup>Optional</sup> <a name="DriverLogLevelsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverLogLevelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverLogLevels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocJobPrestoConfigLoggingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a>

---


### DataprocJobPrestoConfigOutputReference <a name="DataprocJobPrestoConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobPrestoConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetClientTags">ResetClientTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetContinueOnFailure">ResetContinueOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetOutputFormat">ResetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetQueryFileUri">ResetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetQueryList">ResetQueryList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.putLoggingConfig"></a>

```csharp
private void PutLoggingConfig(DataprocJobPrestoConfigLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a>

---

##### `ResetClientTags` <a name="ResetClientTags" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetClientTags"></a>

```csharp
private void ResetClientTags()
```

##### `ResetContinueOnFailure` <a name="ResetContinueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetContinueOnFailure"></a>

```csharp
private void ResetContinueOnFailure()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetLoggingConfig"></a>

```csharp
private void ResetLoggingConfig()
```

##### `ResetOutputFormat` <a name="ResetOutputFormat" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetOutputFormat"></a>

```csharp
private void ResetOutputFormat()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetQueryFileUri` <a name="ResetQueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetQueryFileUri"></a>

```csharp
private void ResetQueryFileUri()
```

##### `ResetQueryList` <a name="ResetQueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetQueryList"></a>

```csharp
private void ResetQueryList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference">DataprocJobPrestoConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.clientTagsInput">ClientTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.continueOnFailureInput">ContinueOnFailureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.outputFormatInput">OutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryFileUriInput">QueryFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryListInput">QueryListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.clientTags">ClientTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.continueOnFailure">ContinueOnFailure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.outputFormat">OutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryFileUri">QueryFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryList">QueryList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.loggingConfig"></a>

```csharp
public DataprocJobPrestoConfigLoggingConfigOutputReference LoggingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference">DataprocJobPrestoConfigLoggingConfigOutputReference</a>

---

##### `ClientTagsInput`<sup>Optional</sup> <a name="ClientTagsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.clientTagsInput"></a>

```csharp
public string[] ClientTagsInput { get; }
```

- *Type:* string[]

---

##### `ContinueOnFailureInput`<sup>Optional</sup> <a name="ContinueOnFailureInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.continueOnFailureInput"></a>

```csharp
public object ContinueOnFailureInput { get; }
```

- *Type:* object

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.loggingConfigInput"></a>

```csharp
public DataprocJobPrestoConfigLoggingConfig LoggingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a>

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.outputFormatInput"></a>

```csharp
public string OutputFormatInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `QueryFileUriInput`<sup>Optional</sup> <a name="QueryFileUriInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryFileUriInput"></a>

```csharp
public string QueryFileUriInput { get; }
```

- *Type:* string

---

##### `QueryListInput`<sup>Optional</sup> <a name="QueryListInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryListInput"></a>

```csharp
public string[] QueryListInput { get; }
```

- *Type:* string[]

---

##### `ClientTags`<sup>Required</sup> <a name="ClientTags" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.clientTags"></a>

```csharp
public string[] ClientTags { get; }
```

- *Type:* string[]

---

##### `ContinueOnFailure`<sup>Required</sup> <a name="ContinueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.continueOnFailure"></a>

```csharp
public object ContinueOnFailure { get; }
```

- *Type:* object

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.outputFormat"></a>

```csharp
public string OutputFormat { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `QueryFileUri`<sup>Required</sup> <a name="QueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryFileUri"></a>

```csharp
public string QueryFileUri { get; }
```

- *Type:* string

---

##### `QueryList`<sup>Required</sup> <a name="QueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryList"></a>

```csharp
public string[] QueryList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocJobPrestoConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a>

---


### DataprocJobPysparkConfigLoggingConfigOutputReference <a name="DataprocJobPysparkConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobPysparkConfigLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput">DriverLogLevelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevels">DriverLogLevels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DriverLogLevelsInput`<sup>Optional</sup> <a name="DriverLogLevelsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverLogLevelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverLogLevels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocJobPysparkConfigLoggingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a>

---


### DataprocJobPysparkConfigOutputReference <a name="DataprocJobPysparkConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobPysparkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetPythonFileUris">ResetPythonFileUris</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.putLoggingConfig"></a>

```csharp
private void PutLoggingConfig(DataprocJobPysparkConfigLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a>

---

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetArchiveUris"></a>

```csharp
private void ResetArchiveUris()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetFileUris"></a>

```csharp
private void ResetFileUris()
```

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetJarFileUris"></a>

```csharp
private void ResetJarFileUris()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetLoggingConfig"></a>

```csharp
private void ResetLoggingConfig()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetPythonFileUris` <a name="ResetPythonFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetPythonFileUris"></a>

```csharp
private void ResetPythonFileUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference">DataprocJobPysparkConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.mainPythonFileUriInput">MainPythonFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.pythonFileUrisInput">PythonFileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fileUris">FileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.mainPythonFileUri">MainPythonFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.pythonFileUris">PythonFileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.loggingConfig"></a>

```csharp
public DataprocJobPysparkConfigLoggingConfigOutputReference LoggingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference">DataprocJobPysparkConfigLoggingConfigOutputReference</a>

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.archiveUrisInput"></a>

```csharp
public string[] ArchiveUrisInput { get; }
```

- *Type:* string[]

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fileUrisInput"></a>

```csharp
public string[] FileUrisInput { get; }
```

- *Type:* string[]

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.jarFileUrisInput"></a>

```csharp
public string[] JarFileUrisInput { get; }
```

- *Type:* string[]

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.loggingConfigInput"></a>

```csharp
public DataprocJobPysparkConfigLoggingConfig LoggingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a>

---

##### `MainPythonFileUriInput`<sup>Optional</sup> <a name="MainPythonFileUriInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.mainPythonFileUriInput"></a>

```csharp
public string MainPythonFileUriInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PythonFileUrisInput`<sup>Optional</sup> <a name="PythonFileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.pythonFileUrisInput"></a>

```csharp
public string[] PythonFileUrisInput { get; }
```

- *Type:* string[]

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; }
```

- *Type:* string[]

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fileUris"></a>

```csharp
public string[] FileUris { get; }
```

- *Type:* string[]

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; }
```

- *Type:* string[]

---

##### `MainPythonFileUri`<sup>Required</sup> <a name="MainPythonFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.mainPythonFileUri"></a>

```csharp
public string MainPythonFileUri { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PythonFileUris`<sup>Required</sup> <a name="PythonFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.pythonFileUris"></a>

```csharp
public string[] PythonFileUris { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocJobPysparkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a>

---


### DataprocJobReferenceOutputReference <a name="DataprocJobReferenceOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.resetJobId">ResetJobId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJobId` <a name="ResetJobId" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.resetJobId"></a>

```csharp
private void ResetJobId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.jobIdInput">JobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.jobId">JobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JobIdInput`<sup>Optional</sup> <a name="JobIdInput" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.jobIdInput"></a>

```csharp
public string JobIdInput { get; }
```

- *Type:* string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.jobId"></a>

```csharp
public string JobId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.internalValue"></a>

```csharp
public DataprocJobReference InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a>

---


### DataprocJobSchedulingOutputReference <a name="DataprocJobSchedulingOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobSchedulingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresPerHourInput">MaxFailuresPerHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresTotalInput">MaxFailuresTotalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresPerHour">MaxFailuresPerHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresTotal">MaxFailuresTotal</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxFailuresPerHourInput`<sup>Optional</sup> <a name="MaxFailuresPerHourInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresPerHourInput"></a>

```csharp
public double MaxFailuresPerHourInput { get; }
```

- *Type:* double

---

##### `MaxFailuresTotalInput`<sup>Optional</sup> <a name="MaxFailuresTotalInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresTotalInput"></a>

```csharp
public double MaxFailuresTotalInput { get; }
```

- *Type:* double

---

##### `MaxFailuresPerHour`<sup>Required</sup> <a name="MaxFailuresPerHour" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresPerHour"></a>

```csharp
public double MaxFailuresPerHour { get; }
```

- *Type:* double

---

##### `MaxFailuresTotal`<sup>Required</sup> <a name="MaxFailuresTotal" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresTotal"></a>

```csharp
public double MaxFailuresTotal { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.internalValue"></a>

```csharp
public DataprocJobScheduling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a>

---


### DataprocJobSparkConfigLoggingConfigOutputReference <a name="DataprocJobSparkConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobSparkConfigLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput">DriverLogLevelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevels">DriverLogLevels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DriverLogLevelsInput`<sup>Optional</sup> <a name="DriverLogLevelsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverLogLevelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverLogLevels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocJobSparkConfigLoggingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a>

---


### DataprocJobSparkConfigOutputReference <a name="DataprocJobSparkConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobSparkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetMainClass">ResetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetMainJarFileUri">ResetMainJarFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.putLoggingConfig"></a>

```csharp
private void PutLoggingConfig(DataprocJobSparkConfigLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a>

---

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetArchiveUris"></a>

```csharp
private void ResetArchiveUris()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetFileUris"></a>

```csharp
private void ResetFileUris()
```

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetJarFileUris"></a>

```csharp
private void ResetJarFileUris()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetLoggingConfig"></a>

```csharp
private void ResetLoggingConfig()
```

##### `ResetMainClass` <a name="ResetMainClass" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetMainClass"></a>

```csharp
private void ResetMainClass()
```

##### `ResetMainJarFileUri` <a name="ResetMainJarFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetMainJarFileUri"></a>

```csharp
private void ResetMainJarFileUri()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference">DataprocJobSparkConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainClassInput">MainClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainJarFileUriInput">MainJarFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fileUris">FileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainClass">MainClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainJarFileUri">MainJarFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.loggingConfig"></a>

```csharp
public DataprocJobSparkConfigLoggingConfigOutputReference LoggingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference">DataprocJobSparkConfigLoggingConfigOutputReference</a>

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.archiveUrisInput"></a>

```csharp
public string[] ArchiveUrisInput { get; }
```

- *Type:* string[]

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fileUrisInput"></a>

```csharp
public string[] FileUrisInput { get; }
```

- *Type:* string[]

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.jarFileUrisInput"></a>

```csharp
public string[] JarFileUrisInput { get; }
```

- *Type:* string[]

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.loggingConfigInput"></a>

```csharp
public DataprocJobSparkConfigLoggingConfig LoggingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a>

---

##### `MainClassInput`<sup>Optional</sup> <a name="MainClassInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainClassInput"></a>

```csharp
public string MainClassInput { get; }
```

- *Type:* string

---

##### `MainJarFileUriInput`<sup>Optional</sup> <a name="MainJarFileUriInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainJarFileUriInput"></a>

```csharp
public string MainJarFileUriInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; }
```

- *Type:* string[]

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fileUris"></a>

```csharp
public string[] FileUris { get; }
```

- *Type:* string[]

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; }
```

- *Type:* string[]

---

##### `MainClass`<sup>Required</sup> <a name="MainClass" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainClass"></a>

```csharp
public string MainClass { get; }
```

- *Type:* string

---

##### `MainJarFileUri`<sup>Required</sup> <a name="MainJarFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainJarFileUri"></a>

```csharp
public string MainJarFileUri { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocJobSparkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a>

---


### DataprocJobSparksqlConfigLoggingConfigOutputReference <a name="DataprocJobSparksqlConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobSparksqlConfigLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevelsInput">DriverLogLevelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevels">DriverLogLevels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DriverLogLevelsInput`<sup>Optional</sup> <a name="DriverLogLevelsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverLogLevelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverLogLevels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocJobSparksqlConfigLoggingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a>

---


### DataprocJobSparksqlConfigOutputReference <a name="DataprocJobSparksqlConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobSparksqlConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetQueryFileUri">ResetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetQueryList">ResetQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetScriptVariables">ResetScriptVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.putLoggingConfig"></a>

```csharp
private void PutLoggingConfig(DataprocJobSparksqlConfigLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a>

---

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetJarFileUris"></a>

```csharp
private void ResetJarFileUris()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetLoggingConfig"></a>

```csharp
private void ResetLoggingConfig()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetQueryFileUri` <a name="ResetQueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetQueryFileUri"></a>

```csharp
private void ResetQueryFileUri()
```

##### `ResetQueryList` <a name="ResetQueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetQueryList"></a>

```csharp
private void ResetQueryList()
```

##### `ResetScriptVariables` <a name="ResetScriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetScriptVariables"></a>

```csharp
private void ResetScriptVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference">DataprocJobSparksqlConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryFileUriInput">QueryFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryListInput">QueryListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.scriptVariablesInput">ScriptVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryFileUri">QueryFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryList">QueryList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.scriptVariables">ScriptVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.loggingConfig"></a>

```csharp
public DataprocJobSparksqlConfigLoggingConfigOutputReference LoggingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference">DataprocJobSparksqlConfigLoggingConfigOutputReference</a>

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.jarFileUrisInput"></a>

```csharp
public string[] JarFileUrisInput { get; }
```

- *Type:* string[]

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.loggingConfigInput"></a>

```csharp
public DataprocJobSparksqlConfigLoggingConfig LoggingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a>

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `QueryFileUriInput`<sup>Optional</sup> <a name="QueryFileUriInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryFileUriInput"></a>

```csharp
public string QueryFileUriInput { get; }
```

- *Type:* string

---

##### `QueryListInput`<sup>Optional</sup> <a name="QueryListInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryListInput"></a>

```csharp
public string[] QueryListInput { get; }
```

- *Type:* string[]

---

##### `ScriptVariablesInput`<sup>Optional</sup> <a name="ScriptVariablesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.scriptVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ScriptVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; }
```

- *Type:* string[]

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `QueryFileUri`<sup>Required</sup> <a name="QueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryFileUri"></a>

```csharp
public string QueryFileUri { get; }
```

- *Type:* string

---

##### `QueryList`<sup>Required</sup> <a name="QueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryList"></a>

```csharp
public string[] QueryList { get; }
```

- *Type:* string[]

---

##### `ScriptVariables`<sup>Required</sup> <a name="ScriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.scriptVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ScriptVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocJobSparksqlConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a>

---


### DataprocJobStatusList <a name="DataprocJobStatusList" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.get"></a>

```csharp
private DataprocJobStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataprocJobStatusOutputReference <a name="DataprocJobStatusOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.details">Details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.stateStartTime">StateStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.substate">Substate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatus">DataprocJobStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.details"></a>

```csharp
public string Details { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateStartTime`<sup>Required</sup> <a name="StateStartTime" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.stateStartTime"></a>

```csharp
public string StateStartTime { get; }
```

- *Type:* string

---

##### `Substate`<sup>Required</sup> <a name="Substate" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.substate"></a>

```csharp
public string Substate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.internalValue"></a>

```csharp
public DataprocJobStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatus">DataprocJobStatus</a>

---


### DataprocJobTimeoutsOutputReference <a name="DataprocJobTimeoutsOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



