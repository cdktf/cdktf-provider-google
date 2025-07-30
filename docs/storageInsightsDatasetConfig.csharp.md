# `storageInsightsDatasetConfig` Submodule <a name="`storageInsightsDatasetConfig` Submodule" id="@cdktf/provider-google.storageInsightsDatasetConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageInsightsDatasetConfig <a name="StorageInsightsDatasetConfig" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config google_storage_insights_dataset_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfig(Construct Scope, string Id, StorageInsightsDatasetConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig">StorageInsightsDatasetConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig">StorageInsightsDatasetConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putExcludeCloudStorageBuckets">PutExcludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putExcludeCloudStorageLocations">PutExcludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIncludeCloudStorageBuckets">PutIncludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIncludeCloudStorageLocations">PutIncludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putSourceFolders">PutSourceFolders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putSourceProjects">PutSourceProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetExcludeCloudStorageBuckets">ResetExcludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetExcludeCloudStorageLocations">ResetExcludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetIncludeCloudStorageBuckets">ResetIncludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetIncludeCloudStorageLocations">ResetIncludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetIncludeNewlyCreatedBuckets">ResetIncludeNewlyCreatedBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetLinkDataset">ResetLinkDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetOrganizationNumber">ResetOrganizationNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetOrganizationScope">ResetOrganizationScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetSourceFolders">ResetSourceFolders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetSourceProjects">ResetSourceProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExcludeCloudStorageBuckets` <a name="PutExcludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putExcludeCloudStorageBuckets"></a>

