# `storageBucket` Submodule <a name="`storageBucket` Submodule" id="@cdktf/provider-google.storageBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageBucket <a name="StorageBucket" id="@cdktf/provider-google.storageBucket.StorageBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket google_storage_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucket(Construct Scope, string Id, StorageBucketConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig">StorageBucketConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig">StorageBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putAutoclass">PutAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putCors">PutCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putCustomPlacementConfig">PutCustomPlacementConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putHierarchicalNamespace">PutHierarchicalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putIpFilter">PutIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putLifecycleRule">PutLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putRetentionPolicy">PutRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putSoftDeletePolicy">PutSoftDeletePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putVersioning">PutVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putWebsite">PutWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetAutoclass">ResetAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetCors">ResetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetCustomPlacementConfig">ResetCustomPlacementConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetDefaultEventBasedHold">ResetDefaultEventBasedHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetEnableObjectRetention">ResetEnableObjectRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetHierarchicalNamespace">ResetHierarchicalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetIpFilter">ResetIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetLifecycleRule">ResetLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetPublicAccessPrevention">ResetPublicAccessPrevention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetRequesterPays">ResetRequesterPays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetRetentionPolicy">ResetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetRpo">ResetRpo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetSoftDeletePolicy">ResetSoftDeletePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetStorageClass">ResetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetUniformBucketLevelAccess">ResetUniformBucketLevelAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetVersioning">ResetVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetWebsite">ResetWebsite</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucket.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.storageBucket.StorageBucket.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.storageBucket.StorageBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBucket.StorageBucket.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.storageBucket.StorageBucket.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.storageBucket.StorageBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.storageBucket.StorageBucket.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.storageBucket.StorageBucket.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.storageBucket.StorageBucket.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.storageBucket.StorageBucket.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.storageBucket.StorageBucket.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.storageBucket.StorageBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.storageBucket.StorageBucket.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.storageBucket.StorageBucket.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageBucket.StorageBucket.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageBucket.StorageBucket.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.storageBucket.StorageBucket.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageBucket.StorageBucket.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.storageBucket.StorageBucket.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.storageBucket.StorageBucket.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.storageBucket.StorageBucket.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.storageBucket.StorageBucket.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageBucket.StorageBucket.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoclass` <a name="PutAutoclass" id="@cdktf/provider-google.storageBucket.StorageBucket.putAutoclass"></a>

