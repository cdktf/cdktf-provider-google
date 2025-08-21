# `storageBatchOperationsJob` Submodule <a name="`storageBatchOperationsJob` Submodule" id="@cdktf/provider-google.storageBatchOperationsJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageBatchOperationsJob <a name="StorageBatchOperationsJob" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job google_storage_batch_operations_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBatchOperationsJob(Construct Scope, string Id, StorageBatchOperationsJobConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig">StorageBatchOperationsJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig">StorageBatchOperationsJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putBucketList">PutBucketList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putDeleteObject">PutDeleteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutMetadata">PutPutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutObjectHold">PutPutObjectHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putRewriteObject">PutRewriteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetBucketList">ResetBucketList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetDeleteObject">ResetDeleteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetDeleteProtection">ResetDeleteProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetJobId">ResetJobId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetPutMetadata">ResetPutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetPutObjectHold">ResetPutObjectHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetRewriteObject">ResetRewriteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBucketList` <a name="PutBucketList" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putBucketList"></a>

```csharp
private void PutBucketList(StorageBatchOperationsJobBucketListStruct Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putBucketList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a>

---

##### `PutDeleteObject` <a name="PutDeleteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putDeleteObject"></a>

```csharp
private void PutDeleteObject(StorageBatchOperationsJobDeleteObject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putDeleteObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a>

---

##### `PutPutMetadata` <a name="PutPutMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutMetadata"></a>

```csharp
private void PutPutMetadata(StorageBatchOperationsJobPutMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a>

---

##### `PutPutObjectHold` <a name="PutPutObjectHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutObjectHold"></a>

```csharp
private void PutPutObjectHold(StorageBatchOperationsJobPutObjectHold Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutObjectHold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a>

---

##### `PutRewriteObject` <a name="PutRewriteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putRewriteObject"></a>

```csharp
private void PutRewriteObject(StorageBatchOperationsJobRewriteObject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putRewriteObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putTimeouts"></a>

```csharp
private void PutTimeouts(StorageBatchOperationsJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a>

---

##### `ResetBucketList` <a name="ResetBucketList" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetBucketList"></a>

```csharp
private void ResetBucketList()
```

##### `ResetDeleteObject` <a name="ResetDeleteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetDeleteObject"></a>

```csharp
private void ResetDeleteObject()
```

##### `ResetDeleteProtection` <a name="ResetDeleteProtection" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetDeleteProtection"></a>

```csharp
private void ResetDeleteProtection()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetJobId` <a name="ResetJobId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetJobId"></a>

```csharp
private void ResetJobId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPutMetadata` <a name="ResetPutMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetPutMetadata"></a>

```csharp
private void ResetPutMetadata()
```

##### `ResetPutObjectHold` <a name="ResetPutObjectHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetPutObjectHold"></a>

```csharp
private void ResetPutObjectHold()
```

##### `ResetRewriteObject` <a name="ResetRewriteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetRewriteObject"></a>

```csharp
private void ResetRewriteObject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageBatchOperationsJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageBatchOperationsJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageBatchOperationsJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageBatchOperationsJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageBatchOperationsJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StorageBatchOperationsJob resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageBatchOperationsJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageBatchOperationsJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StorageBatchOperationsJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.bucketList">BucketList</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference">StorageBatchOperationsJobBucketListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.completeTime">CompleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteObject">DeleteObject</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference">StorageBatchOperationsJobDeleteObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putMetadata">PutMetadata</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference">StorageBatchOperationsJobPutMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putObjectHold">PutObjectHold</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference">StorageBatchOperationsJobPutObjectHoldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.rewriteObject">RewriteObject</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference">StorageBatchOperationsJobRewriteObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.scheduleTime">ScheduleTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference">StorageBatchOperationsJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.bucketListInput">BucketListInput</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteObjectInput">DeleteObjectInput</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteProtectionInput">DeleteProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.jobIdInput">JobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putMetadataInput">PutMetadataInput</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putObjectHoldInput">PutObjectHoldInput</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.rewriteObjectInput">RewriteObjectInput</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteProtection">DeleteProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.jobId">JobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BucketList`<sup>Required</sup> <a name="BucketList" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.bucketList"></a>

```csharp
public StorageBatchOperationsJobBucketListStructOutputReference BucketList { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference">StorageBatchOperationsJobBucketListStructOutputReference</a>

---

##### `CompleteTime`<sup>Required</sup> <a name="CompleteTime" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.completeTime"></a>

```csharp
public string CompleteTime { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeleteObject`<sup>Required</sup> <a name="DeleteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteObject"></a>

```csharp
public StorageBatchOperationsJobDeleteObjectOutputReference DeleteObject { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference">StorageBatchOperationsJobDeleteObjectOutputReference</a>

---

##### `PutMetadata`<sup>Required</sup> <a name="PutMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putMetadata"></a>

```csharp
public StorageBatchOperationsJobPutMetadataOutputReference PutMetadata { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference">StorageBatchOperationsJobPutMetadataOutputReference</a>

---

##### `PutObjectHold`<sup>Required</sup> <a name="PutObjectHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putObjectHold"></a>

```csharp
public StorageBatchOperationsJobPutObjectHoldOutputReference PutObjectHold { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference">StorageBatchOperationsJobPutObjectHoldOutputReference</a>

---

##### `RewriteObject`<sup>Required</sup> <a name="RewriteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.rewriteObject"></a>

```csharp
public StorageBatchOperationsJobRewriteObjectOutputReference RewriteObject { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference">StorageBatchOperationsJobRewriteObjectOutputReference</a>

---

##### `ScheduleTime`<sup>Required</sup> <a name="ScheduleTime" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.scheduleTime"></a>

```csharp
public string ScheduleTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.timeouts"></a>

```csharp
public StorageBatchOperationsJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference">StorageBatchOperationsJobTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BucketListInput`<sup>Optional</sup> <a name="BucketListInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.bucketListInput"></a>

```csharp
public StorageBatchOperationsJobBucketListStruct BucketListInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a>

---

##### `DeleteObjectInput`<sup>Optional</sup> <a name="DeleteObjectInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteObjectInput"></a>

```csharp
public StorageBatchOperationsJobDeleteObject DeleteObjectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a>

---

##### `DeleteProtectionInput`<sup>Optional</sup> <a name="DeleteProtectionInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteProtectionInput"></a>

```csharp
public object DeleteProtectionInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JobIdInput`<sup>Optional</sup> <a name="JobIdInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.jobIdInput"></a>

```csharp
public string JobIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PutMetadataInput`<sup>Optional</sup> <a name="PutMetadataInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putMetadataInput"></a>

```csharp
public StorageBatchOperationsJobPutMetadata PutMetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a>

---

##### `PutObjectHoldInput`<sup>Optional</sup> <a name="PutObjectHoldInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putObjectHoldInput"></a>

```csharp
public StorageBatchOperationsJobPutObjectHold PutObjectHoldInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a>

---

##### `RewriteObjectInput`<sup>Optional</sup> <a name="RewriteObjectInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.rewriteObjectInput"></a>

```csharp
public StorageBatchOperationsJobRewriteObject RewriteObjectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DeleteProtection`<sup>Required</sup> <a name="DeleteProtection" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteProtection"></a>

```csharp
public object DeleteProtection { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.jobId"></a>

```csharp
public string JobId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBatchOperationsJobBucketListBuckets <a name="StorageBatchOperationsJobBucketListBuckets" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBatchOperationsJobBucketListBuckets {
    string Bucket,
    StorageBatchOperationsJobBucketListBucketsManifest Manifest = null,
    StorageBatchOperationsJobBucketListBucketsPrefixListStruct PrefixList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.bucket">Bucket</a></code> | <code>string</code> | Bucket name for the objects to be transformed. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.manifest">Manifest</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a></code> | manifest block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.prefixList">PrefixList</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a></code> | prefix_list block. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Bucket name for the objects to be transformed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#bucket StorageBatchOperationsJob#bucket}

---

##### `Manifest`<sup>Optional</sup> <a name="Manifest" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.manifest"></a>

```csharp
public StorageBatchOperationsJobBucketListBucketsManifest Manifest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a>

manifest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#manifest StorageBatchOperationsJob#manifest}

---

##### `PrefixList`<sup>Optional</sup> <a name="PrefixList" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.prefixList"></a>

```csharp
public StorageBatchOperationsJobBucketListBucketsPrefixListStruct PrefixList { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

prefix_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#prefix_list StorageBatchOperationsJob#prefix_list}

---

### StorageBatchOperationsJobBucketListBucketsManifest <a name="StorageBatchOperationsJobBucketListBucketsManifest" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBatchOperationsJobBucketListBucketsManifest {
    string ManifestLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest.property.manifestLocation">ManifestLocation</a></code> | <code>string</code> | Specifies objects in a manifest file. |

---

##### `ManifestLocation`<sup>Optional</sup> <a name="ManifestLocation" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest.property.manifestLocation"></a>

```csharp
public string ManifestLocation { get; set; }
```

- *Type:* string

Specifies objects in a manifest file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#manifest_location StorageBatchOperationsJob#manifest_location}

---

### StorageBatchOperationsJobBucketListBucketsPrefixListStruct <a name="StorageBatchOperationsJobBucketListBucketsPrefixListStruct" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBatchOperationsJobBucketListBucketsPrefixListStruct {
    string[] IncludedObjectPrefixes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct.property.includedObjectPrefixes">IncludedObjectPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#included_object_prefixes StorageBatchOperationsJob#included_object_prefixes}. |

---

##### `IncludedObjectPrefixes`<sup>Optional</sup> <a name="IncludedObjectPrefixes" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct.property.includedObjectPrefixes"></a>

```csharp
public string[] IncludedObjectPrefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#included_object_prefixes StorageBatchOperationsJob#included_object_prefixes}.

---

### StorageBatchOperationsJobBucketListStruct <a name="StorageBatchOperationsJobBucketListStruct" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBatchOperationsJobBucketListStruct {
    StorageBatchOperationsJobBucketListBuckets Buckets
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct.property.buckets">Buckets</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a></code> | buckets block. |

---

##### `Buckets`<sup>Required</sup> <a name="Buckets" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct.property.buckets"></a>

```csharp
public StorageBatchOperationsJobBucketListBuckets Buckets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a>

buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#buckets StorageBatchOperationsJob#buckets}

---

### StorageBatchOperationsJobConfig <a name="StorageBatchOperationsJobConfig" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBatchOperationsJobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    StorageBatchOperationsJobBucketListStruct BucketList = null,
    StorageBatchOperationsJobDeleteObject DeleteObject = null,
    object DeleteProtection = null,
    string Id = null,
    string JobId = null,
    string Project = null,
    StorageBatchOperationsJobPutMetadata PutMetadata = null,
    StorageBatchOperationsJobPutObjectHold PutObjectHold = null,
    StorageBatchOperationsJobRewriteObject RewriteObject = null,
    StorageBatchOperationsJobTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.bucketList">BucketList</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a></code> | bucket_list block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.deleteObject">DeleteObject</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a></code> | delete_object block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.deleteProtection">DeleteProtection</a></code> | <code>object</code> | If set to 'true', the storage batch operation job will not be deleted and new job will be created. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#id StorageBatchOperationsJob#id}. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.jobId">JobId</a></code> | <code>string</code> | The ID of the job. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#project StorageBatchOperationsJob#project}. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.putMetadata">PutMetadata</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a></code> | put_metadata block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.putObjectHold">PutObjectHold</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a></code> | put_object_hold block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.rewriteObject">RewriteObject</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a></code> | rewrite_object block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BucketList`<sup>Optional</sup> <a name="BucketList" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.bucketList"></a>

```csharp
public StorageBatchOperationsJobBucketListStruct BucketList { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a>

bucket_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#bucket_list StorageBatchOperationsJob#bucket_list}

---

##### `DeleteObject`<sup>Optional</sup> <a name="DeleteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.deleteObject"></a>

```csharp
public StorageBatchOperationsJobDeleteObject DeleteObject { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a>

delete_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#delete_object StorageBatchOperationsJob#delete_object}

---

##### `DeleteProtection`<sup>Optional</sup> <a name="DeleteProtection" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.deleteProtection"></a>

```csharp
public object DeleteProtection { get; set; }
```

- *Type:* object

If set to 'true', the storage batch operation job will not be deleted and new job will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#delete_protection StorageBatchOperationsJob#delete_protection}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#id StorageBatchOperationsJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JobId`<sup>Optional</sup> <a name="JobId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.jobId"></a>

```csharp
public string JobId { get; set; }
```

- *Type:* string

The ID of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#job_id StorageBatchOperationsJob#job_id}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#project StorageBatchOperationsJob#project}.

---

##### `PutMetadata`<sup>Optional</sup> <a name="PutMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.putMetadata"></a>

```csharp
public StorageBatchOperationsJobPutMetadata PutMetadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a>

put_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#put_metadata StorageBatchOperationsJob#put_metadata}

---

##### `PutObjectHold`<sup>Optional</sup> <a name="PutObjectHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.putObjectHold"></a>

```csharp
public StorageBatchOperationsJobPutObjectHold PutObjectHold { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a>

put_object_hold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#put_object_hold StorageBatchOperationsJob#put_object_hold}

---

##### `RewriteObject`<sup>Optional</sup> <a name="RewriteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.rewriteObject"></a>

```csharp
public StorageBatchOperationsJobRewriteObject RewriteObject { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a>

rewrite_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#rewrite_object StorageBatchOperationsJob#rewrite_object}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.timeouts"></a>

```csharp
public StorageBatchOperationsJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#timeouts StorageBatchOperationsJob#timeouts}

---

### StorageBatchOperationsJobDeleteObject <a name="StorageBatchOperationsJobDeleteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBatchOperationsJobDeleteObject {
    object PermanentObjectDeletionEnabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject.property.permanentObjectDeletionEnabled">PermanentObjectDeletionEnabled</a></code> | <code>object</code> | enable flag to permanently delete object and all object versions if versioning is enabled on bucket. |

---

##### `PermanentObjectDeletionEnabled`<sup>Required</sup> <a name="PermanentObjectDeletionEnabled" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject.property.permanentObjectDeletionEnabled"></a>

```csharp
public object PermanentObjectDeletionEnabled { get; set; }
```

- *Type:* object

enable flag to permanently delete object and all object versions if versioning is enabled on bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#permanent_object_deletion_enabled StorageBatchOperationsJob#permanent_object_deletion_enabled}

---

### StorageBatchOperationsJobPutMetadata <a name="StorageBatchOperationsJobPutMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBatchOperationsJobPutMetadata {
    string CacheControl = null,
    string ContentDisposition = null,
    string ContentEncoding = null,
    string ContentLanguage = null,
    string ContentType = null,
    System.Collections.Generic.IDictionary<string, string> CustomMetadata = null,
    string CustomTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.cacheControl">CacheControl</a></code> | <code>string</code> | Cache-Control directive to specify caching behavior of object data. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | Content-Disposition of the object data. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | Content Encoding of the object data. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | Content-Language of the object data. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentType">ContentType</a></code> | <code>string</code> | Content-Type of the object data. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.customMetadata">CustomMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-provided metadata, in key/value pairs. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.customTime">CustomTime</a></code> | <code>string</code> | Updates the objects fixed custom time metadata. |

---

##### `CacheControl`<sup>Optional</sup> <a name="CacheControl" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.cacheControl"></a>

```csharp
public string CacheControl { get; set; }
```

- *Type:* string

Cache-Control directive to specify caching behavior of object data.

If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#cache_control StorageBatchOperationsJob#cache_control}

---

##### `ContentDisposition`<sup>Optional</sup> <a name="ContentDisposition" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; set; }
```

- *Type:* string

Content-Disposition of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#content_disposition StorageBatchOperationsJob#content_disposition}

---

##### `ContentEncoding`<sup>Optional</sup> <a name="ContentEncoding" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; set; }
```

- *Type:* string

Content Encoding of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#content_encoding StorageBatchOperationsJob#content_encoding}

---

##### `ContentLanguage`<sup>Optional</sup> <a name="ContentLanguage" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; set; }
```

- *Type:* string

Content-Language of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#content_language StorageBatchOperationsJob#content_language}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Content-Type of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#content_type StorageBatchOperationsJob#content_type}

---

##### `CustomMetadata`<sup>Optional</sup> <a name="CustomMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.customMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-provided metadata, in key/value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#custom_metadata StorageBatchOperationsJob#custom_metadata}

---

##### `CustomTime`<sup>Optional</sup> <a name="CustomTime" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.customTime"></a>

```csharp
public string CustomTime { get; set; }
```

- *Type:* string

Updates the objects fixed custom time metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#custom_time StorageBatchOperationsJob#custom_time}

---

### StorageBatchOperationsJobPutObjectHold <a name="StorageBatchOperationsJobPutObjectHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBatchOperationsJobPutObjectHold {
    string EventBasedHold = null,
    string TemporaryHold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold.property.eventBasedHold">EventBasedHold</a></code> | <code>string</code> | set/unset to update event based hold for objects. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold.property.temporaryHold">TemporaryHold</a></code> | <code>string</code> | set/unset to update temporary based hold for objects. |

---

##### `EventBasedHold`<sup>Optional</sup> <a name="EventBasedHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold.property.eventBasedHold"></a>

```csharp
public string EventBasedHold { get; set; }
```

- *Type:* string

set/unset to update event based hold for objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#event_based_hold StorageBatchOperationsJob#event_based_hold}

---

##### `TemporaryHold`<sup>Optional</sup> <a name="TemporaryHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold.property.temporaryHold"></a>

```csharp
public string TemporaryHold { get; set; }
```

- *Type:* string

set/unset to update temporary based hold for objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#temporary_hold StorageBatchOperationsJob#temporary_hold}

---

### StorageBatchOperationsJobRewriteObject <a name="StorageBatchOperationsJobRewriteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBatchOperationsJobRewriteObject {
    string KmsKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject.property.kmsKey">KmsKey</a></code> | <code>string</code> | valid kms key. |

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

valid kms key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#kms_key StorageBatchOperationsJob#kms_key}

---

### StorageBatchOperationsJobTimeouts <a name="StorageBatchOperationsJobTimeouts" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBatchOperationsJobTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#create StorageBatchOperationsJob#create}. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#delete StorageBatchOperationsJob#delete}. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#update StorageBatchOperationsJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#create StorageBatchOperationsJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#delete StorageBatchOperationsJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/storage_batch_operations_job#update StorageBatchOperationsJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageBatchOperationsJobBucketListBucketsManifestOutputReference <a name="StorageBatchOperationsJobBucketListBucketsManifestOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBatchOperationsJobBucketListBucketsManifestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.resetManifestLocation">ResetManifestLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManifestLocation` <a name="ResetManifestLocation" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.resetManifestLocation"></a>

```csharp
private void ResetManifestLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocationInput">ManifestLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocation">ManifestLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManifestLocationInput`<sup>Optional</sup> <a name="ManifestLocationInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocationInput"></a>

```csharp
public string ManifestLocationInput { get; }
```

- *Type:* string

---

##### `ManifestLocation`<sup>Required</sup> <a name="ManifestLocation" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocation"></a>

```csharp
public string ManifestLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.internalValue"></a>

```csharp
public StorageBatchOperationsJobBucketListBucketsManifest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a>

---


### StorageBatchOperationsJobBucketListBucketsOutputReference <a name="StorageBatchOperationsJobBucketListBucketsOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBatchOperationsJobBucketListBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putManifest">PutManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putPrefixList">PutPrefixList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resetManifest">ResetManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resetPrefixList">ResetPrefixList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManifest` <a name="PutManifest" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putManifest"></a>

```csharp
private void PutManifest(StorageBatchOperationsJobBucketListBucketsManifest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putManifest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a>

---

##### `PutPrefixList` <a name="PutPrefixList" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putPrefixList"></a>

```csharp
private void PutPrefixList(StorageBatchOperationsJobBucketListBucketsPrefixListStruct Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putPrefixList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

---

##### `ResetManifest` <a name="ResetManifest" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resetManifest"></a>

```csharp
private void ResetManifest()
```

##### `ResetPrefixList` <a name="ResetPrefixList" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resetPrefixList"></a>

```csharp
private void ResetPrefixList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.manifest">Manifest</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference">StorageBatchOperationsJobBucketListBucketsManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixList">PrefixList</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference">StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.manifestInput">ManifestInput</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixListInput">PrefixListInput</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.manifest"></a>

```csharp
public StorageBatchOperationsJobBucketListBucketsManifestOutputReference Manifest { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference">StorageBatchOperationsJobBucketListBucketsManifestOutputReference</a>

---

##### `PrefixList`<sup>Required</sup> <a name="PrefixList" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixList"></a>

```csharp
public StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference PrefixList { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference">StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ManifestInput`<sup>Optional</sup> <a name="ManifestInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.manifestInput"></a>

```csharp
public StorageBatchOperationsJobBucketListBucketsManifest ManifestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a>

---

##### `PrefixListInput`<sup>Optional</sup> <a name="PrefixListInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixListInput"></a>

```csharp
public StorageBatchOperationsJobBucketListBucketsPrefixListStruct PrefixListInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.internalValue"></a>

```csharp
public StorageBatchOperationsJobBucketListBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a>

---


### StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference <a name="StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resetIncludedObjectPrefixes">ResetIncludedObjectPrefixes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludedObjectPrefixes` <a name="ResetIncludedObjectPrefixes" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resetIncludedObjectPrefixes"></a>

```csharp
private void ResetIncludedObjectPrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixesInput">IncludedObjectPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixes">IncludedObjectPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludedObjectPrefixesInput`<sup>Optional</sup> <a name="IncludedObjectPrefixesInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixesInput"></a>

```csharp
public string[] IncludedObjectPrefixesInput { get; }
```

- *Type:* string[]

---

##### `IncludedObjectPrefixes`<sup>Required</sup> <a name="IncludedObjectPrefixes" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixes"></a>

```csharp
public string[] IncludedObjectPrefixes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.internalValue"></a>

```csharp
public StorageBatchOperationsJobBucketListBucketsPrefixListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

---


### StorageBatchOperationsJobBucketListStructOutputReference <a name="StorageBatchOperationsJobBucketListStructOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBatchOperationsJobBucketListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.putBuckets">PutBuckets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBuckets` <a name="PutBuckets" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.putBuckets"></a>

```csharp
private void PutBuckets(StorageBatchOperationsJobBucketListBuckets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.putBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.buckets">Buckets</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference">StorageBatchOperationsJobBucketListBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.bucketsInput">BucketsInput</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Buckets`<sup>Required</sup> <a name="Buckets" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.buckets"></a>

```csharp
public StorageBatchOperationsJobBucketListBucketsOutputReference Buckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference">StorageBatchOperationsJobBucketListBucketsOutputReference</a>

---

##### `BucketsInput`<sup>Optional</sup> <a name="BucketsInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.bucketsInput"></a>

```csharp
public StorageBatchOperationsJobBucketListBuckets BucketsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.internalValue"></a>

```csharp
public StorageBatchOperationsJobBucketListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a>

---


### StorageBatchOperationsJobDeleteObjectOutputReference <a name="StorageBatchOperationsJobDeleteObjectOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBatchOperationsJobDeleteObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabledInput">PermanentObjectDeletionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabled">PermanentObjectDeletionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PermanentObjectDeletionEnabledInput`<sup>Optional</sup> <a name="PermanentObjectDeletionEnabledInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabledInput"></a>

```csharp
public object PermanentObjectDeletionEnabledInput { get; }
```

- *Type:* object

---

##### `PermanentObjectDeletionEnabled`<sup>Required</sup> <a name="PermanentObjectDeletionEnabled" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabled"></a>

```csharp
public object PermanentObjectDeletionEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.internalValue"></a>

```csharp
public StorageBatchOperationsJobDeleteObject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a>

---


### StorageBatchOperationsJobPutMetadataOutputReference <a name="StorageBatchOperationsJobPutMetadataOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBatchOperationsJobPutMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCacheControl">ResetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentDisposition">ResetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentEncoding">ResetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentLanguage">ResetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCustomMetadata">ResetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCustomTime">ResetCustomTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCacheControl` <a name="ResetCacheControl" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCacheControl"></a>

```csharp
private void ResetCacheControl()
```

##### `ResetContentDisposition` <a name="ResetContentDisposition" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentDisposition"></a>

```csharp
private void ResetContentDisposition()
```

##### `ResetContentEncoding` <a name="ResetContentEncoding" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentEncoding"></a>

```csharp
private void ResetContentEncoding()
```

##### `ResetContentLanguage` <a name="ResetContentLanguage" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentLanguage"></a>

```csharp
private void ResetContentLanguage()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetCustomMetadata` <a name="ResetCustomMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCustomMetadata"></a>

```csharp
private void ResetCustomMetadata()
```

##### `ResetCustomTime` <a name="ResetCustomTime" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCustomTime"></a>

```csharp
private void ResetCustomTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.cacheControlInput">CacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentDispositionInput">ContentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentEncodingInput">ContentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguageInput">ContentLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customMetadataInput">CustomMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customTimeInput">CustomTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.cacheControl">CacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customMetadata">CustomMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customTime">CustomTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CacheControlInput`<sup>Optional</sup> <a name="CacheControlInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.cacheControlInput"></a>

```csharp
public string CacheControlInput { get; }
```

- *Type:* string

---

##### `ContentDispositionInput`<sup>Optional</sup> <a name="ContentDispositionInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentDispositionInput"></a>

```csharp
public string ContentDispositionInput { get; }
```

- *Type:* string

---

##### `ContentEncodingInput`<sup>Optional</sup> <a name="ContentEncodingInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentEncodingInput"></a>

```csharp
public string ContentEncodingInput { get; }
```

- *Type:* string

---

##### `ContentLanguageInput`<sup>Optional</sup> <a name="ContentLanguageInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguageInput"></a>

```csharp
public string ContentLanguageInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `CustomMetadataInput`<sup>Optional</sup> <a name="CustomMetadataInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CustomTimeInput`<sup>Optional</sup> <a name="CustomTimeInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customTimeInput"></a>

```csharp
public string CustomTimeInput { get; }
```

- *Type:* string

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.cacheControl"></a>

```csharp
public string CacheControl { get; }
```

- *Type:* string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; }
```

- *Type:* string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; }
```

- *Type:* string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `CustomMetadata`<sup>Required</sup> <a name="CustomMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CustomTime`<sup>Required</sup> <a name="CustomTime" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customTime"></a>

```csharp
public string CustomTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.internalValue"></a>

```csharp
public StorageBatchOperationsJobPutMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a>

---


### StorageBatchOperationsJobPutObjectHoldOutputReference <a name="StorageBatchOperationsJobPutObjectHoldOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBatchOperationsJobPutObjectHoldOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resetEventBasedHold">ResetEventBasedHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resetTemporaryHold">ResetTemporaryHold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventBasedHold` <a name="ResetEventBasedHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resetEventBasedHold"></a>

```csharp
private void ResetEventBasedHold()
```

##### `ResetTemporaryHold` <a name="ResetTemporaryHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resetTemporaryHold"></a>

```csharp
private void ResetTemporaryHold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHoldInput">EventBasedHoldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHoldInput">TemporaryHoldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHold">EventBasedHold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHold">TemporaryHold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventBasedHoldInput`<sup>Optional</sup> <a name="EventBasedHoldInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHoldInput"></a>

```csharp
public string EventBasedHoldInput { get; }
```

- *Type:* string

---

##### `TemporaryHoldInput`<sup>Optional</sup> <a name="TemporaryHoldInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHoldInput"></a>

```csharp
public string TemporaryHoldInput { get; }
```

- *Type:* string

---

##### `EventBasedHold`<sup>Required</sup> <a name="EventBasedHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHold"></a>

```csharp
public string EventBasedHold { get; }
```

- *Type:* string

---

##### `TemporaryHold`<sup>Required</sup> <a name="TemporaryHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHold"></a>

```csharp
public string TemporaryHold { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.internalValue"></a>

```csharp
public StorageBatchOperationsJobPutObjectHold InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a>

---


### StorageBatchOperationsJobRewriteObjectOutputReference <a name="StorageBatchOperationsJobRewriteObjectOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBatchOperationsJobRewriteObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.internalValue"></a>

```csharp
public StorageBatchOperationsJobRewriteObject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a>

---


### StorageBatchOperationsJobTimeoutsOutputReference <a name="StorageBatchOperationsJobTimeoutsOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBatchOperationsJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



