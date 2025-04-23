# `sccV2ProjectSccBigQueryExport` Submodule <a name="`sccV2ProjectSccBigQueryExport` Submodule" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccV2ProjectSccBigQueryExport <a name="SccV2ProjectSccBigQueryExport" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_v2_project_scc_big_query_export google_scc_v2_project_scc_big_query_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccV2ProjectSccBigQueryExport(Construct Scope, string Id, SccV2ProjectSccBigQueryExportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig">SccV2ProjectSccBigQueryExportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig">SccV2ProjectSccBigQueryExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.putTimeouts"></a>

```csharp
private void PutTimeouts(SccV2ProjectSccBigQueryExportTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts">SccV2ProjectSccBigQueryExportTimeouts</a>

---

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetDataset"></a>

```csharp
private void ResetDataset()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SccV2ProjectSccBigQueryExport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccV2ProjectSccBigQueryExport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccV2ProjectSccBigQueryExport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccV2ProjectSccBigQueryExport.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccV2ProjectSccBigQueryExport.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SccV2ProjectSccBigQueryExport resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SccV2ProjectSccBigQueryExport to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SccV2ProjectSccBigQueryExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_v2_project_scc_big_query_export#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SccV2ProjectSccBigQueryExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.mostRecentEditor">MostRecentEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference">SccV2ProjectSccBigQueryExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.bigQueryExportIdInput">BigQueryExportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.datasetInput">DatasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.bigQueryExportId">BigQueryExportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `MostRecentEditor`<sup>Required</sup> <a name="MostRecentEditor" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.mostRecentEditor"></a>

```csharp
public string MostRecentEditor { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.timeouts"></a>

```csharp
public SccV2ProjectSccBigQueryExportTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference">SccV2ProjectSccBigQueryExportTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BigQueryExportIdInput`<sup>Optional</sup> <a name="BigQueryExportIdInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.bigQueryExportIdInput"></a>

```csharp
public string BigQueryExportIdInput { get; }
```

- *Type:* string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.datasetInput"></a>

```csharp
public string DatasetInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BigQueryExportId`<sup>Required</sup> <a name="BigQueryExportId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.bigQueryExportId"></a>

```csharp
public string BigQueryExportId { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SccV2ProjectSccBigQueryExportConfig <a name="SccV2ProjectSccBigQueryExportConfig" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccV2ProjectSccBigQueryExportConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BigQueryExportId,
    string Dataset = null,
    string Description = null,
    string Filter = null,
    string Id = null,
    string Location = null,
    string Project = null,
    SccV2ProjectSccBigQueryExportTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.bigQueryExportId">BigQueryExportId</a></code> | <code>string</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.dataset">Dataset</a></code> | <code>string</code> | The dataset to write findings' updates to. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.description">Description</a></code> | <code>string</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.filter">Filter</a></code> | <code>string</code> | Expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_v2_project_scc_big_query_export#id SccV2ProjectSccBigQueryExport#id}. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.location">Location</a></code> | <code>string</code> | location Id is provided by organization. If not provided, Use global as default. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_v2_project_scc_big_query_export#project SccV2ProjectSccBigQueryExport#project}. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts">SccV2ProjectSccBigQueryExportTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BigQueryExportId`<sup>Required</sup> <a name="BigQueryExportId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.bigQueryExportId"></a>

```csharp
public string BigQueryExportId { get; set; }
```

- *Type:* string

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_v2_project_scc_big_query_export#big_query_export_id SccV2ProjectSccBigQueryExport#big_query_export_id}

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.dataset"></a>

```csharp
public string Dataset { get; set; }
```

- *Type:* string

The dataset to write findings' updates to.

Its format is "projects/[projectId]/datasets/[bigquery_dataset_id]".
BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_v2_project_scc_big_query_export#dataset SccV2ProjectSccBigQueryExport#dataset}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_v2_project_scc_big_query_export#description SccV2ProjectSccBigQueryExport#description}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.filter"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_v2_project_scc_big_query_export#filter SccV2ProjectSccBigQueryExport#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_v2_project_scc_big_query_export#id SccV2ProjectSccBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

location Id is provided by organization. If not provided, Use global as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_v2_project_scc_big_query_export#location SccV2ProjectSccBigQueryExport#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_v2_project_scc_big_query_export#project SccV2ProjectSccBigQueryExport#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.timeouts"></a>

```csharp
public SccV2ProjectSccBigQueryExportTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts">SccV2ProjectSccBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_v2_project_scc_big_query_export#timeouts SccV2ProjectSccBigQueryExport#timeouts}

---

### SccV2ProjectSccBigQueryExportTimeouts <a name="SccV2ProjectSccBigQueryExportTimeouts" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccV2ProjectSccBigQueryExportTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_v2_project_scc_big_query_export#create SccV2ProjectSccBigQueryExport#create}. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_v2_project_scc_big_query_export#delete SccV2ProjectSccBigQueryExport#delete}. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_v2_project_scc_big_query_export#update SccV2ProjectSccBigQueryExport#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_v2_project_scc_big_query_export#create SccV2ProjectSccBigQueryExport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_v2_project_scc_big_query_export#delete SccV2ProjectSccBigQueryExport#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_v2_project_scc_big_query_export#update SccV2ProjectSccBigQueryExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccV2ProjectSccBigQueryExportTimeoutsOutputReference <a name="SccV2ProjectSccBigQueryExportTimeoutsOutputReference" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccV2ProjectSccBigQueryExportTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



