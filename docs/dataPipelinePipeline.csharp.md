# `dataPipelinePipeline` Submodule <a name="`dataPipelinePipeline` Submodule" id="@cdktf/provider-google.dataPipelinePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPipelinePipeline <a name="DataPipelinePipeline" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline google_data_pipeline_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataPipelinePipeline(Construct Scope, string Id, DataPipelinePipelineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig">DataPipelinePipelineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig">DataPipelinePipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putScheduleInfo">PutScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putWorkload">PutWorkload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetPipelineSources">ResetPipelineSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetScheduleInfo">ResetScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetSchedulerServiceAccountEmail">ResetSchedulerServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetWorkload">ResetWorkload</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScheduleInfo` <a name="PutScheduleInfo" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putScheduleInfo"></a>

```csharp
private void PutScheduleInfo(DataPipelinePipelineScheduleInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putScheduleInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo">DataPipelinePipelineScheduleInfo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putTimeouts"></a>

```csharp
private void PutTimeouts(DataPipelinePipelineTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts">DataPipelinePipelineTimeouts</a>

---

##### `PutWorkload` <a name="PutWorkload" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putWorkload"></a>

```csharp
private void PutWorkload(DataPipelinePipelineWorkload Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putWorkload.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload">DataPipelinePipelineWorkload</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPipelineSources` <a name="ResetPipelineSources" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetPipelineSources"></a>

```csharp
private void ResetPipelineSources()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetScheduleInfo` <a name="ResetScheduleInfo" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetScheduleInfo"></a>

```csharp
private void ResetScheduleInfo()
```

##### `ResetSchedulerServiceAccountEmail` <a name="ResetSchedulerServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetSchedulerServiceAccountEmail"></a>

```csharp
private void ResetSchedulerServiceAccountEmail()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkload` <a name="ResetWorkload" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetWorkload"></a>

```csharp
private void ResetWorkload()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataPipelinePipeline resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataPipelinePipeline.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataPipelinePipeline.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataPipelinePipeline.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataPipelinePipeline.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataPipelinePipeline resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPipelinePipeline to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPipelinePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataPipelinePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.jobCount">JobCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.lastUpdateTime">LastUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.scheduleInfo">ScheduleInfo</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference">DataPipelinePipelineScheduleInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference">DataPipelinePipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.workload">Workload</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference">DataPipelinePipelineWorkloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.pipelineSourcesInput">PipelineSourcesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.scheduleInfoInput">ScheduleInfoInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo">DataPipelinePipelineScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.schedulerServiceAccountEmailInput">SchedulerServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.workloadInput">WorkloadInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload">DataPipelinePipelineWorkload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.pipelineSources">PipelineSources</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.schedulerServiceAccountEmail">SchedulerServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `JobCount`<sup>Required</sup> <a name="JobCount" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.jobCount"></a>

```csharp
public double JobCount { get; }
```

- *Type:* double

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.lastUpdateTime"></a>

```csharp
public string LastUpdateTime { get; }
```

- *Type:* string

---

##### `ScheduleInfo`<sup>Required</sup> <a name="ScheduleInfo" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.scheduleInfo"></a>

```csharp
public DataPipelinePipelineScheduleInfoOutputReference ScheduleInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference">DataPipelinePipelineScheduleInfoOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.timeouts"></a>

```csharp
public DataPipelinePipelineTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference">DataPipelinePipelineTimeoutsOutputReference</a>

---

##### `Workload`<sup>Required</sup> <a name="Workload" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.workload"></a>

```csharp
public DataPipelinePipelineWorkloadOutputReference Workload { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference">DataPipelinePipelineWorkloadOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PipelineSourcesInput`<sup>Optional</sup> <a name="PipelineSourcesInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.pipelineSourcesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PipelineSourcesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ScheduleInfoInput`<sup>Optional</sup> <a name="ScheduleInfoInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.scheduleInfoInput"></a>

```csharp
public DataPipelinePipelineScheduleInfo ScheduleInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo">DataPipelinePipelineScheduleInfo</a>

---

##### `SchedulerServiceAccountEmailInput`<sup>Optional</sup> <a name="SchedulerServiceAccountEmailInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.schedulerServiceAccountEmailInput"></a>

```csharp
public string SchedulerServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `WorkloadInput`<sup>Optional</sup> <a name="WorkloadInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.workloadInput"></a>

```csharp
public DataPipelinePipelineWorkload WorkloadInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload">DataPipelinePipelineWorkload</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PipelineSources`<sup>Required</sup> <a name="PipelineSources" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.pipelineSources"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PipelineSources { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SchedulerServiceAccountEmail`<sup>Required</sup> <a name="SchedulerServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.schedulerServiceAccountEmail"></a>

```csharp
public string SchedulerServiceAccountEmail { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPipelinePipelineConfig <a name="DataPipelinePipelineConfig" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataPipelinePipelineConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string State,
    string Type,
    string DisplayName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> PipelineSources = null,
    string Project = null,
    string Region = null,
    DataPipelinePipelineScheduleInfo ScheduleInfo = null,
    string SchedulerServiceAccountEmail = null,
    DataPipelinePipelineTimeouts Timeouts = null,
    DataPipelinePipelineWorkload Workload = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.name">Name</a></code> | <code>string</code> | "The pipeline name. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.state">State</a></code> | <code>string</code> | The state of the pipeline. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.type">Type</a></code> | <code>string</code> | The type of the pipeline. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_). |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#id DataPipelinePipeline#id}. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.pipelineSources">PipelineSources</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The sources of the pipeline (for example, Dataplex). |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#project DataPipelinePipeline#project}. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.region">Region</a></code> | <code>string</code> | A reference to the region. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.scheduleInfo">ScheduleInfo</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo">DataPipelinePipelineScheduleInfo</a></code> | schedule_info block. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.schedulerServiceAccountEmail">SchedulerServiceAccountEmail</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts">DataPipelinePipelineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.workload">Workload</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload">DataPipelinePipelineWorkload</a></code> | workload block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

"The pipeline name.

For example': 'projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID."
"- PROJECT_ID can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see Identifying projects."
"LOCATION_ID is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling google.cloud.location.Locations.ListLocations. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in App Engine regions."
"PIPELINE_ID is the ID of the pipeline. Must be unique for the selected project and location."

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#name DataPipelinePipeline#name}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

The state of the pipeline.

When the pipeline is created, the state is set to 'PIPELINE_STATE_ACTIVE' by default. State changes can be requested by setting the state to stopping, paused, or resuming. State cannot be changed through pipelines.patch requests.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#state Possible values: ["STATE_UNSPECIFIED", "STATE_RESUMING", "STATE_ACTIVE", "STATE_STOPPING", "STATE_ARCHIVED", "STATE_PAUSED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#state DataPipelinePipeline#state}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the pipeline.

This field affects the scheduling of the pipeline and the type of metrics to show for the pipeline.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#pipelinetype Possible values: ["PIPELINE_TYPE_UNSPECIFIED", "PIPELINE_TYPE_BATCH", "PIPELINE_TYPE_STREAMING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#type DataPipelinePipeline#type}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#display_name DataPipelinePipeline#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#id DataPipelinePipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PipelineSources`<sup>Optional</sup> <a name="PipelineSources" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.pipelineSources"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PipelineSources { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The sources of the pipeline (for example, Dataplex).

The keys and values are set by the corresponding sources during pipeline creation.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#pipeline_sources DataPipelinePipeline#pipeline_sources}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#project DataPipelinePipeline#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#region DataPipelinePipeline#region}

---

##### `ScheduleInfo`<sup>Optional</sup> <a name="ScheduleInfo" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.scheduleInfo"></a>

```csharp
public DataPipelinePipelineScheduleInfo ScheduleInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo">DataPipelinePipelineScheduleInfo</a>

schedule_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#schedule_info DataPipelinePipeline#schedule_info}

---

##### `SchedulerServiceAccountEmail`<sup>Optional</sup> <a name="SchedulerServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.schedulerServiceAccountEmail"></a>

```csharp
public string SchedulerServiceAccountEmail { get; set; }
```

- *Type:* string

Optional.

A service account email to be used with the Cloud Scheduler job. If not specified, the default compute engine service account will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#scheduler_service_account_email DataPipelinePipeline#scheduler_service_account_email}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.timeouts"></a>

```csharp
public DataPipelinePipelineTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts">DataPipelinePipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#timeouts DataPipelinePipeline#timeouts}

---

##### `Workload`<sup>Optional</sup> <a name="Workload" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.workload"></a>

```csharp
public DataPipelinePipelineWorkload Workload { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload">DataPipelinePipelineWorkload</a>

workload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#workload DataPipelinePipeline#workload}

---

### DataPipelinePipelineScheduleInfo <a name="DataPipelinePipelineScheduleInfo" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataPipelinePipelineScheduleInfo {
    string Schedule = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo.property.schedule">Schedule</a></code> | <code>string</code> | Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo.property.timeZone">TimeZone</a></code> | <code>string</code> | Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed. |

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#schedule DataPipelinePipeline#schedule}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#time_zone DataPipelinePipeline#time_zone}

---

### DataPipelinePipelineTimeouts <a name="DataPipelinePipelineTimeouts" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataPipelinePipelineTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#create DataPipelinePipeline#create}. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#delete DataPipelinePipeline#delete}. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#update DataPipelinePipeline#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#create DataPipelinePipeline#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#delete DataPipelinePipeline#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#update DataPipelinePipeline#update}.

---

### DataPipelinePipelineWorkload <a name="DataPipelinePipelineWorkload" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataPipelinePipelineWorkload {
    DataPipelinePipelineWorkloadDataflowFlexTemplateRequest DataflowFlexTemplateRequest = null,
    DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest DataflowLaunchTemplateRequest = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload.property.dataflowFlexTemplateRequest">DataflowFlexTemplateRequest</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest">DataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a></code> | dataflow_flex_template_request block. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload.property.dataflowLaunchTemplateRequest">DataflowLaunchTemplateRequest</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a></code> | dataflow_launch_template_request block. |

---

##### `DataflowFlexTemplateRequest`<sup>Optional</sup> <a name="DataflowFlexTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload.property.dataflowFlexTemplateRequest"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowFlexTemplateRequest DataflowFlexTemplateRequest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest">DataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a>

dataflow_flex_template_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#dataflow_flex_template_request DataPipelinePipeline#dataflow_flex_template_request}

---

##### `DataflowLaunchTemplateRequest`<sup>Optional</sup> <a name="DataflowLaunchTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload.property.dataflowLaunchTemplateRequest"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest DataflowLaunchTemplateRequest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a>

dataflow_launch_template_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#dataflow_launch_template_request DataPipelinePipeline#dataflow_launch_template_request}

---

### DataPipelinePipelineWorkloadDataflowFlexTemplateRequest <a name="DataPipelinePipelineWorkloadDataflowFlexTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataPipelinePipelineWorkloadDataflowFlexTemplateRequest {
    DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter LaunchParameter,
    string Location,
    string ProjectId,
    object ValidateOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.launchParameter">LaunchParameter</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a></code> | launch_parameter block. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.location">Location</a></code> | <code>string</code> | The regional endpoint to which to direct the request. For example, us-central1, us-west1. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the Cloud Platform project that the job belongs to. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.validateOnly">ValidateOnly</a></code> | <code>object</code> | If true, the request is validated but not actually executed. Defaults to false. |

---

##### `LaunchParameter`<sup>Required</sup> <a name="LaunchParameter" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.launchParameter"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter LaunchParameter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a>

launch_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#launch_parameter DataPipelinePipeline#launch_parameter}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The regional endpoint to which to direct the request. For example, us-central1, us-west1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#location DataPipelinePipeline#location}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the Cloud Platform project that the job belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#project_id DataPipelinePipeline#project_id}

---

##### `ValidateOnly`<sup>Optional</sup> <a name="ValidateOnly" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.validateOnly"></a>

```csharp
public object ValidateOnly { get; set; }
```

- *Type:* object

If true, the request is validated but not actually executed. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#validate_only DataPipelinePipeline#validate_only}

---

### DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter <a name="DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter {
    string JobName,
    string ContainerSpecGcsPath = null,
    DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment Environment = null,
    System.Collections.Generic.IDictionary<string, string> LaunchOptions = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    System.Collections.Generic.IDictionary<string, string> TransformNameMappings = null,
    object Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.jobName">JobName</a></code> | <code>string</code> | The job name to use for the created job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.containerSpecGcsPath">ContainerSpecGcsPath</a></code> | <code>string</code> | Cloud Storage path to a file with a JSON-serialized ContainerSpec as content. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.launchOptions">LaunchOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Launch options for this Flex Template job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | 'The parameters for the Flex Template. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.transformNameMappings">TransformNameMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | 'Use this to pass transform name mappings for streaming update jobs. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.update">Update</a></code> | <code>object</code> | Set this to true if you are sending a request to update a running streaming job. |

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.jobName"></a>

```csharp
public string JobName { get; set; }
```

- *Type:* string

The job name to use for the created job.

For an update job request, the job name should be the same as the existing running job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#job_name DataPipelinePipeline#job_name}

---

##### `ContainerSpecGcsPath`<sup>Optional</sup> <a name="ContainerSpecGcsPath" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.containerSpecGcsPath"></a>

```csharp
public string ContainerSpecGcsPath { get; set; }
```

- *Type:* string

Cloud Storage path to a file with a JSON-serialized ContainerSpec as content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#container_spec_gcs_path DataPipelinePipeline#container_spec_gcs_path}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.environment"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment Environment { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#environment DataPipelinePipeline#environment}

---

##### `LaunchOptions`<sup>Optional</sup> <a name="LaunchOptions" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.launchOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LaunchOptions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Launch options for this Flex Template job.

This is a common set of options across languages and templates. This should not be used to pass job parameters.
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#launch_options DataPipelinePipeline#launch_options}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

'The parameters for the Flex Template.

Example: {"numWorkers":"5"}'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#parameters DataPipelinePipeline#parameters}

---

##### `TransformNameMappings`<sup>Optional</sup> <a name="TransformNameMappings" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.transformNameMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TransformNameMappings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

'Use this to pass transform name mappings for streaming update jobs.

Example: {"oldTransformName":"newTransformName",...}'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#transform_name_mappings DataPipelinePipeline#transform_name_mappings}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.update"></a>

```csharp
public object Update { get; set; }
```

- *Type:* object

Set this to true if you are sending a request to update a running streaming job.

When set, the job name should be the same as the running job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#update DataPipelinePipeline#update}

---

### DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment <a name="DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment {
    string[] AdditionalExperiments = null,
    System.Collections.Generic.IDictionary<string, string> AdditionalUserLabels = null,
    object EnableStreamingEngine = null,
    string FlexrsGoal = null,
    string IpConfiguration = null,
    string KmsKeyName = null,
    string MachineType = null,
    double MaxWorkers = null,
    string Network = null,
    double NumWorkers = null,
    string ServiceAccountEmail = null,
    string Subnetwork = null,
    string TempLocation = null,
    string WorkerRegion = null,
    string WorkerZone = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.additionalExperiments">AdditionalExperiments</a></code> | <code>string[]</code> | Additional experiment flags for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.additionalUserLabels">AdditionalUserLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Additional user labels to be specified for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>object</code> | Whether to enable Streaming Engine for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.flexrsGoal">FlexrsGoal</a></code> | <code>string</code> | Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#FlexResourceSchedulingGoal Possible values: ["FLEXRS_UNSPECIFIED", "FLEXRS_SPEED_OPTIMIZED", "FLEXRS_COST_OPTIMIZED"]. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.ipConfiguration">IpConfiguration</a></code> | <code>string</code> | Configuration for VM IPs. https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"]. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | 'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.machineType">MachineType</a></code> | <code>string</code> | The machine type to use for the job. Defaults to the value from the template if not specified. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.maxWorkers">MaxWorkers</a></code> | <code>double</code> | The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.network">Network</a></code> | <code>string</code> | Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.numWorkers">NumWorkers</a></code> | <code>double</code> | The initial number of Compute Engine instances for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | The email address of the service account to run the job as. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.subnetwork">Subnetwork</a></code> | <code>string</code> | Subnetwork to which VMs will be assigned, if desired. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.tempLocation">TempLocation</a></code> | <code>string</code> | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.workerRegion">WorkerRegion</a></code> | <code>string</code> | The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.workerZone">WorkerZone</a></code> | <code>string</code> | The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.zone">Zone</a></code> | <code>string</code> | The Compute Engine availability zone for launching worker instances to run your pipeline. |

---

##### `AdditionalExperiments`<sup>Optional</sup> <a name="AdditionalExperiments" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.additionalExperiments"></a>

```csharp
public string[] AdditionalExperiments { get; set; }
```

- *Type:* string[]

Additional experiment flags for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#additional_experiments DataPipelinePipeline#additional_experiments}

---

##### `AdditionalUserLabels`<sup>Optional</sup> <a name="AdditionalUserLabels" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.additionalUserLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalUserLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Additional user labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. An object containing a list of key/value pairs.
'Example: { "name": "wrench", "mass": "1kg", "count": "3" }.'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#additional_user_labels DataPipelinePipeline#additional_user_labels}

---

##### `EnableStreamingEngine`<sup>Optional</sup> <a name="EnableStreamingEngine" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.enableStreamingEngine"></a>

```csharp
public object EnableStreamingEngine { get; set; }
```

- *Type:* object

Whether to enable Streaming Engine for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#enable_streaming_engine DataPipelinePipeline#enable_streaming_engine}

---

##### `FlexrsGoal`<sup>Optional</sup> <a name="FlexrsGoal" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.flexrsGoal"></a>

```csharp
public string FlexrsGoal { get; set; }
```

- *Type:* string

Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#FlexResourceSchedulingGoal Possible values: ["FLEXRS_UNSPECIFIED", "FLEXRS_SPEED_OPTIMIZED", "FLEXRS_COST_OPTIMIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#flexrs_goal DataPipelinePipeline#flexrs_goal}

---

##### `IpConfiguration`<sup>Optional</sup> <a name="IpConfiguration" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.ipConfiguration"></a>

```csharp
public string IpConfiguration { get; set; }
```

- *Type:* string

Configuration for VM IPs. https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#ip_configuration DataPipelinePipeline#ip_configuration}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#kms_key_name DataPipelinePipeline#kms_key_name}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The machine type to use for the job. Defaults to the value from the template if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#machine_type DataPipelinePipeline#machine_type}

---

##### `MaxWorkers`<sup>Optional</sup> <a name="MaxWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.maxWorkers"></a>

```csharp
public double MaxWorkers { get; set; }
```

- *Type:* double

The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#max_workers DataPipelinePipeline#max_workers}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#network DataPipelinePipeline#network}

---

##### `NumWorkers`<sup>Optional</sup> <a name="NumWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.numWorkers"></a>

```csharp
public double NumWorkers { get; set; }
```

- *Type:* double

The initial number of Compute Engine instances for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#num_workers DataPipelinePipeline#num_workers}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

The email address of the service account to run the job as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#service_account_email DataPipelinePipeline#service_account_email}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.subnetwork"></a>

```csharp
public string Subnetwork { get; set; }
```

- *Type:* string

Subnetwork to which VMs will be assigned, if desired.

You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#subnetwork DataPipelinePipeline#subnetwork}

---

##### `TempLocation`<sup>Optional</sup> <a name="TempLocation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.tempLocation"></a>

```csharp
public string TempLocation { get; set; }
```

- *Type:* string

The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#temp_location DataPipelinePipeline#temp_location}

---

##### `WorkerRegion`<sup>Optional</sup> <a name="WorkerRegion" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.workerRegion"></a>

```csharp
public string WorkerRegion { get; set; }
```

- *Type:* string

The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#worker_region DataPipelinePipeline#worker_region}

---

##### `WorkerZone`<sup>Optional</sup> <a name="WorkerZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.workerZone"></a>

```csharp
public string WorkerZone { get; set; }
```

- *Type:* string

The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#worker_zone DataPipelinePipeline#worker_zone}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The Compute Engine availability zone for launching worker instances to run your pipeline.

In the future, workerZone will take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#zone DataPipelinePipeline#zone}

---

### DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest <a name="DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest {
    string ProjectId,
    string GcsPath = null,
    DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters LaunchParameters = null,
    string Location = null,
    object ValidateOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the Cloud Platform project that the job belongs to. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.gcsPath">GcsPath</a></code> | <code>string</code> | A Cloud Storage path to the template from which to create the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.launchParameters">LaunchParameters</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a></code> | launch_parameters block. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.location">Location</a></code> | <code>string</code> | The regional endpoint to which to direct the request. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.validateOnly">ValidateOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#validate_only DataPipelinePipeline#validate_only}. |

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the Cloud Platform project that the job belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#project_id DataPipelinePipeline#project_id}

---

##### `GcsPath`<sup>Optional</sup> <a name="GcsPath" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.gcsPath"></a>

```csharp
public string GcsPath { get; set; }
```

- *Type:* string

A Cloud Storage path to the template from which to create the job.

Must be a valid Cloud Storage URL, beginning with 'gs://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#gcs_path DataPipelinePipeline#gcs_path}

---

##### `LaunchParameters`<sup>Optional</sup> <a name="LaunchParameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.launchParameters"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters LaunchParameters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a>

launch_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#launch_parameters DataPipelinePipeline#launch_parameters}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The regional endpoint to which to direct the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#location DataPipelinePipeline#location}

---

##### `ValidateOnly`<sup>Optional</sup> <a name="ValidateOnly" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.validateOnly"></a>

```csharp
public object ValidateOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#validate_only DataPipelinePipeline#validate_only}.

---

### DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters <a name="DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters {
    string JobName,
    DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment Environment = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    System.Collections.Generic.IDictionary<string, string> TransformNameMapping = null,
    object Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.jobName">JobName</a></code> | <code>string</code> | The job name to use for the created job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The runtime parameters to pass to the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.transformNameMapping">TransformNameMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.update">Update</a></code> | <code>object</code> | If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state. |

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.jobName"></a>

```csharp
public string JobName { get; set; }
```

- *Type:* string

The job name to use for the created job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#job_name DataPipelinePipeline#job_name}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.environment"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment Environment { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#environment DataPipelinePipeline#environment}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The runtime parameters to pass to the job.

'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#parameters DataPipelinePipeline#parameters}

---

##### `TransformNameMapping`<sup>Optional</sup> <a name="TransformNameMapping" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.transformNameMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TransformNameMapping { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.

Only applicable when updating a pipeline.
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#transform_name_mapping DataPipelinePipeline#transform_name_mapping}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.update"></a>

```csharp
public object Update { get; set; }
```

- *Type:* object

If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#update DataPipelinePipeline#update}

---

### DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment <a name="DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment {
    string[] AdditionalExperiments = null,
    System.Collections.Generic.IDictionary<string, string> AdditionalUserLabels = null,
    object BypassTempDirValidation = null,
    object EnableStreamingEngine = null,
    string IpConfiguration = null,
    string KmsKeyName = null,
    string MachineType = null,
    double MaxWorkers = null,
    string Network = null,
    double NumWorkers = null,
    string ServiceAccountEmail = null,
    string Subnetwork = null,
    string TempLocation = null,
    string WorkerRegion = null,
    string WorkerZone = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.additionalExperiments">AdditionalExperiments</a></code> | <code>string[]</code> | Additional experiment flags for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.additionalUserLabels">AdditionalUserLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Additional user labels to be specified for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.bypassTempDirValidation">BypassTempDirValidation</a></code> | <code>object</code> | Whether to bypass the safety checks for the job's temporary directory. Use with caution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>object</code> | Whether to enable Streaming Engine for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.ipConfiguration">IpConfiguration</a></code> | <code>string</code> | Configuration for VM IPs. https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"]. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | 'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.machineType">MachineType</a></code> | <code>string</code> | The machine type to use for the job. Defaults to the value from the template if not specified. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.maxWorkers">MaxWorkers</a></code> | <code>double</code> | The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.network">Network</a></code> | <code>string</code> | Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.numWorkers">NumWorkers</a></code> | <code>double</code> | The initial number of Compute Engine instances for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | The email address of the service account to run the job as. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.subnetwork">Subnetwork</a></code> | <code>string</code> | Subnetwork to which VMs will be assigned, if desired. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.tempLocation">TempLocation</a></code> | <code>string</code> | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.workerRegion">WorkerRegion</a></code> | <code>string</code> | The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.workerZone">WorkerZone</a></code> | <code>string</code> | The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.zone">Zone</a></code> | <code>string</code> | The Compute Engine availability zone for launching worker instances to run your pipeline. |

---

##### `AdditionalExperiments`<sup>Optional</sup> <a name="AdditionalExperiments" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.additionalExperiments"></a>

```csharp
public string[] AdditionalExperiments { get; set; }
```

- *Type:* string[]

Additional experiment flags for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#additional_experiments DataPipelinePipeline#additional_experiments}

---

##### `AdditionalUserLabels`<sup>Optional</sup> <a name="AdditionalUserLabels" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.additionalUserLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalUserLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Additional user labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. An object containing a list of key/value pairs.
'Example: { "name": "wrench", "mass": "1kg", "count": "3" }.'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#additional_user_labels DataPipelinePipeline#additional_user_labels}

---

##### `BypassTempDirValidation`<sup>Optional</sup> <a name="BypassTempDirValidation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.bypassTempDirValidation"></a>

```csharp
public object BypassTempDirValidation { get; set; }
```

- *Type:* object

Whether to bypass the safety checks for the job's temporary directory. Use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#bypass_temp_dir_validation DataPipelinePipeline#bypass_temp_dir_validation}

---

##### `EnableStreamingEngine`<sup>Optional</sup> <a name="EnableStreamingEngine" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.enableStreamingEngine"></a>

```csharp
public object EnableStreamingEngine { get; set; }
```

- *Type:* object

Whether to enable Streaming Engine for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#enable_streaming_engine DataPipelinePipeline#enable_streaming_engine}

---

##### `IpConfiguration`<sup>Optional</sup> <a name="IpConfiguration" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.ipConfiguration"></a>

```csharp
public string IpConfiguration { get; set; }
```

- *Type:* string

Configuration for VM IPs. https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#ip_configuration DataPipelinePipeline#ip_configuration}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#kms_key_name DataPipelinePipeline#kms_key_name}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The machine type to use for the job. Defaults to the value from the template if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#machine_type DataPipelinePipeline#machine_type}

---

##### `MaxWorkers`<sup>Optional</sup> <a name="MaxWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.maxWorkers"></a>

```csharp
public double MaxWorkers { get; set; }
```

- *Type:* double

The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#max_workers DataPipelinePipeline#max_workers}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#network DataPipelinePipeline#network}

---

##### `NumWorkers`<sup>Optional</sup> <a name="NumWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.numWorkers"></a>

```csharp
public double NumWorkers { get; set; }
```

- *Type:* double

The initial number of Compute Engine instances for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#num_workers DataPipelinePipeline#num_workers}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

The email address of the service account to run the job as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#service_account_email DataPipelinePipeline#service_account_email}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.subnetwork"></a>

```csharp
public string Subnetwork { get; set; }
```

- *Type:* string

Subnetwork to which VMs will be assigned, if desired.

You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#subnetwork DataPipelinePipeline#subnetwork}

---

##### `TempLocation`<sup>Optional</sup> <a name="TempLocation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.tempLocation"></a>

```csharp
public string TempLocation { get; set; }
```

- *Type:* string

The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#temp_location DataPipelinePipeline#temp_location}

---

##### `WorkerRegion`<sup>Optional</sup> <a name="WorkerRegion" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.workerRegion"></a>

```csharp
public string WorkerRegion { get; set; }
```

- *Type:* string

The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#worker_region DataPipelinePipeline#worker_region}

---

##### `WorkerZone`<sup>Optional</sup> <a name="WorkerZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.workerZone"></a>

```csharp
public string WorkerZone { get; set; }
```

- *Type:* string

The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#worker_zone DataPipelinePipeline#worker_zone}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The Compute Engine availability zone for launching worker instances to run your pipeline.

In the future, workerZone will take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_pipeline_pipeline#zone DataPipelinePipeline#zone}

---

## Classes <a name="Classes" id="Classes"></a>

### DataPipelinePipelineScheduleInfoOutputReference <a name="DataPipelinePipelineScheduleInfoOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataPipelinePipelineScheduleInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.nextJobTime">NextJobTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo">DataPipelinePipelineScheduleInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NextJobTime`<sup>Required</sup> <a name="NextJobTime" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.nextJobTime"></a>

```csharp
public string NextJobTime { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.internalValue"></a>

```csharp
public DataPipelinePipelineScheduleInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo">DataPipelinePipelineScheduleInfo</a>

---


### DataPipelinePipelineTimeoutsOutputReference <a name="DataPipelinePipelineTimeoutsOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataPipelinePipelineTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference <a name="DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetAdditionalExperiments">ResetAdditionalExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetAdditionalUserLabels">ResetAdditionalUserLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetEnableStreamingEngine">ResetEnableStreamingEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetFlexrsGoal">ResetFlexrsGoal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetIpConfiguration">ResetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetMaxWorkers">ResetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetNumWorkers">ResetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetTempLocation">ResetTempLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetWorkerRegion">ResetWorkerRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetWorkerZone">ResetWorkerZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalExperiments` <a name="ResetAdditionalExperiments" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetAdditionalExperiments"></a>

```csharp
private void ResetAdditionalExperiments()
```

##### `ResetAdditionalUserLabels` <a name="ResetAdditionalUserLabels" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetAdditionalUserLabels"></a>

```csharp
private void ResetAdditionalUserLabels()
```

##### `ResetEnableStreamingEngine` <a name="ResetEnableStreamingEngine" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetEnableStreamingEngine"></a>

```csharp
private void ResetEnableStreamingEngine()
```

##### `ResetFlexrsGoal` <a name="ResetFlexrsGoal" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetFlexrsGoal"></a>

```csharp
private void ResetFlexrsGoal()
```

##### `ResetIpConfiguration` <a name="ResetIpConfiguration" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetIpConfiguration"></a>

```csharp
private void ResetIpConfiguration()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetKmsKeyName"></a>

```csharp
private void ResetKmsKeyName()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetMachineType"></a>

```csharp
private void ResetMachineType()
```

##### `ResetMaxWorkers` <a name="ResetMaxWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetMaxWorkers"></a>

```csharp
private void ResetMaxWorkers()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetNumWorkers` <a name="ResetNumWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetNumWorkers"></a>

```csharp
private void ResetNumWorkers()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetServiceAccountEmail"></a>

```csharp
private void ResetServiceAccountEmail()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetSubnetwork"></a>

```csharp
private void ResetSubnetwork()
```

##### `ResetTempLocation` <a name="ResetTempLocation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetTempLocation"></a>

```csharp
private void ResetTempLocation()
```

##### `ResetWorkerRegion` <a name="ResetWorkerRegion" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetWorkerRegion"></a>

```csharp
private void ResetWorkerRegion()
```

##### `ResetWorkerZone` <a name="ResetWorkerZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetWorkerZone"></a>

```csharp
private void ResetWorkerZone()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetZone"></a>

```csharp
private void ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalExperimentsInput">AdditionalExperimentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalUserLabelsInput">AdditionalUserLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.enableStreamingEngineInput">EnableStreamingEngineInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.flexrsGoalInput">FlexrsGoalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.ipConfigurationInput">IpConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.maxWorkersInput">MaxWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.numWorkersInput">NumWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.tempLocationInput">TempLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerRegionInput">WorkerRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerZoneInput">WorkerZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalExperiments">AdditionalExperiments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalUserLabels">AdditionalUserLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.flexrsGoal">FlexrsGoal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.ipConfiguration">IpConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.maxWorkers">MaxWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.numWorkers">NumWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.tempLocation">TempLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerRegion">WorkerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerZone">WorkerZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalExperimentsInput`<sup>Optional</sup> <a name="AdditionalExperimentsInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalExperimentsInput"></a>

```csharp
public string[] AdditionalExperimentsInput { get; }
```

- *Type:* string[]

---

##### `AdditionalUserLabelsInput`<sup>Optional</sup> <a name="AdditionalUserLabelsInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalUserLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalUserLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EnableStreamingEngineInput`<sup>Optional</sup> <a name="EnableStreamingEngineInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.enableStreamingEngineInput"></a>

```csharp
public object EnableStreamingEngineInput { get; }
```

- *Type:* object

---

##### `FlexrsGoalInput`<sup>Optional</sup> <a name="FlexrsGoalInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.flexrsGoalInput"></a>

```csharp
public string FlexrsGoalInput { get; }
```

- *Type:* string

---

##### `IpConfigurationInput`<sup>Optional</sup> <a name="IpConfigurationInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.ipConfigurationInput"></a>

```csharp
public string IpConfigurationInput { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `MaxWorkersInput`<sup>Optional</sup> <a name="MaxWorkersInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.maxWorkersInput"></a>

```csharp
public double MaxWorkersInput { get; }
```

- *Type:* double

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `NumWorkersInput`<sup>Optional</sup> <a name="NumWorkersInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.numWorkersInput"></a>

```csharp
public double NumWorkersInput { get; }
```

- *Type:* double

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.subnetworkInput"></a>

```csharp
public string SubnetworkInput { get; }
```

- *Type:* string

---

##### `TempLocationInput`<sup>Optional</sup> <a name="TempLocationInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.tempLocationInput"></a>

```csharp
public string TempLocationInput { get; }
```

- *Type:* string

---

##### `WorkerRegionInput`<sup>Optional</sup> <a name="WorkerRegionInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerRegionInput"></a>

```csharp
public string WorkerRegionInput { get; }
```

- *Type:* string

---

##### `WorkerZoneInput`<sup>Optional</sup> <a name="WorkerZoneInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerZoneInput"></a>

```csharp
public string WorkerZoneInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `AdditionalExperiments`<sup>Required</sup> <a name="AdditionalExperiments" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalExperiments"></a>

```csharp
public string[] AdditionalExperiments { get; }
```

- *Type:* string[]

---

##### `AdditionalUserLabels`<sup>Required</sup> <a name="AdditionalUserLabels" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalUserLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalUserLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EnableStreamingEngine`<sup>Required</sup> <a name="EnableStreamingEngine" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.enableStreamingEngine"></a>

```csharp
public object EnableStreamingEngine { get; }
```

- *Type:* object

---

##### `FlexrsGoal`<sup>Required</sup> <a name="FlexrsGoal" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.flexrsGoal"></a>

```csharp
public string FlexrsGoal { get; }
```

- *Type:* string

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.ipConfiguration"></a>

```csharp
public string IpConfiguration { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.maxWorkers"></a>

```csharp
public double MaxWorkers { get; }
```

- *Type:* double

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NumWorkers`<sup>Required</sup> <a name="NumWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.numWorkers"></a>

```csharp
public double NumWorkers { get; }
```

- *Type:* double

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `TempLocation`<sup>Required</sup> <a name="TempLocation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.tempLocation"></a>

```csharp
public string TempLocation { get; }
```

- *Type:* string

---

##### `WorkerRegion`<sup>Required</sup> <a name="WorkerRegion" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerRegion"></a>

```csharp
public string WorkerRegion { get; }
```

- *Type:* string

---

##### `WorkerZone`<sup>Required</sup> <a name="WorkerZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerZone"></a>

```csharp
public string WorkerZone { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.internalValue"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a>

---


### DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference <a name="DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetContainerSpecGcsPath">ResetContainerSpecGcsPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetLaunchOptions">ResetLaunchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetTransformNameMappings">ResetTransformNameMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.putEnvironment"></a>

```csharp
private void PutEnvironment(DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a>

---

##### `ResetContainerSpecGcsPath` <a name="ResetContainerSpecGcsPath" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetContainerSpecGcsPath"></a>

```csharp
private void ResetContainerSpecGcsPath()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetLaunchOptions` <a name="ResetLaunchOptions" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetLaunchOptions"></a>

```csharp
private void ResetLaunchOptions()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetTransformNameMappings` <a name="ResetTransformNameMappings" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetTransformNameMappings"></a>

```csharp
private void ResetTransformNameMappings()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.containerSpecGcsPathInput">ContainerSpecGcsPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.jobNameInput">JobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.launchOptionsInput">LaunchOptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.transformNameMappingsInput">TransformNameMappingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.updateInput">UpdateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.containerSpecGcsPath">ContainerSpecGcsPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.jobName">JobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.launchOptions">LaunchOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.transformNameMappings">TransformNameMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.update">Update</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.environment"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference Environment { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference</a>

---

##### `ContainerSpecGcsPathInput`<sup>Optional</sup> <a name="ContainerSpecGcsPathInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.containerSpecGcsPathInput"></a>

```csharp
public string ContainerSpecGcsPathInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.environmentInput"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment EnvironmentInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a>

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.jobNameInput"></a>

```csharp
public string JobNameInput { get; }
```

- *Type:* string

---

##### `LaunchOptionsInput`<sup>Optional</sup> <a name="LaunchOptionsInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.launchOptionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LaunchOptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TransformNameMappingsInput`<sup>Optional</sup> <a name="TransformNameMappingsInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.transformNameMappingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TransformNameMappingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.updateInput"></a>

```csharp
public object UpdateInput { get; }
```

- *Type:* object

---

##### `ContainerSpecGcsPath`<sup>Required</sup> <a name="ContainerSpecGcsPath" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.containerSpecGcsPath"></a>

```csharp
public string ContainerSpecGcsPath { get; }
```

- *Type:* string

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.jobName"></a>

```csharp
public string JobName { get; }
```

- *Type:* string

---

##### `LaunchOptions`<sup>Required</sup> <a name="LaunchOptions" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.launchOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LaunchOptions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TransformNameMappings`<sup>Required</sup> <a name="TransformNameMappings" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.transformNameMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TransformNameMappings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.update"></a>

```csharp
public object Update { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.internalValue"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a>

---


### DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference <a name="DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.putLaunchParameter">PutLaunchParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resetValidateOnly">ResetValidateOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLaunchParameter` <a name="PutLaunchParameter" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.putLaunchParameter"></a>

```csharp
private void PutLaunchParameter(DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.putLaunchParameter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a>

---

##### `ResetValidateOnly` <a name="ResetValidateOnly" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resetValidateOnly"></a>

```csharp
private void ResetValidateOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.launchParameter">LaunchParameter</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.launchParameterInput">LaunchParameterInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.validateOnlyInput">ValidateOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.validateOnly">ValidateOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest">DataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LaunchParameter`<sup>Required</sup> <a name="LaunchParameter" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.launchParameter"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference LaunchParameter { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference</a>

---

##### `LaunchParameterInput`<sup>Optional</sup> <a name="LaunchParameterInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.launchParameterInput"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter LaunchParameterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ValidateOnlyInput`<sup>Optional</sup> <a name="ValidateOnlyInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.validateOnlyInput"></a>

```csharp
public object ValidateOnlyInput { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ValidateOnly`<sup>Required</sup> <a name="ValidateOnly" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.validateOnly"></a>

```csharp
public object ValidateOnly { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.internalValue"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowFlexTemplateRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest">DataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a>

---


### DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference <a name="DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetAdditionalExperiments">ResetAdditionalExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetAdditionalUserLabels">ResetAdditionalUserLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetBypassTempDirValidation">ResetBypassTempDirValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetEnableStreamingEngine">ResetEnableStreamingEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetIpConfiguration">ResetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetMaxWorkers">ResetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetNumWorkers">ResetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetTempLocation">ResetTempLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetWorkerRegion">ResetWorkerRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetWorkerZone">ResetWorkerZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalExperiments` <a name="ResetAdditionalExperiments" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetAdditionalExperiments"></a>

```csharp
private void ResetAdditionalExperiments()
```

##### `ResetAdditionalUserLabels` <a name="ResetAdditionalUserLabels" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetAdditionalUserLabels"></a>

```csharp
private void ResetAdditionalUserLabels()
```

##### `ResetBypassTempDirValidation` <a name="ResetBypassTempDirValidation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetBypassTempDirValidation"></a>

```csharp
private void ResetBypassTempDirValidation()
```

##### `ResetEnableStreamingEngine` <a name="ResetEnableStreamingEngine" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetEnableStreamingEngine"></a>

```csharp
private void ResetEnableStreamingEngine()
```

##### `ResetIpConfiguration` <a name="ResetIpConfiguration" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetIpConfiguration"></a>

```csharp
private void ResetIpConfiguration()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetKmsKeyName"></a>

```csharp
private void ResetKmsKeyName()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetMachineType"></a>

```csharp
private void ResetMachineType()
```

##### `ResetMaxWorkers` <a name="ResetMaxWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetMaxWorkers"></a>

```csharp
private void ResetMaxWorkers()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetNumWorkers` <a name="ResetNumWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetNumWorkers"></a>

```csharp
private void ResetNumWorkers()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetServiceAccountEmail"></a>

```csharp
private void ResetServiceAccountEmail()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetSubnetwork"></a>

```csharp
private void ResetSubnetwork()
```

##### `ResetTempLocation` <a name="ResetTempLocation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetTempLocation"></a>

```csharp
private void ResetTempLocation()
```

##### `ResetWorkerRegion` <a name="ResetWorkerRegion" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetWorkerRegion"></a>

```csharp
private void ResetWorkerRegion()
```

##### `ResetWorkerZone` <a name="ResetWorkerZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetWorkerZone"></a>

```csharp
private void ResetWorkerZone()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetZone"></a>

```csharp
private void ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalExperimentsInput">AdditionalExperimentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalUserLabelsInput">AdditionalUserLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.bypassTempDirValidationInput">BypassTempDirValidationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.enableStreamingEngineInput">EnableStreamingEngineInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.ipConfigurationInput">IpConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.maxWorkersInput">MaxWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.numWorkersInput">NumWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.tempLocationInput">TempLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerRegionInput">WorkerRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerZoneInput">WorkerZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalExperiments">AdditionalExperiments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalUserLabels">AdditionalUserLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.bypassTempDirValidation">BypassTempDirValidation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.ipConfiguration">IpConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.maxWorkers">MaxWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.numWorkers">NumWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.tempLocation">TempLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerRegion">WorkerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerZone">WorkerZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalExperimentsInput`<sup>Optional</sup> <a name="AdditionalExperimentsInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalExperimentsInput"></a>

```csharp
public string[] AdditionalExperimentsInput { get; }
```

- *Type:* string[]

---

##### `AdditionalUserLabelsInput`<sup>Optional</sup> <a name="AdditionalUserLabelsInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalUserLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalUserLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BypassTempDirValidationInput`<sup>Optional</sup> <a name="BypassTempDirValidationInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.bypassTempDirValidationInput"></a>

```csharp
public object BypassTempDirValidationInput { get; }
```

- *Type:* object

---

##### `EnableStreamingEngineInput`<sup>Optional</sup> <a name="EnableStreamingEngineInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.enableStreamingEngineInput"></a>

```csharp
public object EnableStreamingEngineInput { get; }
```

- *Type:* object

---

##### `IpConfigurationInput`<sup>Optional</sup> <a name="IpConfigurationInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.ipConfigurationInput"></a>

```csharp
public string IpConfigurationInput { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `MaxWorkersInput`<sup>Optional</sup> <a name="MaxWorkersInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.maxWorkersInput"></a>

```csharp
public double MaxWorkersInput { get; }
```

- *Type:* double

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `NumWorkersInput`<sup>Optional</sup> <a name="NumWorkersInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.numWorkersInput"></a>

```csharp
public double NumWorkersInput { get; }
```

- *Type:* double

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.subnetworkInput"></a>

```csharp
public string SubnetworkInput { get; }
```

- *Type:* string

---

##### `TempLocationInput`<sup>Optional</sup> <a name="TempLocationInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.tempLocationInput"></a>

```csharp
public string TempLocationInput { get; }
```

- *Type:* string

---

##### `WorkerRegionInput`<sup>Optional</sup> <a name="WorkerRegionInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerRegionInput"></a>

```csharp
public string WorkerRegionInput { get; }
```

- *Type:* string

---

##### `WorkerZoneInput`<sup>Optional</sup> <a name="WorkerZoneInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerZoneInput"></a>

```csharp
public string WorkerZoneInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `AdditionalExperiments`<sup>Required</sup> <a name="AdditionalExperiments" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalExperiments"></a>

```csharp
public string[] AdditionalExperiments { get; }
```

- *Type:* string[]

---

##### `AdditionalUserLabels`<sup>Required</sup> <a name="AdditionalUserLabels" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalUserLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalUserLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BypassTempDirValidation`<sup>Required</sup> <a name="BypassTempDirValidation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.bypassTempDirValidation"></a>

```csharp
public object BypassTempDirValidation { get; }
```

- *Type:* object

---

##### `EnableStreamingEngine`<sup>Required</sup> <a name="EnableStreamingEngine" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.enableStreamingEngine"></a>

```csharp
public object EnableStreamingEngine { get; }
```

- *Type:* object

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.ipConfiguration"></a>

```csharp
public string IpConfiguration { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.maxWorkers"></a>

```csharp
public double MaxWorkers { get; }
```

- *Type:* double

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NumWorkers`<sup>Required</sup> <a name="NumWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.numWorkers"></a>

```csharp
public double NumWorkers { get; }
```

- *Type:* double

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `TempLocation`<sup>Required</sup> <a name="TempLocation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.tempLocation"></a>

```csharp
public string TempLocation { get; }
```

- *Type:* string

---

##### `WorkerRegion`<sup>Required</sup> <a name="WorkerRegion" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerRegion"></a>

```csharp
public string WorkerRegion { get; }
```

- *Type:* string

---

##### `WorkerZone`<sup>Required</sup> <a name="WorkerZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerZone"></a>

```csharp
public string WorkerZone { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.internalValue"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a>

---


### DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference <a name="DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetTransformNameMapping">ResetTransformNameMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.putEnvironment"></a>

```csharp
private void PutEnvironment(DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a>

---

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetTransformNameMapping` <a name="ResetTransformNameMapping" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetTransformNameMapping"></a>

```csharp
private void ResetTransformNameMapping()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.jobNameInput">JobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.transformNameMappingInput">TransformNameMappingInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.updateInput">UpdateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.jobName">JobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.transformNameMapping">TransformNameMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.update">Update</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.environment"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference Environment { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference</a>

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.environmentInput"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment EnvironmentInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a>

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.jobNameInput"></a>

```csharp
public string JobNameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TransformNameMappingInput`<sup>Optional</sup> <a name="TransformNameMappingInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.transformNameMappingInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TransformNameMappingInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.updateInput"></a>

```csharp
public object UpdateInput { get; }
```

- *Type:* object

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.jobName"></a>

```csharp
public string JobName { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TransformNameMapping`<sup>Required</sup> <a name="TransformNameMapping" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.transformNameMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TransformNameMapping { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.update"></a>

```csharp
public object Update { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.internalValue"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a>

---


### DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference <a name="DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.putLaunchParameters">PutLaunchParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetGcsPath">ResetGcsPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetLaunchParameters">ResetLaunchParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetValidateOnly">ResetValidateOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLaunchParameters` <a name="PutLaunchParameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.putLaunchParameters"></a>

```csharp
private void PutLaunchParameters(DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.putLaunchParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a>

---

##### `ResetGcsPath` <a name="ResetGcsPath" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetGcsPath"></a>

```csharp
private void ResetGcsPath()
```

##### `ResetLaunchParameters` <a name="ResetLaunchParameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetLaunchParameters"></a>

```csharp
private void ResetLaunchParameters()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetValidateOnly` <a name="ResetValidateOnly" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetValidateOnly"></a>

```csharp
private void ResetValidateOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.launchParameters">LaunchParameters</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.gcsPathInput">GcsPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.launchParametersInput">LaunchParametersInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.validateOnlyInput">ValidateOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.gcsPath">GcsPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.validateOnly">ValidateOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LaunchParameters`<sup>Required</sup> <a name="LaunchParameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.launchParameters"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference LaunchParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference</a>

---

##### `GcsPathInput`<sup>Optional</sup> <a name="GcsPathInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.gcsPathInput"></a>

```csharp
public string GcsPathInput { get; }
```

- *Type:* string

---

##### `LaunchParametersInput`<sup>Optional</sup> <a name="LaunchParametersInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.launchParametersInput"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters LaunchParametersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ValidateOnlyInput`<sup>Optional</sup> <a name="ValidateOnlyInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.validateOnlyInput"></a>

```csharp
public object ValidateOnlyInput { get; }
```

- *Type:* object

---

##### `GcsPath`<sup>Required</sup> <a name="GcsPath" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.gcsPath"></a>

```csharp
public string GcsPath { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ValidateOnly`<sup>Required</sup> <a name="ValidateOnly" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.validateOnly"></a>

```csharp
public object ValidateOnly { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.internalValue"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a>

---


### DataPipelinePipelineWorkloadOutputReference <a name="DataPipelinePipelineWorkloadOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataPipelinePipelineWorkloadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.putDataflowFlexTemplateRequest">PutDataflowFlexTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.putDataflowLaunchTemplateRequest">PutDataflowLaunchTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.resetDataflowFlexTemplateRequest">ResetDataflowFlexTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.resetDataflowLaunchTemplateRequest">ResetDataflowLaunchTemplateRequest</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataflowFlexTemplateRequest` <a name="PutDataflowFlexTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.putDataflowFlexTemplateRequest"></a>

```csharp
private void PutDataflowFlexTemplateRequest(DataPipelinePipelineWorkloadDataflowFlexTemplateRequest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.putDataflowFlexTemplateRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest">DataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a>

---

##### `PutDataflowLaunchTemplateRequest` <a name="PutDataflowLaunchTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.putDataflowLaunchTemplateRequest"></a>

```csharp
private void PutDataflowLaunchTemplateRequest(DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.putDataflowLaunchTemplateRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a>

---

##### `ResetDataflowFlexTemplateRequest` <a name="ResetDataflowFlexTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.resetDataflowFlexTemplateRequest"></a>

```csharp
private void ResetDataflowFlexTemplateRequest()
```

##### `ResetDataflowLaunchTemplateRequest` <a name="ResetDataflowLaunchTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.resetDataflowLaunchTemplateRequest"></a>

```csharp
private void ResetDataflowLaunchTemplateRequest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowFlexTemplateRequest">DataflowFlexTemplateRequest</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowLaunchTemplateRequest">DataflowLaunchTemplateRequest</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowFlexTemplateRequestInput">DataflowFlexTemplateRequestInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest">DataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowLaunchTemplateRequestInput">DataflowLaunchTemplateRequestInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload">DataPipelinePipelineWorkload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataflowFlexTemplateRequest`<sup>Required</sup> <a name="DataflowFlexTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowFlexTemplateRequest"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference DataflowFlexTemplateRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference</a>

---

##### `DataflowLaunchTemplateRequest`<sup>Required</sup> <a name="DataflowLaunchTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowLaunchTemplateRequest"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference DataflowLaunchTemplateRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference</a>

---

##### `DataflowFlexTemplateRequestInput`<sup>Optional</sup> <a name="DataflowFlexTemplateRequestInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowFlexTemplateRequestInput"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowFlexTemplateRequest DataflowFlexTemplateRequestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest">DataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a>

---

##### `DataflowLaunchTemplateRequestInput`<sup>Optional</sup> <a name="DataflowLaunchTemplateRequestInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowLaunchTemplateRequestInput"></a>

```csharp
public DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest DataflowLaunchTemplateRequestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.internalValue"></a>

```csharp
public DataPipelinePipelineWorkload InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload">DataPipelinePipelineWorkload</a>

---