```csharp
private void PutExcludeCloudStorageBuckets(StorageInsightsDatasetConfigExcludeCloudStorageBuckets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putExcludeCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---

##### `PutExcludeCloudStorageLocations` <a name="PutExcludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putExcludeCloudStorageLocations"></a>

```csharp
private void PutExcludeCloudStorageLocations(StorageInsightsDatasetConfigExcludeCloudStorageLocations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putExcludeCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIdentity"></a>

```csharp
private void PutIdentity(StorageInsightsDatasetConfigIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a>

---

##### `PutIncludeCloudStorageBuckets` <a name="PutIncludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIncludeCloudStorageBuckets"></a>

```csharp
private void PutIncludeCloudStorageBuckets(StorageInsightsDatasetConfigIncludeCloudStorageBuckets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIncludeCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---

##### `PutIncludeCloudStorageLocations` <a name="PutIncludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIncludeCloudStorageLocations"></a>

```csharp
private void PutIncludeCloudStorageLocations(StorageInsightsDatasetConfigIncludeCloudStorageLocations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIncludeCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---

##### `PutSourceFolders` <a name="PutSourceFolders" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putSourceFolders"></a>

```csharp
private void PutSourceFolders(StorageInsightsDatasetConfigSourceFolders Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putSourceFolders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a>

---

##### `PutSourceProjects` <a name="PutSourceProjects" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putSourceProjects"></a>

```csharp
private void PutSourceProjects(StorageInsightsDatasetConfigSourceProjects Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putSourceProjects.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(StorageInsightsDatasetConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts">StorageInsightsDatasetConfigTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExcludeCloudStorageBuckets` <a name="ResetExcludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetExcludeCloudStorageBuckets"></a>

```csharp
private void ResetExcludeCloudStorageBuckets()
```

##### `ResetExcludeCloudStorageLocations` <a name="ResetExcludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetExcludeCloudStorageLocations"></a>

```csharp
private void ResetExcludeCloudStorageLocations()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeCloudStorageBuckets` <a name="ResetIncludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetIncludeCloudStorageBuckets"></a>

```csharp
private void ResetIncludeCloudStorageBuckets()
```

##### `ResetIncludeCloudStorageLocations` <a name="ResetIncludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetIncludeCloudStorageLocations"></a>

```csharp
private void ResetIncludeCloudStorageLocations()
```

##### `ResetIncludeNewlyCreatedBuckets` <a name="ResetIncludeNewlyCreatedBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetIncludeNewlyCreatedBuckets"></a>

```csharp
private void ResetIncludeNewlyCreatedBuckets()
```

##### `ResetLinkDataset` <a name="ResetLinkDataset" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetLinkDataset"></a>

```csharp
private void ResetLinkDataset()
```

##### `ResetOrganizationNumber` <a name="ResetOrganizationNumber" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetOrganizationNumber"></a>

```csharp
private void ResetOrganizationNumber()
```

##### `ResetOrganizationScope` <a name="ResetOrganizationScope" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetOrganizationScope"></a>

```csharp
private void ResetOrganizationScope()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSourceFolders` <a name="ResetSourceFolders" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetSourceFolders"></a>

```csharp
private void ResetSourceFolders()
```

##### `ResetSourceProjects` <a name="ResetSourceProjects" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetSourceProjects"></a>

```csharp
private void ResetSourceProjects()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageInsightsDatasetConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageInsightsDatasetConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageInsightsDatasetConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageInsightsDatasetConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageInsightsDatasetConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageInsightsDatasetConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StorageInsightsDatasetConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.datasetConfigState">DatasetConfigState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageBuckets">ExcludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference">StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageLocations">ExcludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference">StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference">StorageInsightsDatasetConfigIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageBuckets">IncludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference">StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageLocations">IncludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference">StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.link">Link</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList">StorageInsightsDatasetConfigLinkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceFolders">SourceFolders</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference">StorageInsightsDatasetConfigSourceFoldersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceProjects">SourceProjects</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference">StorageInsightsDatasetConfigSourceProjectsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference">StorageInsightsDatasetConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.datasetConfigIdInput">DatasetConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageBucketsInput">ExcludeCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageLocationsInput">ExcludeCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageBucketsInput">IncludeCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageLocationsInput">IncludeCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeNewlyCreatedBucketsInput">IncludeNewlyCreatedBucketsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.linkDatasetInput">LinkDatasetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationNumberInput">OrganizationNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationScopeInput">OrganizationScopeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.retentionPeriodDaysInput">RetentionPeriodDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceFoldersInput">SourceFoldersInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceProjectsInput">SourceProjectsInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.datasetConfigId">DatasetConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeNewlyCreatedBuckets">IncludeNewlyCreatedBuckets</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.linkDataset">LinkDataset</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationNumber">OrganizationNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationScope">OrganizationScope</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.retentionPeriodDays">RetentionPeriodDays</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DatasetConfigState`<sup>Required</sup> <a name="DatasetConfigState" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.datasetConfigState"></a>

```csharp
public string DatasetConfigState { get; }
```

- *Type:* string

---

##### `ExcludeCloudStorageBuckets`<sup>Required</sup> <a name="ExcludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageBuckets"></a>

```csharp
public StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference ExcludeCloudStorageBuckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference">StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference</a>

---

##### `ExcludeCloudStorageLocations`<sup>Required</sup> <a name="ExcludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageLocations"></a>

```csharp
public StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference ExcludeCloudStorageLocations { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference">StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.identity"></a>

```csharp
public StorageInsightsDatasetConfigIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference">StorageInsightsDatasetConfigIdentityOutputReference</a>

---

##### `IncludeCloudStorageBuckets`<sup>Required</sup> <a name="IncludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageBuckets"></a>

```csharp
public StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference IncludeCloudStorageBuckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference">StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference</a>

---

##### `IncludeCloudStorageLocations`<sup>Required</sup> <a name="IncludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageLocations"></a>

```csharp
public StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference IncludeCloudStorageLocations { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference">StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference</a>

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.link"></a>

```csharp
public StorageInsightsDatasetConfigLinkList Link { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList">StorageInsightsDatasetConfigLinkList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceFolders`<sup>Required</sup> <a name="SourceFolders" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceFolders"></a>

```csharp
public StorageInsightsDatasetConfigSourceFoldersOutputReference SourceFolders { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference">StorageInsightsDatasetConfigSourceFoldersOutputReference</a>

---

##### `SourceProjects`<sup>Required</sup> <a name="SourceProjects" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceProjects"></a>

```csharp
public StorageInsightsDatasetConfigSourceProjectsOutputReference SourceProjects { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference">StorageInsightsDatasetConfigSourceProjectsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.timeouts"></a>

```csharp
public StorageInsightsDatasetConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference">StorageInsightsDatasetConfigTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DatasetConfigIdInput`<sup>Optional</sup> <a name="DatasetConfigIdInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.datasetConfigIdInput"></a>

```csharp
public string DatasetConfigIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExcludeCloudStorageBucketsInput`<sup>Optional</sup> <a name="ExcludeCloudStorageBucketsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageBucketsInput"></a>

```csharp
public StorageInsightsDatasetConfigExcludeCloudStorageBuckets ExcludeCloudStorageBucketsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---

##### `ExcludeCloudStorageLocationsInput`<sup>Optional</sup> <a name="ExcludeCloudStorageLocationsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageLocationsInput"></a>

```csharp
public StorageInsightsDatasetConfigExcludeCloudStorageLocations ExcludeCloudStorageLocationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.identityInput"></a>

```csharp
public StorageInsightsDatasetConfigIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeCloudStorageBucketsInput`<sup>Optional</sup> <a name="IncludeCloudStorageBucketsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageBucketsInput"></a>

```csharp
public StorageInsightsDatasetConfigIncludeCloudStorageBuckets IncludeCloudStorageBucketsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---

##### `IncludeCloudStorageLocationsInput`<sup>Optional</sup> <a name="IncludeCloudStorageLocationsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageLocationsInput"></a>

```csharp
public StorageInsightsDatasetConfigIncludeCloudStorageLocations IncludeCloudStorageLocationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---

##### `IncludeNewlyCreatedBucketsInput`<sup>Optional</sup> <a name="IncludeNewlyCreatedBucketsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeNewlyCreatedBucketsInput"></a>

```csharp
public object IncludeNewlyCreatedBucketsInput { get; }
```

- *Type:* object

---

##### `LinkDatasetInput`<sup>Optional</sup> <a name="LinkDatasetInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.linkDatasetInput"></a>

```csharp
public object LinkDatasetInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OrganizationNumberInput`<sup>Optional</sup> <a name="OrganizationNumberInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationNumberInput"></a>

```csharp
public string OrganizationNumberInput { get; }
```

- *Type:* string

---

##### `OrganizationScopeInput`<sup>Optional</sup> <a name="OrganizationScopeInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationScopeInput"></a>

```csharp
public object OrganizationScopeInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RetentionPeriodDaysInput`<sup>Optional</sup> <a name="RetentionPeriodDaysInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.retentionPeriodDaysInput"></a>

```csharp
public double RetentionPeriodDaysInput { get; }
```

- *Type:* double

---

##### `SourceFoldersInput`<sup>Optional</sup> <a name="SourceFoldersInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceFoldersInput"></a>

```csharp
public StorageInsightsDatasetConfigSourceFolders SourceFoldersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a>

---

##### `SourceProjectsInput`<sup>Optional</sup> <a name="SourceProjectsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceProjectsInput"></a>

```csharp
public StorageInsightsDatasetConfigSourceProjects SourceProjectsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DatasetConfigId`<sup>Required</sup> <a name="DatasetConfigId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.datasetConfigId"></a>

```csharp
public string DatasetConfigId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeNewlyCreatedBuckets`<sup>Required</sup> <a name="IncludeNewlyCreatedBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeNewlyCreatedBuckets"></a>

```csharp
public object IncludeNewlyCreatedBuckets { get; }
```

- *Type:* object

---

##### `LinkDataset`<sup>Required</sup> <a name="LinkDataset" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.linkDataset"></a>

```csharp
public object LinkDataset { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `OrganizationNumber`<sup>Required</sup> <a name="OrganizationNumber" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationNumber"></a>

```csharp
public string OrganizationNumber { get; }
```

- *Type:* string

---

##### `OrganizationScope`<sup>Required</sup> <a name="OrganizationScope" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationScope"></a>

```csharp
public object OrganizationScope { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RetentionPeriodDays`<sup>Required</sup> <a name="RetentionPeriodDays" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.retentionPeriodDays"></a>

```csharp
public double RetentionPeriodDays { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageInsightsDatasetConfigConfig <a name="StorageInsightsDatasetConfigConfig" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatasetConfigId,
    StorageInsightsDatasetConfigIdentity Identity,
    string Location,
    double RetentionPeriodDays,
    string Description = null,
    StorageInsightsDatasetConfigExcludeCloudStorageBuckets ExcludeCloudStorageBuckets = null,
    StorageInsightsDatasetConfigExcludeCloudStorageLocations ExcludeCloudStorageLocations = null,
    string Id = null,
    StorageInsightsDatasetConfigIncludeCloudStorageBuckets IncludeCloudStorageBuckets = null,
    StorageInsightsDatasetConfigIncludeCloudStorageLocations IncludeCloudStorageLocations = null,
    object IncludeNewlyCreatedBuckets = null,
    object LinkDataset = null,
    string OrganizationNumber = null,
    object OrganizationScope = null,
    string Project = null,
    StorageInsightsDatasetConfigSourceFolders SourceFolders = null,
    StorageInsightsDatasetConfigSourceProjects SourceProjects = null,
    StorageInsightsDatasetConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.datasetConfigId">DatasetConfigId</a></code> | <code>string</code> | The user-defined ID of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.location">Location</a></code> | <code>string</code> | The location of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.retentionPeriodDays">RetentionPeriodDays</a></code> | <code>double</code> | Number of days of history that must be retained. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.description">Description</a></code> | <code>string</code> | An optional user-provided description for the dataset configuration with a maximum length of 256 characters. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.excludeCloudStorageBuckets">ExcludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | exclude_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.excludeCloudStorageLocations">ExcludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | exclude_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#id StorageInsightsDatasetConfig#id}. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.includeCloudStorageBuckets">IncludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | include_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.includeCloudStorageLocations">IncludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | include_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.includeNewlyCreatedBuckets">IncludeNewlyCreatedBuckets</a></code> | <code>object</code> | If set to true, the request includes all the newly created buckets in the dataset that meet the inclusion and exclusion rules. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.linkDataset">LinkDataset</a></code> | <code>object</code> | A boolean terraform only flag to link/unlink dataset. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.organizationNumber">OrganizationNumber</a></code> | <code>string</code> | Organization resource ID that the source projects should belong to. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.organizationScope">OrganizationScope</a></code> | <code>object</code> | Defines the options for providing a source organization for the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#project StorageInsightsDatasetConfig#project}. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.sourceFolders">SourceFolders</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a></code> | source_folders block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.sourceProjects">SourceProjects</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a></code> | source_projects block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts">StorageInsightsDatasetConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatasetConfigId`<sup>Required</sup> <a name="DatasetConfigId" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.datasetConfigId"></a>

```csharp
public string DatasetConfigId { get; set; }
```

- *Type:* string

The user-defined ID of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#dataset_config_id StorageInsightsDatasetConfig#dataset_config_id}

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.identity"></a>

```csharp
public StorageInsightsDatasetConfigIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#identity StorageInsightsDatasetConfig#identity}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#location StorageInsightsDatasetConfig#location}

---

##### `RetentionPeriodDays`<sup>Required</sup> <a name="RetentionPeriodDays" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.retentionPeriodDays"></a>

```csharp
public double RetentionPeriodDays { get; set; }
```

- *Type:* double

Number of days of history that must be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#retention_period_days StorageInsightsDatasetConfig#retention_period_days}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional user-provided description for the dataset configuration with a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#description StorageInsightsDatasetConfig#description}

---

##### `ExcludeCloudStorageBuckets`<sup>Optional</sup> <a name="ExcludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.excludeCloudStorageBuckets"></a>

```csharp
public StorageInsightsDatasetConfigExcludeCloudStorageBuckets ExcludeCloudStorageBuckets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

exclude_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#exclude_cloud_storage_buckets StorageInsightsDatasetConfig#exclude_cloud_storage_buckets}

---

##### `ExcludeCloudStorageLocations`<sup>Optional</sup> <a name="ExcludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.excludeCloudStorageLocations"></a>

```csharp
public StorageInsightsDatasetConfigExcludeCloudStorageLocations ExcludeCloudStorageLocations { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

exclude_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#exclude_cloud_storage_locations StorageInsightsDatasetConfig#exclude_cloud_storage_locations}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#id StorageInsightsDatasetConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeCloudStorageBuckets`<sup>Optional</sup> <a name="IncludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.includeCloudStorageBuckets"></a>

```csharp
public StorageInsightsDatasetConfigIncludeCloudStorageBuckets IncludeCloudStorageBuckets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

include_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#include_cloud_storage_buckets StorageInsightsDatasetConfig#include_cloud_storage_buckets}

---

##### `IncludeCloudStorageLocations`<sup>Optional</sup> <a name="IncludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.includeCloudStorageLocations"></a>

```csharp
public StorageInsightsDatasetConfigIncludeCloudStorageLocations IncludeCloudStorageLocations { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

include_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#include_cloud_storage_locations StorageInsightsDatasetConfig#include_cloud_storage_locations}

---

##### `IncludeNewlyCreatedBuckets`<sup>Optional</sup> <a name="IncludeNewlyCreatedBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.includeNewlyCreatedBuckets"></a>

```csharp
public object IncludeNewlyCreatedBuckets { get; set; }
```

- *Type:* object

If set to true, the request includes all the newly created buckets in the dataset that meet the inclusion and exclusion rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#include_newly_created_buckets StorageInsightsDatasetConfig#include_newly_created_buckets}

---

##### `LinkDataset`<sup>Optional</sup> <a name="LinkDataset" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.linkDataset"></a>

```csharp
public object LinkDataset { get; set; }
```

- *Type:* object

A boolean terraform only flag to link/unlink dataset.

Setting this field to true while creation will automatically link the created dataset as an additional functionality.
-> **Note** A dataset config resource can only be destroyed once it is unlinked,
so users must set this field to false to unlink the dataset and destroy the dataset config resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#link_dataset StorageInsightsDatasetConfig#link_dataset}

---

##### `OrganizationNumber`<sup>Optional</sup> <a name="OrganizationNumber" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.organizationNumber"></a>

```csharp
public string OrganizationNumber { get; set; }
```

- *Type:* string

Organization resource ID that the source projects should belong to.

Projects that do not belong to the provided organization are not considered when creating the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#organization_number StorageInsightsDatasetConfig#organization_number}

---

##### `OrganizationScope`<sup>Optional</sup> <a name="OrganizationScope" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.organizationScope"></a>

```csharp
public object OrganizationScope { get; set; }
```

- *Type:* object

Defines the options for providing a source organization for the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#organization_scope StorageInsightsDatasetConfig#organization_scope}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#project StorageInsightsDatasetConfig#project}.

---

##### `SourceFolders`<sup>Optional</sup> <a name="SourceFolders" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.sourceFolders"></a>

```csharp
public StorageInsightsDatasetConfigSourceFolders SourceFolders { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a>

source_folders block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#source_folders StorageInsightsDatasetConfig#source_folders}

---

##### `SourceProjects`<sup>Optional</sup> <a name="SourceProjects" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.sourceProjects"></a>

```csharp
public StorageInsightsDatasetConfigSourceProjects SourceProjects { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a>

source_projects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#source_projects StorageInsightsDatasetConfig#source_projects}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.timeouts"></a>

```csharp
public StorageInsightsDatasetConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts">StorageInsightsDatasetConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#timeouts StorageInsightsDatasetConfig#timeouts}

---

### StorageInsightsDatasetConfigExcludeCloudStorageBuckets <a name="StorageInsightsDatasetConfigExcludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigExcludeCloudStorageBuckets {
    object CloudStorageBuckets
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets.property.cloudStorageBuckets">CloudStorageBuckets</a></code> | <code>object</code> | cloud_storage_buckets block. |

---

##### `CloudStorageBuckets`<sup>Required</sup> <a name="CloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets.property.cloudStorageBuckets"></a>

```csharp
public object CloudStorageBuckets { get; set; }
```

- *Type:* object

cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#cloud_storage_buckets StorageInsightsDatasetConfig#cloud_storage_buckets}

---

### StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets <a name="StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets {
    string BucketName = null,
    string BucketPrefixRegex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketName">BucketName</a></code> | <code>string</code> | The list of cloud storage bucket names to exclude in the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex">BucketPrefixRegex</a></code> | <code>string</code> | The list of regex patterns for bucket names matching the regex. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The list of cloud storage bucket names to exclude in the DatasetConfig.

Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#bucket_name StorageInsightsDatasetConfig#bucket_name}

---

##### `BucketPrefixRegex`<sup>Optional</sup> <a name="BucketPrefixRegex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex"></a>

```csharp
public string BucketPrefixRegex { get; set; }
```

- *Type:* string

The list of regex patterns for bucket names matching the regex.

Regex should follow the syntax specified in google/re2 on GitHub.
Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#bucket_prefix_regex StorageInsightsDatasetConfig#bucket_prefix_regex}

---

### StorageInsightsDatasetConfigExcludeCloudStorageLocations <a name="StorageInsightsDatasetConfigExcludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigExcludeCloudStorageLocations {
    string[] Locations
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations.property.locations">Locations</a></code> | <code>string[]</code> | The list of cloud storage locations to exclude in the DatasetConfig. |

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations.property.locations"></a>

```csharp
public string[] Locations { get; set; }
```

- *Type:* string[]

The list of cloud storage locations to exclude in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#locations StorageInsightsDatasetConfig#locations}

---

### StorageInsightsDatasetConfigIdentity <a name="StorageInsightsDatasetConfigIdentity" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigIdentity {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity.property.type">Type</a></code> | <code>string</code> | Type of identity to use for the DatasetConfig. Possible values: ["IDENTITY_TYPE_PER_CONFIG", "IDENTITY_TYPE_PER_PROJECT"]. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of identity to use for the DatasetConfig. Possible values: ["IDENTITY_TYPE_PER_CONFIG", "IDENTITY_TYPE_PER_PROJECT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#type StorageInsightsDatasetConfig#type}

---

### StorageInsightsDatasetConfigIncludeCloudStorageBuckets <a name="StorageInsightsDatasetConfigIncludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigIncludeCloudStorageBuckets {
    object CloudStorageBuckets
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets.property.cloudStorageBuckets">CloudStorageBuckets</a></code> | <code>object</code> | cloud_storage_buckets block. |

---

##### `CloudStorageBuckets`<sup>Required</sup> <a name="CloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets.property.cloudStorageBuckets"></a>

```csharp
public object CloudStorageBuckets { get; set; }
```

- *Type:* object

cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#cloud_storage_buckets StorageInsightsDatasetConfig#cloud_storage_buckets}

---

### StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets <a name="StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets {
    string BucketName = null,
    string BucketPrefixRegex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketName">BucketName</a></code> | <code>string</code> | The list of cloud storage bucket names to include in the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex">BucketPrefixRegex</a></code> | <code>string</code> | The list of regex patterns for bucket names matching the regex. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The list of cloud storage bucket names to include in the DatasetConfig.

Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#bucket_name StorageInsightsDatasetConfig#bucket_name}

---

##### `BucketPrefixRegex`<sup>Optional</sup> <a name="BucketPrefixRegex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex"></a>

```csharp
public string BucketPrefixRegex { get; set; }
```

- *Type:* string

The list of regex patterns for bucket names matching the regex.

Regex should follow the syntax specified in google/re2 on GitHub.
Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#bucket_prefix_regex StorageInsightsDatasetConfig#bucket_prefix_regex}

---

### StorageInsightsDatasetConfigIncludeCloudStorageLocations <a name="StorageInsightsDatasetConfigIncludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigIncludeCloudStorageLocations {
    string[] Locations
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations.property.locations">Locations</a></code> | <code>string[]</code> | The list of cloud storage locations to include in the DatasetConfig. |

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations.property.locations"></a>

```csharp
public string[] Locations { get; set; }
```

- *Type:* string[]

The list of cloud storage locations to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#locations StorageInsightsDatasetConfig#locations}

---

### StorageInsightsDatasetConfigLink <a name="StorageInsightsDatasetConfigLink" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLink.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigLink {

};
```


### StorageInsightsDatasetConfigSourceFolders <a name="StorageInsightsDatasetConfigSourceFolders" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigSourceFolders {
    string[] FolderNumbers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders.property.folderNumbers">FolderNumbers</a></code> | <code>string[]</code> | The list of folder numbers to include in the DatasetConfig. |

---

##### `FolderNumbers`<sup>Optional</sup> <a name="FolderNumbers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders.property.folderNumbers"></a>

```csharp
public string[] FolderNumbers { get; set; }
```

- *Type:* string[]

The list of folder numbers to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#folder_numbers StorageInsightsDatasetConfig#folder_numbers}

---

### StorageInsightsDatasetConfigSourceProjects <a name="StorageInsightsDatasetConfigSourceProjects" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigSourceProjects {
    string[] ProjectNumbers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects.property.projectNumbers">ProjectNumbers</a></code> | <code>string[]</code> | The list of project numbers to include in the DatasetConfig. |

---

##### `ProjectNumbers`<sup>Optional</sup> <a name="ProjectNumbers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects.property.projectNumbers"></a>

```csharp
public string[] ProjectNumbers { get; set; }
```

- *Type:* string[]

The list of project numbers to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#project_numbers StorageInsightsDatasetConfig#project_numbers}

---

### StorageInsightsDatasetConfigTimeouts <a name="StorageInsightsDatasetConfigTimeouts" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#create StorageInsightsDatasetConfig#create}. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#delete StorageInsightsDatasetConfig#delete}. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#update StorageInsightsDatasetConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#create StorageInsightsDatasetConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#delete StorageInsightsDatasetConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#update StorageInsightsDatasetConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList <a name="StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get"></a>

```csharp
private StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference <a name="StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex">ResetBucketPrefixRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetBucketPrefixRegex` <a name="ResetBucketPrefixRegex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex"></a>

```csharp
private void ResetBucketPrefixRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput">BucketPrefixRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex">BucketPrefixRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `BucketPrefixRegexInput`<sup>Optional</sup> <a name="BucketPrefixRegexInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput"></a>

```csharp
public string BucketPrefixRegexInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketPrefixRegex`<sup>Required</sup> <a name="BucketPrefixRegex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex"></a>

```csharp
public string BucketPrefixRegex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference <a name="StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.putCloudStorageBuckets">PutCloudStorageBuckets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudStorageBuckets` <a name="PutCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.putCloudStorageBuckets"></a>

```csharp
private void PutCloudStorageBuckets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.putCloudStorageBuckets.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets">CloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList">StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput">CloudStorageBucketsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudStorageBuckets`<sup>Required</sup> <a name="CloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets"></a>

```csharp
public StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList CloudStorageBuckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList">StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList</a>

---

##### `CloudStorageBucketsInput`<sup>Optional</sup> <a name="CloudStorageBucketsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput"></a>

```csharp
public object CloudStorageBucketsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.internalValue"></a>

```csharp
public StorageInsightsDatasetConfigExcludeCloudStorageBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---


### StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference <a name="StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locationsInput">LocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locationsInput"></a>

```csharp
public string[] LocationsInput { get; }
```

- *Type:* string[]

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.internalValue"></a>

```csharp
public StorageInsightsDatasetConfigExcludeCloudStorageLocations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---


### StorageInsightsDatasetConfigIdentityOutputReference <a name="StorageInsightsDatasetConfigIdentityOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.internalValue"></a>

```csharp
public StorageInsightsDatasetConfigIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a>

---


### StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList <a name="StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get"></a>

```csharp
private StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference <a name="StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex">ResetBucketPrefixRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetBucketPrefixRegex` <a name="ResetBucketPrefixRegex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex"></a>

```csharp
private void ResetBucketPrefixRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput">BucketPrefixRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex">BucketPrefixRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `BucketPrefixRegexInput`<sup>Optional</sup> <a name="BucketPrefixRegexInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput"></a>

```csharp
public string BucketPrefixRegexInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketPrefixRegex`<sup>Required</sup> <a name="BucketPrefixRegex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex"></a>

```csharp
public string BucketPrefixRegex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference <a name="StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.putCloudStorageBuckets">PutCloudStorageBuckets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudStorageBuckets` <a name="PutCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.putCloudStorageBuckets"></a>

```csharp
private void PutCloudStorageBuckets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.putCloudStorageBuckets.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets">CloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList">StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput">CloudStorageBucketsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudStorageBuckets`<sup>Required</sup> <a name="CloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets"></a>

```csharp
public StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList CloudStorageBuckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList">StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList</a>

---

##### `CloudStorageBucketsInput`<sup>Optional</sup> <a name="CloudStorageBucketsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput"></a>

```csharp
public object CloudStorageBucketsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.internalValue"></a>

```csharp
public StorageInsightsDatasetConfigIncludeCloudStorageBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---


### StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference <a name="StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locationsInput">LocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locationsInput"></a>

```csharp
public string[] LocationsInput { get; }
```

- *Type:* string[]

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.internalValue"></a>

```csharp
public StorageInsightsDatasetConfigIncludeCloudStorageLocations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---


### StorageInsightsDatasetConfigLinkList <a name="StorageInsightsDatasetConfigLinkList" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigLinkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.get"></a>

```csharp
private StorageInsightsDatasetConfigLinkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageInsightsDatasetConfigLinkOutputReference <a name="StorageInsightsDatasetConfigLinkOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigLinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.linked">Linked</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLink">StorageInsightsDatasetConfigLink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `Linked`<sup>Required</sup> <a name="Linked" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.linked"></a>

```csharp
public IResolvable Linked { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.internalValue"></a>

```csharp
public StorageInsightsDatasetConfigLink InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLink">StorageInsightsDatasetConfigLink</a>

---


### StorageInsightsDatasetConfigSourceFoldersOutputReference <a name="StorageInsightsDatasetConfigSourceFoldersOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigSourceFoldersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.resetFolderNumbers">ResetFolderNumbers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFolderNumbers` <a name="ResetFolderNumbers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.resetFolderNumbers"></a>

```csharp
private void ResetFolderNumbers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbersInput">FolderNumbersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbers">FolderNumbers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FolderNumbersInput`<sup>Optional</sup> <a name="FolderNumbersInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbersInput"></a>

```csharp
public string[] FolderNumbersInput { get; }
```

- *Type:* string[]

---

##### `FolderNumbers`<sup>Required</sup> <a name="FolderNumbers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbers"></a>

```csharp
public string[] FolderNumbers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.internalValue"></a>

```csharp
public StorageInsightsDatasetConfigSourceFolders InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a>

---


### StorageInsightsDatasetConfigSourceProjectsOutputReference <a name="StorageInsightsDatasetConfigSourceProjectsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigSourceProjectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.resetProjectNumbers">ResetProjectNumbers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectNumbers` <a name="ResetProjectNumbers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.resetProjectNumbers"></a>

```csharp
private void ResetProjectNumbers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbersInput">ProjectNumbersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbers">ProjectNumbers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectNumbersInput`<sup>Optional</sup> <a name="ProjectNumbersInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbersInput"></a>

```csharp
public string[] ProjectNumbersInput { get; }
```

- *Type:* string[]

---

##### `ProjectNumbers`<sup>Required</sup> <a name="ProjectNumbers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbers"></a>

```csharp
public string[] ProjectNumbers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.internalValue"></a>

```csharp
public StorageInsightsDatasetConfigSourceProjects InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a>

---


### StorageInsightsDatasetConfigTimeoutsOutputReference <a name="StorageInsightsDatasetConfigTimeoutsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsDatasetConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



