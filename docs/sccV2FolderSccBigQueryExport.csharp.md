# `sccV2FolderSccBigQueryExport` Submodule <a name="`sccV2FolderSccBigQueryExport` Submodule" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccV2FolderSccBigQueryExport <a name="SccV2FolderSccBigQueryExport" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_folder_scc_big_query_export google_scc_v2_folder_scc_big_query_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccV2FolderSccBigQueryExport(Construct Scope, string Id, SccV2FolderSccBigQueryExportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig">SccV2FolderSccBigQueryExportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig">SccV2FolderSccBigQueryExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.putTimeouts"></a>

```csharp
private void PutTimeouts(SccV2FolderSccBigQueryExportTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeouts">SccV2FolderSccBigQueryExportTimeouts</a>

---

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.resetDataset"></a>

```csharp
private void ResetDataset()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SccV2FolderSccBigQueryExport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccV2FolderSccBigQueryExport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccV2FolderSccBigQueryExport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccV2FolderSccBigQueryExport.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccV2FolderSccBigQueryExport.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SccV2FolderSccBigQueryExport resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SccV2FolderSccBigQueryExport to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SccV2FolderSccBigQueryExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_folder_scc_big_query_export#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SccV2FolderSccBigQueryExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.mostRecentEditor">MostRecentEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference">SccV2FolderSccBigQueryExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.bigQueryExportIdInput">BigQueryExportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.datasetInput">DatasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.bigQueryExportId">BigQueryExportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.location">Location</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `MostRecentEditor`<sup>Required</sup> <a name="MostRecentEditor" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.mostRecentEditor"></a>

```csharp
public string MostRecentEditor { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.timeouts"></a>

```csharp
public SccV2FolderSccBigQueryExportTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference">SccV2FolderSccBigQueryExportTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BigQueryExportIdInput`<sup>Optional</sup> <a name="BigQueryExportIdInput" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.bigQueryExportIdInput"></a>

```csharp
public string BigQueryExportIdInput { get; }
```

- *Type:* string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.datasetInput"></a>

```csharp
public string DatasetInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BigQueryExportId`<sup>Required</sup> <a name="BigQueryExportId" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.bigQueryExportId"></a>

```csharp
public string BigQueryExportId { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SccV2FolderSccBigQueryExportConfig <a name="SccV2FolderSccBigQueryExportConfig" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccV2FolderSccBigQueryExportConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BigQueryExportId,
    string Folder,
    string Dataset = null,
    string Description = null,
    string Filter = null,
    string Id = null,
    string Location = null,
    SccV2FolderSccBigQueryExportTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.bigQueryExportId">BigQueryExportId</a></code> | <code>string</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.folder">Folder</a></code> | <code>string</code> | The folder where Cloud Security Command Center Big Query Export Config lives in. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.dataset">Dataset</a></code> | <code>string</code> | The dataset to write findings' updates to. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.description">Description</a></code> | <code>string</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.filter">Filter</a></code> | <code>string</code> | Expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_folder_scc_big_query_export#id SccV2FolderSccBigQueryExport#id}. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.location">Location</a></code> | <code>string</code> | The BigQuery export configuration is stored in this location. If not provided, Use global as default. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeouts">SccV2FolderSccBigQueryExportTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BigQueryExportId`<sup>Required</sup> <a name="BigQueryExportId" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.bigQueryExportId"></a>

```csharp
public string BigQueryExportId { get; set; }
```

- *Type:* string

This must be unique within the organization.

It must consist of only lowercase letters,
numbers, and hyphens, must start with a letter, must end with either a letter or a number,
and must be 63 characters or less.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_folder_scc_big_query_export#big_query_export_id SccV2FolderSccBigQueryExport#big_query_export_id}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

The folder where Cloud Security Command Center Big Query Export Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_folder_scc_big_query_export#folder SccV2FolderSccBigQueryExport#folder}

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.dataset"></a>

```csharp
public string Dataset { get; set; }
```

- *Type:* string

The dataset to write findings' updates to.

Its format is "projects/[projectId]/datasets/[bigquery_dataset_id]".
BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_folder_scc_big_query_export#dataset SccV2FolderSccBigQueryExport#dataset}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_folder_scc_big_query_export#description SccV2FolderSccBigQueryExport#description}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Expression that defines the filter to apply across create/update events of findings.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* > , <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_folder_scc_big_query_export#filter SccV2FolderSccBigQueryExport#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_folder_scc_big_query_export#id SccV2FolderSccBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The BigQuery export configuration is stored in this location. If not provided, Use global as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_folder_scc_big_query_export#location SccV2FolderSccBigQueryExport#location}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportConfig.property.timeouts"></a>

```csharp
public SccV2FolderSccBigQueryExportTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeouts">SccV2FolderSccBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_folder_scc_big_query_export#timeouts SccV2FolderSccBigQueryExport#timeouts}

---

### SccV2FolderSccBigQueryExportTimeouts <a name="SccV2FolderSccBigQueryExportTimeouts" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccV2FolderSccBigQueryExportTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_folder_scc_big_query_export#create SccV2FolderSccBigQueryExport#create}. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_folder_scc_big_query_export#delete SccV2FolderSccBigQueryExport#delete}. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_folder_scc_big_query_export#update SccV2FolderSccBigQueryExport#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_folder_scc_big_query_export#create SccV2FolderSccBigQueryExport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_folder_scc_big_query_export#delete SccV2FolderSccBigQueryExport#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_folder_scc_big_query_export#update SccV2FolderSccBigQueryExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccV2FolderSccBigQueryExportTimeoutsOutputReference <a name="SccV2FolderSccBigQueryExportTimeoutsOutputReference" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccV2FolderSccBigQueryExportTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccV2FolderSccBigQueryExport.SccV2FolderSccBigQueryExportTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



