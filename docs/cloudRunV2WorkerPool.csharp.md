# `cloudRunV2WorkerPool` Submodule <a name="`cloudRunV2WorkerPool` Submodule" id="@cdktf/provider-google.cloudRunV2WorkerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudRunV2WorkerPool <a name="CloudRunV2WorkerPool" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool google_cloud_run_v2_worker_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPool(Construct Scope, string Id, CloudRunV2WorkerPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig">CloudRunV2WorkerPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig">CloudRunV2WorkerPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putBinaryAuthorization">PutBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putInstanceSplits">PutInstanceSplits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putScaling">PutScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTemplate">PutTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetBinaryAuthorization">ResetBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetClient">ResetClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetClientVersion">ResetClientVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetCustomAudiences">ResetCustomAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetInstanceSplits">ResetInstanceSplits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetLaunchStage">ResetLaunchStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetScaling">ResetScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBinaryAuthorization` <a name="PutBinaryAuthorization" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putBinaryAuthorization"></a>

```csharp
private void PutBinaryAuthorization(CloudRunV2WorkerPoolBinaryAuthorization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putBinaryAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization">CloudRunV2WorkerPoolBinaryAuthorization</a>

---

##### `PutInstanceSplits` <a name="PutInstanceSplits" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putInstanceSplits"></a>

```csharp
private void PutInstanceSplits(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putInstanceSplits.parameter.value"></a>

- *Type:* object

---

##### `PutScaling` <a name="PutScaling" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putScaling"></a>

```csharp
private void PutScaling(CloudRunV2WorkerPoolScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling">CloudRunV2WorkerPoolScaling</a>

---

##### `PutTemplate` <a name="PutTemplate" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTemplate"></a>

```csharp
private void PutTemplate(CloudRunV2WorkerPoolTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate">CloudRunV2WorkerPoolTemplate</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTimeouts"></a>

```csharp
private void PutTimeouts(CloudRunV2WorkerPoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts">CloudRunV2WorkerPoolTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetBinaryAuthorization` <a name="ResetBinaryAuthorization" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetBinaryAuthorization"></a>

```csharp
private void ResetBinaryAuthorization()
```

##### `ResetClient` <a name="ResetClient" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetClient"></a>

```csharp
private void ResetClient()
```

##### `ResetClientVersion` <a name="ResetClientVersion" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetClientVersion"></a>

```csharp
private void ResetClientVersion()
```

##### `ResetCustomAudiences` <a name="ResetCustomAudiences" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetCustomAudiences"></a>

```csharp
private void ResetCustomAudiences()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceSplits` <a name="ResetInstanceSplits" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetInstanceSplits"></a>

```csharp
private void ResetInstanceSplits()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLaunchStage` <a name="ResetLaunchStage" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetLaunchStage"></a>

```csharp
private void ResetLaunchStage()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetScaling` <a name="ResetScaling" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetScaling"></a>

```csharp
private void ResetScaling()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudRunV2WorkerPool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudRunV2WorkerPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudRunV2WorkerPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudRunV2WorkerPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudRunV2WorkerPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudRunV2WorkerPool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudRunV2WorkerPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudRunV2WorkerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudRunV2WorkerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.binaryAuthorization">BinaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference">CloudRunV2WorkerPoolBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList">CloudRunV2WorkerPoolConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.generation">Generation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.instanceSplits">InstanceSplits</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList">CloudRunV2WorkerPoolInstanceSplitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.instanceSplitStatuses">InstanceSplitStatuses</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList">CloudRunV2WorkerPoolInstanceSplitStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.lastModifier">LastModifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.latestCreatedRevision">LatestCreatedRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.latestReadyRevision">LatestReadyRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.observedGeneration">ObservedGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.scaling">Scaling</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference">CloudRunV2WorkerPoolScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.template">Template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference">CloudRunV2WorkerPoolTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.terminalCondition">TerminalCondition</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList">CloudRunV2WorkerPoolTerminalConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference">CloudRunV2WorkerPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.binaryAuthorizationInput">BinaryAuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization">CloudRunV2WorkerPoolBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.clientInput">ClientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.clientVersionInput">ClientVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.customAudiencesInput">CustomAudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.instanceSplitsInput">InstanceSplitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.launchStageInput">LaunchStageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.scalingInput">ScalingInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling">CloudRunV2WorkerPoolScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.templateInput">TemplateInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate">CloudRunV2WorkerPoolTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.client">Client</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.clientVersion">ClientVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.customAudiences">CustomAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.launchStage">LaunchStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BinaryAuthorization`<sup>Required</sup> <a name="BinaryAuthorization" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.binaryAuthorization"></a>

```csharp
public CloudRunV2WorkerPoolBinaryAuthorizationOutputReference BinaryAuthorization { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference">CloudRunV2WorkerPoolBinaryAuthorizationOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.conditions"></a>

```csharp
public CloudRunV2WorkerPoolConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList">CloudRunV2WorkerPoolConditionsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.generation"></a>

```csharp
public string Generation { get; }
```

- *Type:* string

---

##### `InstanceSplits`<sup>Required</sup> <a name="InstanceSplits" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.instanceSplits"></a>

```csharp
public CloudRunV2WorkerPoolInstanceSplitsList InstanceSplits { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList">CloudRunV2WorkerPoolInstanceSplitsList</a>

---

##### `InstanceSplitStatuses`<sup>Required</sup> <a name="InstanceSplitStatuses" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.instanceSplitStatuses"></a>

```csharp
public CloudRunV2WorkerPoolInstanceSplitStatusesList InstanceSplitStatuses { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList">CloudRunV2WorkerPoolInstanceSplitStatusesList</a>

---

##### `LastModifier`<sup>Required</sup> <a name="LastModifier" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.lastModifier"></a>

```csharp
public string LastModifier { get; }
```

- *Type:* string

---

##### `LatestCreatedRevision`<sup>Required</sup> <a name="LatestCreatedRevision" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.latestCreatedRevision"></a>

```csharp
public string LatestCreatedRevision { get; }
```

- *Type:* string

---

##### `LatestReadyRevision`<sup>Required</sup> <a name="LatestReadyRevision" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.latestReadyRevision"></a>

```csharp
public string LatestReadyRevision { get; }
```

- *Type:* string

---

##### `ObservedGeneration`<sup>Required</sup> <a name="ObservedGeneration" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.observedGeneration"></a>

```csharp
public string ObservedGeneration { get; }
```

- *Type:* string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Scaling`<sup>Required</sup> <a name="Scaling" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.scaling"></a>

```csharp
public CloudRunV2WorkerPoolScalingOutputReference Scaling { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference">CloudRunV2WorkerPoolScalingOutputReference</a>

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.template"></a>

```csharp
public CloudRunV2WorkerPoolTemplateOutputReference Template { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference">CloudRunV2WorkerPoolTemplateOutputReference</a>

---

##### `TerminalCondition`<sup>Required</sup> <a name="TerminalCondition" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.terminalCondition"></a>

```csharp
public CloudRunV2WorkerPoolTerminalConditionList TerminalCondition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList">CloudRunV2WorkerPoolTerminalConditionList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.timeouts"></a>

```csharp
public CloudRunV2WorkerPoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference">CloudRunV2WorkerPoolTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BinaryAuthorizationInput`<sup>Optional</sup> <a name="BinaryAuthorizationInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.binaryAuthorizationInput"></a>

```csharp
public CloudRunV2WorkerPoolBinaryAuthorization BinaryAuthorizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization">CloudRunV2WorkerPoolBinaryAuthorization</a>

---

##### `ClientInput`<sup>Optional</sup> <a name="ClientInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.clientInput"></a>

```csharp
public string ClientInput { get; }
```

- *Type:* string

---

##### `ClientVersionInput`<sup>Optional</sup> <a name="ClientVersionInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.clientVersionInput"></a>

```csharp
public string ClientVersionInput { get; }
```

- *Type:* string

---

##### `CustomAudiencesInput`<sup>Optional</sup> <a name="CustomAudiencesInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.customAudiencesInput"></a>

```csharp
public string[] CustomAudiencesInput { get; }
```

- *Type:* string[]

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.deletionProtectionInput"></a>

```csharp
public object DeletionProtectionInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceSplitsInput`<sup>Optional</sup> <a name="InstanceSplitsInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.instanceSplitsInput"></a>

```csharp
public object InstanceSplitsInput { get; }
```

- *Type:* object

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LaunchStageInput`<sup>Optional</sup> <a name="LaunchStageInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.launchStageInput"></a>

```csharp
public string LaunchStageInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ScalingInput`<sup>Optional</sup> <a name="ScalingInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.scalingInput"></a>

```csharp
public CloudRunV2WorkerPoolScaling ScalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling">CloudRunV2WorkerPoolScaling</a>

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.templateInput"></a>

```csharp
public CloudRunV2WorkerPoolTemplate TemplateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate">CloudRunV2WorkerPoolTemplate</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Client`<sup>Required</sup> <a name="Client" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.client"></a>

```csharp
public string Client { get; }
```

- *Type:* string

---

##### `ClientVersion`<sup>Required</sup> <a name="ClientVersion" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.clientVersion"></a>

```csharp
public string ClientVersion { get; }
```

- *Type:* string

---

##### `CustomAudiences`<sup>Required</sup> <a name="CustomAudiences" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.customAudiences"></a>

```csharp
public string[] CustomAudiences { get; }
```

- *Type:* string[]

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LaunchStage`<sup>Required</sup> <a name="LaunchStage" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.launchStage"></a>

```csharp
public string LaunchStage { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudRunV2WorkerPoolBinaryAuthorization <a name="CloudRunV2WorkerPoolBinaryAuthorization" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolBinaryAuthorization {
    string BreakglassJustification = null,
    string Policy = null,
    object UseDefault = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization.property.breakglassJustification">BreakglassJustification</a></code> | <code>string</code> | If present, indicates to use Breakglass using this justification. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization.property.policy">Policy</a></code> | <code>string</code> | The path to a binary authorization policy. Format: projects/{project}/platforms/cloudRun/{policy-name}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization.property.useDefault">UseDefault</a></code> | <code>object</code> | If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled. |

---

##### `BreakglassJustification`<sup>Optional</sup> <a name="BreakglassJustification" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization.property.breakglassJustification"></a>

```csharp
public string BreakglassJustification { get; set; }
```

- *Type:* string

If present, indicates to use Breakglass using this justification.

If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#breakglass_justification CloudRunV2WorkerPool#breakglass_justification}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

The path to a binary authorization policy. Format: projects/{project}/platforms/cloudRun/{policy-name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#policy CloudRunV2WorkerPool#policy}

---

##### `UseDefault`<sup>Optional</sup> <a name="UseDefault" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization.property.useDefault"></a>

```csharp
public object UseDefault { get; set; }
```

- *Type:* object

If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#use_default CloudRunV2WorkerPool#use_default}

---

### CloudRunV2WorkerPoolConditions <a name="CloudRunV2WorkerPoolConditions" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolConditions {

};
```


### CloudRunV2WorkerPoolConfig <a name="CloudRunV2WorkerPoolConfig" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    CloudRunV2WorkerPoolTemplate Template,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    CloudRunV2WorkerPoolBinaryAuthorization BinaryAuthorization = null,
    string Client = null,
    string ClientVersion = null,
    string[] CustomAudiences = null,
    object DeletionProtection = null,
    string Description = null,
    string Id = null,
    object InstanceSplits = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string LaunchStage = null,
    string Project = null,
    CloudRunV2WorkerPoolScaling Scaling = null,
    CloudRunV2WorkerPoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.location">Location</a></code> | <code>string</code> | The location of the cloud run worker pool. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.name">Name</a></code> | <code>string</code> | Name of the WorkerPool. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.template">Template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate">CloudRunV2WorkerPoolTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.binaryAuthorization">BinaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization">CloudRunV2WorkerPoolBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.client">Client</a></code> | <code>string</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.clientVersion">ClientVersion</a></code> | <code>string</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.customAudiences">CustomAudiences</a></code> | <code>string[]</code> | One or more custom audiences that you want this worker pool to support. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | Whether Terraform will be prevented from destroying the service. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.description">Description</a></code> | <code>string</code> | User-provided description of the WorkerPool. This field currently has a 512-character limit. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#id CloudRunV2WorkerPool#id}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.instanceSplits">InstanceSplits</a></code> | <code>object</code> | instance_splits block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.launchStage">LaunchStage</a></code> | <code>string</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#project CloudRunV2WorkerPool#project}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.scaling">Scaling</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling">CloudRunV2WorkerPoolScaling</a></code> | scaling block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts">CloudRunV2WorkerPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the cloud run worker pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#location CloudRunV2WorkerPool#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the WorkerPool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#name CloudRunV2WorkerPool#name}

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.template"></a>

```csharp
public CloudRunV2WorkerPoolTemplate Template { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate">CloudRunV2WorkerPoolTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#template CloudRunV2WorkerPool#template}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected in new resources.
All system annotations in v1 now have a corresponding field in v2 WorkerPool.

This field follows Kubernetes annotations' namespacing, limits, and rules.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#annotations CloudRunV2WorkerPool#annotations}

---

##### `BinaryAuthorization`<sup>Optional</sup> <a name="BinaryAuthorization" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.binaryAuthorization"></a>

```csharp
public CloudRunV2WorkerPoolBinaryAuthorization BinaryAuthorization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization">CloudRunV2WorkerPoolBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#binary_authorization CloudRunV2WorkerPool#binary_authorization}

---

##### `Client`<sup>Optional</sup> <a name="Client" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.client"></a>

```csharp
public string Client { get; set; }
```

- *Type:* string

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#client CloudRunV2WorkerPool#client}

---

##### `ClientVersion`<sup>Optional</sup> <a name="ClientVersion" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.clientVersion"></a>

```csharp
public string ClientVersion { get; set; }
```

- *Type:* string

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#client_version CloudRunV2WorkerPool#client_version}

---

##### `CustomAudiences`<sup>Optional</sup> <a name="CustomAudiences" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.customAudiences"></a>

```csharp
public string[] CustomAudiences { get; set; }
```

- *Type:* string[]

One or more custom audiences that you want this worker pool to support.

Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests.
For more information, see https://cloud.google.com/run/docs/configuring/custom-audiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#custom_audiences CloudRunV2WorkerPool#custom_audiences}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; set; }
```

- *Type:* object

Whether Terraform will be prevented from destroying the service.

Defaults to true.
When a'terraform destroy' or 'terraform apply' would delete the service,
the command will fail if this field is not set to false in Terraform state.
When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the WorkerPool will fail.
When the field is set to false, deleting the WorkerPool is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#deletion_protection CloudRunV2WorkerPool#deletion_protection}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

User-provided description of the WorkerPool. This field currently has a 512-character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#description CloudRunV2WorkerPool#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#id CloudRunV2WorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceSplits`<sup>Optional</sup> <a name="InstanceSplits" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.instanceSplits"></a>

```csharp
public object InstanceSplits { get; set; }
```

- *Type:* object

instance_splits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#instance_splits CloudRunV2WorkerPool#instance_splits}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with  'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 WorkerPool.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#labels CloudRunV2WorkerPool#labels}

---

##### `LaunchStage`<sup>Optional</sup> <a name="LaunchStage" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.launchStage"></a>

```csharp
public string LaunchStage { get; set; }
```

- *Type:* string

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.

For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#launch_stage CloudRunV2WorkerPool#launch_stage}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#project CloudRunV2WorkerPool#project}.

---

##### `Scaling`<sup>Optional</sup> <a name="Scaling" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.scaling"></a>

```csharp
public CloudRunV2WorkerPoolScaling Scaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling">CloudRunV2WorkerPoolScaling</a>

scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#scaling CloudRunV2WorkerPool#scaling}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.timeouts"></a>

```csharp
public CloudRunV2WorkerPoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts">CloudRunV2WorkerPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#timeouts CloudRunV2WorkerPool#timeouts}

---

### CloudRunV2WorkerPoolInstanceSplits <a name="CloudRunV2WorkerPoolInstanceSplits" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolInstanceSplits {
    double Percent = null,
    string Revision = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits.property.percent">Percent</a></code> | <code>double</code> | Specifies percent of the instance split to this Revision. This defaults to zero if unspecified. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits.property.revision">Revision</a></code> | <code>string</code> | Revision to which to assign this portion of instances, if split allocation is by revision. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits.property.type">Type</a></code> | <code>string</code> | The allocation type for this instance split. Possible values: ["INSTANCE_SPLIT_ALLOCATION_TYPE_LATEST", "INSTANCE_SPLIT_ALLOCATION_TYPE_REVISION"]. |

---

##### `Percent`<sup>Optional</sup> <a name="Percent" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits.property.percent"></a>

```csharp
public double Percent { get; set; }
```

- *Type:* double

Specifies percent of the instance split to this Revision. This defaults to zero if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#percent CloudRunV2WorkerPool#percent}

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits.property.revision"></a>

```csharp
public string Revision { get; set; }
```

- *Type:* string

Revision to which to assign this portion of instances, if split allocation is by revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#revision CloudRunV2WorkerPool#revision}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The allocation type for this instance split. Possible values: ["INSTANCE_SPLIT_ALLOCATION_TYPE_LATEST", "INSTANCE_SPLIT_ALLOCATION_TYPE_REVISION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#type CloudRunV2WorkerPool#type}

---

### CloudRunV2WorkerPoolInstanceSplitStatuses <a name="CloudRunV2WorkerPoolInstanceSplitStatuses" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatuses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolInstanceSplitStatuses {

};
```


### CloudRunV2WorkerPoolScaling <a name="CloudRunV2WorkerPoolScaling" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolScaling {
    double ManualInstanceCount = null,
    double MaxInstanceCount = null,
    double MinInstanceCount = null,
    string ScalingMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling.property.manualInstanceCount">ManualInstanceCount</a></code> | <code>double</code> | The total number of instances in manual scaling mode. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>double</code> | The maximum count of instances distributed among revisions based on the specified instance split percentages. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling.property.minInstanceCount">MinInstanceCount</a></code> | <code>double</code> | The minimum count of instances distributed among revisions based on the specified instance split percentages. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling.property.scalingMode">ScalingMode</a></code> | <code>string</code> | The scaling mode for the worker pool. It defaults to MANUAL. Possible values: ["AUTOMATIC", "MANUAL"]. |

---

##### `ManualInstanceCount`<sup>Optional</sup> <a name="ManualInstanceCount" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling.property.manualInstanceCount"></a>

```csharp
public double ManualInstanceCount { get; set; }
```

- *Type:* double

The total number of instances in manual scaling mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#manual_instance_count CloudRunV2WorkerPool#manual_instance_count}

---

##### `MaxInstanceCount`<sup>Optional</sup> <a name="MaxInstanceCount" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling.property.maxInstanceCount"></a>

```csharp
public double MaxInstanceCount { get; set; }
```

- *Type:* double

The maximum count of instances distributed among revisions based on the specified instance split percentages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#max_instance_count CloudRunV2WorkerPool#max_instance_count}

---

##### `MinInstanceCount`<sup>Optional</sup> <a name="MinInstanceCount" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling.property.minInstanceCount"></a>

```csharp
public double MinInstanceCount { get; set; }
```

- *Type:* double

The minimum count of instances distributed among revisions based on the specified instance split percentages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#min_instance_count CloudRunV2WorkerPool#min_instance_count}

---

##### `ScalingMode`<sup>Optional</sup> <a name="ScalingMode" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling.property.scalingMode"></a>

```csharp
public string ScalingMode { get; set; }
```

- *Type:* string

The scaling mode for the worker pool. It defaults to MANUAL. Possible values: ["AUTOMATIC", "MANUAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#scaling_mode CloudRunV2WorkerPool#scaling_mode}

---

### CloudRunV2WorkerPoolTemplate <a name="CloudRunV2WorkerPoolTemplate" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplate {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    object Containers = null,
    string EncryptionKey = null,
    string EncryptionKeyRevocationAction = null,
    string EncryptionKeyShutdownDuration = null,
    object GpuZonalRedundancyDisabled = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    CloudRunV2WorkerPoolTemplateNodeSelector NodeSelector = null,
    string Revision = null,
    string ServiceAccount = null,
    object Volumes = null,
    CloudRunV2WorkerPoolTemplateVpcAccess VpcAccess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.containers">Containers</a></code> | <code>object</code> | containers block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.encryptionKey">EncryptionKey</a></code> | <code>string</code> | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.encryptionKeyRevocationAction">EncryptionKeyRevocationAction</a></code> | <code>string</code> | The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"]. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.encryptionKeyShutdownDuration">EncryptionKeyShutdownDuration</a></code> | <code>string</code> | If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances. The minimum increment is 1 hour. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.gpuZonalRedundancyDisabled">GpuZonalRedundancyDisabled</a></code> | <code>object</code> | True if GPU zonal redundancy is disabled on this revision. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.nodeSelector">NodeSelector</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector">CloudRunV2WorkerPoolTemplateNodeSelector</a></code> | node_selector block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.revision">Revision</a></code> | <code>string</code> | The unique name for the revision. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Email address of the IAM service account associated with the revision of the WorkerPool. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.volumes">Volumes</a></code> | <code>object</code> | volumes block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.vpcAccess">VpcAccess</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess">CloudRunV2WorkerPoolTemplateVpcAccess</a></code> | vpc_access block. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system annotations in v1 now have a corresponding field in v2 WorkerPoolRevisionTemplate.

This field follows Kubernetes annotations' namespacing, limits, and rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#annotations CloudRunV2WorkerPool#annotations}

---

##### `Containers`<sup>Optional</sup> <a name="Containers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.containers"></a>

```csharp
public object Containers { get; set; }
```

- *Type:* object

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#containers CloudRunV2WorkerPool#containers}

---

##### `EncryptionKey`<sup>Optional</sup> <a name="EncryptionKey" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.encryptionKey"></a>

```csharp
public string EncryptionKey { get; set; }
```

- *Type:* string

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#encryption_key CloudRunV2WorkerPool#encryption_key}

---

##### `EncryptionKeyRevocationAction`<sup>Optional</sup> <a name="EncryptionKeyRevocationAction" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.encryptionKeyRevocationAction"></a>

```csharp
public string EncryptionKeyRevocationAction { get; set; }
```

- *Type:* string

The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#encryption_key_revocation_action CloudRunV2WorkerPool#encryption_key_revocation_action}

---

##### `EncryptionKeyShutdownDuration`<sup>Optional</sup> <a name="EncryptionKeyShutdownDuration" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.encryptionKeyShutdownDuration"></a>

```csharp
public string EncryptionKeyShutdownDuration { get; set; }
```

- *Type:* string

If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances. The minimum increment is 1 hour.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#encryption_key_shutdown_duration CloudRunV2WorkerPool#encryption_key_shutdown_duration}

---

##### `GpuZonalRedundancyDisabled`<sup>Optional</sup> <a name="GpuZonalRedundancyDisabled" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.gpuZonalRedundancyDisabled"></a>

```csharp
public object GpuZonalRedundancyDisabled { get; set; }
```

- *Type:* object

True if GPU zonal redundancy is disabled on this revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#gpu_zonal_redundancy_disabled CloudRunV2WorkerPool#gpu_zonal_redundancy_disabled}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc.
For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 WorkerPoolRevisionTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#labels CloudRunV2WorkerPool#labels}

---

##### `NodeSelector`<sup>Optional</sup> <a name="NodeSelector" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.nodeSelector"></a>

```csharp
public CloudRunV2WorkerPoolTemplateNodeSelector NodeSelector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector">CloudRunV2WorkerPoolTemplateNodeSelector</a>

node_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#node_selector CloudRunV2WorkerPool#node_selector}

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.revision"></a>

```csharp
public string Revision { get; set; }
```

- *Type:* string

The unique name for the revision.

If this field is omitted, it will be automatically generated based on the WorkerPool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#revision CloudRunV2WorkerPool#revision}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Email address of the IAM service account associated with the revision of the WorkerPool.

The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#service_account CloudRunV2WorkerPool#service_account}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.volumes"></a>

```csharp
public object Volumes { get; set; }
```

- *Type:* object

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#volumes CloudRunV2WorkerPool#volumes}

---

##### `VpcAccess`<sup>Optional</sup> <a name="VpcAccess" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.vpcAccess"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVpcAccess VpcAccess { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess">CloudRunV2WorkerPoolTemplateVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#vpc_access CloudRunV2WorkerPool#vpc_access}

---

### CloudRunV2WorkerPoolTemplateContainers <a name="CloudRunV2WorkerPoolTemplateContainers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateContainers {
    string Image,
    string[] Args = null,
    string[] Command = null,
    string[] DependsOn = null,
    object Env = null,
    string Name = null,
    CloudRunV2WorkerPoolTemplateContainersResources Resources = null,
    object VolumeMounts = null,
    string WorkingDir = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.image">Image</a></code> | <code>string</code> | URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.args">Args</a></code> | <code>string[]</code> | Arguments to the entrypoint. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.command">Command</a></code> | <code>string[]</code> | Entrypoint array. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | Containers which should be started before this container. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.env">Env</a></code> | <code>object</code> | env block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.name">Name</a></code> | <code>string</code> | Name of the container specified as a DNS_LABEL. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources">CloudRunV2WorkerPoolTemplateContainersResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.volumeMounts">VolumeMounts</a></code> | <code>object</code> | volume_mounts block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.workingDir">WorkingDir</a></code> | <code>string</code> | Container's working directory. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#image CloudRunV2WorkerPool#image}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

Arguments to the entrypoint.

The docker image's CMD is used if this is not provided. Variable references are not supported in Cloud Run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#args CloudRunV2WorkerPool#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Entrypoint array.

Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#command CloudRunV2WorkerPool#command}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; set; }
```

- *Type:* string[]

Containers which should be started before this container.

If specified the container will wait to start until all containers with the listed names are healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#depends_on CloudRunV2WorkerPool#depends_on}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.env"></a>

```csharp
public object Env { get; set; }
```

- *Type:* object

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#env CloudRunV2WorkerPool#env}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the container specified as a DNS_LABEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#name CloudRunV2WorkerPool#name}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.resources"></a>

```csharp
public CloudRunV2WorkerPoolTemplateContainersResources Resources { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources">CloudRunV2WorkerPoolTemplateContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#resources CloudRunV2WorkerPool#resources}

---

##### `VolumeMounts`<sup>Optional</sup> <a name="VolumeMounts" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.volumeMounts"></a>

```csharp
public object VolumeMounts { get; set; }
```

- *Type:* object

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#volume_mounts CloudRunV2WorkerPool#volume_mounts}

---

##### `WorkingDir`<sup>Optional</sup> <a name="WorkingDir" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.workingDir"></a>

```csharp
public string WorkingDir { get; set; }
```

- *Type:* string

Container's working directory.

If not specified, the container runtime's default will be used, which might be configured in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#working_dir CloudRunV2WorkerPool#working_dir}

---

### CloudRunV2WorkerPoolTemplateContainersEnv <a name="CloudRunV2WorkerPoolTemplateContainersEnv" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateContainersEnv {
    string Name,
    string Value = null,
    CloudRunV2WorkerPoolTemplateContainersEnvValueSource ValueSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv.property.name">Name</a></code> | <code>string</code> | Name of the environment variable. Must be a C_IDENTIFIER, and may not exceed 32768 characters. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv.property.value">Value</a></code> | <code>string</code> | Literal value of the environment variable. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv.property.valueSource">ValueSource</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource">CloudRunV2WorkerPoolTemplateContainersEnvValueSource</a></code> | value_source block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the environment variable. Must be a C_IDENTIFIER, and may not exceed 32768 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#name CloudRunV2WorkerPool#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Literal value of the environment variable.

Defaults to "" and the maximum allowed length is 32768 characters. Variable references are not supported in Cloud Run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#value CloudRunV2WorkerPool#value}

---

##### `ValueSource`<sup>Optional</sup> <a name="ValueSource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv.property.valueSource"></a>

```csharp
public CloudRunV2WorkerPoolTemplateContainersEnvValueSource ValueSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource">CloudRunV2WorkerPoolTemplateContainersEnvValueSource</a>

value_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#value_source CloudRunV2WorkerPool#value_source}

---

### CloudRunV2WorkerPoolTemplateContainersEnvValueSource <a name="CloudRunV2WorkerPoolTemplateContainersEnvValueSource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateContainersEnvValueSource {
    CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef SecretKeyRef = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `SecretKeyRef`<sup>Optional</sup> <a name="SecretKeyRef" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource.property.secretKeyRef"></a>

```csharp
public CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef SecretKeyRef { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#secret_key_ref CloudRunV2WorkerPool#secret_key_ref}

---

### CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef <a name="CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef {
    string Secret,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.property.secret">Secret</a></code> | <code>string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.property.version">Version</a></code> | <code>string</code> | The Cloud Secret Manager secret version. |

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#secret CloudRunV2WorkerPool#secret}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#version CloudRunV2WorkerPool#version}

---

### CloudRunV2WorkerPoolTemplateContainersResources <a name="CloudRunV2WorkerPoolTemplateContainersResources" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateContainersResources {
    System.Collections.Generic.IDictionary<string, string> Limits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources.property.limits">Limits</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Only memory, CPU, and nvidia.com/gpu are supported. Use key 'cpu' for CPU limit, 'memory' for memory limit, 'nvidia.com/gpu' for gpu limit. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go. |

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources.property.limits"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Limits { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Only memory, CPU, and nvidia.com/gpu are supported. Use key 'cpu' for CPU limit, 'memory' for memory limit, 'nvidia.com/gpu' for gpu limit. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#limits CloudRunV2WorkerPool#limits}

---

### CloudRunV2WorkerPoolTemplateContainersVolumeMounts <a name="CloudRunV2WorkerPoolTemplateContainersVolumeMounts" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateContainersVolumeMounts {
    string MountPath,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts.property.mountPath">MountPath</a></code> | <code>string</code> | Path within the container at which the volume should be mounted. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts.property.name">Name</a></code> | <code>string</code> | This must match the Name of a Volume. |

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts.property.mountPath"></a>

```csharp
public string MountPath { get; set; }
```

- *Type:* string

Path within the container at which the volume should be mounted.

Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#mount_path CloudRunV2WorkerPool#mount_path}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

This must match the Name of a Volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#name CloudRunV2WorkerPool#name}

---

### CloudRunV2WorkerPoolTemplateNodeSelector <a name="CloudRunV2WorkerPoolTemplateNodeSelector" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateNodeSelector {
    string Accelerator
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector.property.accelerator">Accelerator</a></code> | <code>string</code> | The GPU to attach to an instance. See https://cloud.google.com/run/docs/configuring/services/gpu for configuring GPU. |

---

##### `Accelerator`<sup>Required</sup> <a name="Accelerator" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector.property.accelerator"></a>

```csharp
public string Accelerator { get; set; }
```

- *Type:* string

The GPU to attach to an instance. See https://cloud.google.com/run/docs/configuring/services/gpu for configuring GPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#accelerator CloudRunV2WorkerPool#accelerator}

---

### CloudRunV2WorkerPoolTemplateVolumes <a name="CloudRunV2WorkerPoolTemplateVolumes" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateVolumes {
    string Name,
    CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance CloudSqlInstance = null,
    CloudRunV2WorkerPoolTemplateVolumesEmptyDir EmptyDir = null,
    CloudRunV2WorkerPoolTemplateVolumesGcs Gcs = null,
    CloudRunV2WorkerPoolTemplateVolumesNfs Nfs = null,
    CloudRunV2WorkerPoolTemplateVolumesSecret Secret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.name">Name</a></code> | <code>string</code> | Volume's name. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a></code> | cloud_sql_instance block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.emptyDir">EmptyDir</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir">CloudRunV2WorkerPoolTemplateVolumesEmptyDir</a></code> | empty_dir block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.gcs">Gcs</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs">CloudRunV2WorkerPoolTemplateVolumesGcs</a></code> | gcs block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.nfs">Nfs</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs">CloudRunV2WorkerPoolTemplateVolumesNfs</a></code> | nfs block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret">CloudRunV2WorkerPoolTemplateVolumesSecret</a></code> | secret block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Volume's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#name CloudRunV2WorkerPool#name}

---

##### `CloudSqlInstance`<sup>Optional</sup> <a name="CloudSqlInstance" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.cloudSqlInstance"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance CloudSqlInstance { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a>

cloud_sql_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#cloud_sql_instance CloudRunV2WorkerPool#cloud_sql_instance}

---

##### `EmptyDir`<sup>Optional</sup> <a name="EmptyDir" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.emptyDir"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesEmptyDir EmptyDir { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir">CloudRunV2WorkerPoolTemplateVolumesEmptyDir</a>

empty_dir block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#empty_dir CloudRunV2WorkerPool#empty_dir}

---

##### `Gcs`<sup>Optional</sup> <a name="Gcs" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.gcs"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesGcs Gcs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs">CloudRunV2WorkerPoolTemplateVolumesGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#gcs CloudRunV2WorkerPool#gcs}

---

##### `Nfs`<sup>Optional</sup> <a name="Nfs" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.nfs"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesNfs Nfs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs">CloudRunV2WorkerPoolTemplateVolumesNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#nfs CloudRunV2WorkerPool#nfs}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.secret"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesSecret Secret { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret">CloudRunV2WorkerPoolTemplateVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#secret CloudRunV2WorkerPool#secret}

---

### CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance <a name="CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance {
    string[] Instances = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance.property.instances">Instances</a></code> | <code>string[]</code> | The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}. |

---

##### `Instances`<sup>Optional</sup> <a name="Instances" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance.property.instances"></a>

```csharp
public string[] Instances { get; set; }
```

- *Type:* string[]

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#instances CloudRunV2WorkerPool#instances}

---

### CloudRunV2WorkerPoolTemplateVolumesEmptyDir <a name="CloudRunV2WorkerPoolTemplateVolumesEmptyDir" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateVolumesEmptyDir {
    string Medium = null,
    string SizeLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir.property.medium">Medium</a></code> | <code>string</code> | The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"]. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir.property.sizeLimit">SizeLimit</a></code> | <code>string</code> | Limit on the storage usable by this EmptyDir volume. |

---

##### `Medium`<sup>Optional</sup> <a name="Medium" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir.property.medium"></a>

```csharp
public string Medium { get; set; }
```

- *Type:* string

The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#medium CloudRunV2WorkerPool#medium}

---

##### `SizeLimit`<sup>Optional</sup> <a name="SizeLimit" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir.property.sizeLimit"></a>

```csharp
public string SizeLimit { get; set; }
```

- *Type:* string

Limit on the storage usable by this EmptyDir volume.

The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#size_limit CloudRunV2WorkerPool#size_limit}

---

### CloudRunV2WorkerPoolTemplateVolumesGcs <a name="CloudRunV2WorkerPoolTemplateVolumesGcs" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateVolumesGcs {
    string Bucket,
    object ReadOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs.property.bucket">Bucket</a></code> | <code>string</code> | GCS Bucket name. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs.property.readOnly">ReadOnly</a></code> | <code>object</code> | If true, mount the GCS bucket as read-only. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

GCS Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#bucket CloudRunV2WorkerPool#bucket}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

If true, mount the GCS bucket as read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#read_only CloudRunV2WorkerPool#read_only}

---

### CloudRunV2WorkerPoolTemplateVolumesNfs <a name="CloudRunV2WorkerPoolTemplateVolumesNfs" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateVolumesNfs {
    string Path,
    string Server,
    object ReadOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs.property.path">Path</a></code> | <code>string</code> | Path that is exported by the NFS server. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs.property.server">Server</a></code> | <code>string</code> | Hostname or IP address of the NFS server. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs.property.readOnly">ReadOnly</a></code> | <code>object</code> | If true, mount the NFS volume as read only. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path that is exported by the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#path CloudRunV2WorkerPool#path}

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs.property.server"></a>

```csharp
public string Server { get; set; }
```

- *Type:* string

Hostname or IP address of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#server CloudRunV2WorkerPool#server}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

If true, mount the NFS volume as read only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#read_only CloudRunV2WorkerPool#read_only}

---

### CloudRunV2WorkerPoolTemplateVolumesSecret <a name="CloudRunV2WorkerPoolTemplateVolumesSecret" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateVolumesSecret {
    string Secret,
    double DefaultMode = null,
    object Items = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret.property.secret">Secret</a></code> | <code>string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret.property.defaultMode">DefaultMode</a></code> | <code>double</code> | Integer representation of mode bits to use on created files by default. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret.property.items">Items</a></code> | <code>object</code> | items block. |

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#secret CloudRunV2WorkerPool#secret}

---

##### `DefaultMode`<sup>Optional</sup> <a name="DefaultMode" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret.property.defaultMode"></a>

```csharp
public double DefaultMode { get; set; }
```

- *Type:* double

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#default_mode CloudRunV2WorkerPool#default_mode}

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret.property.items"></a>

```csharp
public object Items { get; set; }
```

- *Type:* object

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#items CloudRunV2WorkerPool#items}

---

### CloudRunV2WorkerPoolTemplateVolumesSecretItems <a name="CloudRunV2WorkerPoolTemplateVolumesSecretItems" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateVolumesSecretItems {
    string Path,
    double Mode = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems.property.path">Path</a></code> | <code>string</code> | The relative path of the secret in the container. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems.property.mode">Mode</a></code> | <code>double</code> | Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems.property.version">Version</a></code> | <code>string</code> | The Cloud Secret Manager secret version. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The relative path of the secret in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#path CloudRunV2WorkerPool#path}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems.property.mode"></a>

```csharp
public double Mode { get; set; }
```

- *Type:* double

Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal).

If 0 or not set, the Volume's default mode will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#mode CloudRunV2WorkerPool#mode}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#version CloudRunV2WorkerPool#version}

---

### CloudRunV2WorkerPoolTemplateVpcAccess <a name="CloudRunV2WorkerPoolTemplateVpcAccess" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateVpcAccess {
    string Egress = null,
    object NetworkInterfaces = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess.property.egress">Egress</a></code> | <code>string</code> | Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess.property.networkInterfaces">NetworkInterfaces</a></code> | <code>object</code> | network_interfaces block. |

---

##### `Egress`<sup>Optional</sup> <a name="Egress" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess.property.egress"></a>

```csharp
public string Egress { get; set; }
```

- *Type:* string

Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#egress CloudRunV2WorkerPool#egress}

---

##### `NetworkInterfaces`<sup>Optional</sup> <a name="NetworkInterfaces" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess.property.networkInterfaces"></a>

```csharp
public object NetworkInterfaces { get; set; }
```

- *Type:* object

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#network_interfaces CloudRunV2WorkerPool#network_interfaces}

---

### CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces <a name="CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces {
    string Network = null,
    string Subnetwork = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.network">Network</a></code> | <code>string</code> | The VPC network that the Cloud Run resource will be able to send traffic to. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.subnetwork">Subnetwork</a></code> | <code>string</code> | The VPC subnetwork that the Cloud Run resource will get IPs from. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.tags">Tags</a></code> | <code>string[]</code> | Network tags applied to this Cloud Run WorkerPool. |

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The VPC network that the Cloud Run resource will be able to send traffic to.

At least one of network or subnetwork must be specified. If both
network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If network is not specified, it will be
looked up from the subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#network CloudRunV2WorkerPool#network}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.subnetwork"></a>

```csharp
public string Subnetwork { get; set; }
```

- *Type:* string

The VPC subnetwork that the Cloud Run resource will get IPs from.

At least one of network or subnetwork must be specified. If both
network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the
subnetwork with the same name with the network will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#subnetwork CloudRunV2WorkerPool#subnetwork}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Network tags applied to this Cloud Run WorkerPool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#tags CloudRunV2WorkerPool#tags}

---

### CloudRunV2WorkerPoolTerminalCondition <a name="CloudRunV2WorkerPoolTerminalCondition" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTerminalCondition {

};
```


### CloudRunV2WorkerPoolTimeouts <a name="CloudRunV2WorkerPoolTimeouts" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#create CloudRunV2WorkerPool#create}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#delete CloudRunV2WorkerPool#delete}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#update CloudRunV2WorkerPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#create CloudRunV2WorkerPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#delete CloudRunV2WorkerPool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/cloud_run_v2_worker_pool#update CloudRunV2WorkerPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudRunV2WorkerPoolBinaryAuthorizationOutputReference <a name="CloudRunV2WorkerPoolBinaryAuthorizationOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolBinaryAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetBreakglassJustification">ResetBreakglassJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetUseDefault">ResetUseDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBreakglassJustification` <a name="ResetBreakglassJustification" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetBreakglassJustification"></a>

```csharp
private void ResetBreakglassJustification()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetUseDefault` <a name="ResetUseDefault" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetUseDefault"></a>

```csharp
private void ResetUseDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.breakglassJustificationInput">BreakglassJustificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.useDefaultInput">UseDefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.breakglassJustification">BreakglassJustification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.useDefault">UseDefault</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization">CloudRunV2WorkerPoolBinaryAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BreakglassJustificationInput`<sup>Optional</sup> <a name="BreakglassJustificationInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.breakglassJustificationInput"></a>

```csharp
public string BreakglassJustificationInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `UseDefaultInput`<sup>Optional</sup> <a name="UseDefaultInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.useDefaultInput"></a>

```csharp
public object UseDefaultInput { get; }
```

- *Type:* object

---

##### `BreakglassJustification`<sup>Required</sup> <a name="BreakglassJustification" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.breakglassJustification"></a>

```csharp
public string BreakglassJustification { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `UseDefault`<sup>Required</sup> <a name="UseDefault" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.useDefault"></a>

```csharp
public object UseDefault { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.internalValue"></a>

```csharp
public CloudRunV2WorkerPoolBinaryAuthorization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization">CloudRunV2WorkerPoolBinaryAuthorization</a>

---


### CloudRunV2WorkerPoolConditionsList <a name="CloudRunV2WorkerPoolConditionsList" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.get"></a>

```csharp
private CloudRunV2WorkerPoolConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudRunV2WorkerPoolConditionsOutputReference <a name="CloudRunV2WorkerPoolConditionsOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.executionReason">ExecutionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.revisionReason">RevisionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditions">CloudRunV2WorkerPoolConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionReason`<sup>Required</sup> <a name="ExecutionReason" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.executionReason"></a>

```csharp
public string ExecutionReason { get; }
```

- *Type:* string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.lastTransitionTime"></a>

```csharp
public string LastTransitionTime { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `RevisionReason`<sup>Required</sup> <a name="RevisionReason" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.revisionReason"></a>

```csharp
public string RevisionReason { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.internalValue"></a>

```csharp
public CloudRunV2WorkerPoolConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditions">CloudRunV2WorkerPoolConditions</a>

---


### CloudRunV2WorkerPoolInstanceSplitsList <a name="CloudRunV2WorkerPoolInstanceSplitsList" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolInstanceSplitsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.get"></a>

```csharp
private CloudRunV2WorkerPoolInstanceSplitsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudRunV2WorkerPoolInstanceSplitsOutputReference <a name="CloudRunV2WorkerPoolInstanceSplitsOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolInstanceSplitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.resetPercent">ResetPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPercent` <a name="ResetPercent" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.resetPercent"></a>

```csharp
private void ResetPercent()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.resetRevision"></a>

```csharp
private void ResetRevision()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.percentInput">PercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.revisionInput">RevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.percent">Percent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.revision">Revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.percentInput"></a>

```csharp
public double PercentInput { get; }
```

- *Type:* double

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.revisionInput"></a>

```csharp
public string RevisionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.percent"></a>

```csharp
public double Percent { get; }
```

- *Type:* double

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.revision"></a>

```csharp
public string Revision { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudRunV2WorkerPoolInstanceSplitStatusesList <a name="CloudRunV2WorkerPoolInstanceSplitStatusesList" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolInstanceSplitStatusesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.get"></a>

```csharp
private CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference <a name="CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.percent">Percent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.revision">Revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatuses">CloudRunV2WorkerPoolInstanceSplitStatuses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.percent"></a>

```csharp
public double Percent { get; }
```

- *Type:* double

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.revision"></a>

```csharp
public string Revision { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.internalValue"></a>

```csharp
public CloudRunV2WorkerPoolInstanceSplitStatuses InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatuses">CloudRunV2WorkerPoolInstanceSplitStatuses</a>

---


### CloudRunV2WorkerPoolScalingOutputReference <a name="CloudRunV2WorkerPoolScalingOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resetManualInstanceCount">ResetManualInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resetMaxInstanceCount">ResetMaxInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resetMinInstanceCount">ResetMinInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resetScalingMode">ResetScalingMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManualInstanceCount` <a name="ResetManualInstanceCount" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resetManualInstanceCount"></a>

```csharp
private void ResetManualInstanceCount()
```

##### `ResetMaxInstanceCount` <a name="ResetMaxInstanceCount" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resetMaxInstanceCount"></a>

```csharp
private void ResetMaxInstanceCount()
```

##### `ResetMinInstanceCount` <a name="ResetMinInstanceCount" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resetMinInstanceCount"></a>

```csharp
private void ResetMinInstanceCount()
```

##### `ResetScalingMode` <a name="ResetScalingMode" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resetScalingMode"></a>

```csharp
private void ResetScalingMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.manualInstanceCountInput">ManualInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.maxInstanceCountInput">MaxInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.minInstanceCountInput">MinInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.scalingModeInput">ScalingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.manualInstanceCount">ManualInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.minInstanceCount">MinInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.scalingMode">ScalingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling">CloudRunV2WorkerPoolScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManualInstanceCountInput`<sup>Optional</sup> <a name="ManualInstanceCountInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.manualInstanceCountInput"></a>

```csharp
public double ManualInstanceCountInput { get; }
```

- *Type:* double

---

##### `MaxInstanceCountInput`<sup>Optional</sup> <a name="MaxInstanceCountInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.maxInstanceCountInput"></a>

```csharp
public double MaxInstanceCountInput { get; }
```

- *Type:* double

---

##### `MinInstanceCountInput`<sup>Optional</sup> <a name="MinInstanceCountInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.minInstanceCountInput"></a>

```csharp
public double MinInstanceCountInput { get; }
```

- *Type:* double

---

##### `ScalingModeInput`<sup>Optional</sup> <a name="ScalingModeInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.scalingModeInput"></a>

```csharp
public string ScalingModeInput { get; }
```

- *Type:* string

---

##### `ManualInstanceCount`<sup>Required</sup> <a name="ManualInstanceCount" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.manualInstanceCount"></a>

```csharp
public double ManualInstanceCount { get; }
```

- *Type:* double

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.maxInstanceCount"></a>

```csharp
public double MaxInstanceCount { get; }
```

- *Type:* double

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.minInstanceCount"></a>

```csharp
public double MinInstanceCount { get; }
```

- *Type:* double

---

##### `ScalingMode`<sup>Required</sup> <a name="ScalingMode" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.scalingMode"></a>

```csharp
public string ScalingMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.internalValue"></a>

```csharp
public CloudRunV2WorkerPoolScaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling">CloudRunV2WorkerPoolScaling</a>

---


### CloudRunV2WorkerPoolTemplateContainersEnvList <a name="CloudRunV2WorkerPoolTemplateContainersEnvList" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateContainersEnvList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.get"></a>

```csharp
private CloudRunV2WorkerPoolTemplateContainersEnvOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudRunV2WorkerPoolTemplateContainersEnvOutputReference <a name="CloudRunV2WorkerPoolTemplateContainersEnvOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateContainersEnvOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.putValueSource">PutValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resetValueSource">ResetValueSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueSource` <a name="PutValueSource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.putValueSource"></a>

```csharp
private void PutValueSource(CloudRunV2WorkerPoolTemplateContainersEnvValueSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.putValueSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource">CloudRunV2WorkerPoolTemplateContainersEnvValueSource</a>

---

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValueSource` <a name="ResetValueSource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resetValueSource"></a>

```csharp
private void ResetValueSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueSource">ValueSource</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueSourceInput">ValueSourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource">CloudRunV2WorkerPoolTemplateContainersEnvValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueSource`<sup>Required</sup> <a name="ValueSource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueSource"></a>

```csharp
public CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference ValueSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ValueSourceInput`<sup>Optional</sup> <a name="ValueSourceInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueSourceInput"></a>

```csharp
public CloudRunV2WorkerPoolTemplateContainersEnvValueSource ValueSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource">CloudRunV2WorkerPoolTemplateContainersEnvValueSource</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference <a name="CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef">PutSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef">ResetSecretKeyRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretKeyRef` <a name="PutSecretKeyRef" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef"></a>

```csharp
private void PutSecretKeyRef(CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `ResetSecretKeyRef` <a name="ResetSecretKeyRef" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef"></a>

```csharp
private void ResetSecretKeyRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput">SecretKeyRefInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource">CloudRunV2WorkerPoolTemplateContainersEnvValueSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretKeyRef`<sup>Required</sup> <a name="SecretKeyRef" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef"></a>

```csharp
public CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference SecretKeyRef { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a>

---

##### `SecretKeyRefInput`<sup>Optional</sup> <a name="SecretKeyRefInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput"></a>

```csharp
public CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef SecretKeyRefInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.internalValue"></a>

```csharp
public CloudRunV2WorkerPoolTemplateContainersEnvValueSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource">CloudRunV2WorkerPoolTemplateContainersEnvValueSource</a>

---


### CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference <a name="CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue"></a>

```csharp
public CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a>

---


### CloudRunV2WorkerPoolTemplateContainersList <a name="CloudRunV2WorkerPoolTemplateContainersList" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateContainersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.get"></a>

```csharp
private CloudRunV2WorkerPoolTemplateContainersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudRunV2WorkerPoolTemplateContainersOutputReference <a name="CloudRunV2WorkerPoolTemplateContainersOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateContainersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.putVolumeMounts">PutVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetDependsOn">ResetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetVolumeMounts">ResetVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetWorkingDir">ResetWorkingDir</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.putEnv"></a>

```csharp
private void PutEnv(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* object

---

##### `PutResources` <a name="PutResources" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.putResources"></a>

```csharp
private void PutResources(CloudRunV2WorkerPoolTemplateContainersResources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources">CloudRunV2WorkerPoolTemplateContainersResources</a>

---

##### `PutVolumeMounts` <a name="PutVolumeMounts" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.putVolumeMounts"></a>

```csharp
private void PutVolumeMounts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* object

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetDependsOn` <a name="ResetDependsOn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetDependsOn"></a>

```csharp
private void ResetDependsOn()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetResources"></a>

```csharp
private void ResetResources()
```

##### `ResetVolumeMounts` <a name="ResetVolumeMounts" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetVolumeMounts"></a>

```csharp
private void ResetVolumeMounts()
```

##### `ResetWorkingDir` <a name="ResetWorkingDir" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetWorkingDir"></a>

```csharp
private void ResetWorkingDir()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.env">Env</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList">CloudRunV2WorkerPoolTemplateContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference">CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.volumeMounts">VolumeMounts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList">CloudRunV2WorkerPoolTemplateContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.dependsOnInput">DependsOnInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.envInput">EnvInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources">CloudRunV2WorkerPoolTemplateContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.volumeMountsInput">VolumeMountsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.workingDirInput">WorkingDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.workingDir">WorkingDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.env"></a>

```csharp
public CloudRunV2WorkerPoolTemplateContainersEnvList Env { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList">CloudRunV2WorkerPoolTemplateContainersEnvList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.resources"></a>

```csharp
public CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference Resources { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference">CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference</a>

---

##### `VolumeMounts`<sup>Required</sup> <a name="VolumeMounts" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.volumeMounts"></a>

```csharp
public CloudRunV2WorkerPoolTemplateContainersVolumeMountsList VolumeMounts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList">CloudRunV2WorkerPoolTemplateContainersVolumeMountsList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `DependsOnInput`<sup>Optional</sup> <a name="DependsOnInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.dependsOnInput"></a>

```csharp
public string[] DependsOnInput { get; }
```

- *Type:* string[]

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.envInput"></a>

```csharp
public object EnvInput { get; }
```

- *Type:* object

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.resourcesInput"></a>

```csharp
public CloudRunV2WorkerPoolTemplateContainersResources ResourcesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources">CloudRunV2WorkerPoolTemplateContainersResources</a>

---

##### `VolumeMountsInput`<sup>Optional</sup> <a name="VolumeMountsInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.volumeMountsInput"></a>

```csharp
public object VolumeMountsInput { get; }
```

- *Type:* object

---

##### `WorkingDirInput`<sup>Optional</sup> <a name="WorkingDirInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.workingDirInput"></a>

```csharp
public string WorkingDirInput { get; }
```

- *Type:* string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `DependsOn`<sup>Required</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `WorkingDir`<sup>Required</sup> <a name="WorkingDir" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.workingDir"></a>

```csharp
public string WorkingDir { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference <a name="CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resetLimits">ResetLimits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resetLimits"></a>

```csharp
private void ResetLimits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.limitsInput">LimitsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.limits">Limits</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources">CloudRunV2WorkerPoolTemplateContainersResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.limitsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LimitsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.limits"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Limits { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.internalValue"></a>

```csharp
public CloudRunV2WorkerPoolTemplateContainersResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources">CloudRunV2WorkerPoolTemplateContainersResources</a>

---


### CloudRunV2WorkerPoolTemplateContainersVolumeMountsList <a name="CloudRunV2WorkerPoolTemplateContainersVolumeMountsList" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateContainersVolumeMountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.get"></a>

```csharp
private CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference <a name="CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.mountPath">MountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```csharp
public string MountPathInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.mountPath"></a>

```csharp
public string MountPath { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference <a name="CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.acceleratorInput">AcceleratorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.accelerator">Accelerator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector">CloudRunV2WorkerPoolTemplateNodeSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorInput`<sup>Optional</sup> <a name="AcceleratorInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.acceleratorInput"></a>

```csharp
public string AcceleratorInput { get; }
```

- *Type:* string

---

##### `Accelerator`<sup>Required</sup> <a name="Accelerator" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.accelerator"></a>

```csharp
public string Accelerator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.internalValue"></a>

```csharp
public CloudRunV2WorkerPoolTemplateNodeSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector">CloudRunV2WorkerPoolTemplateNodeSelector</a>

---


### CloudRunV2WorkerPoolTemplateOutputReference <a name="CloudRunV2WorkerPoolTemplateOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putContainers">PutContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putNodeSelector">PutNodeSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putVpcAccess">PutVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetContainers">ResetContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKey">ResetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKeyRevocationAction">ResetEncryptionKeyRevocationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKeyShutdownDuration">ResetEncryptionKeyShutdownDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetGpuZonalRedundancyDisabled">ResetGpuZonalRedundancyDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetNodeSelector">ResetNodeSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetVpcAccess">ResetVpcAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainers` <a name="PutContainers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putContainers"></a>

```csharp
private void PutContainers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putContainers.parameter.value"></a>

- *Type:* object

---

##### `PutNodeSelector` <a name="PutNodeSelector" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putNodeSelector"></a>

```csharp
private void PutNodeSelector(CloudRunV2WorkerPoolTemplateNodeSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putNodeSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector">CloudRunV2WorkerPoolTemplateNodeSelector</a>

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putVolumes"></a>

```csharp
private void PutVolumes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putVolumes.parameter.value"></a>

- *Type:* object

---

##### `PutVpcAccess` <a name="PutVpcAccess" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putVpcAccess"></a>

```csharp
private void PutVpcAccess(CloudRunV2WorkerPoolTemplateVpcAccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putVpcAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess">CloudRunV2WorkerPoolTemplateVpcAccess</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetContainers` <a name="ResetContainers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetContainers"></a>

```csharp
private void ResetContainers()
```

##### `ResetEncryptionKey` <a name="ResetEncryptionKey" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKey"></a>

```csharp
private void ResetEncryptionKey()
```

##### `ResetEncryptionKeyRevocationAction` <a name="ResetEncryptionKeyRevocationAction" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKeyRevocationAction"></a>

```csharp
private void ResetEncryptionKeyRevocationAction()
```

##### `ResetEncryptionKeyShutdownDuration` <a name="ResetEncryptionKeyShutdownDuration" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKeyShutdownDuration"></a>

```csharp
private void ResetEncryptionKeyShutdownDuration()
```

##### `ResetGpuZonalRedundancyDisabled` <a name="ResetGpuZonalRedundancyDisabled" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetGpuZonalRedundancyDisabled"></a>

```csharp
private void ResetGpuZonalRedundancyDisabled()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNodeSelector` <a name="ResetNodeSelector" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetNodeSelector"></a>

```csharp
private void ResetNodeSelector()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetRevision"></a>

```csharp
private void ResetRevision()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetVolumes"></a>

```csharp
private void ResetVolumes()
```

##### `ResetVpcAccess` <a name="ResetVpcAccess" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetVpcAccess"></a>

```csharp
private void ResetVpcAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.containers">Containers</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList">CloudRunV2WorkerPoolTemplateContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.nodeSelector">NodeSelector</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference">CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList">CloudRunV2WorkerPoolTemplateVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.vpcAccess">VpcAccess</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference">CloudRunV2WorkerPoolTemplateVpcAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.containersInput">ContainersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyRevocationActionInput">EncryptionKeyRevocationActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyShutdownDurationInput">EncryptionKeyShutdownDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.gpuZonalRedundancyDisabledInput">GpuZonalRedundancyDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.nodeSelectorInput">NodeSelectorInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector">CloudRunV2WorkerPoolTemplateNodeSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.revisionInput">RevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.volumesInput">VolumesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.vpcAccessInput">VpcAccessInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess">CloudRunV2WorkerPoolTemplateVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyRevocationAction">EncryptionKeyRevocationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyShutdownDuration">EncryptionKeyShutdownDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.gpuZonalRedundancyDisabled">GpuZonalRedundancyDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.revision">Revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate">CloudRunV2WorkerPoolTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.containers"></a>

```csharp
public CloudRunV2WorkerPoolTemplateContainersList Containers { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList">CloudRunV2WorkerPoolTemplateContainersList</a>

---

##### `NodeSelector`<sup>Required</sup> <a name="NodeSelector" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.nodeSelector"></a>

```csharp
public CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference NodeSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference">CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference</a>

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.volumes"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesList Volumes { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList">CloudRunV2WorkerPoolTemplateVolumesList</a>

---

##### `VpcAccess`<sup>Required</sup> <a name="VpcAccess" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.vpcAccess"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVpcAccessOutputReference VpcAccess { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference">CloudRunV2WorkerPoolTemplateVpcAccessOutputReference</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ContainersInput`<sup>Optional</sup> <a name="ContainersInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.containersInput"></a>

```csharp
public object ContainersInput { get; }
```

- *Type:* object

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyInput"></a>

```csharp
public string EncryptionKeyInput { get; }
```

- *Type:* string

---

##### `EncryptionKeyRevocationActionInput`<sup>Optional</sup> <a name="EncryptionKeyRevocationActionInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyRevocationActionInput"></a>

```csharp
public string EncryptionKeyRevocationActionInput { get; }
```

- *Type:* string

---

##### `EncryptionKeyShutdownDurationInput`<sup>Optional</sup> <a name="EncryptionKeyShutdownDurationInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyShutdownDurationInput"></a>

```csharp
public string EncryptionKeyShutdownDurationInput { get; }
```

- *Type:* string

---

##### `GpuZonalRedundancyDisabledInput`<sup>Optional</sup> <a name="GpuZonalRedundancyDisabledInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.gpuZonalRedundancyDisabledInput"></a>

```csharp
public object GpuZonalRedundancyDisabledInput { get; }
```

- *Type:* object

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NodeSelectorInput`<sup>Optional</sup> <a name="NodeSelectorInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.nodeSelectorInput"></a>

```csharp
public CloudRunV2WorkerPoolTemplateNodeSelector NodeSelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector">CloudRunV2WorkerPoolTemplateNodeSelector</a>

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.revisionInput"></a>

```csharp
public string RevisionInput { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.volumesInput"></a>

```csharp
public object VolumesInput { get; }
```

- *Type:* object

---

##### `VpcAccessInput`<sup>Optional</sup> <a name="VpcAccessInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.vpcAccessInput"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVpcAccess VpcAccessInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess">CloudRunV2WorkerPoolTemplateVpcAccess</a>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKey"></a>

```csharp
public string EncryptionKey { get; }
```

- *Type:* string

---

##### `EncryptionKeyRevocationAction`<sup>Required</sup> <a name="EncryptionKeyRevocationAction" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyRevocationAction"></a>

```csharp
public string EncryptionKeyRevocationAction { get; }
```

- *Type:* string

---

##### `EncryptionKeyShutdownDuration`<sup>Required</sup> <a name="EncryptionKeyShutdownDuration" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyShutdownDuration"></a>

```csharp
public string EncryptionKeyShutdownDuration { get; }
```

- *Type:* string

---

##### `GpuZonalRedundancyDisabled`<sup>Required</sup> <a name="GpuZonalRedundancyDisabled" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.gpuZonalRedundancyDisabled"></a>

```csharp
public object GpuZonalRedundancyDisabled { get; }
```

- *Type:* object

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.revision"></a>

```csharp
public string Revision { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.internalValue"></a>

```csharp
public CloudRunV2WorkerPoolTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate">CloudRunV2WorkerPoolTemplate</a>

---


### CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference <a name="CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resetInstances">ResetInstances</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstances` <a name="ResetInstances" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resetInstances"></a>

```csharp
private void ResetInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput">InstancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.instances">Instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput"></a>

```csharp
public string[] InstancesInput { get; }
```

- *Type:* string[]

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.instances"></a>

```csharp
public string[] Instances { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a>

---


### CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference <a name="CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resetMedium">ResetMedium</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resetSizeLimit">ResetSizeLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMedium` <a name="ResetMedium" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resetMedium"></a>

```csharp
private void ResetMedium()
```

##### `ResetSizeLimit` <a name="ResetSizeLimit" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resetSizeLimit"></a>

```csharp
private void ResetSizeLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.mediumInput">MediumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.sizeLimitInput">SizeLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.medium">Medium</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.sizeLimit">SizeLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir">CloudRunV2WorkerPoolTemplateVolumesEmptyDir</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MediumInput`<sup>Optional</sup> <a name="MediumInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.mediumInput"></a>

```csharp
public string MediumInput { get; }
```

- *Type:* string

---

##### `SizeLimitInput`<sup>Optional</sup> <a name="SizeLimitInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.sizeLimitInput"></a>

```csharp
public string SizeLimitInput { get; }
```

- *Type:* string

---

##### `Medium`<sup>Required</sup> <a name="Medium" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.medium"></a>

```csharp
public string Medium { get; }
```

- *Type:* string

---

##### `SizeLimit`<sup>Required</sup> <a name="SizeLimit" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.sizeLimit"></a>

```csharp
public string SizeLimit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.internalValue"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesEmptyDir InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir">CloudRunV2WorkerPoolTemplateVolumesEmptyDir</a>

---


### CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference <a name="CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs">CloudRunV2WorkerPoolTemplateVolumesGcs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.internalValue"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesGcs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs">CloudRunV2WorkerPoolTemplateVolumesGcs</a>

---


### CloudRunV2WorkerPoolTemplateVolumesList <a name="CloudRunV2WorkerPoolTemplateVolumesList" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.get"></a>

```csharp
private CloudRunV2WorkerPoolTemplateVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference <a name="CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.serverInput">ServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.server">Server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs">CloudRunV2WorkerPoolTemplateVolumesNfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.serverInput"></a>

```csharp
public string ServerInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.internalValue"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesNfs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs">CloudRunV2WorkerPoolTemplateVolumesNfs</a>

---


### CloudRunV2WorkerPoolTemplateVolumesOutputReference <a name="CloudRunV2WorkerPoolTemplateVolumesOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putCloudSqlInstance">PutCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putEmptyDir">PutEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putGcs">PutGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putNfs">PutNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resetCloudSqlInstance">ResetCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resetEmptyDir">ResetEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resetGcs">ResetGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resetNfs">ResetNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudSqlInstance` <a name="PutCloudSqlInstance" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putCloudSqlInstance"></a>

```csharp
private void PutCloudSqlInstance(CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putCloudSqlInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a>

---

##### `PutEmptyDir` <a name="PutEmptyDir" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putEmptyDir"></a>

```csharp
private void PutEmptyDir(CloudRunV2WorkerPoolTemplateVolumesEmptyDir Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putEmptyDir.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir">CloudRunV2WorkerPoolTemplateVolumesEmptyDir</a>

---

##### `PutGcs` <a name="PutGcs" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putGcs"></a>

```csharp
private void PutGcs(CloudRunV2WorkerPoolTemplateVolumesGcs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putGcs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs">CloudRunV2WorkerPoolTemplateVolumesGcs</a>

---

##### `PutNfs` <a name="PutNfs" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putNfs"></a>

```csharp
private void PutNfs(CloudRunV2WorkerPoolTemplateVolumesNfs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putNfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs">CloudRunV2WorkerPoolTemplateVolumesNfs</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putSecret"></a>

```csharp
private void PutSecret(CloudRunV2WorkerPoolTemplateVolumesSecret Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret">CloudRunV2WorkerPoolTemplateVolumesSecret</a>

---

##### `ResetCloudSqlInstance` <a name="ResetCloudSqlInstance" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resetCloudSqlInstance"></a>

```csharp
private void ResetCloudSqlInstance()
```

##### `ResetEmptyDir` <a name="ResetEmptyDir" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resetEmptyDir"></a>

```csharp
private void ResetEmptyDir()
```

##### `ResetGcs` <a name="ResetGcs" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resetGcs"></a>

```csharp
private void ResetGcs()
```

##### `ResetNfs` <a name="ResetNfs" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resetNfs"></a>

```csharp
private void ResetNfs()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resetSecret"></a>

```csharp
private void ResetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference">CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.emptyDir">EmptyDir</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference">CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.gcs">Gcs</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference">CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nfs">Nfs</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference">CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference">CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.cloudSqlInstanceInput">CloudSqlInstanceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.emptyDirInput">EmptyDirInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir">CloudRunV2WorkerPoolTemplateVolumesEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.gcsInput">GcsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs">CloudRunV2WorkerPoolTemplateVolumesGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nfsInput">NfsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs">CloudRunV2WorkerPoolTemplateVolumesNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.secretInput">SecretInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret">CloudRunV2WorkerPoolTemplateVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudSqlInstance`<sup>Required</sup> <a name="CloudSqlInstance" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.cloudSqlInstance"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference CloudSqlInstance { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference">CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference</a>

---

##### `EmptyDir`<sup>Required</sup> <a name="EmptyDir" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.emptyDir"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference EmptyDir { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference">CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference</a>

---

##### `Gcs`<sup>Required</sup> <a name="Gcs" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.gcs"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference Gcs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference">CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference</a>

---

##### `Nfs`<sup>Required</sup> <a name="Nfs" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nfs"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference Nfs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference">CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.secret"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference Secret { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference">CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference</a>

---

##### `CloudSqlInstanceInput`<sup>Optional</sup> <a name="CloudSqlInstanceInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.cloudSqlInstanceInput"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance CloudSqlInstanceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a>

---

##### `EmptyDirInput`<sup>Optional</sup> <a name="EmptyDirInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.emptyDirInput"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesEmptyDir EmptyDirInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir">CloudRunV2WorkerPoolTemplateVolumesEmptyDir</a>

---

##### `GcsInput`<sup>Optional</sup> <a name="GcsInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.gcsInput"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesGcs GcsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs">CloudRunV2WorkerPoolTemplateVolumesGcs</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NfsInput`<sup>Optional</sup> <a name="NfsInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nfsInput"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesNfs NfsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs">CloudRunV2WorkerPoolTemplateVolumesNfs</a>

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.secretInput"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesSecret SecretInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret">CloudRunV2WorkerPoolTemplateVolumesSecret</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudRunV2WorkerPoolTemplateVolumesSecretItemsList <a name="CloudRunV2WorkerPoolTemplateVolumesSecretItemsList" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateVolumesSecretItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.get"></a>

```csharp
private CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference <a name="CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.modeInput">ModeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.mode">Mode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.modeInput"></a>

```csharp
public double ModeInput { get; }
```

- *Type:* double

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.mode"></a>

```csharp
public double Mode { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference <a name="CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resetDefaultMode">ResetDefaultMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.putItems"></a>

```csharp
private void PutItems(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.putItems.parameter.value"></a>

- *Type:* object

---

##### `ResetDefaultMode` <a name="ResetDefaultMode" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resetDefaultMode"></a>

```csharp
private void ResetDefaultMode()
```

##### `ResetItems` <a name="ResetItems" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resetItems"></a>

```csharp
private void ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.items">Items</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList">CloudRunV2WorkerPoolTemplateVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.defaultModeInput">DefaultModeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.itemsInput">ItemsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.defaultMode">DefaultMode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret">CloudRunV2WorkerPoolTemplateVolumesSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.items"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesSecretItemsList Items { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList">CloudRunV2WorkerPoolTemplateVolumesSecretItemsList</a>

---

##### `DefaultModeInput`<sup>Optional</sup> <a name="DefaultModeInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.defaultModeInput"></a>

```csharp
public double DefaultModeInput { get; }
```

- *Type:* double

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.itemsInput"></a>

```csharp
public object ItemsInput { get; }
```

- *Type:* object

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `DefaultMode`<sup>Required</sup> <a name="DefaultMode" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.defaultMode"></a>

```csharp
public double DefaultMode { get; }
```

- *Type:* double

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.internalValue"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVolumesSecret InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret">CloudRunV2WorkerPoolTemplateVolumesSecret</a>

---


### CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList <a name="CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.get"></a>

```csharp
private CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference <a name="CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetSubnetwork"></a>

```csharp
private void ResetSubnetwork()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetworkInput"></a>

```csharp
public string SubnetworkInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudRunV2WorkerPoolTemplateVpcAccessOutputReference <a name="CloudRunV2WorkerPoolTemplateVpcAccessOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTemplateVpcAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.putNetworkInterfaces">PutNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resetEgress">ResetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resetNetworkInterfaces">ResetNetworkInterfaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkInterfaces` <a name="PutNetworkInterfaces" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.putNetworkInterfaces"></a>

```csharp
private void PutNetworkInterfaces(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* object

---

##### `ResetEgress` <a name="ResetEgress" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resetEgress"></a>

```csharp
private void ResetEgress()
```

##### `ResetNetworkInterfaces` <a name="ResetNetworkInterfaces" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resetNetworkInterfaces"></a>

```csharp
private void ResetNetworkInterfaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList">CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.egressInput">EgressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.networkInterfacesInput">NetworkInterfacesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.egress">Egress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess">CloudRunV2WorkerPoolTemplateVpcAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.networkInterfaces"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList NetworkInterfaces { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList">CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList</a>

---

##### `EgressInput`<sup>Optional</sup> <a name="EgressInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.egressInput"></a>

```csharp
public string EgressInput { get; }
```

- *Type:* string

---

##### `NetworkInterfacesInput`<sup>Optional</sup> <a name="NetworkInterfacesInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.networkInterfacesInput"></a>

```csharp
public object NetworkInterfacesInput { get; }
```

- *Type:* object

---

##### `Egress`<sup>Required</sup> <a name="Egress" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.egress"></a>

```csharp
public string Egress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.internalValue"></a>

```csharp
public CloudRunV2WorkerPoolTemplateVpcAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess">CloudRunV2WorkerPoolTemplateVpcAccess</a>

---


### CloudRunV2WorkerPoolTerminalConditionList <a name="CloudRunV2WorkerPoolTerminalConditionList" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTerminalConditionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.get"></a>

```csharp
private CloudRunV2WorkerPoolTerminalConditionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudRunV2WorkerPoolTerminalConditionOutputReference <a name="CloudRunV2WorkerPoolTerminalConditionOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTerminalConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.executionReason">ExecutionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.revisionReason">RevisionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalCondition">CloudRunV2WorkerPoolTerminalCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionReason`<sup>Required</sup> <a name="ExecutionReason" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.executionReason"></a>

```csharp
public string ExecutionReason { get; }
```

- *Type:* string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.lastTransitionTime"></a>

```csharp
public string LastTransitionTime { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `RevisionReason`<sup>Required</sup> <a name="RevisionReason" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.revisionReason"></a>

```csharp
public string RevisionReason { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.internalValue"></a>

```csharp
public CloudRunV2WorkerPoolTerminalCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalCondition">CloudRunV2WorkerPoolTerminalCondition</a>

---


### CloudRunV2WorkerPoolTimeoutsOutputReference <a name="CloudRunV2WorkerPoolTimeoutsOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