```csharp
private void PutAutoclass(StorageBucketAutoclass Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBucket.StorageBucket.putAutoclass.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a>

---

##### `PutCors` <a name="PutCors" id="@cdktf/provider-google.storageBucket.StorageBucket.putCors"></a>

```csharp
private void PutCors(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBucket.StorageBucket.putCors.parameter.value"></a>

- *Type:* object

---

##### `PutCustomPlacementConfig` <a name="PutCustomPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucket.putCustomPlacementConfig"></a>

```csharp
private void PutCustomPlacementConfig(StorageBucketCustomPlacementConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBucket.StorageBucket.putCustomPlacementConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a>

---

##### `PutEncryption` <a name="PutEncryption" id="@cdktf/provider-google.storageBucket.StorageBucket.putEncryption"></a>

```csharp
private void PutEncryption(StorageBucketEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBucket.StorageBucket.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a>

---

##### `PutHierarchicalNamespace` <a name="PutHierarchicalNamespace" id="@cdktf/provider-google.storageBucket.StorageBucket.putHierarchicalNamespace"></a>

```csharp
private void PutHierarchicalNamespace(StorageBucketHierarchicalNamespace Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBucket.StorageBucket.putHierarchicalNamespace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a>

---

##### `PutIpFilter` <a name="PutIpFilter" id="@cdktf/provider-google.storageBucket.StorageBucket.putIpFilter"></a>

```csharp
private void PutIpFilter(StorageBucketIpFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBucket.StorageBucket.putIpFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilter">StorageBucketIpFilter</a>

---

##### `PutLifecycleRule` <a name="PutLifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucket.putLifecycleRule"></a>

```csharp
private void PutLifecycleRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBucket.StorageBucket.putLifecycleRule.parameter.value"></a>

- *Type:* object

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-google.storageBucket.StorageBucket.putLogging"></a>

```csharp
private void PutLogging(StorageBucketLogging Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBucket.StorageBucket.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a>

---

##### `PutRetentionPolicy` <a name="PutRetentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.putRetentionPolicy"></a>

```csharp
private void PutRetentionPolicy(StorageBucketRetentionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBucket.StorageBucket.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a>

---

##### `PutSoftDeletePolicy` <a name="PutSoftDeletePolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.putSoftDeletePolicy"></a>

```csharp
private void PutSoftDeletePolicy(StorageBucketSoftDeletePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBucket.StorageBucket.putSoftDeletePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.storageBucket.StorageBucket.putTimeouts"></a>

```csharp
private void PutTimeouts(StorageBucketTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBucket.StorageBucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a>

---

##### `PutVersioning` <a name="PutVersioning" id="@cdktf/provider-google.storageBucket.StorageBucket.putVersioning"></a>

```csharp
private void PutVersioning(StorageBucketVersioning Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBucket.StorageBucket.putVersioning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a>

---

##### `PutWebsite` <a name="PutWebsite" id="@cdktf/provider-google.storageBucket.StorageBucket.putWebsite"></a>

```csharp
private void PutWebsite(StorageBucketWebsite Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBucket.StorageBucket.putWebsite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a>

---

##### `ResetAutoclass` <a name="ResetAutoclass" id="@cdktf/provider-google.storageBucket.StorageBucket.resetAutoclass"></a>

```csharp
private void ResetAutoclass()
```

##### `ResetCors` <a name="ResetCors" id="@cdktf/provider-google.storageBucket.StorageBucket.resetCors"></a>

```csharp
private void ResetCors()
```

##### `ResetCustomPlacementConfig` <a name="ResetCustomPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucket.resetCustomPlacementConfig"></a>

```csharp
private void ResetCustomPlacementConfig()
```

##### `ResetDefaultEventBasedHold` <a name="ResetDefaultEventBasedHold" id="@cdktf/provider-google.storageBucket.StorageBucket.resetDefaultEventBasedHold"></a>

```csharp
private void ResetDefaultEventBasedHold()
```

##### `ResetEnableObjectRetention` <a name="ResetEnableObjectRetention" id="@cdktf/provider-google.storageBucket.StorageBucket.resetEnableObjectRetention"></a>

```csharp
private void ResetEnableObjectRetention()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktf/provider-google.storageBucket.StorageBucket.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-google.storageBucket.StorageBucket.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetHierarchicalNamespace` <a name="ResetHierarchicalNamespace" id="@cdktf/provider-google.storageBucket.StorageBucket.resetHierarchicalNamespace"></a>

```csharp
private void ResetHierarchicalNamespace()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.storageBucket.StorageBucket.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpFilter` <a name="ResetIpFilter" id="@cdktf/provider-google.storageBucket.StorageBucket.resetIpFilter"></a>

```csharp
private void ResetIpFilter()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.storageBucket.StorageBucket.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLifecycleRule` <a name="ResetLifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucket.resetLifecycleRule"></a>

```csharp
private void ResetLifecycleRule()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-google.storageBucket.StorageBucket.resetLogging"></a>

```csharp
private void ResetLogging()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.storageBucket.StorageBucket.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPublicAccessPrevention` <a name="ResetPublicAccessPrevention" id="@cdktf/provider-google.storageBucket.StorageBucket.resetPublicAccessPrevention"></a>

```csharp
private void ResetPublicAccessPrevention()
```

##### `ResetRequesterPays` <a name="ResetRequesterPays" id="@cdktf/provider-google.storageBucket.StorageBucket.resetRequesterPays"></a>

```csharp
private void ResetRequesterPays()
```

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.resetRetentionPolicy"></a>

```csharp
private void ResetRetentionPolicy()
```

##### `ResetRpo` <a name="ResetRpo" id="@cdktf/provider-google.storageBucket.StorageBucket.resetRpo"></a>

```csharp
private void ResetRpo()
```

##### `ResetSoftDeletePolicy` <a name="ResetSoftDeletePolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.resetSoftDeletePolicy"></a>

```csharp
private void ResetSoftDeletePolicy()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucket.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.storageBucket.StorageBucket.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUniformBucketLevelAccess` <a name="ResetUniformBucketLevelAccess" id="@cdktf/provider-google.storageBucket.StorageBucket.resetUniformBucketLevelAccess"></a>

```csharp
private void ResetUniformBucketLevelAccess()
```

##### `ResetVersioning` <a name="ResetVersioning" id="@cdktf/provider-google.storageBucket.StorageBucket.resetVersioning"></a>

```csharp
private void ResetVersioning()
```

##### `ResetWebsite` <a name="ResetWebsite" id="@cdktf/provider-google.storageBucket.StorageBucket.resetWebsite"></a>

```csharp
private void ResetWebsite()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageBucket resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.storageBucket.StorageBucket.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageBucket.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.storageBucket.StorageBucket.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.storageBucket.StorageBucket.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageBucket.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.storageBucket.StorageBucket.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucket.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageBucket.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.storageBucket.StorageBucket.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageBucket.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StorageBucket resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageBucket to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StorageBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.autoclass">Autoclass</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference">StorageBucketAutoclassOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList">StorageBucketCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.customPlacementConfig">CustomPlacementConfig</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference">StorageBucketCustomPlacementConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.encryption">Encryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference">StorageBucketEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.hierarchicalNamespace">HierarchicalNamespace</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference">StorageBucketHierarchicalNamespaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.ipFilter">IpFilter</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference">StorageBucketIpFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycleRule">LifecycleRule</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList">StorageBucketLifecycleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference">StorageBucketLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.projectNumber">ProjectNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference">StorageBucketRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.softDeletePolicy">SoftDeletePolicy</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference">StorageBucketSoftDeletePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference">StorageBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.updated">Updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.versioning">Versioning</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference">StorageBucketVersioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.website">Website</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference">StorageBucketWebsiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.autoclassInput">AutoclassInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.corsInput">CorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.customPlacementConfigInput">CustomPlacementConfigInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.defaultEventBasedHoldInput">DefaultEventBasedHoldInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.enableObjectRetentionInput">EnableObjectRetentionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.encryptionInput">EncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.hierarchicalNamespaceInput">HierarchicalNamespaceInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.ipFilterInput">IpFilterInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilter">StorageBucketIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycleRuleInput">LifecycleRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.publicAccessPreventionInput">PublicAccessPreventionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.requesterPaysInput">RequesterPaysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.rpoInput">RpoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.softDeletePolicyInput">SoftDeletePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.uniformBucketLevelAccessInput">UniformBucketLevelAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.versioningInput">VersioningInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.websiteInput">WebsiteInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.defaultEventBasedHold">DefaultEventBasedHold</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.enableObjectRetention">EnableObjectRetention</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.publicAccessPrevention">PublicAccessPrevention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.requesterPays">RequesterPays</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.rpo">Rpo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.uniformBucketLevelAccess">UniformBucketLevelAccess</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.storageBucket.StorageBucket.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.storageBucket.StorageBucket.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucket.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.storageBucket.StorageBucket.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.storageBucket.StorageBucket.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.storageBucket.StorageBucket.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.storageBucket.StorageBucket.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageBucket.StorageBucket.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageBucket.StorageBucket.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageBucket.StorageBucket.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageBucket.StorageBucket.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageBucket.StorageBucket.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageBucket.StorageBucket.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Autoclass`<sup>Required</sup> <a name="Autoclass" id="@cdktf/provider-google.storageBucket.StorageBucket.property.autoclass"></a>

```csharp
public StorageBucketAutoclassOutputReference Autoclass { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference">StorageBucketAutoclassOutputReference</a>

---

##### `Cors`<sup>Required</sup> <a name="Cors" id="@cdktf/provider-google.storageBucket.StorageBucket.property.cors"></a>

```csharp
public StorageBucketCorsList Cors { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList">StorageBucketCorsList</a>

---

##### `CustomPlacementConfig`<sup>Required</sup> <a name="CustomPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucket.property.customPlacementConfig"></a>

```csharp
public StorageBucketCustomPlacementConfigOutputReference CustomPlacementConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference">StorageBucketCustomPlacementConfigOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.storageBucket.StorageBucket.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktf/provider-google.storageBucket.StorageBucket.property.encryption"></a>

```csharp
public StorageBucketEncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference">StorageBucketEncryptionOutputReference</a>

---

##### `HierarchicalNamespace`<sup>Required</sup> <a name="HierarchicalNamespace" id="@cdktf/provider-google.storageBucket.StorageBucket.property.hierarchicalNamespace"></a>

```csharp
public StorageBucketHierarchicalNamespaceOutputReference HierarchicalNamespace { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference">StorageBucketHierarchicalNamespaceOutputReference</a>

---

##### `IpFilter`<sup>Required</sup> <a name="IpFilter" id="@cdktf/provider-google.storageBucket.StorageBucket.property.ipFilter"></a>

```csharp
public StorageBucketIpFilterOutputReference IpFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference">StorageBucketIpFilterOutputReference</a>

---

##### `LifecycleRule`<sup>Required</sup> <a name="LifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycleRule"></a>

```csharp
public StorageBucketLifecycleRuleList LifecycleRule { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList">StorageBucketLifecycleRuleList</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-google.storageBucket.StorageBucket.property.logging"></a>

```csharp
public StorageBucketLoggingOutputReference Logging { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference">StorageBucketLoggingOutputReference</a>

---

##### `ProjectNumber`<sup>Required</sup> <a name="ProjectNumber" id="@cdktf/provider-google.storageBucket.StorageBucket.property.projectNumber"></a>

```csharp
public double ProjectNumber { get; }
```

- *Type:* double

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.property.retentionPolicy"></a>

```csharp
public StorageBucketRetentionPolicyOutputReference RetentionPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference">StorageBucketRetentionPolicyOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.storageBucket.StorageBucket.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SoftDeletePolicy`<sup>Required</sup> <a name="SoftDeletePolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.property.softDeletePolicy"></a>

```csharp
public StorageBucketSoftDeletePolicyOutputReference SoftDeletePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference">StorageBucketSoftDeletePolicyOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.storageBucket.StorageBucket.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="@cdktf/provider-google.storageBucket.StorageBucket.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.storageBucket.StorageBucket.property.timeouts"></a>

```csharp
public StorageBucketTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference">StorageBucketTimeoutsOutputReference</a>

---

##### `Updated`<sup>Required</sup> <a name="Updated" id="@cdktf/provider-google.storageBucket.StorageBucket.property.updated"></a>

```csharp
public string Updated { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.storageBucket.StorageBucket.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Versioning`<sup>Required</sup> <a name="Versioning" id="@cdktf/provider-google.storageBucket.StorageBucket.property.versioning"></a>

```csharp
public StorageBucketVersioningOutputReference Versioning { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference">StorageBucketVersioningOutputReference</a>

---

##### `Website`<sup>Required</sup> <a name="Website" id="@cdktf/provider-google.storageBucket.StorageBucket.property.website"></a>

```csharp
public StorageBucketWebsiteOutputReference Website { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference">StorageBucketWebsiteOutputReference</a>

---

##### `AutoclassInput`<sup>Optional</sup> <a name="AutoclassInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.autoclassInput"></a>

```csharp
public StorageBucketAutoclass AutoclassInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a>

---

##### `CorsInput`<sup>Optional</sup> <a name="CorsInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.corsInput"></a>

```csharp
public object CorsInput { get; }
```

- *Type:* object

---

##### `CustomPlacementConfigInput`<sup>Optional</sup> <a name="CustomPlacementConfigInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.customPlacementConfigInput"></a>

```csharp
public StorageBucketCustomPlacementConfig CustomPlacementConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a>

---

##### `DefaultEventBasedHoldInput`<sup>Optional</sup> <a name="DefaultEventBasedHoldInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.defaultEventBasedHoldInput"></a>

```csharp
public object DefaultEventBasedHoldInput { get; }
```

- *Type:* object

---

##### `EnableObjectRetentionInput`<sup>Optional</sup> <a name="EnableObjectRetentionInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.enableObjectRetentionInput"></a>

```csharp
public object EnableObjectRetentionInput { get; }
```

- *Type:* object

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.encryptionInput"></a>

```csharp
public StorageBucketEncryption EncryptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a>

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.forceDestroyInput"></a>

```csharp
public object ForceDestroyInput { get; }
```

- *Type:* object

---

##### `HierarchicalNamespaceInput`<sup>Optional</sup> <a name="HierarchicalNamespaceInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.hierarchicalNamespaceInput"></a>

```csharp
public StorageBucketHierarchicalNamespace HierarchicalNamespaceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpFilterInput`<sup>Optional</sup> <a name="IpFilterInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.ipFilterInput"></a>

```csharp
public StorageBucketIpFilter IpFilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilter">StorageBucketIpFilter</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LifecycleRuleInput`<sup>Optional</sup> <a name="LifecycleRuleInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycleRuleInput"></a>

```csharp
public object LifecycleRuleInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.loggingInput"></a>

```csharp
public StorageBucketLogging LoggingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PublicAccessPreventionInput`<sup>Optional</sup> <a name="PublicAccessPreventionInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.publicAccessPreventionInput"></a>

```csharp
public string PublicAccessPreventionInput { get; }
```

- *Type:* string

---

##### `RequesterPaysInput`<sup>Optional</sup> <a name="RequesterPaysInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.requesterPaysInput"></a>

```csharp
public object RequesterPaysInput { get; }
```

- *Type:* object

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.retentionPolicyInput"></a>

```csharp
public StorageBucketRetentionPolicy RetentionPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a>

---

##### `RpoInput`<sup>Optional</sup> <a name="RpoInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.rpoInput"></a>

```csharp
public string RpoInput { get; }
```

- *Type:* string

---

##### `SoftDeletePolicyInput`<sup>Optional</sup> <a name="SoftDeletePolicyInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.softDeletePolicyInput"></a>

```csharp
public StorageBucketSoftDeletePolicy SoftDeletePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a>

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UniformBucketLevelAccessInput`<sup>Optional</sup> <a name="UniformBucketLevelAccessInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.uniformBucketLevelAccessInput"></a>

```csharp
public object UniformBucketLevelAccessInput { get; }
```

- *Type:* object

---

##### `VersioningInput`<sup>Optional</sup> <a name="VersioningInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.versioningInput"></a>

```csharp
public StorageBucketVersioning VersioningInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a>

---

##### `WebsiteInput`<sup>Optional</sup> <a name="WebsiteInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.websiteInput"></a>

```csharp
public StorageBucketWebsite WebsiteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a>

---

##### `DefaultEventBasedHold`<sup>Required</sup> <a name="DefaultEventBasedHold" id="@cdktf/provider-google.storageBucket.StorageBucket.property.defaultEventBasedHold"></a>

```csharp
public object DefaultEventBasedHold { get; }
```

- *Type:* object

---

##### `EnableObjectRetention`<sup>Required</sup> <a name="EnableObjectRetention" id="@cdktf/provider-google.storageBucket.StorageBucket.property.enableObjectRetention"></a>

```csharp
public object EnableObjectRetention { get; }
```

- *Type:* object

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-google.storageBucket.StorageBucket.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageBucket.StorageBucket.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.storageBucket.StorageBucket.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.storageBucket.StorageBucket.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.storageBucket.StorageBucket.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.storageBucket.StorageBucket.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PublicAccessPrevention`<sup>Required</sup> <a name="PublicAccessPrevention" id="@cdktf/provider-google.storageBucket.StorageBucket.property.publicAccessPrevention"></a>

```csharp
public string PublicAccessPrevention { get; }
```

- *Type:* string

---

##### `RequesterPays`<sup>Required</sup> <a name="RequesterPays" id="@cdktf/provider-google.storageBucket.StorageBucket.property.requesterPays"></a>

```csharp
public object RequesterPays { get; }
```

- *Type:* object

---

##### `Rpo`<sup>Required</sup> <a name="Rpo" id="@cdktf/provider-google.storageBucket.StorageBucket.property.rpo"></a>

```csharp
public string Rpo { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-google.storageBucket.StorageBucket.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `UniformBucketLevelAccess`<sup>Required</sup> <a name="UniformBucketLevelAccess" id="@cdktf/provider-google.storageBucket.StorageBucket.property.uniformBucketLevelAccess"></a>

```csharp
public object UniformBucketLevelAccess { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.storageBucket.StorageBucket.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBucketAutoclass <a name="StorageBucketAutoclass" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclass"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclass.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketAutoclass {
    object Enabled,
    string TerminalStorageClass = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass.property.enabled">Enabled</a></code> | <code>object</code> | While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass.property.terminalStorageClass">TerminalStorageClass</a></code> | <code>string</code> | The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclass.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#enabled StorageBucket#enabled}

---

##### `TerminalStorageClass`<sup>Optional</sup> <a name="TerminalStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclass.property.terminalStorageClass"></a>

```csharp
public string TerminalStorageClass { get; set; }
```

- *Type:* string

The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time.

Supported values include: NEARLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#terminal_storage_class StorageBucket#terminal_storage_class}

---

### StorageBucketConfig <a name="StorageBucketConfig" id="@cdktf/provider-google.storageBucket.StorageBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    StorageBucketAutoclass Autoclass = null,
    object Cors = null,
    StorageBucketCustomPlacementConfig CustomPlacementConfig = null,
    object DefaultEventBasedHold = null,
    object EnableObjectRetention = null,
    StorageBucketEncryption Encryption = null,
    object ForceDestroy = null,
    StorageBucketHierarchicalNamespace HierarchicalNamespace = null,
    string Id = null,
    StorageBucketIpFilter IpFilter = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    object LifecycleRule = null,
    StorageBucketLogging Logging = null,
    string Project = null,
    string PublicAccessPrevention = null,
    object RequesterPays = null,
    StorageBucketRetentionPolicy RetentionPolicy = null,
    string Rpo = null,
    StorageBucketSoftDeletePolicy SoftDeletePolicy = null,
    string StorageClass = null,
    StorageBucketTimeouts Timeouts = null,
    object UniformBucketLevelAccess = null,
    StorageBucketVersioning Versioning = null,
    StorageBucketWebsite Website = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.location">Location</a></code> | <code>string</code> | The Google Cloud Storage location or region. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.name">Name</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.autoclass">Autoclass</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a></code> | autoclass block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.cors">Cors</a></code> | <code>object</code> | cors block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.customPlacementConfig">CustomPlacementConfig</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a></code> | custom_placement_config block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.defaultEventBasedHold">DefaultEventBasedHold</a></code> | <code>object</code> | Whether or not to automatically apply an eventBasedHold to new objects added to the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.enableObjectRetention">EnableObjectRetention</a></code> | <code>object</code> | Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.encryption">Encryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | When deleting a bucket, this boolean option will delete all contained objects, or anywhereCaches (if any). |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.hierarchicalNamespace">HierarchicalNamespace</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a></code> | hierarchical_namespace block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#id StorageBucket#id}. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.ipFilter">IpFilter</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilter">StorageBucketIpFilter</a></code> | ip_filter block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A set of key/value label pairs to assign to the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.lifecycleRule">LifecycleRule</a></code> | <code>object</code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.publicAccessPrevention">PublicAccessPrevention</a></code> | <code>string</code> | Prevents public access to a bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.requesterPays">RequesterPays</a></code> | <code>object</code> | Enables Requester Pays on a storage bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.rpo">Rpo</a></code> | <code>string</code> | Specifies the RPO setting of bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.softDeletePolicy">SoftDeletePolicy</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a></code> | soft_delete_policy block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.storageClass">StorageClass</a></code> | <code>string</code> | The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.uniformBucketLevelAccess">UniformBucketLevelAccess</a></code> | <code>object</code> | Enables uniform bucket-level access on a bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.versioning">Versioning</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a></code> | versioning block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.website">Website</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a></code> | website block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The Google Cloud Storage location or region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#location StorageBucket#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#name StorageBucket#name}

---

##### `Autoclass`<sup>Optional</sup> <a name="Autoclass" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.autoclass"></a>

```csharp
public StorageBucketAutoclass Autoclass { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a>

autoclass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#autoclass StorageBucket#autoclass}

---

##### `Cors`<sup>Optional</sup> <a name="Cors" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.cors"></a>

```csharp
public object Cors { get; set; }
```

- *Type:* object

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#cors StorageBucket#cors}

---

##### `CustomPlacementConfig`<sup>Optional</sup> <a name="CustomPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.customPlacementConfig"></a>

```csharp
public StorageBucketCustomPlacementConfig CustomPlacementConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a>

custom_placement_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#custom_placement_config StorageBucket#custom_placement_config}

---

##### `DefaultEventBasedHold`<sup>Optional</sup> <a name="DefaultEventBasedHold" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.defaultEventBasedHold"></a>

```csharp
public object DefaultEventBasedHold { get; set; }
```

- *Type:* object

Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#default_event_based_hold StorageBucket#default_event_based_hold}

---

##### `EnableObjectRetention`<sup>Optional</sup> <a name="EnableObjectRetention" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.enableObjectRetention"></a>

```csharp
public object EnableObjectRetention { get; set; }
```

- *Type:* object

Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#enable_object_retention StorageBucket#enable_object_retention}

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.encryption"></a>

```csharp
public StorageBucketEncryption Encryption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#encryption StorageBucket#encryption}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; set; }
```

- *Type:* object

When deleting a bucket, this boolean option will delete all contained objects, or anywhereCaches (if any).

If you try to delete a bucket that contains objects or anywhereCaches, Terraform will fail that run, deleting anywhereCaches may take 80 minutes to complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#force_destroy StorageBucket#force_destroy}

---

##### `HierarchicalNamespace`<sup>Optional</sup> <a name="HierarchicalNamespace" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.hierarchicalNamespace"></a>

```csharp
public StorageBucketHierarchicalNamespace HierarchicalNamespace { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a>

hierarchical_namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#hierarchical_namespace StorageBucket#hierarchical_namespace}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#id StorageBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpFilter`<sup>Optional</sup> <a name="IpFilter" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.ipFilter"></a>

```csharp
public StorageBucketIpFilter IpFilter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilter">StorageBucketIpFilter</a>

ip_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#ip_filter StorageBucket#ip_filter}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A set of key/value label pairs to assign to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#labels StorageBucket#labels}

---

##### `LifecycleRule`<sup>Optional</sup> <a name="LifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.lifecycleRule"></a>

```csharp
public object LifecycleRule { get; set; }
```

- *Type:* object

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#lifecycle_rule StorageBucket#lifecycle_rule}

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.logging"></a>

```csharp
public StorageBucketLogging Logging { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#logging StorageBucket#logging}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#project StorageBucket#project}

---

##### `PublicAccessPrevention`<sup>Optional</sup> <a name="PublicAccessPrevention" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.publicAccessPrevention"></a>

```csharp
public string PublicAccessPrevention { get; set; }
```

- *Type:* string

Prevents public access to a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#public_access_prevention StorageBucket#public_access_prevention}

---

##### `RequesterPays`<sup>Optional</sup> <a name="RequesterPays" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.requesterPays"></a>

```csharp
public object RequesterPays { get; set; }
```

- *Type:* object

Enables Requester Pays on a storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#requester_pays StorageBucket#requester_pays}

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.retentionPolicy"></a>

```csharp
public StorageBucketRetentionPolicy RetentionPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#retention_policy StorageBucket#retention_policy}

---

##### `Rpo`<sup>Optional</sup> <a name="Rpo" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.rpo"></a>

```csharp
public string Rpo { get; set; }
```

- *Type:* string

Specifies the RPO setting of bucket.

If set 'ASYNC_TURBO', The Turbo Replication will be enabled for the dual-region bucket. Value 'DEFAULT' will set RPO setting to default. Turbo Replication is only for buckets in dual-regions.See the docs for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#rpo StorageBucket#rpo}

---

##### `SoftDeletePolicy`<sup>Optional</sup> <a name="SoftDeletePolicy" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.softDeletePolicy"></a>

```csharp
public StorageBucketSoftDeletePolicy SoftDeletePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a>

soft_delete_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#soft_delete_policy StorageBucket#soft_delete_policy}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#storage_class StorageBucket#storage_class}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.timeouts"></a>

```csharp
public StorageBucketTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#timeouts StorageBucket#timeouts}

---

##### `UniformBucketLevelAccess`<sup>Optional</sup> <a name="UniformBucketLevelAccess" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.uniformBucketLevelAccess"></a>

```csharp
public object UniformBucketLevelAccess { get; set; }
```

- *Type:* object

Enables uniform bucket-level access on a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#uniform_bucket_level_access StorageBucket#uniform_bucket_level_access}

---

##### `Versioning`<sup>Optional</sup> <a name="Versioning" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.versioning"></a>

```csharp
public StorageBucketVersioning Versioning { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#versioning StorageBucket#versioning}

---

##### `Website`<sup>Optional</sup> <a name="Website" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.website"></a>

```csharp
public StorageBucketWebsite Website { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#website StorageBucket#website}

---

### StorageBucketCors <a name="StorageBucketCors" id="@cdktf/provider-google.storageBucket.StorageBucketCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketCors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketCors {
    double MaxAgeSeconds = null,
    string[] Method = null,
    string[] Origin = null,
    string[] ResponseHeader = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCors.property.maxAgeSeconds">MaxAgeSeconds</a></code> | <code>double</code> | The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCors.property.method">Method</a></code> | <code>string[]</code> | The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method". |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCors.property.origin">Origin</a></code> | <code>string[]</code> | The list of Origins eligible to receive CORS response headers. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCors.property.responseHeader">ResponseHeader</a></code> | <code>string[]</code> | The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains. |

---

##### `MaxAgeSeconds`<sup>Optional</sup> <a name="MaxAgeSeconds" id="@cdktf/provider-google.storageBucket.StorageBucketCors.property.maxAgeSeconds"></a>

```csharp
public double MaxAgeSeconds { get; set; }
```

- *Type:* double

The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#max_age_seconds StorageBucket#max_age_seconds}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-google.storageBucket.StorageBucketCors.property.method"></a>

```csharp
public string[] Method { get; set; }
```

- *Type:* string[]

The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#method StorageBucket#method}

---

##### `Origin`<sup>Optional</sup> <a name="Origin" id="@cdktf/provider-google.storageBucket.StorageBucketCors.property.origin"></a>

```csharp
public string[] Origin { get; set; }
```

- *Type:* string[]

The list of Origins eligible to receive CORS response headers.

Note: "*" is permitted in the list of origins, and means "any Origin".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#origin StorageBucket#origin}

---

##### `ResponseHeader`<sup>Optional</sup> <a name="ResponseHeader" id="@cdktf/provider-google.storageBucket.StorageBucketCors.property.responseHeader"></a>

```csharp
public string[] ResponseHeader { get; set; }
```

- *Type:* string[]

The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#response_header StorageBucket#response_header}

---

### StorageBucketCustomPlacementConfig <a name="StorageBucketCustomPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketCustomPlacementConfig {
    string[] DataLocations
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig.property.dataLocations">DataLocations</a></code> | <code>string[]</code> | The list of individual regions that comprise a dual-region bucket. |

---

##### `DataLocations`<sup>Required</sup> <a name="DataLocations" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig.property.dataLocations"></a>

```csharp
public string[] DataLocations { get; set; }
```

- *Type:* string[]

The list of individual regions that comprise a dual-region bucket.

See the docs for a list of acceptable regions. Note: If any of the data_locations changes, it will recreate the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#data_locations StorageBucket#data_locations}

---

### StorageBucketEncryption <a name="StorageBucketEncryption" id="@cdktf/provider-google.storageBucket.StorageBucketEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketEncryption {
    string DefaultKmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption.property.defaultKmsKeyName">DefaultKmsKeyName</a></code> | <code>string</code> | A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified. |

---

##### `DefaultKmsKeyName`<sup>Required</sup> <a name="DefaultKmsKeyName" id="@cdktf/provider-google.storageBucket.StorageBucketEncryption.property.defaultKmsKeyName"></a>

```csharp
public string DefaultKmsKeyName { get; set; }
```

- *Type:* string

A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified.

You must pay attention to whether the crypto key is available in the location that this bucket is created in. See the docs for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#default_kms_key_name StorageBucket#default_kms_key_name}

---

### StorageBucketHierarchicalNamespace <a name="StorageBucketHierarchicalNamespace" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketHierarchicalNamespace {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace.property.enabled">Enabled</a></code> | <code>object</code> | Set this field true to organize bucket with logical file system structure. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Set this field true to organize bucket with logical file system structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#enabled StorageBucket#enabled}

---

### StorageBucketIpFilter <a name="StorageBucketIpFilter" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketIpFilter {
    string Mode,
    object AllowAllServiceAgentAccess = null,
    object AllowCrossOrgVpcs = null,
    StorageBucketIpFilterPublicNetworkSource PublicNetworkSource = null,
    object VpcNetworkSources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilter.property.mode">Mode</a></code> | <code>string</code> | The mode of the IP filter. Valid values are 'Enabled' and 'Disabled'. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilter.property.allowAllServiceAgentAccess">AllowAllServiceAgentAccess</a></code> | <code>object</code> | Whether to allow all service agents to access the bucket regardless of the IP filter configuration. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilter.property.allowCrossOrgVpcs">AllowCrossOrgVpcs</a></code> | <code>object</code> | Whether to allow cross-org VPCs in the bucket's IP filter configuration. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilter.property.publicNetworkSource">PublicNetworkSource</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSource">StorageBucketIpFilterPublicNetworkSource</a></code> | public_network_source block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilter.property.vpcNetworkSources">VpcNetworkSources</a></code> | <code>object</code> | vpc_network_sources block. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilter.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The mode of the IP filter. Valid values are 'Enabled' and 'Disabled'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#mode StorageBucket#mode}

---

##### `AllowAllServiceAgentAccess`<sup>Optional</sup> <a name="AllowAllServiceAgentAccess" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilter.property.allowAllServiceAgentAccess"></a>

```csharp
public object AllowAllServiceAgentAccess { get; set; }
```

- *Type:* object

Whether to allow all service agents to access the bucket regardless of the IP filter configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#allow_all_service_agent_access StorageBucket#allow_all_service_agent_access}

---

##### `AllowCrossOrgVpcs`<sup>Optional</sup> <a name="AllowCrossOrgVpcs" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilter.property.allowCrossOrgVpcs"></a>

```csharp
public object AllowCrossOrgVpcs { get; set; }
```

- *Type:* object

Whether to allow cross-org VPCs in the bucket's IP filter configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#allow_cross_org_vpcs StorageBucket#allow_cross_org_vpcs}

---

##### `PublicNetworkSource`<sup>Optional</sup> <a name="PublicNetworkSource" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilter.property.publicNetworkSource"></a>

```csharp
public StorageBucketIpFilterPublicNetworkSource PublicNetworkSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSource">StorageBucketIpFilterPublicNetworkSource</a>

public_network_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#public_network_source StorageBucket#public_network_source}

---

##### `VpcNetworkSources`<sup>Optional</sup> <a name="VpcNetworkSources" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilter.property.vpcNetworkSources"></a>

```csharp
public object VpcNetworkSources { get; set; }
```

- *Type:* object

vpc_network_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#vpc_network_sources StorageBucket#vpc_network_sources}

---

### StorageBucketIpFilterPublicNetworkSource <a name="StorageBucketIpFilterPublicNetworkSource" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketIpFilterPublicNetworkSource {
    string[] AllowedIpCidrRanges
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSource.property.allowedIpCidrRanges">AllowedIpCidrRanges</a></code> | <code>string[]</code> | The list of public IPv4, IPv6 cidr ranges that are allowed to access the bucket. |

---

##### `AllowedIpCidrRanges`<sup>Required</sup> <a name="AllowedIpCidrRanges" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSource.property.allowedIpCidrRanges"></a>

```csharp
public string[] AllowedIpCidrRanges { get; set; }
```

- *Type:* string[]

The list of public IPv4, IPv6 cidr ranges that are allowed to access the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#allowed_ip_cidr_ranges StorageBucket#allowed_ip_cidr_ranges}

---

### StorageBucketIpFilterVpcNetworkSources <a name="StorageBucketIpFilterVpcNetworkSources" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketIpFilterVpcNetworkSources {
    string[] AllowedIpCidrRanges,
    string Network
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSources.property.allowedIpCidrRanges">AllowedIpCidrRanges</a></code> | <code>string[]</code> | The list of public or private IPv4 and IPv6 CIDR ranges that can access the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSources.property.network">Network</a></code> | <code>string</code> | Name of the network. Format: projects/{PROJECT_ID}/global/networks/{NETWORK_NAME}. |

---

##### `AllowedIpCidrRanges`<sup>Required</sup> <a name="AllowedIpCidrRanges" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSources.property.allowedIpCidrRanges"></a>

```csharp
public string[] AllowedIpCidrRanges { get; set; }
```

- *Type:* string[]

The list of public or private IPv4 and IPv6 CIDR ranges that can access the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#allowed_ip_cidr_ranges StorageBucket#allowed_ip_cidr_ranges}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSources.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Name of the network. Format: projects/{PROJECT_ID}/global/networks/{NETWORK_NAME}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#network StorageBucket#network}

---

### StorageBucketLifecycleRule <a name="StorageBucketLifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketLifecycleRule {
    StorageBucketLifecycleRuleAction Action,
    StorageBucketLifecycleRuleCondition Condition
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a></code> | condition block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.property.action"></a>

```csharp
public StorageBucketLifecycleRuleAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#action StorageBucket#action}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.property.condition"></a>

```csharp
public StorageBucketLifecycleRuleCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#condition StorageBucket#condition}

---

### StorageBucketLifecycleRuleAction <a name="StorageBucketLifecycleRuleAction" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketLifecycleRuleAction {
    string Type,
    string StorageClass = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.property.type">Type</a></code> | <code>string</code> | The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.property.storageClass">StorageClass</a></code> | <code>string</code> | The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#type StorageBucket#type}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#storage_class StorageBucket#storage_class}

---

### StorageBucketLifecycleRuleCondition <a name="StorageBucketLifecycleRuleCondition" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketLifecycleRuleCondition {
    double Age = null,
    string CreatedBefore = null,
    string CustomTimeBefore = null,
    double DaysSinceCustomTime = null,
    double DaysSinceNoncurrentTime = null,
    string[] MatchesPrefix = null,
    string[] MatchesStorageClass = null,
    string[] MatchesSuffix = null,
    string NoncurrentTimeBefore = null,
    double NumNewerVersions = null,
    object SendAgeIfZero = null,
    object SendDaysSinceCustomTimeIfZero = null,
    object SendDaysSinceNoncurrentTimeIfZero = null,
    object SendNumNewerVersionsIfZero = null,
    string WithState = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.age">Age</a></code> | <code>double</code> | Minimum age of an object in days to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.createdBefore">CreatedBefore</a></code> | <code>string</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.customTimeBefore">CustomTimeBefore</a></code> | <code>string</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.daysSinceCustomTime">DaysSinceCustomTime</a></code> | <code>double</code> | Number of days elapsed since the user-specified timestamp set on an object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.daysSinceNoncurrentTime">DaysSinceNoncurrentTime</a></code> | <code>double</code> | Number of days elapsed since the noncurrent timestamp of an object. This 										condition is relevant only for versioned objects. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesPrefix">MatchesPrefix</a></code> | <code>string[]</code> | One or more matching name prefixes to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesStorageClass">MatchesStorageClass</a></code> | <code>string[]</code> | Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesSuffix">MatchesSuffix</a></code> | <code>string[]</code> | One or more matching name suffixes to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.noncurrentTimeBefore">NoncurrentTimeBefore</a></code> | <code>string</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.numNewerVersions">NumNewerVersions</a></code> | <code>double</code> | Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendAgeIfZero">SendAgeIfZero</a></code> | <code>object</code> | While set true, age value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendDaysSinceCustomTimeIfZero">SendDaysSinceCustomTimeIfZero</a></code> | <code>object</code> | While set true, days_since_custom_time value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendDaysSinceNoncurrentTimeIfZero">SendDaysSinceNoncurrentTimeIfZero</a></code> | <code>object</code> | While set true, days_since_noncurrent_time value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendNumNewerVersionsIfZero">SendNumNewerVersionsIfZero</a></code> | <code>object</code> | While set true, num_newer_versions value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.withState">WithState</a></code> | <code>string</code> | Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY". |

---

##### `Age`<sup>Optional</sup> <a name="Age" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.age"></a>

```csharp
public double Age { get; set; }
```

- *Type:* double

Minimum age of an object in days to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#age StorageBucket#age}

---

##### `CreatedBefore`<sup>Optional</sup> <a name="CreatedBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.createdBefore"></a>

```csharp
public string CreatedBefore { get; set; }
```

- *Type:* string

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#created_before StorageBucket#created_before}

---

##### `CustomTimeBefore`<sup>Optional</sup> <a name="CustomTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.customTimeBefore"></a>

```csharp
public string CustomTimeBefore { get; set; }
```

- *Type:* string

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#custom_time_before StorageBucket#custom_time_before}

---

##### `DaysSinceCustomTime`<sup>Optional</sup> <a name="DaysSinceCustomTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.daysSinceCustomTime"></a>

```csharp
public double DaysSinceCustomTime { get; set; }
```

- *Type:* double

Number of days elapsed since the user-specified timestamp set on an object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#days_since_custom_time StorageBucket#days_since_custom_time}

---

##### `DaysSinceNoncurrentTime`<sup>Optional</sup> <a name="DaysSinceNoncurrentTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.daysSinceNoncurrentTime"></a>

```csharp
public double DaysSinceNoncurrentTime { get; set; }
```

- *Type:* double

Number of days elapsed since the noncurrent timestamp of an object. This 										condition is relevant only for versioned objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#days_since_noncurrent_time StorageBucket#days_since_noncurrent_time}

---

##### `MatchesPrefix`<sup>Optional</sup> <a name="MatchesPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesPrefix"></a>

```csharp
public string[] MatchesPrefix { get; set; }
```

- *Type:* string[]

One or more matching name prefixes to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#matches_prefix StorageBucket#matches_prefix}

---

##### `MatchesStorageClass`<sup>Optional</sup> <a name="MatchesStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesStorageClass"></a>

```csharp
public string[] MatchesStorageClass { get; set; }
```

- *Type:* string[]

Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#matches_storage_class StorageBucket#matches_storage_class}

---

##### `MatchesSuffix`<sup>Optional</sup> <a name="MatchesSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesSuffix"></a>

```csharp
public string[] MatchesSuffix { get; set; }
```

- *Type:* string[]

One or more matching name suffixes to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#matches_suffix StorageBucket#matches_suffix}

---

##### `NoncurrentTimeBefore`<sup>Optional</sup> <a name="NoncurrentTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.noncurrentTimeBefore"></a>

```csharp
public string NoncurrentTimeBefore { get; set; }
```

- *Type:* string

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#noncurrent_time_before StorageBucket#noncurrent_time_before}

---

##### `NumNewerVersions`<sup>Optional</sup> <a name="NumNewerVersions" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.numNewerVersions"></a>

```csharp
public double NumNewerVersions { get; set; }
```

- *Type:* double

Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#num_newer_versions StorageBucket#num_newer_versions}

---

##### `SendAgeIfZero`<sup>Optional</sup> <a name="SendAgeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendAgeIfZero"></a>

```csharp
public object SendAgeIfZero { get; set; }
```

- *Type:* object

While set true, age value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the age field. It can be used alone or together with age.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#send_age_if_zero StorageBucket#send_age_if_zero}

---

##### `SendDaysSinceCustomTimeIfZero`<sup>Optional</sup> <a name="SendDaysSinceCustomTimeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendDaysSinceCustomTimeIfZero"></a>

```csharp
public object SendDaysSinceCustomTimeIfZero { get; set; }
```

- *Type:* object

While set true, days_since_custom_time value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the days_since_custom_time field. It can be used alone or together with days_since_custom_time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#send_days_since_custom_time_if_zero StorageBucket#send_days_since_custom_time_if_zero}

---

##### `SendDaysSinceNoncurrentTimeIfZero`<sup>Optional</sup> <a name="SendDaysSinceNoncurrentTimeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendDaysSinceNoncurrentTimeIfZero"></a>

```csharp
public object SendDaysSinceNoncurrentTimeIfZero { get; set; }
```

- *Type:* object

While set true, days_since_noncurrent_time value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the days_since_noncurrent_time field. It can be used alone or together with days_since_noncurrent_time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#send_days_since_noncurrent_time_if_zero StorageBucket#send_days_since_noncurrent_time_if_zero}

---

##### `SendNumNewerVersionsIfZero`<sup>Optional</sup> <a name="SendNumNewerVersionsIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendNumNewerVersionsIfZero"></a>

```csharp
public object SendNumNewerVersionsIfZero { get; set; }
```

- *Type:* object

While set true, num_newer_versions value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the num_newer_versions field. It can be used alone or together with num_newer_versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#send_num_newer_versions_if_zero StorageBucket#send_num_newer_versions_if_zero}

---

##### `WithState`<sup>Optional</sup> <a name="WithState" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.withState"></a>

```csharp
public string WithState { get; set; }
```

- *Type:* string

Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#with_state StorageBucket#with_state}

---

### StorageBucketLogging <a name="StorageBucketLogging" id="@cdktf/provider-google.storageBucket.StorageBucketLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketLogging.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketLogging {
    string LogBucket,
    string LogObjectPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging.property.logBucket">LogBucket</a></code> | <code>string</code> | The bucket that will receive log objects. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging.property.logObjectPrefix">LogObjectPrefix</a></code> | <code>string</code> | The object prefix for log objects. |

---

##### `LogBucket`<sup>Required</sup> <a name="LogBucket" id="@cdktf/provider-google.storageBucket.StorageBucketLogging.property.logBucket"></a>

```csharp
public string LogBucket { get; set; }
```

- *Type:* string

The bucket that will receive log objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#log_bucket StorageBucket#log_bucket}

---

##### `LogObjectPrefix`<sup>Optional</sup> <a name="LogObjectPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLogging.property.logObjectPrefix"></a>

```csharp
public string LogObjectPrefix { get; set; }
```

- *Type:* string

The object prefix for log objects.

If it's not provided, by default Google Cloud Storage sets this to this bucket's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#log_object_prefix StorageBucket#log_object_prefix}

---

### StorageBucketRetentionPolicy <a name="StorageBucketRetentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketRetentionPolicy {
    double RetentionPeriod,
    object IsLocked = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.property.retentionPeriod">RetentionPeriod</a></code> | <code>double</code> | The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.property.isLocked">IsLocked</a></code> | <code>object</code> | If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy. |

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.property.retentionPeriod"></a>

```csharp
public double RetentionPeriod { get; set; }
```

- *Type:* double

The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived.

The value must be less than 3,155,760,000 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#retention_period StorageBucket#retention_period}

---

##### `IsLocked`<sup>Optional</sup> <a name="IsLocked" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.property.isLocked"></a>

```csharp
public object IsLocked { get; set; }
```

- *Type:* object

If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy.

Caution: Locking a bucket is an irreversible action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#is_locked StorageBucket#is_locked}

---

### StorageBucketSoftDeletePolicy <a name="StorageBucketSoftDeletePolicy" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketSoftDeletePolicy {
    double RetentionDurationSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy.property.retentionDurationSeconds">RetentionDurationSeconds</a></code> | <code>double</code> | The duration in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted. |

---

##### `RetentionDurationSeconds`<sup>Optional</sup> <a name="RetentionDurationSeconds" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy.property.retentionDurationSeconds"></a>

```csharp
public double RetentionDurationSeconds { get; set; }
```

- *Type:* double

The duration in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted.

Default value is 604800.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#retention_duration_seconds StorageBucket#retention_duration_seconds}

---

### StorageBucketTimeouts <a name="StorageBucketTimeouts" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketTimeouts {
    string Create = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#create StorageBucket#create}. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#read StorageBucket#read}. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#update StorageBucket#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#create StorageBucket#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#read StorageBucket#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#update StorageBucket#update}.

---

### StorageBucketVersioning <a name="StorageBucketVersioning" id="@cdktf/provider-google.storageBucket.StorageBucketVersioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketVersioning.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketVersioning {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning.property.enabled">Enabled</a></code> | <code>object</code> | While set to true, versioning is fully enabled for this bucket. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.storageBucket.StorageBucketVersioning.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

While set to true, versioning is fully enabled for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#enabled StorageBucket#enabled}

---

### StorageBucketWebsite <a name="StorageBucketWebsite" id="@cdktf/provider-google.storageBucket.StorageBucketWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketWebsite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketWebsite {
    string MainPageSuffix = null,
    string NotFoundPage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite.property.mainPageSuffix">MainPageSuffix</a></code> | <code>string</code> | Behaves as the bucket's directory index where missing objects are treated as potential directories. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite.property.notFoundPage">NotFoundPage</a></code> | <code>string</code> | The custom object to return when a requested resource is not found. |

---

##### `MainPageSuffix`<sup>Optional</sup> <a name="MainPageSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketWebsite.property.mainPageSuffix"></a>

```csharp
public string MainPageSuffix { get; set; }
```

- *Type:* string

Behaves as the bucket's directory index where missing objects are treated as potential directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#main_page_suffix StorageBucket#main_page_suffix}

---

##### `NotFoundPage`<sup>Optional</sup> <a name="NotFoundPage" id="@cdktf/provider-google.storageBucket.StorageBucketWebsite.property.notFoundPage"></a>

```csharp
public string NotFoundPage { get; set; }
```

- *Type:* string

The custom object to return when a requested resource is not found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_bucket#not_found_page StorageBucket#not_found_page}

---

## Classes <a name="Classes" id="Classes"></a>

### StorageBucketAutoclassOutputReference <a name="StorageBucketAutoclassOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketAutoclassOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resetTerminalStorageClass">ResetTerminalStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTerminalStorageClass` <a name="ResetTerminalStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resetTerminalStorageClass"></a>

```csharp
private void ResetTerminalStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.terminalStorageClassInput">TerminalStorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.terminalStorageClass">TerminalStorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `TerminalStorageClassInput`<sup>Optional</sup> <a name="TerminalStorageClassInput" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.terminalStorageClassInput"></a>

```csharp
public string TerminalStorageClassInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `TerminalStorageClass`<sup>Required</sup> <a name="TerminalStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.terminalStorageClass"></a>

```csharp
public string TerminalStorageClass { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.internalValue"></a>

```csharp
public StorageBucketAutoclass InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a>

---


### StorageBucketCorsList <a name="StorageBucketCorsList" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketCorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.get"></a>

```csharp
private StorageBucketCorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageBucketCorsOutputReference <a name="StorageBucketCorsOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketCorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetMaxAgeSeconds">ResetMaxAgeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetOrigin">ResetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetResponseHeader">ResetResponseHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxAgeSeconds` <a name="ResetMaxAgeSeconds" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetMaxAgeSeconds"></a>

```csharp
private void ResetMaxAgeSeconds()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetOrigin` <a name="ResetOrigin" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetOrigin"></a>

```csharp
private void ResetOrigin()
```

##### `ResetResponseHeader` <a name="ResetResponseHeader" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetResponseHeader"></a>

```csharp
private void ResetResponseHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.maxAgeSecondsInput">MaxAgeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.methodInput">MethodInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.originInput">OriginInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.responseHeaderInput">ResponseHeaderInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.maxAgeSeconds">MaxAgeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.method">Method</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.origin">Origin</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.responseHeader">ResponseHeader</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxAgeSecondsInput`<sup>Optional</sup> <a name="MaxAgeSecondsInput" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.maxAgeSecondsInput"></a>

```csharp
public double MaxAgeSecondsInput { get; }
```

- *Type:* double

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.methodInput"></a>

```csharp
public string[] MethodInput { get; }
```

- *Type:* string[]

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.originInput"></a>

```csharp
public string[] OriginInput { get; }
```

- *Type:* string[]

---

##### `ResponseHeaderInput`<sup>Optional</sup> <a name="ResponseHeaderInput" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.responseHeaderInput"></a>

```csharp
public string[] ResponseHeaderInput { get; }
```

- *Type:* string[]

---

##### `MaxAgeSeconds`<sup>Required</sup> <a name="MaxAgeSeconds" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.maxAgeSeconds"></a>

```csharp
public double MaxAgeSeconds { get; }
```

- *Type:* double

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.method"></a>

```csharp
public string[] Method { get; }
```

- *Type:* string[]

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.origin"></a>

```csharp
public string[] Origin { get; }
```

- *Type:* string[]

---

##### `ResponseHeader`<sup>Required</sup> <a name="ResponseHeader" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.responseHeader"></a>

```csharp
public string[] ResponseHeader { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageBucketCustomPlacementConfigOutputReference <a name="StorageBucketCustomPlacementConfigOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketCustomPlacementConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.dataLocationsInput">DataLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.dataLocations">DataLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataLocationsInput`<sup>Optional</sup> <a name="DataLocationsInput" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.dataLocationsInput"></a>

```csharp
public string[] DataLocationsInput { get; }
```

- *Type:* string[]

---

##### `DataLocations`<sup>Required</sup> <a name="DataLocations" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.dataLocations"></a>

```csharp
public string[] DataLocations { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.internalValue"></a>

```csharp
public StorageBucketCustomPlacementConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a>

---


### StorageBucketEncryptionOutputReference <a name="StorageBucketEncryptionOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.defaultKmsKeyNameInput">DefaultKmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.defaultKmsKeyName">DefaultKmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultKmsKeyNameInput`<sup>Optional</sup> <a name="DefaultKmsKeyNameInput" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.defaultKmsKeyNameInput"></a>

```csharp
public string DefaultKmsKeyNameInput { get; }
```

- *Type:* string

---

##### `DefaultKmsKeyName`<sup>Required</sup> <a name="DefaultKmsKeyName" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.defaultKmsKeyName"></a>

```csharp
public string DefaultKmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.internalValue"></a>

```csharp
public StorageBucketEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a>

---


### StorageBucketHierarchicalNamespaceOutputReference <a name="StorageBucketHierarchicalNamespaceOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketHierarchicalNamespaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.internalValue"></a>

```csharp
public StorageBucketHierarchicalNamespace InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a>

---


### StorageBucketIpFilterOutputReference <a name="StorageBucketIpFilterOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketIpFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.putPublicNetworkSource">PutPublicNetworkSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.putVpcNetworkSources">PutVpcNetworkSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.resetAllowAllServiceAgentAccess">ResetAllowAllServiceAgentAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.resetAllowCrossOrgVpcs">ResetAllowCrossOrgVpcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.resetPublicNetworkSource">ResetPublicNetworkSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.resetVpcNetworkSources">ResetVpcNetworkSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublicNetworkSource` <a name="PutPublicNetworkSource" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.putPublicNetworkSource"></a>

```csharp
private void PutPublicNetworkSource(StorageBucketIpFilterPublicNetworkSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.putPublicNetworkSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSource">StorageBucketIpFilterPublicNetworkSource</a>

---

##### `PutVpcNetworkSources` <a name="PutVpcNetworkSources" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.putVpcNetworkSources"></a>

```csharp
private void PutVpcNetworkSources(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.putVpcNetworkSources.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowAllServiceAgentAccess` <a name="ResetAllowAllServiceAgentAccess" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.resetAllowAllServiceAgentAccess"></a>

```csharp
private void ResetAllowAllServiceAgentAccess()
```

##### `ResetAllowCrossOrgVpcs` <a name="ResetAllowCrossOrgVpcs" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.resetAllowCrossOrgVpcs"></a>

```csharp
private void ResetAllowCrossOrgVpcs()
```

##### `ResetPublicNetworkSource` <a name="ResetPublicNetworkSource" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.resetPublicNetworkSource"></a>

```csharp
private void ResetPublicNetworkSource()
```

##### `ResetVpcNetworkSources` <a name="ResetVpcNetworkSources" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.resetVpcNetworkSources"></a>

```csharp
private void ResetVpcNetworkSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.publicNetworkSource">PublicNetworkSource</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference">StorageBucketIpFilterPublicNetworkSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.vpcNetworkSources">VpcNetworkSources</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList">StorageBucketIpFilterVpcNetworkSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.allowAllServiceAgentAccessInput">AllowAllServiceAgentAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.allowCrossOrgVpcsInput">AllowCrossOrgVpcsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.publicNetworkSourceInput">PublicNetworkSourceInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSource">StorageBucketIpFilterPublicNetworkSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.vpcNetworkSourcesInput">VpcNetworkSourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.allowAllServiceAgentAccess">AllowAllServiceAgentAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.allowCrossOrgVpcs">AllowCrossOrgVpcs</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilter">StorageBucketIpFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicNetworkSource`<sup>Required</sup> <a name="PublicNetworkSource" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.publicNetworkSource"></a>

```csharp
public StorageBucketIpFilterPublicNetworkSourceOutputReference PublicNetworkSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference">StorageBucketIpFilterPublicNetworkSourceOutputReference</a>

---

##### `VpcNetworkSources`<sup>Required</sup> <a name="VpcNetworkSources" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.vpcNetworkSources"></a>

```csharp
public StorageBucketIpFilterVpcNetworkSourcesList VpcNetworkSources { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList">StorageBucketIpFilterVpcNetworkSourcesList</a>

---

##### `AllowAllServiceAgentAccessInput`<sup>Optional</sup> <a name="AllowAllServiceAgentAccessInput" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.allowAllServiceAgentAccessInput"></a>

```csharp
public object AllowAllServiceAgentAccessInput { get; }
```

- *Type:* object

---

##### `AllowCrossOrgVpcsInput`<sup>Optional</sup> <a name="AllowCrossOrgVpcsInput" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.allowCrossOrgVpcsInput"></a>

```csharp
public object AllowCrossOrgVpcsInput { get; }
```

- *Type:* object

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `PublicNetworkSourceInput`<sup>Optional</sup> <a name="PublicNetworkSourceInput" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.publicNetworkSourceInput"></a>

```csharp
public StorageBucketIpFilterPublicNetworkSource PublicNetworkSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSource">StorageBucketIpFilterPublicNetworkSource</a>

---

##### `VpcNetworkSourcesInput`<sup>Optional</sup> <a name="VpcNetworkSourcesInput" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.vpcNetworkSourcesInput"></a>

```csharp
public object VpcNetworkSourcesInput { get; }
```

- *Type:* object

---

##### `AllowAllServiceAgentAccess`<sup>Required</sup> <a name="AllowAllServiceAgentAccess" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.allowAllServiceAgentAccess"></a>

```csharp
public object AllowAllServiceAgentAccess { get; }
```

- *Type:* object

---

##### `AllowCrossOrgVpcs`<sup>Required</sup> <a name="AllowCrossOrgVpcs" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.allowCrossOrgVpcs"></a>

```csharp
public object AllowCrossOrgVpcs { get; }
```

- *Type:* object

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterOutputReference.property.internalValue"></a>

```csharp
public StorageBucketIpFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilter">StorageBucketIpFilter</a>

---


### StorageBucketIpFilterPublicNetworkSourceOutputReference <a name="StorageBucketIpFilterPublicNetworkSourceOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketIpFilterPublicNetworkSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.property.allowedIpCidrRangesInput">AllowedIpCidrRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.property.allowedIpCidrRanges">AllowedIpCidrRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSource">StorageBucketIpFilterPublicNetworkSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedIpCidrRangesInput`<sup>Optional</sup> <a name="AllowedIpCidrRangesInput" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.property.allowedIpCidrRangesInput"></a>

```csharp
public string[] AllowedIpCidrRangesInput { get; }
```

- *Type:* string[]

---

##### `AllowedIpCidrRanges`<sup>Required</sup> <a name="AllowedIpCidrRanges" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.property.allowedIpCidrRanges"></a>

```csharp
public string[] AllowedIpCidrRanges { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSourceOutputReference.property.internalValue"></a>

```csharp
public StorageBucketIpFilterPublicNetworkSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterPublicNetworkSource">StorageBucketIpFilterPublicNetworkSource</a>

---


### StorageBucketIpFilterVpcNetworkSourcesList <a name="StorageBucketIpFilterVpcNetworkSourcesList" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketIpFilterVpcNetworkSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.get"></a>

```csharp
private StorageBucketIpFilterVpcNetworkSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageBucketIpFilterVpcNetworkSourcesOutputReference <a name="StorageBucketIpFilterVpcNetworkSourcesOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketIpFilterVpcNetworkSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.property.allowedIpCidrRangesInput">AllowedIpCidrRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.property.allowedIpCidrRanges">AllowedIpCidrRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedIpCidrRangesInput`<sup>Optional</sup> <a name="AllowedIpCidrRangesInput" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.property.allowedIpCidrRangesInput"></a>

```csharp
public string[] AllowedIpCidrRangesInput { get; }
```

- *Type:* string[]

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `AllowedIpCidrRanges`<sup>Required</sup> <a name="AllowedIpCidrRanges" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.property.allowedIpCidrRanges"></a>

```csharp
public string[] AllowedIpCidrRanges { get; }
```

- *Type:* string[]

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketIpFilterVpcNetworkSourcesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageBucketLifecycleRuleActionOutputReference <a name="StorageBucketLifecycleRuleActionOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketLifecycleRuleActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resetStorageClass">ResetStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.internalValue"></a>

```csharp
public StorageBucketLifecycleRuleAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a>

---


### StorageBucketLifecycleRuleConditionOutputReference <a name="StorageBucketLifecycleRuleConditionOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketLifecycleRuleConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetAge">ResetAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetCreatedBefore">ResetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetCustomTimeBefore">ResetCustomTimeBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceCustomTime">ResetDaysSinceCustomTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceNoncurrentTime">ResetDaysSinceNoncurrentTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesPrefix">ResetMatchesPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesStorageClass">ResetMatchesStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesSuffix">ResetMatchesSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetNoncurrentTimeBefore">ResetNoncurrentTimeBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetNumNewerVersions">ResetNumNewerVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendAgeIfZero">ResetSendAgeIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceCustomTimeIfZero">ResetSendDaysSinceCustomTimeIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceNoncurrentTimeIfZero">ResetSendDaysSinceNoncurrentTimeIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendNumNewerVersionsIfZero">ResetSendNumNewerVersionsIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetWithState">ResetWithState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAge` <a name="ResetAge" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetAge"></a>

```csharp
private void ResetAge()
```

##### `ResetCreatedBefore` <a name="ResetCreatedBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetCreatedBefore"></a>

```csharp
private void ResetCreatedBefore()
```

##### `ResetCustomTimeBefore` <a name="ResetCustomTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetCustomTimeBefore"></a>

```csharp
private void ResetCustomTimeBefore()
```

##### `ResetDaysSinceCustomTime` <a name="ResetDaysSinceCustomTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceCustomTime"></a>

```csharp
private void ResetDaysSinceCustomTime()
```

##### `ResetDaysSinceNoncurrentTime` <a name="ResetDaysSinceNoncurrentTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceNoncurrentTime"></a>

```csharp
private void ResetDaysSinceNoncurrentTime()
```

##### `ResetMatchesPrefix` <a name="ResetMatchesPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesPrefix"></a>

```csharp
private void ResetMatchesPrefix()
```

##### `ResetMatchesStorageClass` <a name="ResetMatchesStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesStorageClass"></a>

```csharp
private void ResetMatchesStorageClass()
```

##### `ResetMatchesSuffix` <a name="ResetMatchesSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesSuffix"></a>

```csharp
private void ResetMatchesSuffix()
```

##### `ResetNoncurrentTimeBefore` <a name="ResetNoncurrentTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetNoncurrentTimeBefore"></a>

```csharp
private void ResetNoncurrentTimeBefore()
```

##### `ResetNumNewerVersions` <a name="ResetNumNewerVersions" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetNumNewerVersions"></a>

```csharp
private void ResetNumNewerVersions()
```

##### `ResetSendAgeIfZero` <a name="ResetSendAgeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendAgeIfZero"></a>

```csharp
private void ResetSendAgeIfZero()
```

##### `ResetSendDaysSinceCustomTimeIfZero` <a name="ResetSendDaysSinceCustomTimeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceCustomTimeIfZero"></a>

```csharp
private void ResetSendDaysSinceCustomTimeIfZero()
```

##### `ResetSendDaysSinceNoncurrentTimeIfZero` <a name="ResetSendDaysSinceNoncurrentTimeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceNoncurrentTimeIfZero"></a>

```csharp
private void ResetSendDaysSinceNoncurrentTimeIfZero()
```

##### `ResetSendNumNewerVersionsIfZero` <a name="ResetSendNumNewerVersionsIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendNumNewerVersionsIfZero"></a>

```csharp
private void ResetSendNumNewerVersionsIfZero()
```

##### `ResetWithState` <a name="ResetWithState" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetWithState"></a>

```csharp
private void ResetWithState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.ageInput">AgeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.createdBeforeInput">CreatedBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.customTimeBeforeInput">CustomTimeBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTimeInput">DaysSinceCustomTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTimeInput">DaysSinceNoncurrentTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefixInput">MatchesPrefixInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClassInput">MatchesStorageClassInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffixInput">MatchesSuffixInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBeforeInput">NoncurrentTimeBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersionsInput">NumNewerVersionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZeroInput">SendAgeIfZeroInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZeroInput">SendDaysSinceCustomTimeIfZeroInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZeroInput">SendDaysSinceNoncurrentTimeIfZeroInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZeroInput">SendNumNewerVersionsIfZeroInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.withStateInput">WithStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.age">Age</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.createdBefore">CreatedBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.customTimeBefore">CustomTimeBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTime">DaysSinceCustomTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTime">DaysSinceNoncurrentTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefix">MatchesPrefix</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClass">MatchesStorageClass</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffix">MatchesSuffix</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBefore">NoncurrentTimeBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersions">NumNewerVersions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZero">SendAgeIfZero</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZero">SendDaysSinceCustomTimeIfZero</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZero">SendDaysSinceNoncurrentTimeIfZero</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZero">SendNumNewerVersionsIfZero</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.withState">WithState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgeInput`<sup>Optional</sup> <a name="AgeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.ageInput"></a>

```csharp
public double AgeInput { get; }
```

- *Type:* double

---

##### `CreatedBeforeInput`<sup>Optional</sup> <a name="CreatedBeforeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.createdBeforeInput"></a>

```csharp
public string CreatedBeforeInput { get; }
```

- *Type:* string

---

##### `CustomTimeBeforeInput`<sup>Optional</sup> <a name="CustomTimeBeforeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.customTimeBeforeInput"></a>

```csharp
public string CustomTimeBeforeInput { get; }
```

- *Type:* string

---

##### `DaysSinceCustomTimeInput`<sup>Optional</sup> <a name="DaysSinceCustomTimeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTimeInput"></a>

```csharp
public double DaysSinceCustomTimeInput { get; }
```

- *Type:* double

---

##### `DaysSinceNoncurrentTimeInput`<sup>Optional</sup> <a name="DaysSinceNoncurrentTimeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTimeInput"></a>

```csharp
public double DaysSinceNoncurrentTimeInput { get; }
```

- *Type:* double

---

##### `MatchesPrefixInput`<sup>Optional</sup> <a name="MatchesPrefixInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefixInput"></a>

```csharp
public string[] MatchesPrefixInput { get; }
```

- *Type:* string[]

---

##### `MatchesStorageClassInput`<sup>Optional</sup> <a name="MatchesStorageClassInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClassInput"></a>

```csharp
public string[] MatchesStorageClassInput { get; }
```

- *Type:* string[]

---

##### `MatchesSuffixInput`<sup>Optional</sup> <a name="MatchesSuffixInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffixInput"></a>

```csharp
public string[] MatchesSuffixInput { get; }
```

- *Type:* string[]

---

##### `NoncurrentTimeBeforeInput`<sup>Optional</sup> <a name="NoncurrentTimeBeforeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBeforeInput"></a>

```csharp
public string NoncurrentTimeBeforeInput { get; }
```

- *Type:* string

---

##### `NumNewerVersionsInput`<sup>Optional</sup> <a name="NumNewerVersionsInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersionsInput"></a>

```csharp
public double NumNewerVersionsInput { get; }
```

- *Type:* double

---

##### `SendAgeIfZeroInput`<sup>Optional</sup> <a name="SendAgeIfZeroInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZeroInput"></a>

```csharp
public object SendAgeIfZeroInput { get; }
```

- *Type:* object

---

##### `SendDaysSinceCustomTimeIfZeroInput`<sup>Optional</sup> <a name="SendDaysSinceCustomTimeIfZeroInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZeroInput"></a>

```csharp
public object SendDaysSinceCustomTimeIfZeroInput { get; }
```

- *Type:* object

---

##### `SendDaysSinceNoncurrentTimeIfZeroInput`<sup>Optional</sup> <a name="SendDaysSinceNoncurrentTimeIfZeroInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZeroInput"></a>

```csharp
public object SendDaysSinceNoncurrentTimeIfZeroInput { get; }
```

- *Type:* object

---

##### `SendNumNewerVersionsIfZeroInput`<sup>Optional</sup> <a name="SendNumNewerVersionsIfZeroInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZeroInput"></a>

```csharp
public object SendNumNewerVersionsIfZeroInput { get; }
```

- *Type:* object

---

##### `WithStateInput`<sup>Optional</sup> <a name="WithStateInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.withStateInput"></a>

```csharp
public string WithStateInput { get; }
```

- *Type:* string

---

##### `Age`<sup>Required</sup> <a name="Age" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.age"></a>

```csharp
public double Age { get; }
```

- *Type:* double

---

##### `CreatedBefore`<sup>Required</sup> <a name="CreatedBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.createdBefore"></a>

```csharp
public string CreatedBefore { get; }
```

- *Type:* string

---

##### `CustomTimeBefore`<sup>Required</sup> <a name="CustomTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.customTimeBefore"></a>

```csharp
public string CustomTimeBefore { get; }
```

- *Type:* string

---

##### `DaysSinceCustomTime`<sup>Required</sup> <a name="DaysSinceCustomTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTime"></a>

```csharp
public double DaysSinceCustomTime { get; }
```

- *Type:* double

---

##### `DaysSinceNoncurrentTime`<sup>Required</sup> <a name="DaysSinceNoncurrentTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTime"></a>

```csharp
public double DaysSinceNoncurrentTime { get; }
```

- *Type:* double

---

##### `MatchesPrefix`<sup>Required</sup> <a name="MatchesPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefix"></a>

```csharp
public string[] MatchesPrefix { get; }
```

- *Type:* string[]

---

##### `MatchesStorageClass`<sup>Required</sup> <a name="MatchesStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClass"></a>

```csharp
public string[] MatchesStorageClass { get; }
```

- *Type:* string[]

---

##### `MatchesSuffix`<sup>Required</sup> <a name="MatchesSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffix"></a>

```csharp
public string[] MatchesSuffix { get; }
```

- *Type:* string[]

---

##### `NoncurrentTimeBefore`<sup>Required</sup> <a name="NoncurrentTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBefore"></a>

```csharp
public string NoncurrentTimeBefore { get; }
```

- *Type:* string

---

##### `NumNewerVersions`<sup>Required</sup> <a name="NumNewerVersions" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersions"></a>

```csharp
public double NumNewerVersions { get; }
```

- *Type:* double

---

##### `SendAgeIfZero`<sup>Required</sup> <a name="SendAgeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZero"></a>

```csharp
public object SendAgeIfZero { get; }
```

- *Type:* object

---

##### `SendDaysSinceCustomTimeIfZero`<sup>Required</sup> <a name="SendDaysSinceCustomTimeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZero"></a>

```csharp
public object SendDaysSinceCustomTimeIfZero { get; }
```

- *Type:* object

---

##### `SendDaysSinceNoncurrentTimeIfZero`<sup>Required</sup> <a name="SendDaysSinceNoncurrentTimeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZero"></a>

```csharp
public object SendDaysSinceNoncurrentTimeIfZero { get; }
```

- *Type:* object

---

##### `SendNumNewerVersionsIfZero`<sup>Required</sup> <a name="SendNumNewerVersionsIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZero"></a>

```csharp
public object SendNumNewerVersionsIfZero { get; }
```

- *Type:* object

---

##### `WithState`<sup>Required</sup> <a name="WithState" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.withState"></a>

```csharp
public string WithState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.internalValue"></a>

```csharp
public StorageBucketLifecycleRuleCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a>

---


### StorageBucketLifecycleRuleList <a name="StorageBucketLifecycleRuleList" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketLifecycleRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.get"></a>

```csharp
private StorageBucketLifecycleRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageBucketLifecycleRuleOutputReference <a name="StorageBucketLifecycleRuleOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketLifecycleRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition">PutCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putAction"></a>

```csharp
private void PutAction(StorageBucketLifecycleRuleAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a>

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition"></a>

```csharp
private void PutCondition(StorageBucketLifecycleRuleCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference">StorageBucketLifecycleRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference">StorageBucketLifecycleRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.action"></a>

```csharp
public StorageBucketLifecycleRuleActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference">StorageBucketLifecycleRuleActionOutputReference</a>

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.condition"></a>

```csharp
public StorageBucketLifecycleRuleConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference">StorageBucketLifecycleRuleConditionOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.actionInput"></a>

```csharp
public StorageBucketLifecycleRuleAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.conditionInput"></a>

```csharp
public StorageBucketLifecycleRuleCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageBucketLoggingOutputReference <a name="StorageBucketLoggingOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resetLogObjectPrefix">ResetLogObjectPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogObjectPrefix` <a name="ResetLogObjectPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resetLogObjectPrefix"></a>

```csharp
private void ResetLogObjectPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logBucketInput">LogBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logObjectPrefixInput">LogObjectPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logBucket">LogBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logObjectPrefix">LogObjectPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogBucketInput`<sup>Optional</sup> <a name="LogBucketInput" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logBucketInput"></a>

```csharp
public string LogBucketInput { get; }
```

- *Type:* string

---

##### `LogObjectPrefixInput`<sup>Optional</sup> <a name="LogObjectPrefixInput" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logObjectPrefixInput"></a>

```csharp
public string LogObjectPrefixInput { get; }
```

- *Type:* string

---

##### `LogBucket`<sup>Required</sup> <a name="LogBucket" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logBucket"></a>

```csharp
public string LogBucket { get; }
```

- *Type:* string

---

##### `LogObjectPrefix`<sup>Required</sup> <a name="LogObjectPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logObjectPrefix"></a>

```csharp
public string LogObjectPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.internalValue"></a>

```csharp
public StorageBucketLogging InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a>

---


### StorageBucketRetentionPolicyOutputReference <a name="StorageBucketRetentionPolicyOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketRetentionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resetIsLocked">ResetIsLocked</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsLocked` <a name="ResetIsLocked" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resetIsLocked"></a>

```csharp
private void ResetIsLocked()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.isLockedInput">IsLockedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.isLocked">IsLocked</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.retentionPeriod">RetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsLockedInput`<sup>Optional</sup> <a name="IsLockedInput" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.isLockedInput"></a>

```csharp
public object IsLockedInput { get; }
```

- *Type:* object

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.retentionPeriodInput"></a>

```csharp
public double RetentionPeriodInput { get; }
```

- *Type:* double

---

##### `IsLocked`<sup>Required</sup> <a name="IsLocked" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.isLocked"></a>

```csharp
public object IsLocked { get; }
```

- *Type:* object

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.retentionPeriod"></a>

```csharp
public double RetentionPeriod { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.internalValue"></a>

```csharp
public StorageBucketRetentionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a>

---


### StorageBucketSoftDeletePolicyOutputReference <a name="StorageBucketSoftDeletePolicyOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketSoftDeletePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.resetRetentionDurationSeconds">ResetRetentionDurationSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetentionDurationSeconds` <a name="ResetRetentionDurationSeconds" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.resetRetentionDurationSeconds"></a>

```csharp
private void ResetRetentionDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.effectiveTime">EffectiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSecondsInput">RetentionDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSeconds">RetentionDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveTime`<sup>Required</sup> <a name="EffectiveTime" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.effectiveTime"></a>

```csharp
public string EffectiveTime { get; }
```

- *Type:* string

---

##### `RetentionDurationSecondsInput`<sup>Optional</sup> <a name="RetentionDurationSecondsInput" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSecondsInput"></a>

```csharp
public double RetentionDurationSecondsInput { get; }
```

- *Type:* double

---

##### `RetentionDurationSeconds`<sup>Required</sup> <a name="RetentionDurationSeconds" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSeconds"></a>

```csharp
public double RetentionDurationSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.internalValue"></a>

```csharp
public StorageBucketSoftDeletePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a>

---


### StorageBucketTimeoutsOutputReference <a name="StorageBucketTimeoutsOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageBucketVersioningOutputReference <a name="StorageBucketVersioningOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketVersioningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.internalValue"></a>

```csharp
public StorageBucketVersioning InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a>

---


### StorageBucketWebsiteOutputReference <a name="StorageBucketWebsiteOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketWebsiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resetMainPageSuffix">ResetMainPageSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resetNotFoundPage">ResetNotFoundPage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMainPageSuffix` <a name="ResetMainPageSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resetMainPageSuffix"></a>

```csharp
private void ResetMainPageSuffix()
```

##### `ResetNotFoundPage` <a name="ResetNotFoundPage" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resetNotFoundPage"></a>

```csharp
private void ResetNotFoundPage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.mainPageSuffixInput">MainPageSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.notFoundPageInput">NotFoundPageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.mainPageSuffix">MainPageSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.notFoundPage">NotFoundPage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MainPageSuffixInput`<sup>Optional</sup> <a name="MainPageSuffixInput" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.mainPageSuffixInput"></a>

```csharp
public string MainPageSuffixInput { get; }
```

- *Type:* string

---

##### `NotFoundPageInput`<sup>Optional</sup> <a name="NotFoundPageInput" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.notFoundPageInput"></a>

```csharp
public string NotFoundPageInput { get; }
```

- *Type:* string

---

##### `MainPageSuffix`<sup>Required</sup> <a name="MainPageSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.mainPageSuffix"></a>

```csharp
public string MainPageSuffix { get; }
```

- *Type:* string

---

##### `NotFoundPage`<sup>Required</sup> <a name="NotFoundPage" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.notFoundPage"></a>

```csharp
public string NotFoundPage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.internalValue"></a>

```csharp
public StorageBucketWebsite InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a>

---



